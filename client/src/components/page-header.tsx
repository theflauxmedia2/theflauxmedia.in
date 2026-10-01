import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_OUT, Headline } from "@/components/motion";

type PageHeaderProps = {
  eyebrow: string;
  lines: ReactNode[];
  intro?: ReactNode;
  aside?: ReactNode;
};

export default function PageHeader({ eyebrow, lines, intro, aside }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44 lg:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 h-[460px] w-[460px] bg-[radial-gradient(closest-side,rgba(247,99,0,0.15),transparent)]"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <motion.p
          className="eyebrow mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.p>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Headline as="h1" onMount delay={0.1} className="text-[16vw] text-bone sm:text-8xl lg:text-[8.5rem]" lines={lines} />
          {aside && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.4 }}
            >
              {aside}
            </motion.div>
          )}
        </div>
        {intro && (
          <motion.p
            className="mt-10 max-w-2xl text-lg leading-relaxed text-mute sm:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.35 }}
          >
            {intro}
          </motion.p>
        )}
      </div>
    </header>
  );
}
