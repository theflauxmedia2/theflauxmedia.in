import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SimpleShowcaseNavbar from "@/components/SimpleShowcaseNavbar";
import { useState, useEffect, useRef, FormEvent } from "react";

export default function Contact() {
  const [showShowcaseNavbar, setShowShowcaseNavbar] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  
  const handleWhatsAppSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const company = (data.get("company") as string) || "";
    const budget = (data.get("budget") as string) || "";
    const subject = (data.get("subject") as string) || "";
    const message = (data.get("message") as string) || "";

    const composed = `New enquiry from The Flaux Media website\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nBudget: ${budget}\nSubject: ${subject}\n\nMessage:\n${message}`;
    const url = `https://wa.me/919019850972?text=${encodeURIComponent(composed)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const handleShowcaseNavbar = () => {
      setShowShowcaseNavbar(window.scrollY >= 100);
    };
    window.addEventListener('scroll', handleShowcaseNavbar, { passive: true });
    handleShowcaseNavbar();

    return () => {
      window.removeEventListener('scroll', handleShowcaseNavbar);
    };
  }, []);

  return (
    <div className="relative">
      <Footer />
      <div
        id="page-content"
        className="relative z-10 bg-[var(--flaux-black)] rounded-b-[80px] md:rounded-b-[150px] mb-[100vh] shadow-[0_40px_80px_rgba(0,0,0,0.45)] flex flex-col"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
              {/* Contact Info & Socials (Left rail) */}
              <div className="lg:col-span-1 flex flex-col justify-between bg-[var(--flaux-black)]/80 rounded-2xl p-8 border border-[var(--flaux-light-gray)] shadow-xl animate-fadeInLeft backdrop-blur-sm">
                <div>
                  <h2 className="text-3xl font-extrabold mb-6 gradient-text">Contact Information</h2>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <span className="w-12 h-12 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center">
                        <Mail size={22} className="text-white" />
                      </span>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:theflauxmedia@gmail.com" className="text-gray-300 hover:text-[var(--flaux-orange)] transition-colors">theflauxmedia@gmail.com</a>
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
                        <span className="text-gray-300">BTM Layout, Bengaluru, Karnataka, India</span>
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
                  <div className="flex gap-4 mt-2">
                    <a href="https://wa.me/919019850972" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-white transition-colors p-2" aria-label="WhatsApp DM">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.38 0 0 5.38 0 12.01c0 2.11.55 4.08 1.52 5.8L0 24l6.35-1.5a11.94 11.94 0 0 0 5.66 1.44h.01c6.63 0 12.01-5.38 12.01-12.01 0-3.21-1.25-6.22-3.51-8.45Z"/></svg>
                    </a>
                    <a href="https://instagram.com/theflauxmedia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--flaux-orange)] transition-colors p-2" aria-label="Instagram">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16.5 7.5h.01"></path><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"></path></svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[var(--flaux-orange)] transition-colors p-2" aria-label="LinkedIn">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
                {/* Quick Lead Form removed from left grid */}
              </div>
              {/* Main Contact Form (Right span 2) */}
              <div className="lg:col-span-2 flex flex-col justify-center animate-fadeInRight">
                <div className="relative overflow-hidden rounded-2xl border border-[var(--flaux-light-gray)] shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.02] pointer-events-none" />
                  <div className="relative p-8 md:p-10 bg-[var(--flaux-gray)]/60 backdrop-blur-sm">
                  <h2 className="text-3xl font-extrabold mb-6 gradient-text">WhatsApp Us</h2>
                  <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
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
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 bg-[var(--flaux-black)] border border-[var(--flaux-light-gray)] rounded-lg focus:outline-none focus:border-[var(--flaux-orange)] transition-colors duration-300"
                        placeholder="How can we help? (e.g., Brand film, website, campaign)"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                      <textarea id="message" name="message" required rows={6} className="w-full px-4 py-3 bg-[var(--flaux-black)] border border-[var(--flaux-light-gray)] rounded-lg focus:outline-none focus:border-[var(--flaux-orange)] transition-colors duration-300 resize-none" placeholder="Tell us about your project..." />
                    </div>
                    <button type="submit" className="w-full bg-[#25D366] text-black px-6 py-3 rounded-lg hover:brightness-110 transition-all duration-300 font-semibold flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.38 0 0 5.38 0 12.01c0 2.11.55 4.08 1.52 5.8L0 24l6.35-1.5a11.94 11.94 0 0 0 5.66 1.44h.01c6.63 0 12.01-5.38 12.01-12.01 0-3.21-1.25-6.22-3.51-8.45Z"/></svg>
                      Send via WhatsApp
                    </button>
                  </form>
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
      </div>
      <SimpleShowcaseNavbar visible={showShowcaseNavbar} />
    </div>
  );
}