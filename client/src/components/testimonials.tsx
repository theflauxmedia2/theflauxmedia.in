import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Santosh Jadhav",
    role: "Founder, Indian Farmer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: " The Flaux Media team captured our story perfectly. Their branding and logo design showcased my farming heritage while making it shareable for social media. Highly recommended for any small business looking for a local branding agency in Bangalore.",
  },
  {
    id: 2,
    name: "Raj Shomani",
    role: "Founder, House of X",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    text: " They nailed the GenZ aesthetic for our logo and social content. The Reels strategy boosted organic engagement within weeks — exactly what we needed from a social media marketing agency.",
  },
  {
    id: 3,
    name: "Manindar Buttar",
    role: "Singer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: " Paaji understood my brief and added personal touches (even included my dogs!). Fast turnaround, professional attitude, and Instagram-ready visuals — perfect for artists and creators.",
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Marketing Lead, Urban Roots",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: " The Flaux Media team delivered a smooth website redesign and SEO-optimized content that increased our organic traffic. The process was collaborative and transparent — ideal for startups seeking a digital marketing agency in HSR Layout.",
  },
  {
    id: 5,
    name: "Alex Kim",
    role: "CTO, NextGen Apps",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    text: " Their product photography and UX-led redesign improved our app landing page conversions. Detailed, technical, and design-savvy — great choice if you want growth-focused creative work.",
  },
  {
    id: 6,
    name: "Fatima Al-Farsi",
    role: "Founder, Artistry Studio",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: " From branding to launch, the team supported us end-to-end. Creative concepts, fast delivery, and SEO-aware captions for Instagram — bohot acha kaam, bilkul timely deliver kiya.",
  },
  {
    id: 7,
    name: "Deepak Verma",
    role: "Owner, Verma Furnishings",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    text: " The e‑commerce product photography and captions they created helped our listings get noticed. We saw improved CTR from Instagram and better product search visibility after their SEO tweaks.",
  },
  {
    id: 8,
    name: "Neha Kapoor",
    role: "Founder, Bloom + Co.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    text: " Their content calendar and reel concepts gave our brand a consistent voice. Great for boutique brands looking for a local creative partner and social media marketing agency in Bangalore.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Handle swipe gestures
  const handleDragStart = () => {
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(velocity) > 500 || Math.abs(offset) > threshold) {
      if (velocity > 0 || offset > threshold) {
        // Swipe right - go to previous
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      } else if (velocity < 0 || offset < -threshold) {
        // Swipe left - go to next
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }

    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section id="testimonials" className="relative w-full py-24 bg-[var(--flaux-black)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent"></div>
        <svg width="100%" height="100%" className="opacity-20">
          <defs>
            <pattern id="testimonials-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonials-grid)" className="text-orange-500" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Hear from them
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Testimonial Card */}
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              ref={containerRef}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className="cursor-grab active:cursor-grabbing"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl"
                >
                  {/* Swipe Indicator */}
                  <div className="absolute top-4 right-4 text-orange-500/50 text-xs font-medium hidden sm:block">
                    Swipe to navigate
                  </div>

                  {/* Quote Icon */}
                  <div className="text-orange-500 text-6xl font-bold mb-6 opacity-20">
                    "
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-8 font-medium">
                    {testimonials[currentIndex].text}
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500/30 mr-6">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-orange-400 text-sm font-medium">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Instructions */}
          <div className="text-center mt-6 sm:hidden">
            <p className="text-orange-500/70 text-sm">
              Swipe left or right to navigate
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <motion.div
                className="bg-orange-500 h-1 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={currentIndex}
              />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <p className="text-gray-400 text-sm">
            Trusted by 100+ clients worldwide
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}