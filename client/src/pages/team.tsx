import { ArrowLeft, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      bio: "With over 12 years in creative leadership, Sarah guides our design vision and ensures every project exceeds expectations.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "sarah@flauxmedia.com"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in React, Node.js, and cloud architecture. Michael brings technical excellence to every project.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "michael@flauxmedia.com"
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Strategist",
      bio: "Digital marketing expert specializing in data-driven campaigns that deliver measurable results and drive growth.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "emma@flauxmedia.com"
    },
    {
      name: "David Park",
      role: "UX/UI Designer",
      bio: "User experience designer passionate about creating intuitive interfaces that delight users and drive conversions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "david@flauxmedia.com"
    },
    {
      name: "Lisa Thompson",
      role: "Content Director",
      bio: "Award-winning content creator with a talent for storytelling that connects brands with their audiences.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "lisa@flauxmedia.com"
    },
    {
      name: "Alex Kumar",
      role: "Technical Lead",
      bio: "DevOps and cloud architecture specialist ensuring our solutions are scalable, secure, and performant.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "alex@flauxmedia.com"
    },
    {
      name: "Rachel Green",
      role: "Project Manager",
      bio: "Certified PMP with expertise in agile methodologies, ensuring projects are delivered on time and within budget.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "rachel@flauxmedia.com"
    },
    {
      name: "James Wilson",
      role: "Brand Strategist",
      bio: "Brand expert who helps companies define their unique position and communicate their value proposition effectively.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      twitter: "#",
      email: "james@flauxmedia.com"
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
            Our <span className="gradient-text">Team</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 leading-relaxed">
            Meet the creative minds and strategic thinkers behind The Flaux Media's success.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="bg-[var(--flaux-gray)] rounded-xl p-6 border border-[var(--flaux-light-gray)] hover:border-[var(--flaux-orange)] transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[var(--flaux-orange)] text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-4">
                    <a href={member.linkedin} className="text-gray-400 hover:text-[var(--flaux-orange)] transition-colors duration-300">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.twitter} className="text-gray-400 hover:text-[var(--flaux-orange)] transition-colors duration-300">
                      <Twitter size={20} />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-[var(--flaux-orange)] transition-colors duration-300">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[var(--flaux-gray)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation First</h3>
                <p className="text-gray-400">We encourage creative thinking and embrace new technologies to stay ahead of the curve.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                <p className="text-gray-400">We believe the best work comes from diverse perspectives working together toward common goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--flaux-orange)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Growth Mindset</h3>
                <p className="text-gray-400">We invest in our team's development and encourage continuous learning and skill advancement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-8">Join Our Team</h2>
            <p className="text-xl text-gray-400 mb-12">
              We're always looking for talented individuals who share our passion for creative excellence and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[var(--flaux-orange)] text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-colors duration-300 font-medium">
                View Open Positions
              </Link>
              <Link href="/contact" className="border border-[var(--flaux-orange)] text-[var(--flaux-orange)] px-8 py-4 rounded-full hover:bg-[var(--flaux-orange)] hover:text-white transition-colors duration-300 font-medium">
                Send Your Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}