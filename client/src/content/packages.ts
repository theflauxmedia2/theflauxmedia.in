export type Faq = { q: string; a: string };

// TODO(owner): add "starting from ₹…" prices for each package once approved.
export const PACKAGES = [
  {
    name: "Flaux Lite",
    highlight: "Perfect for brands starting their digital journey.",
    features: [
      "Video Shooting",
      "Video Editing",
      "Foundational Social Media Handling",
      "Google My Business Setup and Basic Management",
      "1 time brand audit",
      "Monthly growth reports",
    ],
  },
  {
    name: "Flaux Surge",
    highlight: "For brands ready to scale with strategy and design.",
    badge: "Most complete",
    features: [
      "Video Shooting",
      "Video Editing",
      "Strategic Social Media Handling",
      "Static Website",
      "Basic SEO and Regular Management",
      "Google My Business Setup and Management",
      "One Time Graphic Design / Creatives",
      "Advanced Monthly performance reports",
      "Content Calendar Creation",
    ],
  },
  {
    name: "Flaux Velocity",
    highlight: "For ambitious brands seeking high performance.",
    features: [
      "DSLR Video Shooting",
      "Professional Video Editing",
      "Performance-Driven Social Media Strategy",
      "Professional Dynamic Website",
      "Advanced SEO and Website Management",
      "Google My Business Setup and Management",
      "Dynamic Graphic Design",
    ],
  },
];

export const PACKAGE_FAQS: Faq[] = [
  {
    q: "Which package is right for a new restaurant or café?",
    a: "Flaux Lite covers the essentials — video shoots and edits, foundational social media handling and Google My Business setup — so it suits a new outlet getting its online presence started. If you also need a website and SEO from day one, look at Flaux Surge.",
  },
  {
    q: "Do all packages include video shoots?",
    a: "Yes. Every package includes video shooting and editing. Flaux Velocity uses DSLR shoots and professional editing for brands that want a more polished, cinematic look.",
  },
  {
    q: "Which packages include a website?",
    a: "Flaux Surge includes a static website with basic SEO and regular management. Flaux Velocity includes a professional dynamic website with advanced SEO and website management. Flaux Lite does not include a website.",
  },
  {
    q: "Do you set up and manage our Google Business Profile?",
    a: "Yes. Google My Business setup is part of every package — basic management on Flaux Lite and ongoing management on Surge and Velocity — so customers searching nearby can find your hours, photos and reviews.",
  },
  {
    q: "What reporting do we get?",
    a: "Flaux Lite includes monthly growth reports. Flaux Surge includes advanced monthly performance reports alongside a content calendar, so you can see what's planned and how it performed.",
  },
  {
    q: "Can we mix services that aren't in one package?",
    a: "Yes — that's what Flaux One is for. It's a fully customised plan built around your brand, covering any mix of ads, strategy, creatives and scaling.",
  },
  {
    q: "How much do the packages cost?",
    a: "Pricing depends on how many shoots, posts and platforms you need each month. Share your brief on WhatsApp or through the contact page and we'll send a clear quote for the package that fits.",
  },
  {
    q: "Do you work with brands outside South Bengaluru?",
    a: "Yes. We're based on Bannerghatta Road and work most often across South Bengaluru, but we shoot and manage brands across the whole of Bengaluru.",
  },
];
