import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function SimpleShowcaseNavbar({ visible }: { visible?: boolean }) {
  const [localVisible, setLocalVisible] = useState(false);
  const [hiddenForModal, setHiddenForModal] = useState(false);

  useEffect(() => {
    if (typeof visible === "boolean") return; // controlled from parent
    const onScroll = () => {
      setLocalVisible(window.scrollY >= 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const hasModal = document.body.classList.contains('modal-open');
      setHiddenForModal(hasModal);
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    setHiddenForModal(document.body.classList.contains('modal-open'));
    return () => observer.disconnect();
  }, []);

  const isVisible = (typeof visible === "boolean" ? visible : localVisible) && !hiddenForModal;
  if (!isVisible) return null;

  return (
    <nav
      className={"fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[92vw] sm:max-w-none px-2 flex justify-center items-center pointer-events-auto"}
    >
      <div className="relative flex items-center rounded-full px-1.5 sm:px-6 py-1 sm:py-3 gap-1.5 sm:gap-6 shadow-2xl border border-white/40 backdrop-blur-2xl backdrop-saturate-200 overflow-x-auto whitespace-nowrap scrollbar-hide" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 100%)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}>
        {/* Glass inner border for depth */}
        <span className="pointer-events-none absolute inset-0 rounded-full border border-white/30" style={{boxShadow: '0 1.5px 8px 0 rgba(255,255,255,0.10) inset'}} aria-hidden="true"></span>
        <Link href="/services" className="relative inline-flex items-center text-white text-xs sm:text-lg font-semibold tracking-tight focus:outline-none z-10 min-w-[44px] min-h-[44px] px-2 sm:px-6 py-2 appearance-none whitespace-nowrap">
          Services
        </Link>
        <Link href="/our-work" className="relative inline-flex items-center text-white text-xs sm:text-lg font-semibold tracking-tight focus:outline-none z-10 min-w-[44px] min-h-[44px] px-2 sm:px-6 py-2 appearance-none whitespace-nowrap">
          Our Work
        </Link>
        <Link href="/#testimonials" className="relative inline-flex items-center text-white text-xs sm:text-lg font-semibold tracking-tight focus:outline-none z-10 min-w-[44px] min-h-[44px] px-2 sm:px-6 py-2 appearance-none whitespace-nowrap">
          Testimonials
        </Link>
        <Link href="/contact" className="relative bg-[#F76300] hover:bg-orange-600 text-black text-xs sm:text-lg font-semibold tracking-tight rounded-full px-3 sm:px-6 py-2 flex items-center gap-1.5 sm:gap-2 focus:outline-none transition-colors z-10 min-w-[44px] min-h-[44px] whitespace-nowrap">
          Contact <ArrowRight size={16} className="sm:w-6 sm:h-6" />
        </Link>
      </div>
    </nav>
  );
} 