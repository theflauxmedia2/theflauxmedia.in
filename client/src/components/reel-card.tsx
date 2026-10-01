import { Play } from "lucide-react";
import { clientName, videoThumbnail, type VideoItem } from "@/lib/works";

type ReelCardProps = {
  video: VideoItem;
  index: number;
  onOpen: () => void;
  className?: string;
  /** Load the thumbnail eagerly (cards in the first row). */
  eager?: boolean;
};

export default function ReelCard({ video, index, onOpen, className = "", eager = false }: ReelCardProps) {
  const thumb = videoThumbnail(video);

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative block w-full overflow-hidden rounded-2xl bg-ink-high text-left transition-transform duration-200 ease-out active:scale-[0.98] ${
        video.format === "landscape" ? "aspect-video" : "aspect-[9/16]"
      } ${className}`}
    >
      {thumb && (
        <img
          src={thumb}
          alt=""
          width={480}
          height={360}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />

      <span aria-hidden className="eyebrow absolute left-4 top-4 !text-bone/70">{String(index + 1).padStart(2, "0")}</span>
      <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-bone transition-colors duration-300 group-hover:bg-flame group-hover:text-ink">
        <Play size={15} className="ml-0.5" fill="currentColor" />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="headline text-xl text-bone sm:text-[1.7rem]">
          <span className="sr-only">Play </span>
          {clientName(video.title)}
        </p>
        <p className="mt-2 line-clamp-1 font-mono text-[11px] uppercase tracking-[0.12em] text-bone/60">
          {video.tags.filter((t) => t !== "TheFlauxMedia").slice(0, 2).join(" · ")}
        </p>
      </div>
    </button>
  );
}
