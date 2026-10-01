import { motion } from "framer-motion";
import PageShell from "@/components/page-shell";
import PageHeader from "@/components/page-header";
import Approach from "@/components/about";
import BrandMarquee from "@/components/brand-marquee";
import Contact from "@/components/contact";
import { EASE_OUT, Eyebrow, Headline, Reveal } from "@/components/motion";

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

const COLLAGE = ["/creatives/sm/01.jpg", "/creatives/sm/05.jpg", "/creatives/sm/09.jpg"];

export default function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About the studio"
        lines={["Built for", <>the <span className="accent">scroll.</span></>]}
        intro="The Flaux Media is a creative media and marketing studio in Bengaluru. We help brands stand out through high-quality visuals, strategy-driven campaigns and technology-led execution."
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
          {COLLAGE.map((src, i) => (
            <motion.div
              key={src}
              className={`absolute ${["left-0 top-6 w-[48%]", "right-0 top-0 w-[44%]", "bottom-0 left-[26%] w-[46%]"][i]}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: EASE_OUT, delay: i * 0.12 }}
            >
              <div
                className={`overflow-hidden rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${["-rotate-3", "rotate-2", "-rotate-1"][i]}`}
              >
                <img src={src} alt="" loading="lazy" className="aspect-[4/5] w-full object-cover" />
              </div>
            </motion.div>
          ))}
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
