import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";

export default function FooterStrip() {
  return (
    <div className="w-full border-t border-[var(--flaux-light-gray)] bg-[var(--flaux-black)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4 text-sm">
          <a href="tel:+91-9019850972" className="inline-flex items-center gap-2 text-white/90 hover:text-[var(--flaux-orange)] transition-colors">
            <Phone size={16} /> +91-9019850972
          </a>
          <span className="text-white/20">|</span>
          <a href="mailto:theflauxmedia@gmail.com" className="inline-flex items-center gap-2 text-white/90 hover:text-[var(--flaux-orange)] transition-colors">
            <Mail size={16} /> theflauxmedia@gmail.com
          </a>
          <span className="text-white/20">|</span>
          <a href="https://wa.me/919019850972" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/90 hover:text-[var(--flaux-orange)] transition-colors">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <span className="text-white/20">|</span>
          <a href="https://instagram.com/theflauxmedia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/90 hover:text-[var(--flaux-orange)] transition-colors">
            <Instagram size={16} /> @theflauxmedia
          </a>
        </div>
      </div>
    </div>
  );
}


