import { useState, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { Link } from "wouter";

const TOP_NAV_LINKS_LEFT = [
  { href: "#projects", label: "Projects" },
  { href: "/", label: "Testimonials" },
];
const TOP_NAV_LINKS_RIGHT = [
  { href: "/packages", label: "Packages" },
  { href: "#contact", label: "Contact", isButton: true },
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

const Navbar = forwardRef<HTMLDivElement>((props, ref) => {
  const [showTop, setShowTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY < 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on nav
  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileMenuOpen(false);
  };

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
                  <Link href="/" className="inline-flex items-center scale-150 px-2 focus:outline-none">
                    <img src="/logo/logo.png" alt="Logo" className="h-14 w-auto" />
                  </Link>
                </div>
                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center space-x-8">
                  {[...TOP_NAV_LINKS_LEFT, ...TOP_NAV_LINKS_RIGHT].map((link) =>
                    (link as { href: string; label: string; isButton?: boolean }).isButton ? (
                      <Link
                        key={link.label}
                        href="/contact"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-all flex items-center gap-2 shadow-md"
                      >
                        {link.label}
                        <ArrowRight size={16} />
                      </Link>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-white/90 hover:text-orange-400 transition-colors font-medium text-base px-2 py-1 relative group"
                      >
                        {link.label}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    )
                  )}
                </div>
                {/* Hamburger for mobile */}
                <div className="md:hidden flex items-center">
                  <button
                    className="text-white p-2 rounded focus:outline-none"
                    onClick={() => setMobileMenuOpen((v) => !v)}
                    aria-label="Open menu"
                  >
                    <Menu size={28} />
                  </button>
                </div>
              </div>
              {/* Mobile Menu Dropdown */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-black/90 backdrop-blur-lg px-4 pt-2 pb-4 flex flex-col gap-2 absolute left-0 right-0 top-full z-50 shadow-lg rounded-b-xl"
                  >
                    {[...TOP_NAV_LINKS_LEFT, ...TOP_NAV_LINKS_RIGHT].map((link) =>
                      (link as { href: string; label: string; isButton?: boolean }).isButton ? (
                        <Link
                          key={link.label}
                          href="/contact"
                          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full transition-all flex items-center gap-2 shadow-md w-full justify-center text-base"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                          <ArrowRight size={16} />
                        </Link>
                      ) : (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="text-white/90 hover:text-orange-400 transition-colors font-medium text-base px-2 py-2 w-full text-left"
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
});

export default Navbar;
