import { CONTACT, FOUNDER, FOUNDING_YEAR, SERVICE_AREAS, SITE_NAME, SITE_URL } from "@/lib/site";
import { videoEmbedUrl, videoThumbnail, videoWatchUrl, type VideoItem } from "@/lib/works";

export type JsonLd = Record<string, unknown>;

export const ORG_ID = `${SITE_URL}/#org`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path === "/" ? "" : path}`);

export const AREA_SERVED: JsonLd[] = [
  { "@type": "City", name: "Bengaluru" },
  ...SERVICE_AREAS.map((name) => ({
    "@type": "Place",
    name: `${name}, Bengaluru`,
  })),
];

/** Sitewide graph: the business + the website. Rendered on every page. */
export function siteGraph(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "Organization"],
        "@id": ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo/logo.png`,
        image: `${SITE_URL}/og/default.jpg`,
        description:
          "Creative media and digital marketing agency in South Bengaluru: Instagram reels, social media posters, video production, social media marketing, performance marketing, websites and branding.",
        telephone: CONTACT.phoneE164,
        email: CONTACT.email,
        founder: { "@type": "Person", name: FOUNDER },
        foundingDate: FOUNDING_YEAR,
        // TODO(owner): add streetAddress + postalCode only if there is a staffed studio clients can visit.
        address: {
          "@type": "PostalAddress",
          addressLocality: CONTACT.locality,
          addressRegion: CONTACT.region,
          addressCountry: CONTACT.country,
        },
        areaServed: AREA_SERVED,
        sameAs: [
          CONTACT.instagram,
          CONTACT.youtube,
          // TODO(owner): add Google Business Profile, LinkedIn and Clutch URLs once they exist.
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": ORG_ID },
        inLanguage: "en-IN",
      },
    ],
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbList(crumbs: Crumb[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: abs(crumb.path),
    })),
  };
}

export function webPage(path: string, name: string, description: string, type = "WebPage"): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${abs(path)}#webpage`,
    url: abs(path),
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export function serviceSchema(opts: { path: string; name: string; serviceType: string; description: string }): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: abs(opts.path),
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED,
  };
}

export function faqPage(faqs: { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function videoObject(video: VideoItem, name: string, description: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: [videoThumbnail(video)],
    uploadDate: video.uploadDate,
    embedUrl: videoEmbedUrl(video).replace("?autoplay=1&", "?"),
    contentUrl: videoWatchUrl(video),
    publisher: { "@id": ORG_ID },
  };
}

export function articleSchema(opts: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${abs(opts.path)}#article`,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    image: abs(opts.image),
    mainEntityOfPage: abs(opts.path),
    author: { "@type": "Person", name: FOUNDER, worksFor: { "@id": ORG_ID } },
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export function creativeWork(opts: {
  path: string;
  name: string;
  description: string;
  client: string;
  images: string[];
  videos: JsonLd[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${abs(opts.path)}#work`,
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    creator: { "@id": ORG_ID },
    sourceOrganization: { "@type": "Organization", name: opts.client },
    image: opts.images.map(abs),
    ...(opts.videos.length ? { video: opts.videos } : {}),
  };
}

export function blogSchema(path: string, posts: { path: string; headline: string; datePublished: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${abs(path)}#blog`,
    url: abs(path),
    name: "The Flaux Media blog",
    publisher: { "@id": ORG_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.headline,
      url: abs(p.path),
      datePublished: p.datePublished,
    })),
  };
}
