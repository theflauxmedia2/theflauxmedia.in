import { ArrowRight, Pen, Gem, Package, Palette } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Pen,
      title: "Logo Designing",
      description: "Creating memorable visual identities that capture your brand's essence and leave lasting impressions.",
    },
    {
      icon: Gem,
      title: "Branding",
      description: "Comprehensive brand strategies that establish your unique position in the market and connect with audiences.",
    },
    {
      icon: Package,
      title: "Packaging Design",
      description: "Innovative packaging solutions that protect, inform, and inspire customers to choose your products.",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Striking visual communications that engage your audience and amplify your message across all platforms.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[var(--flaux-black)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Title and Arrow */}
          <div className="section-animate text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[var(--flaux-white)] mb-6 sm:mb-8 leading-tight">
              Our <br /> Services
            </h2>
              {/* <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                We offer comprehensive digital solutions that cover every aspect of your brand's creative and technical needs.
              </p> */}
          </div>
          
          {/* Right Side - Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`group section-animate card-hover bg-[var(--flaux-gray)] rounded-xl p-6 sm:p-8 border border-[var(--flaux-light-gray)] hover:border-[var(--flaux-orange)] ${
                  index === 1 ? 'stagger-1' : 
                  index === 2 ? 'stagger-2' : 
                  index === 3 ? 'stagger-3' : ''
                }`}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--flaux-white)] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <service.icon className="text-xl sm:text-2xl text-[var(--flaux-orange)]" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--flaux-white)] mb-3 sm:mb-4 leading-tight">{service.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
