import { useState, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TOP_NAV_LINKS_LEFT = [
  { href: "#projects", label: "Projects" },
  { href: "#merch", label: "Merch" },
];
const TOP_NAV_LINKS_RIGHT = [
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact", isButton: true },
];

const BOTTOM_NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact", isButton: true },
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

const Navbar = forwardRef<HTMLDivElement>((props, ref) => {
  const [showFloating, setShowFloating] = useState(false);
  const [showTop, setShowTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      // Show floating navbar after 200px
      setShowFloating(currentY > 200);
      // Hide top navbar after 100px
      setShowTop(currentY < 100);
      lastScrollY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <AnimatePresence>
        {showTop && (
          <motion.nav
            ref={ref}
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 mb-0 mt-2"
          >
            <div className="backdrop-blur-md">
              <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                {/* Logo on the left */}
                <div className="flex-shrink-0 flex items-center">
                  <span className="inline-flex items-center scale-150 px-2">
                    <img src="/logo/logo.png" alt="Logo" className="h-14 w-auto" />
                  </span>
                </div>
                {/* Navigation links on the right */}
                <div className="flex items-center space-x-8">
                  {[...TOP_NAV_LINKS_LEFT, ...TOP_NAV_LINKS_RIGHT].map((link) =>
                    (link as { href: string; label: string; isButton?: boolean }).isButton ? (
                      <button
                        key={link.label}
                        onClick={() => scrollToSection(link.href)}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-all flex items-center gap-2 shadow-md"
                      >
                        {link.label}
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        key={link.label}
                        onClick={() => scrollToSection(link.href)}
                        className="text-white/90 hover:text-orange-400 transition-colors font-medium text-base px-2 py-1 relative group"
                      >
                        {link.label}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* Floating Bottom Navbar removed as requested */}
    </>
  );
});

export default Navbar;
