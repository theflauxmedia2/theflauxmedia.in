import { SERVICE_PAGES, servicePath } from "@/content/services";
import { RESTAURANT_PAGE } from "@/content/industry";
import { AREA_PAGES, areaPath } from "@/content/areas";

export type FooterGroup = { title: string; links: { href: string; label: string }[] };

export const FOOTER_LINK_GROUPS: FooterGroup[] = [
  {
    title: "Services",
    links: SERVICE_PAGES.map((s) => ({ href: servicePath(s.slug), label: s.name })),
  },
  {
    title: "Industries & areas",
    links: [
      { href: RESTAURANT_PAGE.path, label: "Restaurant & café marketing" },
      ...AREA_PAGES.map((a) => ({ href: areaPath(a.slug), label: a.name })),
      { href: "/blog", label: "Blog" },
    ],
  },
];
