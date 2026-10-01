import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { Fragment, useRef, type CSSProperties, type ReactNode } from "react";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Ref + `data-paused` value that stops CSS loops (marquees, drifts) while the element is off-screen. */
export function useOffscreenPause<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { margin: "100px" });
  return { ref, paused: !inView };
}

/**
 * Style for the CSS `.enter` entrance (above the fold), which plays from the pre-rendered HTML before JS loads.
 * Pass `fade: false` for likely LCP text so it is visible from the first frame and only slides.
 */
export function enterStyle(delay = 0, y = 0, { fade = true } = {}): CSSProperties {
  return {
    ["--enter-delay" as string]: `${delay}s`,
    ["--enter-y" as string]: `${y}px`,
    ...(fade ? {} : { ["--enter-opacity" as string]: 1 }),
  };
}

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/** Fades and lifts content in once it scrolls into view. */
export function Reveal({ delay = 0, y = 16, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type HeadlineProps = {
  as?: "h1" | "h2" | "h3" | "p";
  lines: ReactNode[];
  className?: string;
  delay?: number;
  /** Animate on load (CSS) instead of waiting for the viewport — use above the fold. */
  onMount?: boolean;
};

/** Headline whose lines rise out of a mask, one after another. */
export function Headline({ as = "h2", lines, className = "", delay = 0, onMount = false }: HeadlineProps) {
  if (onMount) {
    // CSS-driven so the headline isn't hidden until hydration
    const Tag = as;
    return (
      <Tag className={`headline ${className}`}>
        {lines.map((line, i) => (
          // The space keeps words apart in the text content (HTML, crawlers, screen readers)
          <Fragment key={i}>
            {i > 0 && " "}
            <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
              <span className="enter-rise block" style={enterStyle(delay + i * 0.08)}>
                {line}
              </span>
            </span>
          </Fragment>
        ))}
      </Tag>
    );
  }

  const Tag = motion[as];
  return (
    <Tag className={`headline ${className}`} initial="hidden" whileInView="shown" viewport={{ once: true, margin: "-80px" }}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <motion.span
              className="block"
              variants={{
                hidden: { y: "105%" },
                shown: { y: "0%", transition: { duration: 0.9, ease: EASE_OUT, delay: delay + i * 0.08 } },
              }}
            >
              {line}
            </motion.span>
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}

/** Small mono section label, e.g. "(02) What we do". */
export function Eyebrow({ index, children, className = "" }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      {index && <span className="text-flame">({index})</span>}
      <span>{children}</span>
    </p>
  );
}
