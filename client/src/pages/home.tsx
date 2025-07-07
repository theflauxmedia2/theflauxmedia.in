import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
// import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import SimpleShowcaseNavbar from "@/components/SimpleShowcaseNavbar";

export default function Home() {
  const [scrollRevealProgress, setScrollRevealProgress] = useState(0);
  const [showShowcaseNavbar, setShowShowcaseNavbar] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections with animation
    const animatedSections = document.querySelectorAll('.section-animate');
    animatedSections.forEach(section => {
      observer.observe(section);
    });

    // Footer reveal scroll handler
    const handleFooterReveal = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      // Start revealing when we're 70% down the page
      const revealStart = 0.7;
      const revealProgress = Math.max(0, Math.min(1, (scrollPercent - revealStart) / (1 - revealStart)));
      setScrollRevealProgress(revealProgress);
    };
    window.addEventListener('scroll', handleFooterReveal, { passive: true });

    // --- Floating navbar logic: show when scrollY >= 100 ---
    const handleShowcaseNavbar = () => {
      setShowShowcaseNavbar(window.scrollY >= 100);
    };
    window.addEventListener('scroll', handleShowcaseNavbar, { passive: true });
    handleShowcaseNavbar(); // initialize on mount
    // ---

    return () => {
      animatedSections.forEach(section => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleFooterReveal);
      window.removeEventListener('scroll', handleShowcaseNavbar);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Footer Page - Always behind */}
      <div className="fixed inset-0 footer-takeover flex items-center justify-center z-0 mt-24">
        <h1 className="text-5xl md:text-[10vw] lg:text-[12vw] font-black text-[var(--flaux-white)] uppercase tracking-wider text-center px-4 footer-takeover-text">
          THE FLAUX<br />MEDIA
        </h1>
      </div>

      {/* Main Page Content - Slides up as you scroll */}
      <div 
        id="page-content"
        className="relative z-10 bg-[var(--flaux-black)] transition-transform duration-100 ease-out rounded-b-[150px]"
        style={{
          transform: `translateY(${Math.max(scrollRevealProgress * -100, -70)}vh)`,
        }}
      >
        <Navbar ref={navbarRef} />
        <Hero />
        <About />
        <Services />
        {/* <Team /> */}
        <Contact />
        <Footer />
      </div>
      {/* Showcase Navbar, always rendered for animation */}
      <SimpleShowcaseNavbar visible={showShowcaseNavbar} />
    </div>
  );
}
