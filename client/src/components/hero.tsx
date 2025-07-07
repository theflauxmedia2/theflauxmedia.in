import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16 sm:pt-20 lg:pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 sm:mb-12">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[var(--flaux-orange)] rounded-full mx-auto mb-6 sm:mb-8 animate-pulse"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[var(--flaux-white)] mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="block animate-fadeInUp">Your Creative,</span>
            <span className="block animate-fadeInUp stagger-1">Media & Technology</span>
            <span className="block gradient-text animate-fadeInUp stagger-2">Transformation Partner</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 sm:mb-12 max-w-4xl mx-auto animate-fadeInUp stagger-3 leading-relaxed">
            We're a team of 1000+ specialists delivering award-winning work for brands that demand excellence and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fadeInUp stagger-4">
            <button
              onClick={scrollToServices}
              className="inline-flex items-center bg-[var(--flaux-orange)] text-[var(--flaux-white)] px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-medium text-sm sm:text-base"
            >
              <span className="mr-2">See What We Do</span>
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center border-2 border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-medium text-sm sm:text-base"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated Marquee */}
      <div className="absolute bottom-0 left-0 right-0 marquee-container border-t border-[var(--flaux-light-gray)]">
        <div className="marquee-content py-3 sm:py-4">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-stroke mr-8 sm:mr-16">
            IT'S TIME TO BUILD WITH FLAUX MEDIA<span style={{ marginLeft: '2.5rem', display: 'inline-block' }}>&nbsp;★</span>
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-stroke mr-8 sm:mr-16">
            IT'S TIME TO BUILD WITH FLAUX MEDIA<span style={{ marginLeft: '2.5rem', display: 'inline-block' }}>&nbsp;★</span>
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-stroke mr-8 sm:mr-16">
            IT'S TIME TO BUILD WITH FLAUX MEDIA<span style={{ marginLeft: '2.5rem', display: 'inline-block' }}>&nbsp;★</span>
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-stroke mr-8 sm:mr-16">
            IT'S TIME TO BUILD WITH FLAUX MEDIA<span style={{ marginLeft: '2.5rem', display: 'inline-block' }}>&nbsp;★</span>
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-stroke mr-8 sm:mr-16">
            IT'S TIME TO BUILD WITH FLAUX MEDIA<span style={{ marginLeft: '2.5rem', display: 'inline-block' }}>&nbsp;★</span>
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-stroke mr-8 sm:mr-16">
            IT'S TIME TO BUILD WITH FLAUX MEDIA<span style={{ marginLeft: '2.5rem', display: 'inline-block' }}>&nbsp;★</span>
          </span>
        </div>
      </div>
    </section>
  );
}
