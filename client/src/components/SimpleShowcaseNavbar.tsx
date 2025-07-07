import { ArrowRight } from "lucide-react";

export default function SimpleShowcaseNavbar({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <nav
      className={"fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] w-auto flex justify-center items-center wipe-up-animate pointer-events-auto"}
    >
      <div className="relative flex items-center rounded-full px-4 sm:px-6 py-2 sm:py-3 gap-3 sm:gap-6 shadow-2xl border border-white/40 backdrop-blur-2xl backdrop-saturate-200" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 100%)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}>
        {/* Glass inner border for depth */}
        <span className="pointer-events-none absolute inset-0 rounded-full border border-white/30" style={{boxShadow: '0 1.5px 8px 0 rgba(255,255,255,0.10) inset'}} aria-hidden="true"></span>
        <button className="relative text-white text-base sm:text-lg font-semibold tracking-tight focus:outline-none z-10">
          Services
        </button>
        <button className="relative text-white text-base sm:text-lg font-semibold tracking-tight focus:outline-none z-10">
          Projects
        </button>
        <button className="relative text-white text-base sm:text-lg font-semibold tracking-tight focus:outline-none z-10">
          Team
        </button>
        <button className="relative bg-[#F76300] hover:bg-orange-600 text-black text-base sm:text-lg font-semibold tracking-tight rounded-full px-4 sm:px-6 py-1.5 sm:py-2 flex items-center gap-2 focus:outline-none transition-colors z-10">
          Contact <ArrowRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>
    </nav>
  );
} 