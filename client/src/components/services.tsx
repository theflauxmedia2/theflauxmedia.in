import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { EASE_OUT, Eyebrow, Headline, Reveal } from "@/components/motion";
import { creative } from "@/lib/works";

const SERVICES = [
  {
    title: "Graphic Design",
    description: "Visual storytelling that captivates your audience and strengthens your brand presence across every platform.",
    tags: ["Brand identity", "Social creatives", "Menus & print"],
    image: creative("rainbow-layered-cocktail-poster-stories-rajajinagar"),
    href: "/services/social-media-poster-design-bangalore",
  },
  {
    title: "Social Media Marketing",
    description: "Strategy, content calendars and community management that position you uniquely and connect deeply with your audience.",
    tags: ["Strategy", "Content calendars", "Ad campaigns"],
    image: creative("honey-dew-mocktail-poster-stories-rajajinagar"),
    href: "/services/social-media-marketing-bangalore",
  },
  {
    title: "Film & Photography",
    description: "Cinematic reels, brand films and product shoots that elevate your brand's voice and hold attention.",
    tags: ["Reels", "Brand films", "Product shoots"],
    image: creative("sizzler-kairi-cooler-poster-stories-nagarbhavi"),
    href: "/services/video-production-bangalore",
  },
  {
    title: "Web Development",
    description: "Fast, search-ready websites built in-house — 15+ shipped so far, many for top F&B brands in Bengaluru and ranking on Google.",
    tags: ["Websites", "SEO", "Landing pages"],
    image: null,
    href: "/services/website-design-development-bangalore",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Eyebrow index="03" className="mb-6">What we do</Eyebrow>
            <Headline
              className="text-6xl text-bone sm:text-7xl lg:text-[5.5rem]"
              lines={["Everything", "your brand needs", <>to <span className="accent">look the part.</span></>]}
            />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-mute">
                One team for the idea, the shoot, the edit and the rollout — so your brand looks and sounds the same
                everywhere it shows up.
              </p>
              <Link href="/services" className="btn btn-ghost group mt-8">
                All services
                <ArrowUpRight size={16} className="btn-arrow" />
              </Link>
            </Reveal>
          </div>
        </div>

        <ol className="border-t border-line lg:col-span-7">
          {SERVICES.map((service, i) => {
            const content = (
              <>
                <span className="eyebrow pt-2 !text-flame sm:pt-3">0{i + 1}</span>
                <div className="flex-1">
                  <h3 className="headline text-4xl text-bone transition-transform duration-500 ease-out sm:text-5xl lg:group-hover:translate-x-2">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-mute">{service.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-bone/70">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                {service.image ? (
                  <div className="hidden h-36 w-28 shrink-0 overflow-hidden rounded-xl [clip-path:inset(50%_50%_50%_50%_round_12px)] transition-[clip-path] duration-500 ease-out group-hover:[clip-path:inset(0%_0%_0%_0%_round_12px)] lg:block">
                    <img src={service.image.thumb} alt="" width={service.image.width} height={service.image.height} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <span className="hidden h-36 w-28 shrink-0 flex-col justify-between rounded-xl border border-line p-3 transition-colors duration-300 group-hover:border-flame lg:flex">
                    <span className="headline text-5xl text-flame">15+</span>
                    <span className="eyebrow !text-[10px] !leading-tight !tracking-[0.1em]">Websites shipped</span>
                  </span>
                )}
              </>
            );
            const rowClass = "group flex items-start gap-6 py-10 sm:gap-10 sm:py-12";

            return (
              <motion.li
                key={service.title}
                className="border-b border-line"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE_OUT, delay: i * 0.05 }}
              >
                <Link href={service.href} className={rowClass}>
                  {content}
                </Link>
              </motion.li>
            );
          })}
        </ol>
      </div>
      <Reveal className="mx-auto mt-12 max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <p className="text-mute lg:ml-[calc(41.666%+0.5rem)]">
          Also:{" "}
          <Link href="/services/instagram-reels-production-bangalore" className="link-underline text-bone">
            Instagram reel production
          </Link>
          {" · "}
          <Link href="/services/performance-marketing-bangalore" className="link-underline text-bone">
            Meta &amp; Google ads
          </Link>
          {" · "}
          <Link href="/services/branding-agency-bangalore" className="link-underline text-bone">
            Branding &amp; logo design
          </Link>
          {" · "}
          <Link href="/restaurant-marketing-bangalore" className="link-underline text-bone">
            Restaurant &amp; café marketing
          </Link>
        </p>
      </Reveal>
    </section>
  );
}
