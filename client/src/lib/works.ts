import worksData from "@/data/works.json";

export interface VideoItem {
  title: string;
  /** YouTube video id */
  id: string;
  thumbnail?: string;
  link: string;
  description: string;
  format: "landscape" | "portrait";
  tags: string[];
  /** Case-study slug under /work */
  case: string;
  outlet?: string;
  uploadDate: string;
}

export interface CreativeItem {
  title: string;
  slug: string;
  image: string;
  thumb?: string;
  width?: number;
  height?: number;
  description: string;
  alt: string;
  case: string;
  outlet?: string;
}

export interface WorksData {
  videos: VideoItem[];
  creatives: CreativeItem[];
}

// Imported at build time so portfolio text and images are in the pre-rendered HTML
export const WORKS = worksData as WorksData;

export function creative(slug: string): CreativeItem {
  const found = WORKS.creatives.find((c) => c.slug === slug);
  if (!found) throw new Error(`Unknown creative: ${slug}`);
  return found;
}

export function useWorks() {
  return { ...WORKS, loading: false };
}

export function videoThumbnail(video: VideoItem): string {
  return video.thumbnail ?? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
}

export function videoEmbedUrl(video: VideoItem): string {
  return `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`;
}

export function videoWatchUrl(video: VideoItem): string {
  return `https://www.youtube.com/shorts/${video.id}`;
}

/** "Stories 2.0 (Timeless Version)" → "Stories 2.0" */
export function clientName(title: string): string {
  return title.replace(/\s*\(.*\)\s*$/, "").replace(/\s+-\s+.*$/, "");
}

/** Description without the trailing credit line/emoji. */
export function cleanDescription(text: string): string {
  return text
    .replace(/\s*(\uD83C\uDFA5|\uD83C\uDFAC).*$/, "")
    .replace(/\s*Shot, Edited & Produced by TheFlauxMedia\.?$/, "")
    .trim();
}
