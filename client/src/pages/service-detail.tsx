import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/page-shell";
import PageHeader from "@/components/page-header";
import Breadcrumbs from "@/components/breadcrumbs";
import CaseCards from "@/components/case-cards";
import ServiceLinks from "@/components/service-links";
import FaqList from "@/components/faq-list";
import Contact from "@/components/contact";
import { EASE_OUT, Eyebrow, Headline, Reveal } from "@/components/motion";
import { getServicePage, servicePath } from "@/content/services";
import { CONTACT } from "@/lib/site";
import { getRoute } from "@/seo/routes";
import NotFound from "@/pages/not-found";

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const page = getServicePage(params.slug);
  if (!page) return <NotFound />;
  const route = getRoute(servicePath(page.slug));

  return (
    <PageShell>
      <PageHeader
        h1={page.h1}
        breadcrumbs={<Breadcrumbs trail={route.breadcrumbs ?? []} />}
        lines={[page.display[0], <span className="accent">{page.display[1]}</span>]}
        aside={
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary group">
            WhatsApp us
            <ArrowUpRight size={16} className="btn-arrow" />
          </a>
        }
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-mute sm:text-xl">
          {page.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      {page.deepDive && (
        <section className="border-t border-line py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
            <h2 className="headline text-4xl text-bone sm:text-5xl lg:col-span-4">{page.deepDive.heading}</h2>
            <div className="space-y-5 text-lg leading-relaxed text-mute lg:col-span-8">
              {page.deepDive.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What's included */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Eyebrow index="01" className="mb-6">What's included</Eyebrow>
          <Headline as="h2" className="mb-12 text-5xl text-bone sm:text-6xl" lines={["Everything in", <span className="accent">one team.</span>]} />
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {page.included.map((item, i) => (
              <motion.li
                key={item.title}
                className="bg-ink p-7 sm:p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: (i % 3) * 0.06 }}
              >
                <h3 className="headline text-3xl text-bone">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-mute">{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process + who it's for */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-7">
            <Eyebrow index="02" className="mb-6">How it works</Eyebrow>
            <ol className="border-t border-line">
              {page.process.map((step, i) => (
                <li key={step.title} className="flex gap-6 border-b border-line py-7">
                  <span className="eyebrow pt-2 !text-flame">0{i + 1}</span>
                  <div>
                    <h3 className="headline text-3xl text-bone">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-mute">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            {/* TODO(owner): replace with confirmed turnaround times for this service. */}
            <p className="mt-8 max-w-2xl leading-relaxed text-mute">
              <span className="text-bone">Timing: </span>
              {page.timing}
            </p>
          </div>
          <Reveal className="lg:col-span-5">
            <div className="rounded-3xl border border-line bg-ink-raised p-7 sm:p-8">
              <Eyebrow className="mb-6">Who it's for</Eyebrow>
              <ul className="space-y-4">
                {page.forWho.map((who) => (
                  <li key={who} className="flex gap-3 leading-relaxed text-bone/90">
                    <Check size={18} className="mt-1 shrink-0 text-flame" strokeWidth={2.5} />
                    {who}
                  </li>
                ))}
              </ul>
              <Link href="/packages" className="link-underline mt-8 inline-block text-sm text-bone">
                See packages that include this →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Eyebrow index="03" className="mb-6">Recent work</Eyebrow>
          <Headline as="h2" className="mb-12 text-5xl text-bone sm:text-6xl" lines={["See it in", <span className="accent">action.</span>]} />
          <CaseCards slugs={page.cases} />
          <p className="mt-10 max-w-2xl text-mute">
            Based in South Bengaluru and shooting across the city —{" "}
            <Link href="/areas/south-bengaluru" className="link-underline text-bone">
              see the areas we serve
            </Link>{" "}
            or{" "}
            <Link href="/restaurant-marketing-bangalore" className="link-underline text-bone">
              how we work with restaurants, cafés and bars
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ + related */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <Eyebrow index="04" className="mb-6">FAQs</Eyebrow>
            <h2 className="headline text-5xl text-bone sm:text-6xl">
              {page.name} <span className="accent">questions.</span>
            </h2>
          </div>
          <FaqList faqs={page.faqs} className="lg:col-span-8" />
        </div>
        <div className="mx-auto mt-24 max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Eyebrow className="mb-6">Related services</Eyebrow>
          <ServiceLinks slugs={page.related} />
        </div>
      </section>

      <Contact />
    </PageShell>
  );
}
