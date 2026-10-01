import { WORKS } from "@/lib/works";
import { breadcrumbList, faqPage, webPage, type Crumb, type JsonLd } from "@/seo/schema";
import { PACKAGE_FAQS } from "@/content/packages";
import { CONTACT_FAQS } from "@/content/contact";

export type ChangeFreq = "weekly" | "monthly" | "yearly";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  h1: string;
  ogImage?: string;
  /** Page-specific JSON-LD (the sitewide org/website graph is added automatically). */
  jsonLd?: JsonLd[];
  /** Trail after Home; Home itself is prepended automatically. */
  breadcrumbs?: Crumb[];
  sitemap?: { priority: number; changefreq: ChangeFreq };
  lastmod: string;
  images?: { loc: string; title: string; caption?: string }[];
  noindex?: boolean;
}

/** Date of the last meaningful content change — bump when a page's copy changes. */
export const UPDATED = "2026-10-01";

export const DEFAULT_OG = "/og/default.jpg";

const portfolioImages = WORKS.creatives.map((c) => ({ loc: c.image, title: c.title, caption: c.alt }));

const core: RouteMeta[] = [
  {
    path: "/",
    title: "Creative & Digital Marketing Agency in Bengaluru | The Flaux Media",
    description:
      "The Flaux Media is a creative and digital marketing agency in South Bengaluru making Instagram reels, social media posters, brand films, websites and ad campaigns for restaurants, cafés and growing brands.",
    h1: "Creative Media & Digital Marketing Agency in South Bengaluru",
    sitemap: { priority: 1, changefreq: "weekly" },
    lastmod: UPDATED,
  },
  {
    path: "/services",
    title: "Our Services: Reels, Posters, Ads & Websites | The Flaux Media",
    description:
      "Reel production, social media poster design, video production, social media and performance marketing, websites and branding — creative and marketing services from a Bengaluru team.",
    h1: "Creative & Marketing Services in Bengaluru",
    breadcrumbs: [{ name: "Services", path: "/services" }],
    sitemap: { priority: 0.9, changefreq: "monthly" },
    lastmod: UPDATED,
  },
  {
    path: "/our-work",
    title: "Portfolio: Restaurant Reels & Social Media Creatives | The Flaux Media",
    description:
      "Instagram reels, food and drink posters and brand films we've made for Bengaluru restaurants, bars and cafés including Stories Bar & Kitchen, Madhuram Cafe, Macaw and Moai.",
    h1: "Our Work: Reels, Posters & Brand Films",
    breadcrumbs: [{ name: "Our Work", path: "/our-work" }],
    sitemap: { priority: 0.9, changefreq: "weekly" },
    lastmod: UPDATED,
    images: portfolioImages,
  },
  {
    path: "/packages",
    title: "Social Media Marketing Packages in Bengaluru | The Flaux Media",
    description:
      "Compare Flaux Lite, Surge, Velocity and the fully custom Flaux One — social media, video, website and SEO packages for Bengaluru brands, restaurants and cafés.",
    h1: "Social Media & Content Packages",
    breadcrumbs: [{ name: "Packages", path: "/packages" }],
    sitemap: { priority: 0.8, changefreq: "monthly" },
    lastmod: UPDATED,
    jsonLd: [faqPage(PACKAGE_FAQS)],
  },
  {
    path: "/about",
    title: "About The Flaux Media: Creative Agency, Bengaluru",
    description:
      "The Flaux Media is a creative media and marketing studio founded by Amaan Saify and based on Bannerghatta Road, South Bengaluru. The studio behind the reels, posters and websites.",
    h1: "About The Flaux Media",
    breadcrumbs: [{ name: "About", path: "/about" }],
    sitemap: { priority: 0.7, changefreq: "monthly" },
    lastmod: UPDATED,
  },
  {
    path: "/contact",
    title: "Contact The Flaux Media: South Bengaluru Creative Agency",
    description:
      "Call, WhatsApp or email The Flaux Media on Bannerghatta Road, Gottigere. We work with restaurants, cafés and brands across South Bengaluru and the rest of Bengaluru.",
    h1: "Get in Touch",
    breadcrumbs: [{ name: "Contact", path: "/contact" }],
    sitemap: { priority: 0.8, changefreq: "yearly" },
    lastmod: UPDATED,
    jsonLd: [faqPage(CONTACT_FAQS)],
  },
];

export const NOT_FOUND: RouteMeta = {
  path: "/404",
  title: "Page not found | The Flaux Media",
  description: "This page doesn't exist. Head back to The Flaux Media homepage or browse our work.",
  h1: "Page not found",
  lastmod: UPDATED,
  noindex: true,
};

export const ROUTES: RouteMeta[] = [...core];

const byPath = new Map(ROUTES.map((r) => [r.path, r]));

export function getRoute(path: string): RouteMeta {
  const clean = path.length > 1 ? path.replace(/\/+$/, "") : path;
  return byPath.get(clean) ?? NOT_FOUND;
}

/** All JSON-LD for a route: sitewide graph is added separately by the head builder. */
export function routeJsonLd(route: RouteMeta): JsonLd[] {
  const blocks: JsonLd[] = [];
  if (route.path !== "/404") {
    blocks.push(webPage(route.path, route.title, route.description, route.path === "/contact" ? "ContactPage" : route.path === "/about" ? "AboutPage" : "WebPage"));
  }
  if (route.breadcrumbs?.length) blocks.push(breadcrumbList([{ name: "Home", path: "/" }, ...route.breadcrumbs]));
  return [...blocks, ...(route.jsonLd ?? [])];
}
