import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { isActive } from "@/components/site-nav";

const LINKS = [
  { href: "/our-work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

/** Floating pill nav shown once the top bar has scrolled away; hides over the footer reveal and behind modals. */
export default function FloatingNav() {
  const [location] = useLocation();
  const [scrolledPast, setScrolledPast] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolledPast(y > 480);
      // The page panel ends one viewport before the bottom; hide as the footer layer appears
      setNearFooter(y > max - window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location]);

  useEffect(() => {
    const sync = () => setModalOpen(document.body.classList.contains("modal-open"));
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    sync();
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPast && !nearFooter && !modalOpen;

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Quick navigation"
          className="fixed inset-x-0 bottom-4 z-[100] flex justify-center px-4 sm:bottom-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24, transition: { duration: 0.2 } }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
        >
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#161616]/95 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Link href="/" aria-label="Home" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/5">
              <img src="/logo/logo.png" alt="" width={984} height={1105} className="h-6 w-auto" />
            </Link>
            {LINKS.map((link) => {
              const active = isActive(location, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex h-11 items-center rounded-full px-3.5 text-sm transition-colors sm:px-5 sm:text-[15px] ${
                    active ? "text-bone" : "text-mute hover:text-bone"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="floating-nav-active"
                      className="absolute inset-0 rounded-full bg-white/[0.08]"
                      transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
            <Link href="/contact" className="btn btn-primary group !min-h-[44px] !px-4 text-sm sm:!px-5 sm:text-[15px]">
              Contact
              <ArrowUpRight size={16} className="btn-arrow" />
            </Link>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
