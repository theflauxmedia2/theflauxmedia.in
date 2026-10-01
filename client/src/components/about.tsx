import { motion } from "framer-motion";
import { EASE_OUT, Eyebrow, Reveal } from "@/components/motion";

export const PROCESS = [
  {
    title: "Discover",
    copy: "We dig into your brand, your audience and what's already working — then agree on what success looks like.",
  },
  {
    title: "Create",
    copy: "Concepts, scripts and shoot plans, then production: reels, films, photography and design made in-house.",
  },
  {
    title: "Refine",
    copy: "Sharp edits, colour and sound, with quick feedback rounds so nothing ships until it feels right.",
  },
  {
    title: "Grow",
    copy: "We publish, measure and iterate — doubling down on what moves people and dropping what doesn't.",
  },
];

/** Studio belief statement + four-step process. */
export default function About({ index = "04" }: { index?: string }) {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Eyebrow index={index} className="mb-10">How we work</Eyebrow>

        <Reveal>
          <p className="headline max-w-5xl text-4xl text-bone sm:text-6xl lg:text-7xl">
            Creativity and strategy go <span className="accent">hand in hand.</span>{" "}
            <span className="text-mute">
              We turn ideas into visuals that move people — and move brands forward.
            </span>
          </p>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:mt-24 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <motion.li
              key={step.title}
              className="group relative flex min-h-[280px] flex-col bg-ink p-7 transition-colors duration-500 hover:bg-ink-raised sm:p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: i * 0.08 }}
            >
              <span className="eyebrow">Step 0{i + 1}</span>
              <div className="mt-14">
                <h3 className="headline text-4xl text-bone sm:text-5xl">
                  {step.title}
                  <span className="text-flame">.</span>
                </h3>
                <p className="mt-4 leading-relaxed text-mute">{step.copy}</p>
              </div>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-flame transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
