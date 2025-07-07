import React, { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Santosh Jadhav",
    role: "Founder, Indian Farmer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "He has great taste in design. He knows how to take specific inputs and come up with great ideas. He expressed our love for Indian farmers in the logo and that’s just awesome!",
  },
  {
    name: "Raj Shomani",
    role: "Founder, House of X",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    text:
      "Nobody understands the GenZ market better than GenZ itself. That’s where Anik and his team nailed the brief and helped me design exactly what I wanted – a bold and mind-bending Logo for House of X.",
  },
  {
    name: "Manindar Buttar",
    role: "Singer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text:
      "I told Anik that Paaji, I love my animals and I love both my dogs. Please include them in the Logo somehow. And Paaji got it done in no time! I love the design and his professional attitude.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Lead, Urban Roots",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "The Flaux Media team brought our vision to life with creativity and professionalism. The process was smooth and the results exceeded our expectations!",
  },
  {
    name: "Alex Kim",
    role: "CTO, NextGen Apps",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    text:
      "Their attention to detail and understanding of our tech needs was impressive. We saw a huge boost in engagement after the redesign.",
  },
  {
    name: "Fatima Al-Farsi",
    role: "Founder, Artistry Studio",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "From branding to launch, the team was with us every step. The creative concepts and fast turnaround made all the difference!",
  },
];

const CARD_WIDTH = 340;
const CARD_GAP = 24;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Scroll to active card
  useEffect(() => {
    if (carouselRef.current) {
      const scrollTo = activeIndex * (CARD_WIDTH + CARD_GAP) - carouselRef.current.offsetWidth / 2 + CARD_WIDTH / 2;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  }, [activeIndex]);

  // Prevent manual scroll
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const prevent = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
    el.addEventListener('wheel', prevent, { passive: false });
    el.addEventListener('touchmove', prevent, { passive: false });
    el.addEventListener('pointerdown', prevent, { passive: false });
    el.addEventListener('keydown', prevent, { passive: false });
    return () => {
      el.removeEventListener('wheel', prevent);
      el.removeEventListener('touchmove', prevent);
      el.removeEventListener('pointerdown', prevent);
      el.removeEventListener('keydown', prevent);
    };
  }, []);

  return (
    <section className="relative w-full py-24 bg-[var(--flaux-black)] overflow-hidden">
      {/* Grid overlay (optional) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-center text-4xl sm:text-5xl font-black mb-16 text-white font-sans">Hear from them</h2>
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-20 bg-gradient-to-r from-[var(--flaux-black)] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-20 bg-gradient-to-l from-[var(--flaux-black)] to-transparent" />
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-hidden overflow-y-hidden scroll-smooth no-scrollbar px-2 sm:px-0 select-none justify-start sm:justify-center"
            style={{ scrollSnapType: "x mandatory", maxWidth: '100%', cursor: 'default' }}
            tabIndex={-1}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`flex-shrink-0 rounded-2xl bg-[#1A1A1A] p-8 w-[340px] sm:w-[340px] shadow-lg transition-transform duration-300 border border-transparent mx-2 my-4 ${
                  i === activeIndex ? "border-[#333]" : "opacity-70"
                }`}
                style={{ scrollSnapAlign: "center" }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#222] mr-4"
                  />
                  <div>
                    <div className="font-bold text-white text-lg leading-tight">{t.name}</div>
                    <div className="text-[#BBBBBB] text-sm font-medium mt-1">{t.role}</div>
                  </div>
                </div>
                <div className="text-white text-base leading-relaxed font-medium opacity-90">
                  {t.text}
                </div>
              </div>
            ))}
          </div>
          {/* Pagination dots */}
          <div className="flex justify-center mt-10 gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-white scale-125" : "bg-[#444]"
                }`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 