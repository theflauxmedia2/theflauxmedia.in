import { motion } from "framer-motion";
import {
  Film,
  Camera,
  PlayCircle,
  Image,
  Scissors,
  Target,
  Users,
  Megaphone,
  PenTool,
  Globe,
  TrendingUp,
  Search,
} from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/page-shell";
import { servicePath } from "@/content/services";
import PageHeader from "@/components/page-header";
import { getRoute } from "@/seo/routes";
import Contact from "@/components/contact";
import { EASE_OUT, Reveal } from "@/components/motion";
import { creative } from "@/lib/works";

type ServiceItem = { icon: keyof typeof iconMap; title: string; desc: string; page: string };

const iconMap = {
  film: Film,
  camera: Camera,
  "play-circle": PlayCircle,
  image: Image,
  scissors: Scissors,
  target: Target,
  users: Users,
  megaphone: Megaphone,
  "pen-tool": PenTool,
  globe: Globe,
  "trending-up": TrendingUp,
  search: Search,
};

const SERVICES_DATA: { category: string; blurb: string; image: ReturnType<typeof creative>; items: ServiceItem[] }[] = [
  {
    category: "Content Creation & Media Production",
    blurb: "From concept to camera to cut — everything you need to show up beautifully.",
    image: creative("sizzler-kairi-cooler-poster-stories-nagarbhavi"),
    items: [
      { icon: "film", title: "Brand Films & Ad Videos", desc: "We craft cinematic visuals that tell stories, build emotion, and strengthen brand recall.", page: "video-production-bangalore" },
      { icon: "camera", title: "Product & Campaign Shoots", desc: "From concept to camera, we capture visuals that drive engagement and conversions.", page: "video-production-bangalore" },
      { icon: "play-circle", title: "Social Media Videos", desc: "Thumb-stopping short-form content designed for modern platforms.", page: "instagram-reels-production-bangalore" },
      { icon: "image", title: "Photography & Creatives", desc: "Premium visuals and graphics that make every scroll count.", page: "social-media-poster-design-bangalore" },
      { icon: "scissors", title: "Post-Production & Editing", desc: "Seamless edits, sharp color grading, and sound design that elevate your content.", page: "video-production-bangalore" },
    ],
  },
  {
    category: "Strategy & Media Marketing",
    blurb: "The thinking behind the content — so every post has a reason to exist.",
    image: creative("honey-dew-mocktail-poster-stories-rajajinagar"),
    items: [
      { icon: "target", title: "Content Strategy", desc: "Data-backed storytelling designed to connect and convert.", page: "social-media-marketing-bangalore" },
      { icon: "users", title: "Social Media Management", desc: "Consistent, creative brand presence that builds community and trust.", page: "social-media-marketing-bangalore" },
      { icon: "megaphone", title: "Ad Campaigns", desc: "High-impact visuals built to convert on Meta, Google, and YouTube.", page: "performance-marketing-bangalore" },
      { icon: "pen-tool", title: "Brand Identity Design", desc: "Defining your brand's visual DNA — logo, fonts, colors, and tone.", page: "branding-agency-bangalore" },
    ],
  },
  {
    category: "Digital Growth & Technology",
    blurb: "15+ websites shipped — many for top F&B brands in Bengaluru, and ranking on Google. Built to turn attention into enquiries.",
    image: creative("rainbow-layered-cocktail-poster-stories-rajajinagar"),
    items: [
      { icon: "globe", title: "Web Development", desc: "Custom, fast, SEO-optimized websites designed and built in-house — from restaurant sites to full brand experiences.", page: "website-design-development-bangalore" },
      { icon: "trending-up", title: "Digital Marketing", desc: "Strategic campaigns that amplify reach and generate real results.", page: "performance-marketing-bangalore" },
      { icon: "search", title: "SEO Optimization", desc: "Boost visibility with performance-driven SEO that ranks and converts.", page: "website-design-development-bangalore" },
    ],
  },
];

export default function Services() {
  return (
    <PageShell>
      <PageHeader
        h1={getRoute("/services").h1}
        lines={["Made to be", <span className="accent">noticed.</span>]}
        intro={
          <>
            Reels, posters, video production, social media and performance marketing, websites and branding — from one
            team in South Bengaluru. Running a restaurant, café or bar? See our{" "}
            <Link href="/restaurant-marketing-bangalore" className="link-underline text-bone">
              restaurant marketing in Bengaluru
            </Link>
            .
          </>
        }
      />

      <div className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
        {SERVICES_DATA.map((group, gi) => (
          <section key={group.category} className="grid grid-cols-1 gap-10 border-t border-line py-16 sm:py-20 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <p className="eyebrow mb-5 !text-flame">0{gi + 1}</p>
                  <h2 className="headline max-w-md text-5xl text-bone sm:text-6xl">{group.category}</h2>
                  <p className="mt-5 max-w-sm leading-relaxed text-mute">{group.blurb}</p>
                  <div className="mt-8 hidden aspect-square max-w-sm overflow-hidden rounded-2xl lg:block">
                    <img src={group.image.thumb} alt={group.image.alt} width={group.image.width} height={group.image.height} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                </Reveal>
              </div>
            </div>

            <ul className="lg:col-span-7">
              {group.items.map((svc, i) => {
                const Icon = iconMap[svc.icon];
                return (
                  <motion.li
                    key={svc.title}
                    className="group flex gap-5 border-b border-line py-8 first:pt-0 last:border-b-0 sm:gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, ease: EASE_OUT, delay: i * 0.05 }}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-flame transition-colors duration-300 group-hover:border-flame group-hover:bg-flame group-hover:text-ink">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="headline text-3xl text-bone sm:text-4xl">
                        <Link href={servicePath(svc.page)} className="link-underline hover:text-flame">
                          {svc.title}
                        </Link>
                      </h3>
                      <p className="mt-3 max-w-lg leading-relaxed text-mute">{svc.desc}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <Contact />
    </PageShell>
  );
}
