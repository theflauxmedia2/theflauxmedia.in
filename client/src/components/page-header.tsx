import type { ReactNode } from "react";
import { Headline, enterStyle } from "@/components/motion";

type PageHeaderProps = {
  /** The page's single, keyword-bearing H1 (from seo/routes) — shown as the small label above the display headline. */
  h1: string;
  eyebrow?: string;
  lines: ReactNode[];
  intro?: ReactNode;
  aside?: ReactNode;
};

export default function PageHeader({ h1, lines, intro, aside, breadcrumbs }: PageHeaderProps & { breadcrumbs?: ReactNode }) {
  return (
    <header className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44 lg:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 h-[460px] w-[460px] bg-[radial-gradient(closest-side,rgba(247,99,0,0.15),transparent)]"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {breadcrumbs}
        <h1 className="enter eyebrow mb-8 max-w-xl">{h1}</h1>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Headline as="p" onMount delay={0.1} className="text-[16vw] text-bone sm:text-8xl lg:text-[8.5rem]" lines={lines} />
          {aside && (
            <div className="enter" style={enterStyle(0.4, 12)}>
              {aside}
            </div>
          )}
        </div>
        {intro && (
          <p className="enter mt-10 max-w-2xl text-lg leading-relaxed text-mute sm:text-xl" style={enterStyle(0.2, 12, { fade: false })}>
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
