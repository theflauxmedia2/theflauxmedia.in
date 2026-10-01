import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Eyebrow, Headline, Reveal } from "@/components/motion";
import ReelCard from "@/components/reel-card";
import VideoLightbox from "@/components/video-lightbox";
import { useWorks } from "@/lib/works";

const SHOWN = 8;

export default function SelectedWork() {
  const { videos } = useWorks();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const shown = videos.slice(0, SHOWN);

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-card]");
    rail.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + 16) * 2, behavior: "smooth" });
  };

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow index="01" className="mb-6">Selected work</Eyebrow>
            <Headline
              className="text-6xl text-bone sm:text-7xl lg:text-8xl"
              lines={["Reels that", <span className="accent">stop thumbs.</span>]}
            />
          </div>
          <Reveal className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll work left"
              className="hidden h-12 w-12 items-center justify-center rounded-full border border-line text-bone transition-colors hover:border-bone active:scale-95 lg:flex"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll work right"
              className="hidden h-12 w-12 items-center justify-center rounded-full border border-line text-bone transition-colors hover:border-bone active:scale-95 lg:flex"
            >
              <ArrowRight size={18} />
            </button>
            <Link href="/our-work" className="btn btn-ghost group">
              View all work
              <ArrowUpRight size={16} className="btn-arrow" />
            </Link>
          </Reveal>
        </div>
      </div>

      <Reveal y={40} className="mt-12 sm:mt-16">
        <div
          ref={railRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 sm:px-8 lg:px-12 [scroll-padding-inline:1.25rem] sm:[scroll-padding-inline:2rem] lg:[scroll-padding-inline:3rem]"
        >
          {shown.length === 0
            ? Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="aspect-[9/16] w-[68vw] shrink-0 animate-pulse rounded-2xl bg-ink-high sm:w-[42vw] md:w-[30vw] lg:w-[21vw]" />
              ))
            : shown.map((video, i) => (
                <div key={video.link} data-card className="w-[68vw] shrink-0 snap-start sm:w-[42vw] md:w-[30vw] lg:w-[21vw]">
                  <ReelCard video={video} index={i} onOpen={() => setOpenIndex(i)} />
                </div>
              ))}
        </div>
      </Reveal>

      <VideoLightbox videos={shown} index={openIndex} onChange={setOpenIndex} />
    </section>
  );
}
