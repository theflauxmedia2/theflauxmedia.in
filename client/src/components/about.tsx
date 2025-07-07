import { ArrowRight } from "lucide-react";
import { useCursorArrow } from "@/hooks/use-cursor-arrow";

export default function About() {
  const { arrowRef, containerRef } = useCursorArrow();

  const scrollToTeam = () => {
    const element = document.querySelector('#team');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[var(--flaux-black)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Interactive Arrow */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div 
              ref={containerRef}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center"
            >
              <div ref={arrowRef} className="cursor-arrow">
                <ArrowRight className="text-[140px] sm:text-[160px] lg:text-[200px] text-[var(--flaux-orange)]" size={200} />
              </div>
              {/* Background grid for depth */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-6 grid-rows-6 sm:grid-cols-8 sm:grid-rows-8 h-full w-full gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="bg-[var(--flaux-light-gray)] rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="section-animate order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--flaux-white)] mb-6 sm:mb-8 leading-tight">
              What defines us
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--flaux-white)] leading-relaxed">
                We believe in the power of creative storytelling, cutting-edge technology, and strategic thinking to transform brands and drive meaningful connections.
              </p>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Our mission is to help businesses navigate the digital landscape with confidence, creating experiences that not only look stunning but deliver measurable results. Every project is an opportunity to push boundaries and redefine what's possible.
              </p>
              <div className="pt-4 sm:pt-6">
                <button
                  onClick={scrollToTeam}
                  className="inline-flex items-center bg-[var(--flaux-black)] border border-[var(--flaux-orange)] text-[var(--flaux-orange)] px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[var(--flaux-orange)] hover:text-[var(--flaux-white)] transition-all duration-300 transform hover:scale-105 font-medium text-sm sm:text-base"
                >
                  <span className="mr-2">Dive Into Our Culture</span>
                  <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
