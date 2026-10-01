import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/page-shell";
import PageHeader from "@/components/page-header";
import Contact from "@/components/contact";
import { EASE_OUT, Reveal } from "@/components/motion";

const packages = [
  {
    name: "Flaux Lite",
    highlight: "Perfect for brands starting their digital journey.",
    features: [
      "Video Shooting",
      "Video Editing",
      "Foundational Social Media Handling",
      "Google My Business Setup and Basic Management",
      "1 time brand audit",
      "Monthly growth reports",
    ],
  },
  {
    name: "Flaux Surge",
    highlight: "For brands ready to scale with strategy and design.",
    badge: "Most complete",
    features: [
      "Video Shooting",
      "Video Editing",
      "Strategic Social Media Handling",
      "Static Website",
      "Basic SEO and Regular Management",
      "Google My Business Setup and Management",
      "One Time Graphic Design / Creatives",
      "Advanced Monthly performance reports",
      "Content Calendar Creation",
    ],
  },
  {
    name: "Flaux Velocity",
    highlight: "For ambitious brands seeking high performance.",
    features: [
      "DSLR Video Shooting",
      "Professional Video Editing",
      "Performance-Driven Social Media Strategy",
      "Professional Dynamic Website",
      "Advanced SEO and Website Management",
      "Google My Business Setup and Management",
      "Dynamic Graphic Design",
    ],
  },
];

export default function Packages() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Packages"
        lines={["Pick your", <span className="accent">pace.</span>]}
        intro="Choose the growth engine that fits where your brand is today. Every package is crafted for impact, value and results."
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {packages.map((pkg, i) => {
            const featured = Boolean(pkg.badge);
            return (
              <motion.article
                key={pkg.name}
                className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ${
                  featured ? "bg-bone text-ink" : "border border-line bg-ink-raised text-bone"
                }`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, ease: EASE_OUT, delay: i * 0.08 }}
              >
                <div className="flex items-center justify-between">
                  <span className={`eyebrow ${featured ? "!text-ink/60" : ""}`}>0{i + 1}</span>
                  {pkg.badge && (
                    <span className="rounded-full bg-flame px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
                      {pkg.badge}
                    </span>
                  )}
                </div>
                <h2 className="headline mt-10 text-5xl">{pkg.name}</h2>
                <p className={`mt-3 min-h-[3rem] ${featured ? "text-ink/70" : "text-mute"}`}>{pkg.highlight}</p>

                <ul className={`mt-8 flex-1 space-y-3 border-t pt-8 ${featured ? "border-ink/10" : "border-line"}`}>
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[15px] leading-snug">
                      <Check size={16} className="mt-0.5 shrink-0 text-flame" strokeWidth={2.5} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`btn group mt-10 w-full ${featured ? "bg-ink text-bone hover:bg-flame hover:text-ink" : "btn-ghost"}`}
                >
                  Get started
                  <ArrowUpRight size={16} className="btn-arrow" />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Flaux One */}
        <Reveal className="mt-4">
          <article className="relative overflow-hidden rounded-3xl border border-flame/40 bg-gradient-to-br from-flame/20 via-ink-raised to-ink-raised p-8 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 bg-[radial-gradient(closest-side,rgba(247,99,0,0.30),transparent)]"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="eyebrow !text-flame">04 — Fully custom</span>
                <h2 className="headline mt-6 text-6xl text-bone sm:text-7xl">
                  Flaux <span className="accent">One.</span>
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-bone/80">
                  Ultimate, all-in-one solution. A fully customised growth plan tailored to your brand — ads, strategy,
                  creatives and scaling.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary group shrink-0 text-base">
                Get your custom plan
                <ArrowUpRight size={18} className="btn-arrow" />
              </Link>
            </div>
          </article>
        </Reveal>

        <Reveal className="mt-10 text-center text-mute">
          Not sure which package fits?{" "}
          <Link href="/contact" className="link-underline text-bone">
            Book a free consultation
          </Link>
          .
        </Reveal>
      </section>

      <Contact />
    </PageShell>
  );
}
