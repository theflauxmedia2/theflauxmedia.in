import { Link } from "wouter";
import type { Crumb } from "@/seo/schema";

/** Visible breadcrumb trail (the matching BreadcrumbList JSON-LD comes from seo/routes). */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-mute">
        {items.map((crumb, i) => {
          const last = i === items.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-bone/70">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link href={crumb.path} className="link-underline hover:text-bone">
                    {crumb.name}
                  </Link>
                  <span aria-hidden>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
