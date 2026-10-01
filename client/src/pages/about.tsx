import { motion } from "framer-motion";
import PageShell from "@/components/page-shell";
import PageHeader from "@/components/page-header";
import { getRoute } from "@/seo/routes";
import Approach from "@/components/about";
import BrandMarquee from "@/components/brand-marquee";
import Contact from "@/components/contact";
import { EASE_OUT, Eyebrow, Headline, Reveal } from "@/components/motion";
import { creative, creativeSrcSet } from "@/lib/works";
import { Link } from "wouter";
import { CONTACT, FOUNDING_YEAR } from "@/lib/site";

const VALUES = [
  {
    title: "Collaboration",
    description: "We believe the best ideas come from working together, combining diverse perspectives and expertise.",
  },
  {
    title: "Purpose-Driven",
    description: "Every project we take on has a clear purpose and measurable impact on our clients' success.",
  },
  {
    title: "Craft",
    description: "We set high standards for ourselves — every frame, edit and pixel is considered before it ships.",
  },
  {
    title: "Curiosity",
    description: "We stay close to platforms and trends, and push ideas until they feel fresh rather than familiar.",
  },
];

const COLLAGE = [
  creative("cosmo-cocktail-poster-stories-nagarbhavi"),
  creative("caramel-cheesecake-poster-stories-rajajinagar"),
  creative("prawn-fry-neer-dosa-poster-stories-nagarbhavi"),
];

export default function About() {
  return (
    <PageShell>
      <PageHeader
        h1={getRoute("/about").h1}
        lines={["Built for", <>the <span className="accent">scroll.</span></>]}
        intro="The Flaux Media is a creative media and marketing studio based on Bannerghatta Road in South Bengaluru. We help restaurants, cafés and growing brands stand out with reels, posters, brand films, websites and campaigns."
      />

      {/* Story */}
      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-6">
          <Eyebrow index="01" className="mb-6">What defines us</Eyebrow>
          <Reveal>
            <p className="headline text-4xl text-bone sm:text-5xl">
              Every brand has a story worth telling. We make sure it's <span className="accent">seen.</span>
            </p>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-mute">
              <p>
                Through powerful storytelling, innovative design, and technology-driven execution, we help brands stand
                out and connect with their audience in meaningful ways.
              </p>
              <p>
                Our mission is to craft digital experiences that inspire action, build trust, and deliver measurable
                impact — turning ideas into visuals that move people and brands forward.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:col-span-6">
          {COLLAGE.map((img, i) => (
            <motion.div
              key={img.slug}
              className={`absolute ${["left-0 top-6 w-[48%]", "right-0 top-0 w-[44%]", "bottom-0 left-[26%] w-[46%]"][i]}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: EASE_OUT, delay: i * 0.12 }}
            >
              <div
                className={`overflow-hidden rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${["-rotate-3", "rotate-2", "-rotate-1"][i]}`}
              >
                <img src={img.thumb} srcSet={creativeSrcSet(img)} sizes="(min-width: 1024px) 24vw, 46vw" alt={img.alt} width={img.width} height={img.height} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder + base */}
      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 border-t border-line px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <Eyebrow className="mb-6">Who we are</Eyebrow>
          {/* TODO(owner): add a founder photo (and a real bio paragraph) here. */}
          <h2 className="headline text-5xl text-bone sm:text-6xl">
            Founded in {FOUNDING_YEAR} by <span className="accent">Amaan &amp; team.</span>
          </h2>
        </div>
        <div className="space-y-10 lg:col-span-7">
          <div>
            <h3 className="headline text-3xl text-bone">Where we're based</h3>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-mute">
              The team works out of {CONTACT.location}, in South Bengaluru — a short drive from Hulimavu, Arekere,
              JP Nagar, Jayanagar, BTM Layout, Banashankari and Kanakapura Road. We shoot across the whole city too:
              our restaurant work so far spans outlets in Rajajinagar and Nagarbhavi.{" "}
              <Link href="/areas/south-bengaluru" className="link-underline text-bone">
                See the areas we cover
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="headline text-3xl text-bone">How shoots work</h3>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-mute">
              We shoot on location — at your restaurant, café, bar, store or event — so the content shows the real
              place your customers will walk into. Before the shoot we agree the concept, shot list and the dishes,
              drinks or products to feature; afterwards we edit, colour-grade and deliver files sized for Instagram
              Reels, Stories, YouTube Shorts and your feed.
            </p>
          </div>
          <div>
            <h3 className="headline text-3xl text-bone">Everything in-house</h3>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-mute">
              Concept, camera, editing, poster design, social media management, ads and websites are all handled by
              our own team — so the reel, the poster and the website all look like they came from the same brand.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <Eyebrow index="02" className="mb-6">What we value</Eyebrow>
        <Headline className="mb-14 text-6xl text-bone sm:text-7xl" lines={[<>Four things we <span className="accent">won't</span> compromise on.</>]} />
        <ul className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
          {VALUES.map((value, i) => (
            <motion.li
              key={value.title}
              className="border-b border-line py-10 sm:odd:border-r sm:odd:pr-10 sm:even:pl-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: (i % 2) * 0.08 }}
            >
              <span className="eyebrow !text-flame">0{i + 1}</span>
              <h3 className="headline mt-4 text-4xl text-bone">{value.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-mute">{value.description}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      <Approach index="03" />
      <BrandMarquee index="04" />
      <Contact />
    </PageShell>
  );
}
