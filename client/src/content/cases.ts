export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  description: string;
  h1: string;
  display: [string, string];
  /** Short line for cards */
  summary: string;
  location: string;
  brief: string[];
  idea: string[];
  made: string[];
  services: string[];
  /**
   * TODO(owner): add real results (reach, views, walk-ins, orders) only with the client's permission.
   * Leave empty to hide the results section.
   */
  results: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "stories-bar-and-kitchen",
    client: "Stories Bar & Kitchen",
    title: "Stories Bar & Kitchen: Reels & Food Posters | The Flaux Media",
    description:
      "Case study: restaurant reels and food and cocktail posters for Stories Bar & Kitchen outlets in Rajajinagar and Nagarbhavi, plus Stories 2.0 and Stories Brewery & Kitchen.",
    h1: "Stories Bar & Kitchen: Reels and Food & Drink Posters",
    display: ["Stories, told", "outlet by outlet."],
    summary: "Five reels and ten food & cocktail posters across four Stories outlets.",
    location: "Rajajinagar & Nagarbhavi, Bengaluru",
    brief: [
      "Stories runs several outlets in Bengaluru — Stories Bar & Kitchen in Rajajinagar and Nagarbhavi, Stories 2.0 and Stories Brewery & Kitchen. Each needed regular content: reels that capture the mood of the space, and posters that sell specific dishes and drinks.",
      "Different outlets had different asks. Stories Brewery & Kitchen wanted a short video to promote a limited-time food discount and bring in more walk-ins. Stories 2.0 wanted its signature dishes shown with a calm, cosy vibe — and a second, subtler 'timeless' version that felt luxurious without overdoing it.",
    ],
    idea: [
      "For the food reels we focused on close-up textures, ambient lighting and smooth motion to make every frame feel edible. For the timeless edits we built a clean visual flow — careful lighting, elegant frames and silent storytelling.",
      "For the posters, each design is built around one hero item photographed properly — a Cosmo or Rainbow cocktail, a Honey Dew mocktail being garnished at the bar, Kadai Paneer, Honey Chilli Potato, Paneer Tikka, a coastal Prawn Fry with neer dosa, a Caramel Cheesecake and the 'Sizzler Experience' — with bold type and the outlet's name and address.",
    ],
    made: [
      "Offer promo reel for Stories Brewery & Kitchen",
      "Food reels for Stories 2.0 and Stories Rajajinagar",
      "'Timeless' brand reels for Stories 2.0 and Stories Nagarbhavi",
      "Cocktail and mocktail posters: Cosmo, Rainbow, Honey Dew",
      "Food posters: Kadai Paneer, Honey Chilli Potato, Paneer Tikka, Veg Delight Pizza, Caramel Cheesecake",
      "Specials: weekly seafood Prawn Fry and The Sizzler Experience",
    ],
    services: ["instagram-reels-production-bangalore", "social-media-poster-design-bangalore", "social-media-marketing-bangalore"],
    results: [],
  },
  {
    slug: "madhuram-cafe",
    client: "Madhuram Cafe",
    title: "Madhuram Cafe: Cinematic Café Reels | The Flaux Media",
    description:
      "Case study: warm, cinematic reels for Madhuram Cafe in Bengaluru that make the café feel premium yet approachable — real reactions and the most-loved dishes.",
    h1: "Madhuram Cafe: Cinematic Café Reels",
    display: ["Premium, but", "still approachable."],
    summary: "Two reels: real customer reactions and a cinematic food edit.",
    location: "Bengaluru",
    brief: [
      "Madhuram Cafe wanted to look premium yet approachable — a place that feels special without feeling intimidating.",
      "They also wanted to capture the heart of the café through its food, showcasing the dishes regulars love most.",
    ],
    idea: [
      "The first reel revolves around warm tones, real customer reactions and organic movement that pulls viewers in — people enjoying the café rather than a staged ad.",
      "The second is a cinematic edit of their most-loved dishes, cut in a flow that blends flavour, mood and rhythm. Aesthetics meet appetite.",
    ],
    made: ["Customer-reaction reel with warm grading", "Cinematic food reel of signature dishes"],
    services: ["instagram-reels-production-bangalore", "video-production-bangalore"],
    results: [],
  },
  {
    slug: "macaw-restaurant-reel",
    client: "Macaw",
    title: "Macaw: Fast-Transition Restaurant Reel | The Flaux Media",
    description:
      "Case study: a fast-transition restaurant reel for Macaw in Bengaluru — dishes, ambience and service in a snappy, trend-led short built to grab attention within seconds.",
    h1: "Macaw: Fast-Transition Restaurant Reel",
    display: ["Seconds to", "make an impression."],
    summary: "A fast-transition reel that grabs attention in the first seconds.",
    location: "Bengaluru",
    brief: [
      "Macaw wanted a fast-transition short that grabs attention within seconds — showcasing their dishes, ambience and service in a dynamic, trendy style.",
    ],
    idea: [
      "We focused on snappy cuts, motion-driven shots and rhythmic editing: each transition carries the viewer from plate to room to service without a pause, so the restaurant stands out in a fast-scrolling feed.",
    ],
    made: ["Fast-transition restaurant reel (shot, edited and produced by our team)"],
    services: ["instagram-reels-production-bangalore", "social-media-marketing-bangalore"],
    results: [],
  },
  {
    slug: "moai-raksha-bandhan-campaign",
    client: "Moai",
    title: "Moai: Raksha Bandhan Restaurant Campaign | The Flaux Media",
    description:
      "Case study: a heartfelt Raksha Bandhan reel for Moai in Bengaluru — interviews with siblings over a meal, promoting the restaurant's festive special offer.",
    h1: "Moai: Raksha Bandhan Campaign Reel",
    display: ["A festival offer,", "told with heart."],
    summary: "A festive interview reel that promotes a Raksha Bandhan offer.",
    location: "Bengaluru",
    brief: [
      "Moai wanted to promote its Raksha Bandhan special offer — but with genuine emotion and festive warmth rather than a hard sell.",
    ],
    idea: [
      "We interviewed siblings enjoying a meal together at the restaurant, capturing their love, laughter and memories over food. The offer sits inside a real story, so the reel feels like something people want to share with their own siblings.",
    ],
    made: ["Concept, interview shoot and edit for a Raksha Bandhan campaign reel"],
    services: ["instagram-reels-production-bangalore", "social-media-marketing-bangalore", "performance-marketing-bangalore"],
    results: [],
  },
  {
    slug: "global-computers-valorant-event",
    client: "Global Computers",
    title: "Global Computers: Valorant Gaming Event Video | The Flaux Media",
    description:
      "Case study: high-energy event coverage of a Valorant gaming event for Global Computers in Bengaluru — fast cuts, synced beats and the crowd's roar.",
    h1: "Global Computers: Valorant Gaming Event Video",
    display: ["As intense as", "the game itself."],
    summary: "Event coverage edited with fast cuts and synced beats.",
    location: "Bengaluru",
    brief: [
      "Global Computers wanted every moment of their Valorant event to feel as intense as the game itself.",
    ],
    idea: [
      "We captured the clutch rounds, the crowd's reactions and the energy of the room, then edited with fast cuts and synced beats to match Valorant's vibe — made by gamers, for gamers.",
    ],
    made: ["Event coverage shoot", "Fast-cut highlight video for Shorts and Reels"],
    services: ["video-production-bangalore", "instagram-reels-production-bangalore"],
    results: [],
  },
];

export const casePath = (slug: string) => `/work/${slug}`;

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
