export type PostSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  h1: string;
  datePublished: string;
  dateModified: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  sections: PostSection[];
  related: { href: string; label: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "social-media-marketing-cost-bangalore",
    title: "Social Media Marketing Cost in Bangalore (2026 Guide) | The Flaux Media",
    description:
      "How much does social media marketing cost in Bangalore in 2026? What drives the price — shoots, reels, posters, ads and reporting — and how our packages are structured.",
    h1: "How Much Does Social Media Marketing Cost in Bangalore? (2026 Guide)",
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    image: "/og/default.jpg",
    imageAlt: "The Flaux Media — reels, posters and brand films that stop the scroll",
    excerpt: "What actually drives the price of social media marketing in Bangalore, and how to compare quotes fairly.",
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "There isn't one price for social media marketing in Bangalore, because 'social media marketing' can mean anything from someone posting three templates a week to a team that shoots reels at your outlet, designs every poster, runs ads and reports on results every month. The fair way to compare quotes is to compare what's included.",
          "This guide walks through what drives the cost, the questions to ask before you sign, and how our own packages are structured so you can see exactly what you're paying for.",
          // TODO(owner): add real "starting from ₹…" ranges for each package once approved.
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Most of the price comes down to how much original content is produced and how much hands-on management you get. These are the biggest factors:",
        ],
        bullets: [
          "Shoots — whether someone actually comes to your restaurant or store to film and photograph, and how often. On-location shoots are the single biggest difference between a generic feed and one that looks like your brand.",
          "Reels — how many short-form videos are made each month, and whether they're simple edits or planned concepts with a hook, a shot list and proper colour grading.",
          "Posters and creatives — how many designed posts you get, and whether they're custom or template-based.",
          "Strategy and content calendar — whether someone is planning the month around your goals, menu launches, offers and festivals, or just filling slots.",
          "Community and profile management — captions, hashtags, stories, highlights and keeping your Google Business Profile accurate.",
          "Paid ads — Meta and Google ad management is usually priced separately from the ad budget you pay the platforms.",
          "Reporting — a monthly report that explains what worked and what will change next month.",
          "Extras — a website, SEO, branding or one-off campaigns.",
        ],
      },
      {
        heading: "How our packages are structured",
        paragraphs: [
          "We bundle these into four packages so you can start where you are and move up when you're ready:",
        ],
        bullets: [
          "Flaux Lite — video shooting and editing, foundational social media handling, Google My Business setup and basic management, a one-time brand audit and monthly growth reports. A good start for a single outlet.",
          "Flaux Surge — everything you need to scale: video shooting and editing, strategic social media handling, a static website with basic SEO, Google My Business management, one-time graphic design and creatives, advanced monthly performance reports and a content calendar.",
          "Flaux Velocity — for performance-focused brands: DSLR video shooting, professional editing, a performance-driven social media strategy, a dynamic website with advanced SEO and management, Google My Business management and ongoing graphic design.",
          "Flaux One — a fully customised plan covering any mix of ads, strategy, creatives and scaling.",
        ],
      },
      {
        heading: "Why cheap packages often cost more",
        paragraphs: [
          "The lowest quotes usually skip the shoot. Without real photos and videos of your food, drinks and space, the content falls back on stock images and templates — which look like everyone else's feed and give people no reason to choose you.",
          "If you're comparing a low-cost plan with one that includes on-location shoots, compare the output, not just the monthly fee. Ask to see reels and posters the agency has made for businesses like yours.",
        ],
      },
      {
        heading: "Questions to ask before you sign",
        paragraphs: ["Whoever you work with, these questions make quotes comparable:"],
        bullets: [
          "How many shoots per month, and where — at our outlet or from stock?",
          "How many reels and how many designed posts are included?",
          "Who writes captions and replies to comments?",
          "Is ad management included, and is the ad budget separate?",
          "What does the monthly report show?",
          "Can we see work you've done for similar businesses?",
        ],
      },
      {
        heading: "Getting a quote",
        paragraphs: [
          "Pricing for our packages depends on how many shoots, reels and posts you need each month and whether you want ads or a website included. Share a quick brief on WhatsApp or the contact page — your outlet, your goals and what you post today — and we'll recommend a package and send a clear quote.",
        ],
      },
    ],
    related: [
      { href: "/packages", label: "Compare our packages" },
      { href: "/services/social-media-marketing-bangalore", label: "Social media marketing in Bangalore" },
      { href: "/restaurant-marketing-bangalore", label: "Restaurant marketing in Bengaluru" },
    ],
  },
  {
    slug: "restaurant-reel-ideas",
    title: "Reel Ideas for Restaurants, Cafés & Bars That Bring In Customers",
    description:
      "Practical Instagram reel ideas for restaurants, cafés and bars — fast transitions, cinematic food, offer promos, festival stories and more, with real Bengaluru examples.",
    h1: "Reel Ideas for Restaurants, Cafés and Bars That Bring In Customers",
    datePublished: "2026-10-01",
    dateModified: "2026-10-01",
    image: "https://i.ytimg.com/vi/59cyTFZRU_k/hqdefault.jpg",
    imageAlt: "Macaw restaurant interior from a fast-transition reel by The Flaux Media",
    excerpt: "Seven reel formats we use for Bengaluru restaurants, cafés and bars — and what each one is good for.",
    sections: [
      {
        heading: "Start with the job the reel has to do",
        paragraphs: [
          "The best restaurant reels aren't random clips of food. Each one has a job: get noticed by people who've never heard of you, sell a specific offer, launch a dish, or make regulars feel like they belong. Pick the job first, then the format.",
          "Here are the formats we use most for restaurants, cafés and bars in Bengaluru, with examples from our own work.",
        ],
      },
      {
        heading: "1. The fast-transition reel",
        paragraphs: [
          "Best for: getting noticed by new people. Snappy cuts carry the viewer from plate to room to service in a few seconds, so even a quick scroll gets the full picture. For Macaw we built a fast-transition short around their dishes, ambience and service, with motion-driven shots and rhythmic editing so the restaurant stands out in a busy feed.",
        ],
        bullets: [
          "Plan transitions in the shot list — a hand reaching for a glass, a door opening, a plate sliding into frame.",
          "Keep the first shot your strongest dish or drink.",
          "Cut on the beat of a trending track.",
        ],
      },
      {
        heading: "2. The cinematic food reel",
        paragraphs: [
          "Best for: making people hungry and building a premium feel. Slow, smooth motion, close-up textures and warm grading make every frame feel edible. Our reels for Stories 2.0 and Stories Rajajinagar focused on signature dishes with a calm, cosy vibe, and Madhuram Cafe's cinematic edit showed their most-loved dishes in a flow of flavour, mood and rhythm.",
        ],
        bullets: [
          "Shoot steam, drizzles, pours and the first cut into a dish.",
          "Use the ambient light of your space rather than flat overhead light.",
          "Let it breathe — fewer, longer shots work better here than fast cuts.",
        ],
      },
      {
        heading: "3. The offer promo",
        paragraphs: [
          "Best for: turning attention into visits this week. A limited-time offer needs to be understood in a second and feel worth acting on. For Stories Brewery & Kitchen we made a short reel for a limited-time food discount, highlighting the best dishes and the vibe of the place to bring in more walk-ins.",
        ],
        bullets: [
          "Put the offer on screen early and repeat it at the end.",
          "Show the dishes the offer applies to, not just a price.",
          "Pair it with an offer poster and a story with a link or WhatsApp button.",
        ],
      },
      {
        heading: "4. The festival story",
        paragraphs: [
          "Best for: shares and emotional connection. Festivals are when people plan meals together, but generic greeting posts get ignored. For Moai's Raksha Bandhan special we interviewed siblings enjoying a meal together — their stories, laughter and memories carried the offer far better than a banner could.",
        ],
        bullets: [
          "Feature real guests or staff, not actors.",
          "Ask one simple, warm question and let people talk.",
          "Plan festival reels a few weeks ahead so they go live before the day.",
        ],
      },
      {
        heading: "5. The 'timeless' brand reel",
        paragraphs: [
          "Best for: positioning. Sometimes the job is simply to make the place feel special. For Stories 2.0 and Stories Nagarbhavi we kept it subtle — careful lighting, elegant frames and silent storytelling that feels luxurious without overdoing it. These age well and work as pinned reels on your profile.",
        ],
      },
      {
        heading: "6. Real customer reactions",
        paragraphs: [
          "Best for: trust. People believe other diners more than they believe ads. Madhuram Cafe's first reel used warm tones, real customer reactions and organic movement to make the café feel premium yet approachable.",
        ],
      },
      {
        heading: "7. The bar & cocktail reel",
        paragraphs: [
          "Best for: bars and evening crowds. Garnishes, pours and the bartender's hands are naturally cinematic. The same shoot can give you a reel and posters — our cocktail posters for Stories, like the Cosmo, Rainbow and Honey Dew, came from exactly this kind of shoot.",
        ],
      },
      {
        heading: "Make one shoot do more",
        paragraphs: [
          "A well-planned shoot can give you several reels, a set of posters and photos for your menu, Google Business Profile and Zomato or Swiggy listings. Plan the month's content before the shoot and you'll get far more out of a single day.",
          "If you'd like help planning or shooting reels for your restaurant, café or bar, see our reel production service or message us on WhatsApp.",
        ],
      },
    ],
    related: [
      { href: "/services/instagram-reels-production-bangalore", label: "Reel making services in Bangalore" },
      { href: "/restaurant-marketing-bangalore", label: "Restaurant marketing in Bengaluru" },
      { href: "/work/macaw-restaurant-reel", label: "Macaw case study" },
    ],
  },
];

export const blogPath = (slug: string) => `/blog/${slug}`;

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
