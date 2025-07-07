import { ArrowLeft, Star, TrendingUp, Zap, Infinity } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SimpleShowcaseNavbar from "@/components/SimpleShowcaseNavbar";
import { useState, useEffect, useRef } from "react";

const packages = [
  {
    icon: Star,
    name: "Flaux Lite",
    accent: "from-[#ffb347] to-[#ffcc80]",
    features: [
      "Video Shooting",
      "Video Editing",
      "Foundational Social Media Handling",
      "Google My Business Setup and Basic Management",
      "1 time brand audit",
      "Monthly growth reports"
    ],
    highlight: "Perfect for brands starting their digital journey."
  },
  {
    icon: TrendingUp,
    name: "Flaux Surge",
    accent: "from-[#ff7e5f] to-[#feb47b]",
    features: [
      "Video Shooting",
      "Video Editing",
      "Strategic Social Media Handling",
      "Static Website",
      "Basic SEO and Regular Management",
      "Google My Business Setup and Management",
      "One Time Graphic Design / Creatives",
      "Advanced Monthly performance reports",
      "Content Calendar Creation"
    ],
    highlight: "For brands ready to scale with strategy and design."
  },
  {
    icon: Zap,
    name: "Flaux Velocity",
    accent: "from-[#43cea2] to-[#185a9d]",
    features: [
      "DSLR Video Shooting",
      "Professional Video Editing",
      "Performance-Driven Social Media Strategy",
      "Professional Dynamic Website",
      "Advanced SEO and Website Management",
      "Google My Business Setup and Management",
      "Dynamic Graphic Design"
    ],
    highlight: "For ambitious brands seeking high performance."
  }
];

const flauxOne = {
  icon: Infinity,
  name: "Flaux One",
  accent: "from-[#ff512f] to-[#dd2476]",
  features: [
    "Fully customised growth solution tailored to brand-specific needs including ads, strategy, creatives, and scaling"
  ],
  highlight: "Ultimate, all-in-one solution. 100% custom."
};

export default function Packages() {
  const [showShowcaseNavbar, setShowShowcaseNavbar] = useState(false);
  const [scrollRevealProgress, setScrollRevealProgress] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    handleFooterReveal();

    // Floating navbar logic
    const handleShowcaseNavbar = () => {
      setShowShowcaseNavbar(window.scrollY >= 100);
    };
    window.addEventListener('scroll', handleShowcaseNavbar, { passive: true });
    handleShowcaseNavbar();

    return () => {
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
        className="relative z-10 bg-[var(--flaux-black)] transition-transform duration-100 ease-out rounded-b-[150px] flex flex-col"
        style={{
          transform: `translateY(${Math.max(scrollRevealProgress * -100, -70)}vh)`,
        }}
      >
        <Navbar ref={navbarRef} />
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight gradient-text animate-fadeInUp">
              Our <span className="gradient-text">Packages</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed animate-fadeInUp delay-100">
              Choose the perfect growth engine for your brand. Every package is crafted for impact, value, and results.
            </p>
          </div>
        </div>
        {/* Packages Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <div
                  key={pkg.name}
                  className={`relative group bg-gradient-to-br ${pkg.accent} rounded-2xl p-0.5 shadow-xl border-2 border-transparent transition-transform duration-300 animate-fadeInUp`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex flex-col h-full bg-[var(--flaux-black)] rounded-2xl p-6 min-h-[350px]">
                    <div className="flex items-center justify-center mb-4">
                      <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--flaux-orange)] to-[var(--flaux-light-gray)] shadow-lg">
                        <pkg.icon size={24} className="text-white" />
                      </span>
                    </div>
                    <h2 className="text-xl font-extrabold mb-1 text-center gradient-text">{pkg.name}</h2>
                    <p className="text-xs text-gray-400 mb-4 text-center italic">{pkg.highlight}</p>
                    <ul className="flex-1 space-y-2 mb-4">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-200 text-sm">
                          <span className="w-2 h-2 mt-2 bg-[var(--flaux-orange)] rounded-full inline-block"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex justify-center">
                      <Link
                        href="/contact"
                        className="bg-[var(--flaux-orange)] text-white px-5 py-2.5 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-colors duration-300 text-base"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Flaux One Super Card */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className={`relative bg-gradient-to-br ${flauxOne.accent} rounded-3xl p-1 shadow-2xl animate-fadeInUp`}> 
                <div className="flex flex-col h-full bg-[var(--flaux-black)] rounded-3xl p-10 border-4 border-[var(--flaux-orange)] text-center">
                  <div className="flex items-center justify-center mb-6">
                    <span className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--flaux-orange)] to-[var(--flaux-light-gray)] shadow-lg">
                      <flauxOne.icon size={32} className="text-white" />
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold mb-2 gradient-text">{flauxOne.name}</h2>
                  <p className="text-base text-gray-400 mb-6 italic">{flauxOne.highlight}</p>
                  <ul className="space-y-3 mb-8">
                    {flauxOne.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-200 text-lg justify-center">
                        <span className="w-3 h-3 bg-[var(--flaux-orange)] rounded-full inline-block"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center">
                    <Link
                      href="/contact"
                      className="bg-[var(--flaux-orange)] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-colors duration-300 text-xl"
                    >
                      Get Your Custom Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Final CTA */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--flaux-gray)] border-t border-[var(--flaux-light-gray)] animate-fadeInUp">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black mb-8 gradient-text">Not sure which package fits?</h2>
              <p className="text-xl text-gray-400 mb-12">
                Let's talk! We'll help you choose or create a solution that's perfect for your brand's unique needs.
              </p>
              <Link
                href="/contact"
                className="bg-[var(--flaux-orange)] text-white px-10 py-5 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-colors duration-300 text-xl"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      {/* Showcase Navbar, always rendered for animation */}
      <SimpleShowcaseNavbar visible={showShowcaseNavbar} />
    </div>
  );
} 