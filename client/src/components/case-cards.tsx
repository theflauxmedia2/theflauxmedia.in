import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { CASE_STUDIES, casePath } from "@/content/cases";
import { WORKS, videoThumbnail } from "@/lib/works";

/** Cover image for a case: first creative, else first reel thumbnail. */
export function caseCover(slug: string) {
  const still = WORKS.creatives.find((c) => c.case === slug);
  if (still) return { src: still.thumb ?? still.image, alt: still.alt, width: still.width ?? 640, height: still.height ?? 640 };
  const video = WORKS.videos.find((v) => v.case === slug);
  return video
    ? { src: videoThumbnail(video), alt: `${video.title} reel by The Flaux Media`, width: 480, height: 360 }
    : null;
}

export default function CaseCards({ slugs, className = "" }: { slugs: string[]; className?: string }) {
  const cases = slugs.map((s) => CASE_STUDIES.find((c) => c.slug === s)!).filter(Boolean);
  return (
    <ul className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {cases.map((cs) => {
        const cover = caseCover(cs.slug);
        return (
          <li key={cs.slug}>
            <Link
              href={casePath(cs.slug)}
              className="group block overflow-hidden rounded-2xl border border-line bg-ink-raised transition-colors duration-300 hover:border-bone/30"
            >
              {cover && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cover.src}
                    alt={cover.alt}
                    width={cover.width}
                    height={cover.height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="eyebrow mb-2">{cs.location}</p>
                  <h3 className="headline text-3xl text-bone">{cs.client}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{cs.summary}</p>
                </div>
                <ArrowUpRight size={20} className="btn-arrow mt-1 shrink-0 text-flame" />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
