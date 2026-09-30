import { ArrowLeft } from "lucide-react";
import {
  Film,
  Camera,
  PlayCircle,
  Image,
  Scissors,
  Target,
  Users,
  Megaphone,
  PenTool,
  Globe,
  TrendingUp,
  Search,
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterStrip from "@/components/footer-strip";

type ServiceItem = { icon: keyof typeof iconMap; title: string; desc: string };
type ServicesData = Record<string, ServiceItem[]>;

const iconMap = {
  film: Film,
  camera: Camera,
  "play-circle": PlayCircle,
  image: Image,
  scissors: Scissors,
  target: Target,
  users: Users,
  megaphone: Megaphone,
  "pen-tool": PenTool,
  globe: Globe,
  "trending-up": TrendingUp,
  search: Search,
};

const SERVICES_DATA: ServicesData = {
  "Content Creation & Media Production": [
    { icon: "film", title: "Brand Films & Ad Videos", desc: "We craft cinematic visuals that tell stories, build emotion, and strengthen brand recall." },
    { icon: "camera", title: "Product & Campaign Shoots", desc: "From concept to camera, we capture visuals that drive engagement and conversions." },
    { icon: "play-circle", title: "Social Media Videos", desc: "Thumb-stopping short-form content designed for modern platforms." },
    { icon: "image", title: "Photography & Creatives", desc: "Premium visuals and graphics that make every scroll count." },
    { icon: "scissors", title: "Post-Production & Editing", desc: "Seamless edits, sharp color grading, and sound design that elevate your content." },
  ],
  "Strategy & Media Marketing": [
    { icon: "target", title: "Content Strategy", desc: "Data-backed storytelling designed to connect and convert." },
    { icon: "users", title: "Social Media Management", desc: "Consistent, creative brand presence that builds community and trust." },
    { icon: "megaphone", title: "Ad Campaigns", desc: "High-impact visuals built to convert on Meta, Google, and YouTube." },
    { icon: "pen-tool", title: "Brand Identity Design", desc: "Defining your brand’s visual DNA — logo, fonts, colors, and tone." },
  ],
  "Digital Growth & Technology": [
    { icon: "globe", title: "Web Development", desc: "Custom, fast, and SEO-optimized websites designed for impact." },
    { icon: "trending-up", title: "Digital Marketing", desc: "Strategic campaigns that amplify reach and generate real results." },
    { icon: "search", title: "SEO Optimization", desc: "Boost visibility with performance-driven SEO that ranks and converts." },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Services() {
  return (
    <div className="relative">
      <Footer />
      <div className="relative z-10 min-h-screen bg-[var(--flaux-black)] text-[var(--flaux-white)] rounded-b-[80px] md:rounded-b-[150px] mb-[100vh] shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
      <Navbar />
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-24">
        {/* <Link href="/" className="inline-flex items-center text-[var(--flaux-orange)] hover:text-white transition-colors duration-300 mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link> */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
            A refined, minimal stack of offerings — crafted for ambitious brands.
          </p>
        </div>
      </div>

      {/* Services - Minimal Vertical/Staggered Layout */}
      <section className="pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {Object.entries(SERVICES_DATA).map(([category, items], sectionIndex) => (
            <div key={category} className={`mb-16 sm:mb-20 ${sectionIndex > 0 ? "pt-6 sm:pt-10 border-t border-white/5" : ""}`}>
              {/* Category Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 sm:mb-10 text-white"
              >
                {category}
              </motion.h2>

              {/* Items list */}
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="space-y-6 sm:space-y-7"
              >
                {items.map((svc, idx) => {
                  const Icon = iconMap[svc.icon];
                  return (
                    <motion.li
                      key={svc.title}
                      variants={itemVariants}
                      className="group relative flex items-start gap-4 sm:gap-6"
                    >
                      {/* Accent rail */}
                      <div className="absolute left-[1.25rem] sm:left-[1.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/40 via-orange-500/10 to-transparent pointer-events-none" />

                      {/* Icon */}
                      <div className="relative z-10 mt-1 sm:mt-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--flaux-orange)] group-hover:bg-white/10 transition-colors">
                        <Icon size={18} className="sm:w-[22px] sm:h-[22px]" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 pl-2">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                          {svc.title}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-2">
                          {svc.desc}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-6">Have a project in mind?</h2>
            <p className="text-lg text-gray-400 mb-10">Let's build something bold, creative, and performance-driven.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-[var(--flaux-orange)] text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-colors duration-300 font-semibold">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
      <FooterStrip />
      </div>
    </div>
  );
}