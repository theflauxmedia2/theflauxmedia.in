// Prerenders every route in client/src/seo/routes.ts into static HTML after `vite build`.
// Each page gets its own head (title, description, canonical, OG, JSON-LD) and fully rendered body,
// then hydrates on the client. Also writes 404.html and sitemap.xml.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist/public");
const serverEntry = path.join(root, "dist/server/entry-server.js");

const { render, ROUTES, NOT_FOUND, buildHeadHtml, SITE_URL } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("index.html is missing the <!--app-head--> / <!--app-html--> placeholders");
}

const fileFor = (routePath) => (routePath === "/" ? "index.html" : `${routePath.slice(1)}.html`);

function writePage(file, route, renderPath) {
  const html = template
    .replace("<!--app-head-->", buildHeadHtml(route))
    .replace("<!--app-html-->", render(renderPath));
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}

for (const route of ROUTES) {
  writePage(fileFor(route.path), route, route.path);
}
// Any unmatched path renders the NotFound page; Vercel serves this with a 404 status
writePage("404.html", NOT_FOUND, "/__not-found__");

// Sitemap from the same route table
const xmlEsc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const abs = (p) => (p.startsWith("http") ? p : `${SITE_URL}${p === "/" ? "" : p}`);
const indexable = ROUTES.filter((r) => !r.noindex);

const urls = indexable
  .map((r) => {
    const images = (r.images ?? [])
      .map(
        (img) =>
          `    <image:image>\n      <image:loc>${xmlEsc(abs(img.loc))}</image:loc>\n      <image:title>${xmlEsc(img.title)}</image:title>${
            img.caption ? `\n      <image:caption>${xmlEsc(img.caption)}</image:caption>` : ""
          }\n    </image:image>`,
      )
      .join("\n");
    return [
      "  <url>",
      `    <loc>${xmlEsc(abs(r.path))}</loc>`,
      `    <lastmod>${r.lastmod}</lastmod>`,
      r.sitemap ? `    <changefreq>${r.sitemap.changefreq}</changefreq>` : "",
      r.sitemap ? `    <priority>${r.sitemap.priority.toFixed(1)}</priority>` : "",
      images,
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n");
  })
  .join("\n");

fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`,
);

// Route list for scripts/check-seo.mjs
fs.writeFileSync(
  path.join(root, "dist/seo-routes.json"),
  JSON.stringify(indexable.map((r) => r.path), null, 2),
);

console.log(`Prerendered ${ROUTES.length} routes + 404.html, sitemap with ${indexable.length} URLs.`);
