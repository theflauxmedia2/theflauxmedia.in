import type { Faq } from "@/content/packages";

export type Block = { title: string; text: string };

export interface ServicePage {
  slug: string;
  /** Short name used in nav, cards and breadcrumbs */
  name: string;
  title: string;
  description: string;
  h1: string;
  serviceType: string;
  display: [string, string];
  intro: string[];
  /** Deeper, practical section shown after "What's included". */
  deepDive?: { heading: string; paragraphs: string[] };
  included: Block[];
  process: Block[];
  forWho: string[];
  /** Plain-language note on timing. TODO(owner): replace with real turnaround times once confirmed. */
  timing: string;
  cases: string[];
  related: string[];
  faqs: Faq[];
}

const P = "/services";

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "instagram-reels-production-bangalore",
    name: "Instagram Reels Production",
    title: "Reel Making Services in Bangalore | The Flaux Media",
    description:
      "Reel making services in Bangalore for restaurants, cafés, bars and brands: concept, on-location shoot, editing and colour grading for Instagram Reels and YouTube Shorts.",
    h1: "Reel Making Services in Bangalore",
    serviceType: "Instagram reel production",
    display: ["Reels people", "watch twice."],
    intro: [
      "Our reel making services in Bangalore cover everything from the idea to the final export: we plan the concept, shoot on location at your venue, then edit, colour-grade and deliver vertical videos ready for Instagram Reels and YouTube Shorts.",
      "Most of our reels are for restaurants, cafés and bars — places where the food, the drinks and the room have to sell themselves in the first two seconds. We've shot fast-transition reels for Macaw, a Raksha Bandhan story for Moai, cosy food reels for Stories outlets in Rajajinagar and Nagarbhavi, and cinematic edits for Madhuram Cafe. We also cover events, like the Valorant gaming event we filmed for Global Computers.",
    ],
    included: [
      { title: "Concept & hook", text: "A clear idea for each reel — what we're selling, the first-second hook, and the format (fast-transition, cinematic, offer promo, interview or festival story)." },
      { title: "Instagram reel shoot", text: "An on-location shoot at your restaurant, store or event with a planned shot list, so we capture the dishes, drinks, people and atmosphere the edit needs." },
      { title: "Reels editing", text: "Rhythm-led editing synced to music, text overlays where they help, and pacing tuned for vertical viewing and replays." },
      { title: "Colour grading & sound", text: "A consistent look across your reels — warm and cosy, moody and premium, or bright and energetic — plus clean audio and music." },
      { title: "Platform-ready exports", text: "Vertical files sized for Instagram Reels, Stories and YouTube Shorts, with a cover frame for your grid." },
    ],
    process: [
      { title: "Brief", text: "We talk through the goal — a new menu, an offer, a festival, more walk-ins — and pick the dishes, drinks or moments to feature." },
      { title: "Plan", text: "Concept, references and a shot list, plus the best time to shoot so the light and the crowd look right." },
      { title: "Shoot", text: "Our team shoots on location. For restaurants that usually means plating, pours, ambience and real customer moments." },
      { title: "Edit & deliver", text: "We edit, grade and send the reel for feedback, then deliver final exports ready to post." },
    ],
    forWho: [
      "Restaurants, cafés, bars and breweries launching dishes, menus or offers",
      "Outlets that want a consistent reel style across multiple locations",
      "Brands running events, launches or festive campaigns",
      "Founders who want short-form video without hiring an in-house team",
    ],
    timing:
      "We agree the shoot date and delivery date before we start, and plan around your service hours so the shoot doesn't disrupt diners.",
    cases: ["macaw-restaurant-reel", "moai-raksha-bandhan-campaign", "stories-bar-and-kitchen"],
    related: ["video-production-bangalore", "social-media-marketing-bangalore", "social-media-poster-design-bangalore"],
    faqs: [
      { q: "Do you shoot reels at our restaurant or café?", a: "Yes. We shoot on location so the reel shows your real space, food and people. We plan the shoot around your service hours." },
      { q: "What kind of reels can you make?", a: "Fast-transition reels, cinematic food reels, offer and discount promos, interview-style stories, festive campaigns and event highlights. You can see examples for Macaw, Moai, Stories and Madhuram Cafe in our work." },
      { q: "Do you also write the captions and post the reels?", a: "Posting, captions and scheduling are part of our social media marketing service. If you only need the reels, we deliver the final files for your team to post." },
      { q: "Can you make reels for several outlets of the same brand?", a: "Yes. We've made reels for multiple Stories outlets, keeping each location's character while the overall look stays consistent." },
      { q: "Do you shoot YouTube Shorts too?", a: "Yes — the same vertical edit works for Instagram Reels and YouTube Shorts, and we export for both." },
      { q: "Which areas of Bengaluru do you cover?", a: "We're based on Bannerghatta Road and shoot across South Bengaluru and the rest of the city — our reels so far include outlets in Rajajinagar and Nagarbhavi." },
    ],
  },
  {
    slug: "social-media-poster-design-bangalore",
    name: "Social Media Poster Design",
    title: "Social Media Poster Design in Bangalore | The Flaux Media",
    description:
      "Social media poster design in Bangalore: food and drink posters, menu and offer creatives and festival posts for restaurants, cafés, bars and local brands.",
    h1: "Social Media Poster Design in Bangalore",
    serviceType: "Social media poster design",
    display: ["Posters that", "sell the plate."],
    intro: [
      "Our social media poster design service in Bangalore turns your dishes, drinks and offers into scroll-stopping posts. Each poster combines strong product photography with bold typography and your brand's look, sized for Instagram feed, Stories and WhatsApp.",
      "A lot of our poster work is food and drink design for restaurants and bars. For Stories Bar & Kitchen in Rajajinagar and Nagarbhavi we've designed cocktail posters like the Cosmo and Honey Dew, food posters for Kadai Paneer, Honey Chilli Potato and Paneer Tikka, a seafood special and a 'Sizzler Experience' set — each one built around a single hero item.",
    ],
    deepDive: {
      heading: "What makes a food or drink poster work",
      paragraphs: [
        "One hero, not five. The posters that perform best show a single dish or drink large enough to read on a phone at a glance — the Kadai Paneer, the Rainbow cocktail, the slice of Caramel Cheesecake. Everything else on the poster exists to support that one item.",
        "Real photography beats illustration. People order what looks real and abundant, so we photograph the actual plate from your kitchen, styled the way it's served, rather than using stock images that could belong to any restaurant.",
        "Type that adds flavour. A headline like 'Where Honey Meets Heat' or 'Ready to Sip' gives the item personality, while a short line of ingredients or tasting notes answers the question 'what is it?' without making the design crowded. The outlet name and location go on every poster so a share is still a useful ad.",
      ],
    },
    included: [
      { title: "Creative poster design", text: "One hero idea per poster: the dish or drink front and centre, a headline that reads at a glance, and supporting details kept short." },
      { title: "Food & drink poster design", text: "Menu highlights, cocktails, mocktails, desserts and specials designed to make people hungry — with ingredients or tasting notes where they help." },
      { title: "Offer & announcement posts", text: "Discounts, weekday specials, new outlets, timings and events — designed so the offer is clear in under a second." },
      { title: "Festival creatives", text: "Posts for Diwali, Raksha Bandhan, Christmas, New Year and other moments, in your brand style rather than generic templates." },
      { title: "Formats & templates", text: "Feed, Story and WhatsApp sizes, plus reusable layouts so your page stays consistent month to month." },
    ],
    process: [
      { title: "Collect", text: "We gather your menu, offers, brand colours and logo — and shoot product photos if you don't already have good ones." },
      { title: "Design", text: "We design the poster set and share it for feedback." },
      { title: "Refine", text: "We adjust copy, crops and colours until it feels right." },
      { title: "Deliver", text: "Final files in every size you need, ready to post or schedule." },
    ],
    forWho: [
      "Restaurants, bars and cafés promoting dishes, drinks and specials",
      "Brands that need a steady supply of on-brand posts every month",
      "Outlets launching a new menu or opening a new location",
      "Businesses planning festive campaigns",
    ],
    timing: "We plan poster sets alongside your content calendar so festive and offer posts are ready before the date, not on it.",
    cases: ["stories-bar-and-kitchen"],
    related: ["social-media-marketing-bangalore", "branding-agency-bangalore", "instagram-reels-production-bangalore"],
    faqs: [
      { q: "Do you photograph the food for the posters?", a: "We can. Our posters for Stories Bar & Kitchen are built on product shots of the actual dishes and drinks. If you already have good photos, we can design with those." },
      { q: "Can you match our existing brand style?", a: "Yes. We use your logo, colours and fonts so every poster looks like it belongs to your brand." },
      { q: "Do you design festival posts?", a: "Yes — festive creatives are part of most monthly plans, and we design them in your brand style rather than from generic templates." },
      { q: "What sizes do you deliver?", a: "Instagram feed (square or portrait), Stories, and any other sizes you need, such as WhatsApp or print-ready versions for in-store display." },
      { q: "Can posters be part of a monthly package?", a: "Yes. Graphic design and creatives are included in our Flaux Surge and Flaux Velocity packages, or we can quote poster design on its own." },
    ],
  },
  {
    slug: "video-production-bangalore",
    name: "Video Production",
    title: "Video Production Company in Bangalore | The Flaux Media",
    description:
      "Video production company in Bangalore for brand films, professional video shoots and video editing services — from concept to colour-graded final cut.",
    h1: "Video Production Company in Bangalore",
    serviceType: "Video production",
    display: ["Brand films with", "a pulse."],
    intro: [
      "As a video production company in Bangalore, we handle the whole job: concept, professional video shoot, editing, colour grading and sound. The result is a brand film, ad or event video that looks considered from the first frame to the last.",
      "Our production work ranges from calm, cinematic food films — like the 'timeless' edits for Stories 2.0 and the cinematic cut for Madhuram Cafe — to high-energy event coverage, like the Valorant tournament video we shot for Global Computers with fast cuts synced to the beat.",
    ],
    deepDive: {
      heading: "Planning one shoot for many outputs",
      paragraphs: [
        "Video production gets expensive when every format needs its own shoot. We plan the other way round: before the camera comes out, we list everything the footage needs to become — the hero brand film, a 30-second ad, three or four vertical reels, stills for posters and your website — and build the shot list to cover all of it.",
        "That means filming horizontal and vertical-friendly framing, capturing clean product shots and texture close-ups for social, and recording ambience and reactions that can carry a short edit on their own. One well-planned shoot day can then feed your feed, your ads and your website for weeks.",
      ],
    },
    included: [
      { title: "Brand films", text: "Short films that show what your brand feels like — the space, the craft, the people — for your website, social and ads." },
      { title: "Professional video shoot", text: "Planned shoots with a clear shot list, careful lighting and camera work. Our Flaux Velocity package uses DSLR shoots for a more cinematic look." },
      { title: "Video editing services", text: "Story-led editing, pacing, titles and music — for footage we shoot or footage you already have." },
      { title: "Colour grading & sound design", text: "A consistent grade and clean sound so your videos feel premium and on-brand." },
      { title: "Event coverage", text: "Launches, tournaments and in-store events captured and cut into highlight videos and short-form clips." },
    ],
    process: [
      { title: "Discover", text: "We agree the purpose of the video, where it will be used and what success looks like." },
      { title: "Pre-production", text: "Concept, script or story outline, references, locations and a shot list." },
      { title: "Production", text: "The shoot — on location at your venue, store or event." },
      { title: "Post-production", text: "Edit, grade, sound and feedback rounds, then final exports for every platform you need." },
    ],
    forWho: [
      "Restaurants and hospitality brands that want a premium brand film",
      "Brands running events, launches or tournaments",
      "Businesses that need ad videos for Meta, Google or YouTube",
      "Teams with existing footage that needs professional editing",
    ],
    timing: "Timelines depend on the scope of the film. We share a schedule — shoot day, first cut and final delivery — before production starts.",
    cases: ["global-computers-valorant-event", "madhuram-cafe", "stories-bar-and-kitchen"],
    related: ["instagram-reels-production-bangalore", "performance-marketing-bangalore", "branding-agency-bangalore"],
    faqs: [
      { q: "What's the difference between a reel and a brand film?", a: "A reel is short, vertical and built for the feed. A brand film is usually longer and more story-driven, and can be cut down into reels and ads afterwards." },
      { q: "Can you edit footage we've already shot?", a: "Yes. Our video editing services work with your existing footage — we'll edit, grade and add sound and titles." },
      { q: "Do you cover events?", a: "Yes. We filmed the Valorant gaming event for Global Computers and cut it into a fast-paced highlight video." },
      { q: "Do you shoot with DSLR or cinema cameras?", a: "Our Flaux Velocity package includes DSLR video shooting and professional editing. Tell us the look you want and we'll recommend the right setup." },
      { q: "Can the same shoot produce reels and ads too?", a: "Yes — we plan shoots so one day of filming can give you a brand film plus vertical cuts for Reels, Shorts and ads." },
    ],
  },
  {
    slug: "social-media-marketing-bangalore",
    name: "Social Media Marketing",
    title: "Social Media Marketing Agency in Bangalore | The Flaux Media",
    description:
      "Social media marketing agency in Bangalore: strategy, content calendars, Instagram marketing and social media management for restaurants, cafés and growing brands.",
    h1: "Social Media Marketing Agency in Bangalore",
    serviceType: "Social media marketing",
    display: ["A feed with", "a plan."],
    intro: [
      "We're a social media marketing agency in Bangalore that plans, creates and manages your social presence. That means a clear strategy, a monthly content calendar, reels and posters made in-house, and day-to-day social media management so your page stays active and on-brand.",
      "Because we shoot and design ourselves, your feed doesn't depend on stock photos or last-minute templates. Restaurants and bars like the Stories outlets get a steady mix of reels, food and drink posters, offers and festive posts built around what's actually on the menu.",
    ],
    deepDive: {
      heading: "What a typical month looks like",
      paragraphs: [
        "At the start of the month you get a content calendar: which reels, posters, stories and festive posts are going out, and what each one is for — a new dish, an offer, a weekend push or simply keeping your page alive. Once you approve it, we shoot what's needed at your outlet, design the posters and schedule everything.",
        "Through the month we post, update stories and highlights and keep your Google Business Profile current. At the end of the month you get a report on what we posted and how it performed, and the next calendar adjusts accordingly — more of the formats your audience responds to, less of what they scroll past.",
      ],
    },
    included: [
      { title: "Strategy", text: "Who you're talking to, what to post, how often, and what each month is meant to achieve — walk-ins, orders, enquiries or awareness." },
      { title: "Content calendar", text: "A monthly plan of reels, posters, stories and festive posts so nothing is last-minute." },
      { title: "Content creation", text: "Reels, posters and photography produced by our own team." },
      { title: "Instagram marketing & management", text: "Posting, captions, hashtags, stories and keeping your profile, highlights and links up to date." },
      { title: "Google Business Profile", text: "Setup and management so people searching nearby find accurate hours, photos and posts — included in all our packages." },
      { title: "Monthly reporting", text: "What we posted, how it performed and what we'll change next month." },
    ],
    process: [
      { title: "Audit", text: "We look at your current profile, competitors and what's already working." },
      { title: "Plan", text: "Strategy and the first month's content calendar for your sign-off." },
      { title: "Create & post", text: "We shoot, design and publish through the month." },
      { title: "Review", text: "A monthly report and a plan for the next month based on what performed." },
    ],
    forWho: [
      "Restaurants, cafés and bars that want a consistent, active Instagram",
      "Multi-outlet brands that need one voice across locations",
      "Local businesses in South Bengaluru that want more nearby customers",
      "Founders who don't have time to run social media themselves",
    ],
    timing: "Social media management runs month to month on a content calendar we agree in advance.",
    cases: ["stories-bar-and-kitchen", "moai-raksha-bandhan-campaign", "macaw-restaurant-reel"],
    related: ["instagram-reels-production-bangalore", "social-media-poster-design-bangalore", "performance-marketing-bangalore"],
    faqs: [
      { q: "What's included in social media management?", a: "Strategy, a monthly content calendar, reels and posters made by our team, posting with captions and hashtags, story updates and a monthly report." },
      { q: "Which platforms do you manage?", a: "Mostly Instagram, along with YouTube Shorts and your Google Business Profile. Tell us where your customers are and we'll plan around it." },
      { q: "Do you create the content or just post it?", a: "We create it. Reels, posters and photography are shot and designed in-house." },
      { q: "Do you run paid ads as well?", a: "Yes — Meta and Google ads are covered by our performance marketing service, and work best alongside an active, well-designed page." },
      { q: "Which package should we start with?", a: "Flaux Lite covers foundational social media handling; Flaux Surge adds strategy, a content calendar and creatives; Flaux Velocity is our most performance-driven plan. See the packages page for the full list." },
      { q: "Do we need to be in South Bengaluru?", a: "No. We're based on Bannerghatta Road but manage brands across Bengaluru." },
    ],
  },
  {
    slug: "performance-marketing-bangalore",
    name: "Performance Marketing",
    title: "Performance Marketing Agency in Bangalore | The Flaux Media",
    description:
      "Performance marketing agency in Bangalore: Meta ads and Google Ads management with creatives made in-house — for restaurants, cafés and local brands.",
    h1: "Performance Marketing Agency in Bangalore",
    serviceType: "Performance marketing",
    display: ["Ads that pull", "their weight."],
    intro: [
      "Our performance marketing service runs paid campaigns on Meta (Instagram and Facebook), Google and YouTube for Bangalore businesses. What makes it different is that the ad creative — the reels, videos and posters — is made by the same team that runs the campaigns.",
      "For restaurants and local brands, that usually means ads aimed at people nearby: a new menu, an offer, a festive special or a launch, shown to the right audience with a clear next step — call, WhatsApp, directions or an order.",
    ],
    deepDive: {
      heading: "Creative is the biggest lever",
      paragraphs: [
        "For local businesses, ad results depend far more on the creative than on clever targeting. Two ads with the same budget and audience can perform completely differently because one opens on a sizzling plate and the other on a logo. That's why we make the ad creative ourselves and test several versions — different hooks, different dishes, different offers — instead of running one design and hoping.",
        "We also keep the ask simple. A restaurant ad works best when the next step is obvious: get directions, call to reserve, message on WhatsApp or order now. Each campaign has one clear action, and we judge it on that action rather than likes or reach.",
        "Budgets stay sensible. We'd rather start small, learn which creative and audience work for your outlet, and then put more behind the winners than spend heavily on day one.",
      ],
    },
    included: [
      { title: "Meta ads", text: "Instagram and Facebook campaigns built around reels and posters, targeted by location and interest." },
      { title: "Google Ads management", text: "Search and local campaigns so people already looking for what you offer find you first." },
      { title: "YouTube ads", text: "Video campaigns using cut-downs of your reels and brand films." },
      { title: "Ad creatives", text: "Vertical videos, posters and variations made in-house for testing." },
      { title: "Tracking & reporting", text: "Clear reporting on spend and results, and changes made based on what's working." },
    ],
    process: [
      { title: "Goal", text: "We agree what a result is — calls, WhatsApp messages, store visits, orders or leads — and the budget." },
      { title: "Build", text: "Audiences, campaign structure and the creatives to test." },
      { title: "Launch", text: "Campaigns go live with tracking in place." },
      { title: "Optimise", text: "We review performance, pause what isn't working and put more behind what is." },
    ],
    forWho: [
      "Restaurants and cafés promoting offers, launches or festive menus",
      "Local businesses that want more enquiries from nearby customers",
      "Brands that already post regularly and want to reach beyond followers",
    ],
    timing: "Campaigns are planned and reviewed on a monthly cycle, with changes made as results come in.",
    cases: ["stories-bar-and-kitchen", "moai-raksha-bandhan-campaign"],
    related: ["social-media-marketing-bangalore", "instagram-reels-production-bangalore", "website-design-development-bangalore"],
    faqs: [
      { q: "Which ad platforms do you manage?", a: "Meta (Instagram and Facebook), Google and YouTube." },
      { q: "Do you make the ad creatives?", a: "Yes. Ad reels, videos and posters are made by our in-house team, so creative and campaigns are planned together." },
      { q: "How much should we spend on ads?", a: "It depends on your goal and area. We'll recommend a starting budget after understanding what you want to achieve, and adjust once we see results." },
      { q: "Can you run ads for a single outlet or area?", a: "Yes. Ads can be targeted around a specific outlet or neighbourhood so you're not paying to reach people too far away to visit." },
      { q: "Do we need a website to run ads?", a: "Not always — ads can send people to WhatsApp, a call or directions. A fast website helps for search ads and online orders, and we can build one if you need it." },
    ],
  },
  {
    slug: "website-design-development-bangalore",
    name: "Website Design & Development",
    title: "Website Development Company in Bangalore | The Flaux Media",
    description:
      "Website development company in Bangalore: fast, SEO-ready websites designed and built in-house. 15+ sites shipped, many for top Bengaluru F&B brands.",
    h1: "Website Design & Development Company in Bangalore",
    serviceType: "Website design and development",
    display: ["Websites that", "get found."],
    intro: [
      "We're a website development company in Bangalore that designs and builds fast, search-ready websites in-house. We've shipped 15+ websites so far — many for top F&B brands in Bengaluru, and many of them ranking on Google.",
      "As a website design company in South Bengaluru, we pay particular attention to restaurant website design: menus that are easy to read on a phone, clear timings and directions, reservation and WhatsApp buttons, and photography and video that make people want to visit.",
    ],
    deepDive: {
      heading: "What a restaurant website needs",
      paragraphs: [
        "Most people visiting a restaurant website are on a phone and want one of four things: the menu, the location, the timings or a way to book. A good restaurant website puts those within one tap of the homepage and makes them load instantly — no PDF menus that need zooming, no slow image sliders.",
        "Beyond the basics, the site should look like the place. We use the same photography and video we shoot for your social media, so someone who discovers you on Instagram and then searches your name lands on a website that feels consistent. For multi-outlet brands, each location gets its own page with its own address, timings and map, which also helps each outlet show up in nearby searches.",
      ],
    },
    included: [
      { title: "Design", text: "A custom design in your brand style, built mobile-first because that's where most visitors arrive." },
      { title: "Development", text: "Fast, lightweight builds — static sites for simple needs, dynamic sites when you need to update content yourself." },
      { title: "SEO foundations", text: "Clean page structure, titles and descriptions, structured data and site speed so Google can understand and rank your pages." },
      { title: "Restaurant website design", text: "Menus, outlet pages, timings, maps, reservation and WhatsApp links, and galleries of your food and space." },
      { title: "Content & media", text: "Photography, video and copy from the same team that makes your reels and posters." },
      { title: "Management", text: "Ongoing updates and SEO management as part of our Surge and Velocity packages." },
    ],
    process: [
      { title: "Plan", text: "Pages, content and goals — bookings, calls, enquiries or orders." },
      { title: "Design", text: "Page designs for your feedback before we build." },
      { title: "Build", text: "Development, content and SEO setup." },
      { title: "Launch & grow", text: "Go live, connect analytics and Google Business Profile, then keep improving." },
    ],
    forWho: [
      "Restaurants, cafés and bars that need a menu-first website",
      "Multi-outlet brands that need a page per location",
      "Local businesses in South Bengaluru that want to rank in nearby searches",
      "Brands replacing a slow or outdated website",
    ],
    timing: "A simple website typically takes 2–4 weeks; larger builds take longer. We share a timeline after the planning call.",
    cases: ["stories-bar-and-kitchen", "madhuram-cafe"],
    related: ["branding-agency-bangalore", "performance-marketing-bangalore", "social-media-marketing-bangalore"],
    faqs: [
      { q: "How many websites have you built?", a: "15+ so far — many for top F&B brands in Bengaluru, and many of them ranking on Google." },
      { q: "Do you build restaurant websites?", a: "Yes. Restaurant website design is a large part of our web work: mobile-friendly menus, outlet pages, timings, maps and reservation or WhatsApp buttons." },
      { q: "How long does a website take?", a: "A simple website typically takes 2–4 weeks. We'll give you a timeline once we know the pages and features you need." },
      { q: "Will our website be SEO-friendly?", a: "Yes. Every site we build has clean structure, page titles and descriptions, structured data and fast load times. Ongoing SEO management is available in our packages." },
      { q: "Can we update the website ourselves?", a: "Yes, with a dynamic website. If you prefer, we handle updates for you as part of website management." },
      { q: "Do you build websites for businesses outside the food industry?", a: "Yes. Most of our sites are for F&B brands, but we build for other local businesses and brands too." },
    ],
  },
  {
    slug: "branding-agency-bangalore",
    name: "Branding & Identity",
    title: "Branding Agency in Bangalore: Logo & Identity | The Flaux Media",
    description:
      "Branding agency in Bangalore for logo and brand identity design — the logo, colours, fonts and tone that make your reels, posters and website feel like one brand.",
    h1: "Branding Agency in Bangalore",
    serviceType: "Brand identity design",
    display: ["A brand you can", "spot instantly."],
    intro: [
      "Our branding service defines your brand's visual DNA — logo, colours, fonts and tone of voice — and then puts it to work across your reels, posters, menus and website.",
      "Because the same team designs your identity and produces your content, the brand doesn't stop at a logo file. It shows up consistently in every post and every frame, which is what makes a brand recognisable in a busy feed.",
    ],
    deepDive: {
      heading: "Signs it is time to rebrand",
      paragraphs: [
        "Your posts don't look like they belong together. If every poster uses different fonts and colours, people won't recognise your brand as they scroll — and recognition is what makes someone stop.",
        "You're opening a new outlet or changing your menu or concept. A launch is the cheapest moment to fix your identity, because you're producing new signage, menus and content anyway.",
        "Your logo doesn't work small. Many older logos look fine on a signboard but turn into a smudge as an Instagram profile picture or on a delivery-app listing. A good identity has versions that work at every size.",
        "The brand no longer matches the experience. If the food, the space and the prices have moved upmarket but the logo and posts haven't, the brand is underselling you. A refresh brings the outside in line with what customers actually get.",
      ],
    },
    included: [
      { title: "Logo & brand identity design", text: "A logo system that works on a signboard, a menu and a tiny Instagram avatar." },
      { title: "Colours & typography", text: "A palette and type choices that suit your brand and stay readable on screens and in print." },
      { title: "Tone of voice", text: "How your brand sounds in captions, menus and posts." },
      { title: "Brand guidelines", text: "A simple guide your team and partners can follow." },
      { title: "Social & print templates", text: "Post, story and menu layouts that apply the identity from day one." },
    ],
    process: [
      { title: "Discover", text: "Your story, audience, competitors and the feeling you want to create." },
      { title: "Explore", text: "Initial directions for the logo, colours and type." },
      { title: "Refine", text: "We develop the chosen direction with your feedback." },
      { title: "Roll out", text: "Final files, guidelines and templates for social, print and web." },
    ],
    forWho: [
      "New restaurants, cafés and brands getting ready to launch",
      "Businesses whose current look feels dated or inconsistent",
      "Brands opening new outlets that need a consistent identity",
    ],
    timing: "Branding timelines depend on scope; a full brand overhaul can take 2–3 months. We share a schedule after the discovery call.",
    cases: ["stories-bar-and-kitchen", "madhuram-cafe"],
    related: ["social-media-poster-design-bangalore", "website-design-development-bangalore", "social-media-marketing-bangalore"],
    faqs: [
      { q: "What do we get at the end of a branding project?", a: "Logo files, colour palette, fonts, tone of voice notes, simple brand guidelines and templates for social and print." },
      { q: "Can you refresh our existing logo rather than start over?", a: "Yes. We can modernise what you have so existing customers still recognise you." },
      { q: "Do you design menus and signage too?", a: "Yes — menus and print pieces can be designed in the new identity as part of the rollout." },
      { q: "How long does branding take?", a: "It depends on scope. A comprehensive brand overhaul can take 2–3 months; smaller refreshes are quicker." },
      { q: "Can you then run our social media in the new style?", a: "Yes. Most of our branding clients continue with social media marketing, reels and poster design in the new identity." },
    ],
  },
];

export const servicePath = (slug: string) => `${P}/${slug}`;

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
