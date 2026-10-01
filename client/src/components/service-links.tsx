import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { SERVICE_PAGES, servicePath } from "@/content/services";

/** Linked list of service pages with descriptive anchor text. */
export default function ServiceLinks({ slugs }: { slugs: string[] }) {
  const pages = slugs.map((s) => SERVICE_PAGES.find((p) => p.slug === s)!).filter(Boolean);
  return (
    <ul className="border-t border-line">
      {pages.map((page) => (
        <li key={page.slug} className="border-b border-line">
          <Link href={servicePath(page.slug)} className="group flex items-center justify-between gap-6 py-6">
            <span>
              <span className="headline block text-3xl text-bone transition-transform duration-500 ease-out group-hover:translate-x-1 sm:text-4xl">
                {page.name}
              </span>{" "}
              <span className="mt-1 block text-sm text-mute">{page.h1}</span>
            </span>
            <ArrowUpRight size={22} className="btn-arrow shrink-0 text-flame" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
