import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { EASE_OUT, Headline, useOffscreenPause } from "@/components/motion";
import { useWorks, videoThumbnail } from "@/lib/works";

const DISCIPLINES = ["Brand films", "Reels", "Photography", "Social media", "Campaigns", "Websites"];

type Tile = { src: string; tall: boolean };

function ReelColumn({ tiles, className, duration }: { tiles: Tile[]; className: string; duration: string }) {
  // Rendered twice so the -50% drift loops seamlessly
  const loop = [...tiles, ...tiles];
  return (
    <div className={`flex flex-col gap-3 ${className}`} style={{ ["--drift-duration" as string]: duration }}>
      {loop.map((tile, i) => (
        <img
          key={i}
          src={tile.src}
          alt=""
          decoding="async"
          className={`block w-full shrink-0 rounded-xl bg-ink-high object-cover ${tile.tall ? "aspect-[9/16]" : "aspect-[4/5]"}`}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const { videos, creatives } = useWorks();

  const reels: Tile[] = videos.flatMap((v) => {
    const src = videoThumbnail(v);
    return src ? [{ src, tall: true }] : [];
  });
  const stills: Tile[] = creatives.map((c) => ({ src: c.thumb ?? c.image, tall: false }));

  // Interleave reels and stills into three columns with different rhythms
  const mixed: Tile[] = [];
  for (let i = 0; i < Math.max(reels.length, stills.length); i++) {
    if (reels[i]) mixed.push(reels[i]);
    if (stills[i]) mixed.push(stills[i]);
  }
  const columns = [0, 1, 2].map((c) => mixed.filter((_, i) => i % 3 === c).slice(0, 5));
  const { ref, paused } = useOffscreenPause<HTMLElement>();

  return (
    <section ref={ref} data-paused={paused} id="hero" className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24 lg:pt-28">
      {/* Warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] bg-[radial-gradient(closest-side,rgba(247,99,0,0.20),transparent)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="relative z-10 lg:col-span-7">
          <motion.p
            className="eyebrow mb-6 flex items-center gap-3 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-flame opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-flame" />
            </span>
            Creative media studio — Bengaluru
          </motion.p>

          <Headline
            as="h1"
            onMount
            delay={0.15}
            className="text-[16vw] text-bone sm:text-[11vw] lg:text-[clamp(4.5rem,7.6vw,8.75rem)]"
            lines={[
              "We make brands",
              "impossible to",
              <span className="accent">scroll past.</span>,
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.55 }}
          >
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute sm:text-xl">
              Reels, brand films, photography and social built to stop thumbs — and the strategy and tech to turn
              that attention into growth.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/our-work" className="btn btn-primary group text-base">
                See our work
                <ArrowUpRight size={18} className="btn-arrow" />
              </Link>
              <Link href="/contact" className="btn btn-ghost group text-base">
                Start a project
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Drifting wall of real work */}
        <motion.div
          aria-hidden
          className="relative -mx-5 h-[46vh] sm:-mx-8 lg:col-span-5 lg:mx-0 lg:h-[min(70vh,720px)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: mixed.length ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="absolute inset-0 grid grid-cols-3 gap-3 overflow-hidden rounded-2xl">
            <ReelColumn tiles={columns[0]} className="drift-up" duration="70s" />
            <ReelColumn tiles={columns[1]} className="drift-down" duration="85s" />
            <ReelColumn tiles={columns[2]} className="drift-up" duration="75s" />
          </div>
          {/* Soft top/bottom fade into the page */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
        </motion.div>
      </div>

      {/* Discipline ticker */}
      <div className="relative mt-10 border-y border-line py-5 lg:mt-6">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-32" />
          <div className="marquee-track" style={{ ["--marquee-duration" as string]: "45s" }}>
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                {DISCIPLINES.map((word, i) => (
                  <span key={word} className="flex items-center">
                    <span
                      className={`px-6 text-4xl sm:text-5xl lg:text-6xl ${
                        i % 2 ? "accent" : "headline text-bone"
                      }`}
                    >
                      {word}
                    </span>
                    <span className="text-2xl text-flame">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <a
          href="#work"
          className="eyebrow absolute -top-12 left-5 hidden items-center gap-2 hover:text-bone sm:left-8 lg:left-12 lg:flex"
        >
          Scroll <ArrowDownRight size={14} />
        </a>
      </div>
    </section>
  );
}
