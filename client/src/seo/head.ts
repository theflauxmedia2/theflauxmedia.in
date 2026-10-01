import { SITE_NAME } from "@/lib/site";
import { DEFAULT_OG, routeJsonLd, type RouteMeta } from "@/seo/routes";
import { abs, siteGraph, type JsonLd } from "@/seo/schema";

const esc = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Safe inside <script>: no "</script>" breakouts
const jsonForScript = (data: JsonLd) => JSON.stringify(data).replace(/</g, "\\u003c");

/**
 * All per-route head tags as an HTML string. Every tag carries data-seo so the client
 * can swap them on navigation; the prerender script injects the same string at build time.
 */
export function buildHeadHtml(route: RouteMeta): string {
  const url = abs(route.path);
  const image = abs(route.ogImage ?? DEFAULT_OG);
  const tags = [
    `<title data-seo>${esc(route.title)}</title>`,
    `<meta data-seo name="description" content="${esc(route.description)}" />`,
    route.noindex
      ? `<meta data-seo name="robots" content="noindex, follow" />`
      : `<link data-seo rel="canonical" href="${esc(url)}" />`,
    `<meta data-seo property="og:type" content="website" />`,
    `<meta data-seo property="og:site_name" content="${SITE_NAME}" />`,
    `<meta data-seo property="og:locale" content="en_IN" />`,
    `<meta data-seo property="og:title" content="${esc(route.title)}" />`,
    `<meta data-seo property="og:description" content="${esc(route.description)}" />`,
    `<meta data-seo property="og:url" content="${esc(url)}" />`,
    `<meta data-seo property="og:image" content="${esc(image)}" />`,
    `<meta data-seo property="og:image:width" content="1200" />`,
    `<meta data-seo property="og:image:height" content="630" />`,
    `<meta data-seo name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo name="twitter:title" content="${esc(route.title)}" />`,
    `<meta data-seo name="twitter:description" content="${esc(route.description)}" />`,
    `<meta data-seo name="twitter:image" content="${esc(image)}" />`,
    ...[siteGraph(), ...routeJsonLd(route)].map(
      (block) => `<script data-seo type="application/ld+json">${jsonForScript(block)}</script>`,
    ),
  ];
  return tags.join("\n    ");
}
