import { useEffect, useState } from "react";

export interface VideoItem {
  title: string;
  thumbnail?: string;
  link: string;
  description: string;
  format: "landscape" | "portrait";
  tags: string[];
}

export interface CreativeItem {
  title: string;
  image: string;
  thumb?: string;
  description: string;
}

export interface WorksData {
  videos: VideoItem[];
  creatives: CreativeItem[];
}

const EMPTY: WorksData = { videos: [], creatives: [] };

// Shared across components so works.json is fetched once per visit
let cache: WorksData | null = null;
let inflight: Promise<WorksData> | null = null;

function loadWorks(): Promise<WorksData> {
  if (cache) return Promise.resolve(cache);
  inflight ??= fetch("/works.json")
    .then((res) => res.json() as Promise<WorksData>)
    .then((data) => (cache = data))
    .catch((error) => {
      console.error("Error fetching works data:", error);
      inflight = null;
      return EMPTY;
    });
  return inflight;
}

export function useWorks() {
  const [data, setData] = useState<WorksData>(cache ?? EMPTY);
  const [loading, setLoading] = useState(!cache);

  useEffect(() => {
    let alive = true;
    loadWorks().then((d) => {
      if (!alive) return;
      setData(d);
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, []);

  return { ...data, loading };
}

function youtubeId(link: string): string | null {
  const match =
    link.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/) ??
    link.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/) ??
    link.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  return match?.[1] ?? null;
}

export function videoThumbnail(video: VideoItem): string | null {
  if (video.thumbnail) return video.thumbnail;
  const yt = youtubeId(video.link);
  if (yt) return `https://img.youtube.com/vi/${yt}/hqdefault.jpg`;
  const vimeo = video.link.match(/vimeo\.com\/video\/(\d+)/);
  if (vimeo) return `https://vumbnail.com/${vimeo[1]}.jpg`;
  return null;
}

export function videoEmbedUrl(video: VideoItem): string {
  const yt = youtubeId(video.link);
  if (yt) return `https://www.youtube.com/embed/${yt}?autoplay=1&rel=0&playsinline=1`;
  if (/vimeo\.com\/video\/\d+/.test(video.link)) {
    return `${video.link}${video.link.includes("?") ? "&" : "?"}autoplay=1`;
  }
  return video.link;
}

/** "Stories 2.0 (Timeless Version)" → "Stories 2.0" */
export function clientName(title: string): string {
  return title.replace(/\s*\(.*\)\s*$/, "").replace(/\s+-\s+.*$/, "");
}
