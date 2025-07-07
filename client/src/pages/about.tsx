import { ArrowLeft, Users, Target, Award, Globe } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--flaux-black)] text-[var(--flaux-white)]">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center text-[var(--flaux-orange)] hover:text-white transition-colors duration-300 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            About <span className="gradient-text">The Flaux Media</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed">
            We are a creative powerhouse that transforms brands through strategic design, innovative technology, and compelling storytelling.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-8">Our Story</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                Founded in 2020, The Flaux Media emerged from a simple belief: every brand has a unique story worth telling. What started as a small creative studio has grown into a full-service digital agency with over 1000 specialists worldwide.
              </p>
              <p>
                Our journey began with a focus on visual identity and has evolved to encompass every aspect of digital transformation. From startups to Fortune 500 companies, we've helped brands discover their voice and amplify their message across all channels.
              </p>
              <p>
                Today, we're proud to be at the forefront of creative innovation, combining cutting-edge technology with human-centered design to create experiences that not only look stunning but drive real business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--flaux-gray)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "We believe the best ideas come from working together, combining diverse perspectives and expertise."
                },
                {
                  icon: Target,
                  title: "Purpose-Driven",
                  description: "Every project we take on has a clear purpose and measurable impact on our clients' success."
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We set the highest standards for ourselves and deliver nothing less than exceptional work."
                },
                {
                  icon: Globe,
                  title: "Innovation",
                  description: "We stay ahead of trends and push boundaries to create solutions that shape the future."
                }
              ].map((value, index) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-12">By the Numbers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "1000+", label: "Team Members" },
                { number: "500+", label: "Projects Completed" },
                { number: "50+", label: "Countries Served" },
                { number: "99%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl sm:text-5xl font-black text-[var(--flaux-orange)] mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}