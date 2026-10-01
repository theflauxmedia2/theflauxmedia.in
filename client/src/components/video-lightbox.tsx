import Lightbox from "@/components/lightbox";
import { clientName, videoEmbedUrl, type VideoItem } from "@/lib/works";

type VideoLightboxProps = {
  videos: VideoItem[];
  index: number | null;
  onChange: (index: number | null) => void;
};

export default function VideoLightbox({ videos, index, onChange }: VideoLightboxProps) {
  const video = index === null ? null : videos[index];
  const step = (dir: 1 | -1) => index !== null && onChange((index + dir + videos.length) % videos.length);

  return (
    <Lightbox
      open={video !== null}
      label={video ? video.title : "Video"}
      onClose={() => onChange(null)}
      onPrev={videos.length > 1 ? () => step(-1) : undefined}
      onNext={videos.length > 1 ? () => step(1) : undefined}
      caption={
        video && (
          <>
            <p className="headline text-2xl text-bone">{clientName(video.title)}</p>
            <p className="mx-auto mt-2 line-clamp-2 max-w-xl text-sm text-mute">{video.description}</p>
          </>
        )
      }
    >
      {video && (
        <div
          className={`overflow-hidden rounded-2xl bg-black ${
            video.format === "landscape"
              ? "aspect-video w-full max-w-4xl"
              : "aspect-[9/16] h-[min(72vh,760px)] max-w-full"
          }`}
        >
          <iframe
            key={video.link}
            src={videoEmbedUrl(video)}
            title={video.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </Lightbox>
  );
}
