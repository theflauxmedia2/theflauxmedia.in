import { ArrowLeft, Code, Palette, Megaphone, BarChart3, Globe, Smartphone, Search, Users } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity & Design",
      description: "Complete brand development from logo design to brand guidelines, creating cohesive visual identities that resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography", "Business Cards", "Stationery"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies, optimized for performance, SEO, and user experience.",
      features: ["React/Next.js", "E-commerce", "CMS Integration", "API Development", "Mobile Responsive", "SEO Optimization"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns across all digital channels to increase brand awareness and drive conversions.",
      features: ["Social Media Marketing", "Content Strategy", "Email Marketing", "PPC Advertising", "Influencer Marketing", "Analytics"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Strategy",
      description: "Data-driven insights and strategic planning to optimize your digital presence and maximize ROI.",
      features: ["Performance Analytics", "User Behavior Analysis", "A/B Testing", "Conversion Optimization", "Market Research", "Growth Strategy"]
    },
    {
      icon: Globe,
      title: "Content Creation",
      description: "Engaging content that tells your brand story and connects with your audience across all platforms.",
      features: ["Copywriting", "Video Production", "Photography", "Graphic Design", "Social Media Content", "Blog Writing"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter", "UI/UX Design", "App Store Optimization"]
    },
    {
      icon: Search,
      title: "SEO & SEM",
      description: "Search engine optimization and marketing to improve your online visibility and drive organic traffic.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building", "Google Ads", "Local SEO"]
    },
    {
      icon: Users,
      title: "Consulting & Training",
      description: "Expert guidance and training to help your team succeed in the digital landscape.",
      features: ["Digital Strategy", "Team Training", "Workshops", "Audit Services", "Process Optimization", "Technology Consultation"]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--flaux-black)] text-[var(--flaux-white)]">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center text-[var(--flaux-orange)] hover:text-white transition-colors duration-300 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            Our <span className="gradient-text">Services</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed">
            Comprehensive digital solutions designed to transform your business and accelerate growth.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="bg-[var(--flaux-gray)] rounded-xl p-8 border border-[var(--flaux-light-gray)] hover:border-[var(--flaux-orange)] transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[var(--flaux-orange)] mb-3">What's Included:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-[var(--flaux-orange)] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--flaux-gray)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We start by understanding your business, goals, and challenges." },
                { step: "02", title: "Strategy", description: "We develop a comprehensive strategy tailored to your needs." },
                { step: "03", title: "Execution", description: "Our team brings the strategy to life with precision and creativity." },
                { step: "04", title: "Optimization", description: "We continuously monitor and optimize for maximum impact." }
              ].map((phase, index) => (
                <div key={phase.step} className="text-center">
                  <div className="w-16 h-16 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-xl font-black text-white">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                  <p className="text-gray-400">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-12">
              Let's discuss how we can help transform your business with our comprehensive digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[var(--flaux-orange)] text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-colors duration-300 font-medium">
                Get a Quote
              </Link>
              <Link href="/contact" className="border border-[var(--flaux-orange)] text-[var(--flaux-orange)] px-8 py-4 rounded-full hover:bg-[var(--flaux-orange)] hover:text-white transition-colors duration-300 font-medium">
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}