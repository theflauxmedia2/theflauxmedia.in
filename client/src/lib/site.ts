export const SITE_URL = "https://theflauxmedia.in";
export const SITE_NAME = "The Flaux Media";

// TODO(owner): switch to hello@theflauxmedia.in once the domain mailbox exists — this is the only place to change it.
const EMAIL = "theflauxmedia@gmail.com";

/** Name, address, phone — keep identical everywhere (footer, contact page, schema). */
export const CONTACT = {
  email: EMAIL,
  phoneDisplay: "+91 90198 50972",
  phoneE164: "+91-9019850972",
  phoneHref: "tel:+919019850972",
  whatsapp: "https://wa.me/919019850972",
  instagram: "https://instagram.com/theflauxmedia",
  instagramHandle: "@theflauxmedia",
  youtube: "https://www.youtube.com/@theflauxmedia",
  // TODO(owner): add streetAddress/postalCode only if clients can visit a staffed studio.
  location: "Bannerghatta Road, Gottigere, Bengaluru",
  locality: "Bengaluru",
  region: "Karnataka",
  country: "IN",
};

export const FOUNDER = "Amaan Saify";
export const FOUNDING_YEAR = "2024";

export const TAGLINE = "Creative & digital marketing agency in South Bengaluru, Karnataka";

/** Localities named in copy and in schema areaServed. Location pages exist only for the hub + home base. */
export const SERVICE_AREAS = [
  "Bannerghatta Road",
  "Gottigere",
  "Hulimavu",
  "Arekere",
  "Bilekahalli",
  "JP Nagar",
  "Jayanagar",
  "BTM Layout",
  "Banashankari",
  "Basavanagudi",
  "Kanakapura Road",
];

export const FOOTER_AREAS_LINE =
  "Serving Bannerghatta Road, Gottigere, JP Nagar, Jayanagar, BTM Layout, Banashankari & across Bengaluru";

export const NAV_LINKS = [
  { href: "/our-work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
] as const;

export const BRANDS = [
  { name: "Stories Brewery & Kitchen", logo: "/brand-logos/stbc.webp", width: 266, height: 160 },
  { name: "Madhuram Cafe", logo: "/brand-logos/madhuram.webp", width: 160, height: 160, badge: true },
  { name: "CNU", logo: "/brand-logos/cnu.webp", width: 160, height: 160, badge: true },
  { name: "101", logo: "/brand-logos/101.webp", width: 160, height: 160, badge: true },
  { name: "Global Computers", logo: "/brand-logos/gc.png", width: 345, height: 102 },
  { name: "Macaw", logo: "/brand-logos/macaw.webp", width: 122, height: 160 },
  { name: "Moai", logo: "/brand-logos/moai.webp", width: 320, height: 160 },
  { name: "Stories 2.0", logo: "/brand-logos/st2.webp", width: 160, height: 160 },
  { name: "Stories Brewery", logo: "/brand-logos/stbk.webp", width: 268, height: 160 },
];
