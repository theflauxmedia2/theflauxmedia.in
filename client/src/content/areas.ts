import type { Faq } from "@/content/packages";
import type { Block } from "@/content/services";

export interface AreaPage {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  display: [string, string];
  intro: string[];
  sections: Block[];
  localities?: string[];
  faqs: Faq[];
}

/*
 * Only the hub + home-base pages exist for now. Add JP Nagar, Jayanagar or other locality pages
 * only once there's a real client or shoot in that area to feature — no doorway pages.
 */
export const AREA_PAGES: AreaPage[] = [
  {
    slug: "south-bengaluru",
    name: "South Bengaluru",
    title: "Creative & Marketing Agency in South Bengaluru | The Flaux Media",
    description:
      "A creative and digital marketing agency based on Bannerghatta Road, serving Gottigere, Hulimavu, Arekere, JP Nagar, Jayanagar, BTM Layout, Banashankari and the rest of Bengaluru.",
    h1: "Creative & Digital Marketing Agency in South Bengaluru",
    display: ["Local team.", "Citywide shoots."],
    intro: [
      "The Flaux Media is a creative and digital marketing agency based on Bannerghatta Road near Gottigere, in South Bengaluru. We make reels, posters, brand films and websites, and run social media and ads for restaurants, cafés, bars and local businesses.",
      "Being based in South Bengaluru means we can get to your outlet quickly for a shoot, come back for the next one without it becoming a big production, and understand the neighbourhoods your customers actually live in.",
    ],
    localities: [
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
    ],
    sections: [
      {
        title: "How on-location shoots work",
        text: "We come to you. Before the day we agree the concept, the dishes, drinks or products to feature and a shot list. We plan around your service hours, shoot on the day, then edit and deliver files ready for Reels, Shorts, Stories and your feed.",
      },
      {
        title: "Timing",
        text: "We agree a shoot date and delivery date up front for every piece of work, and plan monthly content ahead of festivals and offers so it's ready before the date, not on it.",
      },
      {
        title: "Beyond South Bengaluru",
        text: "Our clients aren't limited to the south of the city — our restaurant work so far includes outlets in Rajajinagar and Nagarbhavi. If you're anywhere in Bengaluru, we'll come to you.",
      },
    ],
    faqs: [
      { q: "Where exactly is The Flaux Media based?", a: "On Bannerghatta Road near Gottigere, in South Bengaluru." },
      { q: "Do you come to JP Nagar, Jayanagar or BTM Layout for shoots?", a: "Yes. Those areas are a short drive from our base on Bannerghatta Road, and we regularly travel across South Bengaluru for shoots." },
      { q: "Can we meet in person?", a: "Yes — we usually meet at your outlet, which also lets us plan the shoot in the actual space. Message us on WhatsApp to set a time." },
      { q: "Do you work with businesses in North or West Bengaluru?", a: "Yes. Our restaurant clients so far include outlets in Rajajinagar and Nagarbhavi." },
      { q: "What kinds of local businesses do you work with?", a: "Mostly restaurants, cafés, bars and breweries, along with retailers, gaming and event brands, and growing businesses that need content, social media, ads or a website." },
    ],
  },
  {
    slug: "bannerghatta-road-gottigere",
    name: "Bannerghatta Road & Gottigere",
    title: "Marketing Agency on Bannerghatta Road, Gottigere | The Flaux Media",
    description:
      "The Flaux Media's home base on Bannerghatta Road, Gottigere: reels, posters, social media, ads and websites for restaurants, cafés and businesses nearby and across Bengaluru.",
    h1: "Creative & Marketing Agency on Bannerghatta Road, Gottigere",
    display: ["Our home base,", "your neighbours."],
    intro: [
      "Bannerghatta Road near Gottigere is where The Flaux Media is based. If your restaurant, café or business is along Bannerghatta Road — Gottigere, Hulimavu, Arekere or Bilekahalli — we're close enough to pop over for a shoot, a planning chat or a quick reshoot when your menu changes.",
      "We offer the full range of our services here: Instagram reels, social media posters, brand films, social media management, Meta and Google ads, websites and branding — all made by our in-house team.",
    ],
    sections: [
      {
        title: "Why a nearby team helps",
        text: "Content works best when it's regular. A team down the road can shoot more often, capture new dishes as they launch and react quickly to offers and festivals, without each shoot becoming a big production.",
      },
      {
        title: "Planning a shoot",
        text: "We'll visit your outlet, agree the concept and shot list, and pick a time that fits around service — then edit and deliver ready-to-post files.",
      },
    ],
    faqs: [
      { q: "Is your studio on Bannerghatta Road?", a: "Yes — our team is based on Bannerghatta Road near Gottigere in South Bengaluru." },
      { q: "Can you visit our outlet in Hulimavu or Arekere?", a: "Yes. Both are close to our base and easy for us to reach for planning visits and shoots." },
      { q: "Do you only work with businesses on Bannerghatta Road?", a: "No — this is our home base, but we work with brands across Bengaluru." },
      { q: "What services can a local business get from you?", a: "Reels, posters, video production, social media management, performance marketing, websites and branding." },
    ],
  },
];

export const areaPath = (slug: string) => `/areas/${slug}`;

export function getAreaPage(slug: string) {
  return AREA_PAGES.find((a) => a.slug === slug);
}
