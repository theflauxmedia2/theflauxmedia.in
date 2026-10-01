import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { CONTACT, NAV_LINKS } from "@/lib/site";
import { EASE_OUT } from "@/components/motion";

export function isActive(location: string, href: string) {
  return href === "/" ? location === "/" : location.startsWith(href);
}

/** Top bar that scrolls away with the page; the floating pill takes over below the fold. */
export default function SiteNav() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.classList.add("modal-open");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">
          <Link href="/" aria-label="The Flaux Media — home" className="-m-2 p-2">
            <img src="/logo/logo.png" alt="" width={984} height={1105} className="h-10 w-auto lg:h-12" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(location, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-[15px] transition-colors duration-200 ${
                    active ? "text-bone" : "text-mute hover:text-bone"
                  }`}
                >
                  {link.label}
                  {active && <span className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-flame" />}
                </Link>
              );
            })}
            <Link href="/contact" className="btn btn-primary group ml-4 !min-h-[42px] text-[15px]">
              Start a project
              <ArrowUpRight size={16} className="btn-arrow" />
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="eyebrow -mr-2 flex min-h-[44px] items-center gap-2 px-2 !text-bone md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            Menu
            <span className="flex flex-col gap-[5px]" aria-hidden>
              <span className="block h-px w-5 bg-bone" />
              <span className="block h-px w-5 bg-bone" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[150] flex flex-col bg-ink px-5 pb-8 sm:px-8"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.35, ease: [0.77, 0, 0.175, 1] } }}
            transition={{ duration: 0.55, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="flex h-20 items-center justify-between">
              <Link href="/" aria-label="Home" className="-m-2 p-2">
                <img src="/logo/logo.png" alt="" width={984} height={1105} className="h-10 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="eyebrow -mr-2 flex min-h-[44px] items-center gap-2 px-2 !text-bone"
                autoFocus
              >
                Close <X size={18} />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-8 flex flex-1 flex-col justify-center">
              {[{ href: "/", label: "Home" }, ...NAV_LINKS, { href: "/contact", label: "Contact" }].map((link, i) => (
                <div key={link.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.2 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`headline flex items-baseline gap-4 py-1 text-[13vw] sm:text-7xl ${
                        isActive(location, link.href) ? "text-flame" : "text-bone"
                      }`}
                    >
                      <span className="eyebrow !tracking-normal">0{i + 1}</span>
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            <motion.div
              className="flex flex-col gap-2 border-t border-line pt-6 text-sm text-mute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
            >
              <a href={`mailto:${CONTACT.email}`} className="text-bone">{CONTACT.email}</a>
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
