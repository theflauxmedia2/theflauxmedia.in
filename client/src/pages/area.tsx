import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/page-shell";
import PageHeader from "@/components/page-header";
import Breadcrumbs from "@/components/breadcrumbs";
import ServiceLinks from "@/components/service-links";
import CaseCards from "@/components/case-cards";
import FaqList from "@/components/faq-list";
import Contact from "@/components/contact";
import { Eyebrow, Reveal } from "@/components/motion";
import { AREA_PAGES, areaPath, getAreaPage } from "@/content/areas";
import { SERVICE_PAGES } from "@/content/services";
import { CONTACT } from "@/lib/site";
import { getRoute } from "@/seo/routes";
import NotFound from "@/pages/not-found";

export default function Area({ params }: { params: { slug: string } }) {
  const area = getAreaPage(params.slug);
  if (!area) return <NotFound />;
  const route = getRoute(areaPath(area.slug));
  const siblings = AREA_PAGES.filter((a) => a.slug !== area.slug);

  return (
    <PageShell>
      <PageHeader
        h1={area.h1}
        breadcrumbs={<Breadcrumbs trail={route.breadcrumbs ?? []} />}
        lines={[area.display[0], <span className="accent">{area.display[1]}</span>]}
        aside={
          <p className="flex items-center gap-2 text-bone/80">
            <MapPin size={18} className="text-flame" /> {CONTACT.location}
          </p>
        }
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-mute sm:text-xl">
          {area.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      {area.localities && (
        <section className="border-t border-line py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <h2 className="eyebrow mb-6">Neighbourhoods we serve</h2>
            <ul className="flex flex-wrap gap-2">
              {area.localities.map((name) => (
                <li key={name} className="rounded-full border border-line px-4 py-2 text-bone/85">
                  {name}
                </li>
              ))}
              <li className="rounded-full border border-flame/50 bg-flame/10 px-4 py-2 text-bone">…and across Bengaluru</li>
            </ul>
          </div>
        </section>
      )}

      <section className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
          {area.sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <h2 className="headline text-3xl text-bone sm:text-4xl">{s.title}</h2>
              <p className="mt-4 leading-relaxed text-mute">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-6">What we do here</Eyebrow>
            <p className="max-w-sm leading-relaxed text-mute">
              Every service is available to businesses in {area.name} — and we specialise in{" "}
              <Link href="/restaurant-marketing-bangalore" className="link-underline text-bone">
                restaurant, café and bar marketing
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <ServiceLinks slugs={SERVICE_PAGES.map((s) => s.slug)} />
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Eyebrow className="mb-8">Recent work</Eyebrow>
          <CaseCards slugs={["stories-bar-and-kitchen", "madhuram-cafe", "moai-raksha-bandhan-campaign"]} />
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-6">Local FAQs</Eyebrow>
            {siblings.map((s) => (
              <Link key={s.slug} href={areaPath(s.slug)} className="btn btn-ghost group mt-2">
                {s.name}
                <ArrowUpRight size={16} className="btn-arrow" />
              </Link>
            ))}
          </div>
          <FaqList faqs={area.faqs} className="lg:col-span-8" />
        </div>
      </section>

      <Contact />
    </PageShell>
  );
}
