import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { EASE_OUT } from "@/components/motion";

type LightboxProps = {
  open: boolean;
  label: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  children: ReactNode;
  caption?: ReactNode;
};

/** Accessible full-screen viewer: Esc closes, ←/→ navigate, focus returns to the trigger. */
export default function Lightbox({ open, label, onClose, onPrev, onNext, children, caption }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const handlers = useRef({ onClose, onPrev, onNext });
  handlers.current = { onClose, onPrev, onNext };

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.classList.add("modal-open");
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handlers.current.onClose();
      if (e.key === "ArrowLeft") handlers.current.onPrev?.();
      if (e.key === "ArrowRight") handlers.current.onNext?.();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
      previouslyFocused?.focus?.();
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          className="fixed inset-0 z-[160] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="eyebrow absolute right-4 top-4 z-10 flex min-h-[44px] items-center gap-2 rounded-full bg-white/5 px-4 !text-bone transition-colors hover:bg-white/10 sm:right-8 sm:top-6"
          >
            Close <X size={16} />
          </button>

          {onPrev && (
            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-bone transition-colors hover:bg-white/10 active:scale-95 sm:left-6 sm:flex"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          {onNext && (
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-bone transition-colors hover:bg-white/10 active:scale-95 sm:right-6 sm:flex"
            >
              <ArrowRight size={20} />
            </button>
          )}

          <motion.div
            className="flex max-h-full w-full flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            {caption && <div className="w-full max-w-2xl text-center">{caption}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
