import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Link } from "wouter";
import LeadGenerationForm from "@/components/lead-generation-form";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SimpleShowcaseNavbar from "@/components/SimpleShowcaseNavbar";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight gradient-text animate-fadeInUp">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 leading-relaxed animate-fadeInUp delay-100">
              Your next big move starts here. Reach out and let's create something extraordinary together.
            </p>
          </div>
        </div>
        {/* Main Contact Section */}
        <section className="flex-1 py-8 sm:py-16 lg:py-24 bg-gradient-to-br from-[var(--flaux-black)] via-[var(--flaux-gray)] to-[var(--flaux-light-gray)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Contact Info & Socials */}
              <div className="flex flex-col justify-between bg-[var(--flaux-black)] rounded-2xl p-8 border border-[var(--flaux-light-gray)] shadow-xl animate-fadeInLeft">
                <div>
                  <h2 className="text-3xl font-extrabold mb-6 gradient-text">Contact Information</h2>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center">
                        <Mail size={22} className="text-white" />
                      </span>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:hello@flauxmedia.com" className="text-gray-300 hover:text-[var(--flaux-orange)] transition-colors">hello@flauxmedia.com</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center">
                        <Phone size={22} className="text-white" />
                      </span>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href="tel:+91-9019850972" className="text-gray-300 hover:text-[var(--flaux-orange)] transition-colors">+91-9019850972</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center">
                        <MapPin size={22} className="text-white" />
                      </span>
                      <div>
                        <h3 className="font-semibold">Office</h3>
                        <span className="text-gray-300">123 Creative Avenue, New York, NY 10001</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center">
                        <Clock size={22} className="text-white" />
                      </span>
                      <div>
                        <h3 className="font-semibold">Response Time</h3>
                        <span className="text-gray-300">Within 24 hours</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <a href="#" className="text-gray-400 hover:text-[var(--flaux-orange)] transition-colors p-2"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4.01c-.77.35-1.6.59-2.47.7a4.15 4.15 0 0 0 1.82-2.3c-.8.48-1.7.83-2.65 1A4.13 4.13 0 0 0 12 8.13c0 .32.04.64.1.94C8.28 8.9 5.1 7.13 2.98 4.7c-.35.6-.55 1.3-.55 2.05 0 1.42.72 2.68 1.82 3.42-.67-.02-1.3-.2-1.85-.5v.05c0 1.98 1.41 3.63 3.28 4-.34.1-.7.16-1.07.16-.26 0-.5-.02-.74-.07.5 1.56 1.97 2.7 3.7 2.73A8.3 8.3 0 0 1 2 19.54c-.6 0-1.18-.04-1.76-.1A11.7 11.7 0 0 0 7.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 4.01Z"></path></svg></a>
                    <a href="#" className="text-gray-400 hover:text-[var(--flaux-orange)] transition-colors p-2"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16.5 7.5h.01"></path><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"></path></svg></a>
                    <a href="#" className="text-gray-400 hover:text-[var(--flaux-orange)] transition-colors p-2"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                  </div>
                </div>
                {/* Quick Lead Form removed from left grid */}
              </div>
              {/* Main Contact Form */}
              <div className="flex flex-col justify-center animate-fadeInRight">
                <div className="bg-[var(--flaux-gray)] rounded-2xl p-10 border border-[var(--flaux-light-gray)] shadow-2xl">
                  <h2 className="text-3xl font-extrabold mb-6 gradient-text">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-[var(--flaux-black)] border border-[var(--flaux-light-gray)] rounded-lg focus:outline-none focus:border-[var(--flaux-orange)] transition-colors duration-300" placeholder="Your full name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-[var(--flaux-black)] border border-[var(--flaux-light-gray)] rounded-lg focus:outline-none focus:border-[var(--flaux-orange)] transition-colors duration-300" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                      <select id="subject" name="subject" required className="w-full px-4 py-3 bg-[var(--flaux-black)] border border-[var(--flaux-light-gray)] rounded-lg focus:outline-none focus:border-[var(--flaux-orange)] transition-colors duration-300">
                        <option value="">Select a subject</option>
                        <option value="new-project">New Project</option>
                        <option value="consultation">Consultation</option>
                        <option value="partnership">Partnership</option>
                        <option value="support">Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                      <textarea id="message" name="message" required rows={6} className="w-full px-4 py-3 bg-[var(--flaux-black)] border border-[var(--flaux-light-gray)] rounded-lg focus:outline-none focus:border-[var(--flaux-orange)] transition-colors duration-300 resize-none" placeholder="Tell us about your project..." />
                    </div>
                    <button type="submit" className="w-full bg-[var(--flaux-orange)] text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium flex items-center justify-center">
                      <Send size={20} className="mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
                {/* Mobile Quick Lead Form */}
                <div className="mt-10 block lg:hidden">
                  <div className="bg-gradient-to-r from-[var(--flaux-orange)] to-[var(--flaux-light-gray)] rounded-xl p-6 shadow-lg animate-fadeInUp">
                    <h3 className="text-xl font-bold mb-2 text-[var(--flaux-black)]">Quick Lead Form</h3>
                    <p className="text-[var(--flaux-black)] mb-4">Want a callback? Fill this out and our team will reach you soon.</p>
                    <LeadGenerationForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[var(--flaux-gray)] border-t border-[var(--flaux-light-gray)] animate-fadeInUp">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center gradient-text">Frequently Asked Questions</h2>
              <div className="space-y-8">
                {[
                  {
                    question: "What's your typical project timeline?",
                    answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a comprehensive brand overhaul could take 2-3 months. We'll provide detailed timelines during our initial consultation."
                  },
                  {
                    question: "Do you work with startups?",
                    answer: "Absolutely! We love working with startups and have special packages designed for growing businesses. We understand budget constraints and can create scalable solutions that grow with your company."
                  },
                  {
                    question: "What's included in your retainer packages?",
                    answer: "Our retainer packages include ongoing support, regular updates, performance monitoring, and priority access to our team. We'll customize the package based on your specific needs and goals."
                  },
                  {
                    question: "Can you help with existing projects?",
                    answer: "Yes! We can audit your existing digital presence, identify areas for improvement, and help optimize your current marketing efforts. We're experienced in taking over mid-project work."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border border-[var(--flaux-light-gray)] rounded-lg p-6 bg-[var(--flaux-black)]">
                    <h3 className="text-xl font-bold mb-4 gradient-text">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <SimpleShowcaseNavbar visible={showShowcaseNavbar} />
    </div>
  );
}