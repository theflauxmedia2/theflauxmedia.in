import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import PageShell from "@/components/page-shell";
import PageHeader from "@/components/page-header";
import { getRoute } from "@/seo/routes";
import ReelCard from "@/components/reel-card";
import VideoLightbox from "@/components/video-lightbox";
import Lightbox from "@/components/lightbox";
import Contact from "@/components/contact";
import CaseCards from "@/components/case-cards";
import { CASE_STUDIES } from "@/content/cases";
import { EASE_OUT } from "@/components/motion";
import { clientName, creativeSrcSet, useWorks } from "@/lib/works";

type Tab = "reels" | "creatives";

// Group the Stories outlets together so the filter stays short
const clientGroup = (title: string) => (title.startsWith("Stories") ? "Stories" : clientName(title));

const cardMotion = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  // Cap the stagger so long grids don't feel slow
  transition: { duration: 0.7, ease: EASE_OUT, delay: Math.min(i % 4, 3) * 0.06 },
});

export default function OurWork() {
  const { videos, creatives, loading } = useWorks();
  const [tab, setTab] = useState<Tab>("reels");
  const [client, setClient] = useState<string>("All");
  const [videoIndex, setVideoIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const clients = useMemo(() => ["All", ...Array.from(new Set(videos.map((v) => clientGroup(v.title))))], [videos]);
  const filteredVideos = client === "All" ? videos : videos.filter((v) => clientGroup(v.title) === client);
  const image = imageIndex === null ? null : creatives[imageIndex];
  const stepImage = (dir: 1 | -1) =>
    imageIndex !== null && setImageIndex((imageIndex + dir + creatives.length) % creatives.length);

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "reels", label: "Reels", count: videos.length },
    { id: "creatives", label: "Creatives", count: creatives.length },
  ];

  return (
    <PageShell>
      <PageHeader
        h1={getRoute("/our-work").h1}
        lines={["Work that", <span className="accent">moves.</span>]}
        intro="The brands we've partnered with and the stories we've helped bring to life — through striking visuals, scroll-stopping reels and campaigns built to perform."
        aside={
          <div role="tablist" aria-label="Work type" className="flex rounded-full border border-line p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`relative flex min-h-[44px] items-center gap-2 rounded-full px-5 text-[15px] transition-colors duration-200 ${
                  tab === t.id ? "text-ink" : "text-mute hover:text-bone"
                }`}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="work-tab"
                    className="absolute inset-0 rounded-full bg-bone"
                    transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
                  />
                )}
                <span className="relative">{t.label}</span>
                <span className="relative font-mono text-xs opacity-80">{t.count}</span>
              </button>
            ))}
          </div>
        }
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 lg:px-12">
        {tab === "reels" && clients.length > 2 && (
          <div className="scrollbar-hide -mx-5 mb-8 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
            {clients.map((c) => (
              <button
                key={c}
                onClick={() => setClient(c)}
                aria-pressed={client === c}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors duration-200 ${
                  client === c ? "border-flame bg-flame/10 text-bone" : "border-line text-mute hover:border-bone/40 hover:text-bone"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[9/16] animate-pulse rounded-2xl bg-ink-high" />
            ))}
          </div>
        ) : tab === "reels" ? (
          <div key={`reels-${client}`} className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {filteredVideos.map((video, i) => (
              <motion.div key={video.link} {...cardMotion(i)}>
                <ReelCard video={video} index={videos.indexOf(video)} onOpen={() => setVideoIndex(i)} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div key="creatives" className="columns-2 gap-3 sm:gap-4 lg:columns-3">
            {creatives.map((creative, i) => (
              <motion.div key={creative.image} className="mb-3 break-inside-avoid sm:mb-4" {...cardMotion(i)}>
                <button
                  type="button"
                  onClick={() => setImageIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl bg-ink-high text-left transition-transform duration-200 ease-out active:scale-[0.98]"
                  aria-label={`View ${creative.title}`}
                >
                  <img
                    src={creative.thumb ?? creative.image}
                    srcSet={creativeSrcSet(creative)}
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    alt={creative.alt}
                    width={creative.width}
                    height={creative.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 opacity-100 transition-opacity duration-300 sm:p-5 lg:opacity-0 lg:group-hover:opacity-100">
                    <p className="headline flex-1 text-xl text-bone sm:text-2xl">{creative.title}</p>
                    <Expand size={18} className="mb-1 shrink-0 text-bone" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <h2 className="eyebrow mb-8">Case studies by client</h2>
          <CaseCards slugs={CASE_STUDIES.map((c) => c.slug)} />
        </div>
      </section>

      <Contact />

      <VideoLightbox videos={filteredVideos} index={videoIndex} onChange={setVideoIndex} />

      <Lightbox
        open={image !== null}
        label={image?.title ?? "Creative"}
        onClose={() => setImageIndex(null)}
        onPrev={() => stepImage(-1)}
        onNext={() => stepImage(1)}
        caption={
          image && (
            <>
              <p className="headline text-2xl text-bone">{image.title}</p>
              <p className="mx-auto mt-2 max-w-xl text-sm text-mute">{image.description}</p>
            </>
          )
        }
      >
        {image && (
          <img
            key={image.image}
            src={image.image}
            alt={image.alt}
            className="max-h-[72vh] w-auto max-w-full rounded-2xl object-contain"
          />
        )}
      </Lightbox>
    </PageShell>
  );
}
