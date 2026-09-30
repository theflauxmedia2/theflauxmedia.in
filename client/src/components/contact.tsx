import { Mail, Phone, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[var(--flaux-black)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-animate">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--flaux-white)] mb-6 sm:mb-8 leading-tight">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help you achieve your creative and business goals. Get in touch with our team today.
            </p>
            
            <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center max-w-lg mx-auto">
              <a 
                href="mailto:theflauxmedia@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[var(--flaux-orange)] text-[var(--flaux-white)] px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-medium text-sm sm:text-base"
              >
                <Mail className="mr-2 sm:mr-3" size={18} />
                <span>theflauxmedia@gmail.com</span>
              </a>
              <a 
                href="tel:+91-9019850972"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[var(--flaux-black)] border border-[var(--flaux-orange)] text-[var(--flaux-orange)] px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[var(--flaux-orange)] hover:text-[var(--flaux-white)] transition-all duration-300 transform hover:scale-105 font-medium text-sm sm:text-base"
              >
                <Phone className="mr-2 sm:mr-3" size={18} />
                <span>+91-9019850972</span>
              </a>
            </div>
            
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[var(--flaux-light-gray)]">
              <div className="flex justify-center space-x-6 sm:space-x-8">
                <a href="https://wa.me/919019850972" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-[var(--flaux-orange)] transition-colors duration-300 p-2">
                  <MessageCircle size={24} className="sm:w-8 sm:h-8" />
                </a>
                <a href="https://instagram.com/theflauxmedia" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[var(--flaux-orange)] transition-colors duration-300 p-2">
                  <Instagram size={24} className="sm:w-8 sm:h-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[var(--flaux-orange)] transition-colors duration-300 p-2" aria-label="LinkedIn">
                  <Linkedin size={24} className="sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
