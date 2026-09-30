import { useEffect } from "react";
import { useRef } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import BrandMarquee from "@/components/brand-marquee";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FooterStrip from "@/components/footer-strip";

export default function Home() {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const animatedSections = document.querySelectorAll(".section-animate");
    animatedSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      animatedSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative">
      {/* Fixed brand layer — revealed as content scrolls away */}
      <Footer />

      {/* Page panel sits above; bottom margin creates the reveal scroll distance */}
      <div
        id="page-content"
        className="relative z-10 bg-[var(--flaux-black)] rounded-b-[80px] md:rounded-b-[150px] mb-[100vh] shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
      >
        <Navbar ref={navbarRef} />
        <Hero />
        <About />
        <BrandMarquee />
        <Services />
        <Testimonials />
        <Contact />
        <FooterStrip />
      </div>
    </div>
  );
}
