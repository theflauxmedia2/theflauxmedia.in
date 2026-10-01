import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import PageShell from "@/components/page-shell";
import PageHeader from "@/components/page-header";
import { EASE_OUT, Eyebrow, Headline, Reveal } from "@/components/motion";
import { CONTACT } from "@/lib/site";

const NEEDS = ["Reels & short-form", "Brand film", "Photography", "Social media", "Branding & design", "Website", "Ads & growth"];

const FAQS = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a comprehensive brand overhaul could take 2-3 months. We'll provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely! We love working with startups and have special packages designed for growing businesses. We understand budget constraints and can create scalable solutions that grow with your company.",
  },
  {
    question: "What's included in your retainer packages?",
    answer:
      "Our retainer packages include ongoing support, regular updates, performance monitoring, and priority access to our team. We'll customize the package based on your specific needs and goals.",
  },
  {
    question: "Can you help with existing projects?",
    answer:
      "Yes! We can audit your existing digital presence, identify areas for improvement, and help optimize your current marketing efforts. We're experienced in taking over mid-project work.",
  },
];

const fieldClass =
  "peer w-full border-0 border-b border-line bg-transparent px-0 pb-3 pt-7 text-lg text-bone placeholder-transparent transition-colors duration-200 focus:border-flame focus:outline-none focus:ring-0 focus-visible:outline-none";
const labelClass =
  "pointer-events-none absolute left-0 top-7 text-lg text-mute transition-all duration-200 ease-out peer-focus:top-0 peer-focus:text-xs peer-focus:text-flame peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs";

function Field({ name, label, type = "text", required = false, textarea = false }: { name: string; label: string; type?: string; required?: boolean; textarea?: boolean }) {
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={name} name={name} required={required} rows={4} placeholder={label} className={`${fieldClass} resize-none`} />
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder={label} className={fieldClass} />
      )}
      <label htmlFor={name} className={labelClass}>
        {label}
        {required && <span className="text-flame"> *</span>}
      </label>
    </div>
  );
}

export default function Contact() {
  const [needs, setNeeds] = useState<string[]>([]);

  const toggleNeed = (need: string) =>
    setNeeds((current) => (current.includes(need) ? current.filter((n) => n !== need) : [...current, need]));

  const handleWhatsAppSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => ((data.get(key) as string) || "").trim();

    const composed = [
      "New enquiry from The Flaux Media website",
      "",
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      get("company") ? `Company: ${get("company")}` : null,
      needs.length > 0 ? `Looking for: ${needs.join(", ")}` : null,
      "",
      "Message:",
      get("message"),
    ]
      .filter((line) => line !== null)
      .join("\n");
    window.open(`${CONTACT.whatsapp}?text=${encodeURIComponent(composed)}`, "_blank");
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        lines={["Let's", <span className="accent">talk.</span>]}
        intro="Your next big move starts here. Tell us what you're working on — we usually reply within 24 hours."
      />

      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        {/* Direct lines */}
        <Reveal className="lg:col-span-4">
          <dl className="space-y-10">
            <div>
              <dt className="eyebrow mb-3">Email</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`} className="link-underline break-all text-2xl text-bone">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-3">Phone & WhatsApp</dt>
              <dd className="flex flex-col items-start gap-1 text-2xl text-bone">
                <a href={CONTACT.phoneHref} className="link-underline">{CONTACT.phoneDisplay}</a>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="link-underline text-base text-mute hover:text-bone">
                  Message on WhatsApp ↗
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-3">Studio</dt>
              <dd className="text-2xl text-bone">{CONTACT.location}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-3">Social</dt>
              <dd>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="link-underline text-2xl text-bone">
                  Instagram {CONTACT.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* Brief form */}
        <motion.div
          className="rounded-3xl border border-line bg-ink-raised p-6 sm:p-10 lg:col-span-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.45 }}
        >
          <h2 className="headline text-4xl text-bone sm:text-5xl">Send us a brief</h2>
          <p className="mt-3 text-mute">It opens WhatsApp with your message ready to send.</p>

          <form className="mt-10 space-y-8" onSubmit={handleWhatsAppSubmit}>
            <fieldset>
              <legend className="eyebrow mb-4">What do you need?</legend>
              <div className="flex flex-wrap gap-2">
                {NEEDS.map((need) => {
                  const selected = needs.includes(need);
                  return (
                    <button
                      key={need}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleNeed(need)}
                      className={`rounded-full border px-4 py-2.5 text-sm transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.97] ${
                        selected ? "border-flame bg-flame text-ink" : "border-line text-bone/80 hover:border-bone/50"
                      }`}
                    >
                      {need}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Field name="name" label="Your name" required />
              <Field name="email" label="Email" type="email" required />
            </div>
            <Field name="company" label="Company or brand" />
            <Field name="message" label="Tell us about your project" required textarea />

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="btn btn-primary group text-base">
                Send via WhatsApp
                <ArrowUpRight size={18} className="btn-arrow" />
              </button>
              <a href={`mailto:${CONTACT.email}`} className="link-underline text-sm text-mute hover:text-bone">
                Prefer email? {CONTACT.email}
              </a>
            </div>
          </form>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-6">FAQ</Eyebrow>
            <Headline className="text-6xl text-bone sm:text-7xl" lines={["Good", <span className="accent">questions.</span>]} />
          </div>
          <Accordion.Root type="single" collapsible className="lg:col-span-8">
            {FAQS.map((faq) => (
              <Accordion.Item key={faq.question} value={faq.question} className="border-b border-line first:border-t">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-7 text-left">
                    <span className="headline text-2xl text-bone sm:text-3xl">{faq.question}</span>
                    <Plus
                      size={22}
                      className="shrink-0 text-flame transition-transform duration-300 ease-out group-data-[state=open]:rotate-45"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="max-w-2xl pb-8 leading-relaxed text-mute">{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>
    </PageShell>
  );
}
