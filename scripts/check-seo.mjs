// SEO acceptance check for the prerendered build. Run after `npm run build`:
//   node scripts/check-seo.mjs
// Serves dist/public like Vercel (cleanUrls, 404.html with status 404) and checks every route.
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist/public");
const routes = JSON.parse(fs.readFileSync(path.join(root, "dist/seo-routes.json"), "utf8"));
const SITE = "https://www.theflauxmedia.in";

const TYPES = { ".html": "text/html", ".xml": "application/xml", ".txt": "text/plain", ".js": "text/javascript", ".css": "text/css" };

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const candidates = clean === "/" ? ["index.html"] : [clean.slice(1), `${clean.slice(1)}.html`];
  for (const rel of candidates) {
    const file = path.join(dist, rel);
    if (file.startsWith(dist) && fs.existsSync(file) && fs.statSync(file).isFile()) return file;
  }
  return null;
}

const server = http.createServer((req, res) => {
  const file = resolveFile(req.url);
  if (!file) {
    res.writeHead(404, { "content-type": "text/html" });
    return res.end(fs.readFileSync(path.join(dist, "404.html")));
  }
  res.writeHead(200, { "content-type": TYPES[path.extname(file)] ?? "application/octet-stream" });
  res.end(fs.readFileSync(file));
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}`;

const errors = [];
const fail = (route, msg) => errors.push(`${route}: ${msg}`);
const titles = new Map();
const descriptions = new Map();
const internalLinks = new Set();

const pick = (html, re) => html.match(re)?.[1];
// Words of a fragment's text content: with tags removed, or with each tag replaced by a space.
// If they differ, two words are glued together across an element boundary (e.g. "Reels thatstop thumbs").
const wordList = (html, sep) =>
  html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, sep)
    .replace(/&(?:[a-z]+|#x?[0-9a-f]+);/gi, "")
    .split(/\s+/)
    .map((w) => w.replace(/[^\p{L}\p{N}]/gu, ""))
    .filter(Boolean)
    .join(" ");

const textOf = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

for (const route of routes) {
  const res = await fetch(base + route);
  const html = await res.text();
  if (res.status !== 200) fail(route, `status ${res.status}`);

  const title = pick(html, /<title[^>]*>([^<]*)<\/title>/);
  const description = pick(html, /<meta data-seo name="description" content="([^"]*)"/);
  const canonical = pick(html, /<link data-seo rel="canonical" href="([^"]*)"/);
  const expectedCanonical = route === "/" ? SITE : `${SITE}${route}`;

  if (!title) fail(route, "missing <title>");
  else if (titles.has(title)) fail(route, `duplicate title with ${titles.get(title)}`);
  else titles.set(title, route);

  if (!description) fail(route, "missing meta description");
  else if (descriptions.has(description)) fail(route, `duplicate description with ${descriptions.get(description)}`);
  else descriptions.set(description, route);

  if (canonical !== expectedCanonical) fail(route, `canonical ${canonical} ≠ ${expectedCanonical}`);

  const body = html.slice(html.indexOf('<div id="root">'));
  const h1s = body.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) fail(route, `expected 1 <h1>, found ${h1s}`);

  const words = textOf(body).split(" ").length;
  if (words < 150) fail(route, `only ${words} words of body text in HTML`);

  // Headings (and display headlines styled as <p class="headline">) must keep words apart in the HTML
  const headings = [
    ...body.matchAll(/<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/g),
    ...body.matchAll(/<(p)\b[^>]*class="[^"]*\bheadline\b[^"]*"[^>]*>([\s\S]*?)<\/p>/g),
  ];
  for (const [, , inner] of headings) {
    const joined = wordList(inner, "");
    const spaced = wordList(inner, " ");
    if (joined !== spaced) fail(route, `heading words run together: "${joined}" (should be "${spaced}")`);
  }

  const jsonBlocks = [...html.matchAll(/<script data-seo type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (jsonBlocks.length < 2) fail(route, "missing JSON-LD");
  for (const [, json] of jsonBlocks) {
    try {
      JSON.parse(json);
    } catch (e) {
      fail(route, `invalid JSON-LD: ${e.message}`);
    }
  }

  for (const [tag] of body.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="/.test(tag)) fail(route, `<img> without alt: ${tag.slice(0, 80)}`);
    if (!/\swidth="/.test(tag) || !/\sheight="/.test(tag)) fail(route, `<img> without width/height: ${tag.slice(0, 80)}`);
  }

  for (const [, href] of body.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    if (href.startsWith("/") && !href.startsWith("//")) internalLinks.add(href.split("#")[0]);
  }
}

for (const href of internalLinks) {
  const res = await fetch(base + href);
  if (res.status !== 200) fail("links", `broken internal link ${href} (${res.status})`);
}

const bogus = await fetch(`${base}/this-page-does-not-exist`);
if (bogus.status !== 404) fail("404", `unknown URL returned ${bogus.status}`);
const bogusHtml = await bogus.text();
if (!bogusHtml.includes('content="noindex')) fail("404", "404 page is not noindex");

const sitemap = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const expected = routes.map((r) => (r === "/" ? SITE : `${SITE}${r}`));
for (const url of expected) if (!locs.includes(url)) fail("sitemap", `missing ${url}`);
for (const url of locs) if (!expected.includes(url)) fail("sitemap", `unexpected ${url}`);

server.close();

console.log(`Checked ${routes.length} routes, ${internalLinks.size} internal links.`);
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log("All SEO checks passed.");
