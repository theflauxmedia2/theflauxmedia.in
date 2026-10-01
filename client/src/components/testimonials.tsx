import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EASE_OUT, Eyebrow, Headline } from "@/components/motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Optional client logo, e.g. "/brand-logos/macaw.webp". Initials are shown without one. */
  logo?: string;
};

/*
 * Add real client quotes here — the section stays hidden while this list is empty.
 * Example:
 * { quote: "…", name: "Jane Doe", role: "Founder, Macaw", logo: "/brand-logos/macaw.webp" },
 */
const TESTIMONIALS: Testimonial[] = [];

const AUTOPLAY_MS = 7000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    if (paused || count < 2) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, paused, count]);

  if (count === 0) return null;

  const t = TESTIMONIALS[index];
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count);
  const initials = t.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Eyebrow className="mb-6">Kind words</Eyebrow>
        <Headline className="mb-14 text-6xl text-bone sm:text-7xl" lines={[<>Hear it from <span className="accent">them.</span></>]} />

        <div className="relative min-h-[320px] border-t border-line pt-12">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(4px)", transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
            >
              <blockquote className="max-w-5xl font-serif text-3xl leading-[1.15] text-bone sm:text-5xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                {t.logo ? (
                  <img src={t.logo} alt="" width={48} height={48} className="h-12 w-12 rounded-full bg-white/5 object-contain p-1.5" />
                ) : (
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-flame font-medium text-ink">
                    {initials}
                  </span>
                )}
                <span>
                  <span className="block font-medium text-bone">{t.name}</span>
                  <span className="block text-sm text-mute">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {count > 1 && (
          <div className="mt-12 flex items-center gap-6">
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-bone transition-colors hover:border-bone active:scale-95">
                <ArrowLeft size={18} />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-bone transition-colors hover:border-bone active:scale-95">
                <ArrowRight size={18} />
              </button>
            </div>
            <span className="eyebrow">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 overflow-hidden bg-line">
              <motion.div
                key={`${index}-${paused}`}
                className="h-full origin-left bg-flame"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: paused ? 0 : 1 }}
                transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
