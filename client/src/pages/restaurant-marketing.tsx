import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/page-shell";
import PageHeader from "@/components/page-header";
import Breadcrumbs from "@/components/breadcrumbs";
import ReelCard from "@/components/reel-card";
import VideoLightbox from "@/components/video-lightbox";
import CaseCards from "@/components/case-cards";
import ServiceLinks from "@/components/service-links";
import FaqList from "@/components/faq-list";
import Contact from "@/components/contact";
import { EASE_OUT, Eyebrow, Headline } from "@/components/motion";
import { RESTAURANT_PAGE as PAGE } from "@/content/industry";
import { CONTACT } from "@/lib/site";
import { WORKS } from "@/lib/works";
import { getRoute } from "@/seo/routes";

// Every F&B reel (everything except the gaming event)
const FNB_VIDEOS = WORKS.videos.filter((v) => v.case !== "global-computers-valorant-event");

export default function RestaurantMarketing() {
  const [videoIndex, setVideoIndex] = useState<number | null>(null);
  const route = getRoute(PAGE.path);

  return (
    <PageShell>
      <PageHeader
        h1={PAGE.h1}
        breadcrumbs={<Breadcrumbs trail={route.breadcrumbs ?? []} />}
        lines={[PAGE.display[0], <span className="accent">{PAGE.display[1]}</span>]}
        aside={
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary group">
            WhatsApp us
            <ArrowUpRight size={16} className="btn-arrow" />
          </a>
        }
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-8 lg:px-12">
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-mute sm:text-xl">
          {PAGE.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      {/* Reel styles */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Eyebrow index="01" className="mb-6">Reel styles</Eyebrow>
          <Headline as="h2" className="mb-12 text-5xl text-bone sm:text-6xl" lines={["Four ways to", <span className="accent">fill a table.</span>]} />
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PAGE.reelStyles.map((style, i) => (
              <motion.li
                key={style.title}
                className="bg-ink p-7"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE_OUT, delay: i * 0.06 }}
              >
                <h3 className="headline text-3xl text-bone">{style.title}</h3>
                <p className="mt-3 leading-relaxed text-mute">{style.text}</p>
              </motion.li>
            ))}
          </ul>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {FNB_VIDEOS.map((video, i) => (
              <li key={video.id}>
                <ReelCard video={video} index={i} onOpen={() => setVideoIndex(i)} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we cover */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <Eyebrow index="02" className="mb-6">What we cover</Eyebrow>
            <h2 className="headline text-5xl text-bone sm:text-6xl">
              From menu launch <span className="accent">to full house.</span>
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-8">
            {PAGE.covers.map((item) => (
              <li key={item.title}>
                <h3 className="headline text-3xl text-bone">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-mute">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Posters */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Eyebrow index="03" className="mb-6">Food & drink posters</Eyebrow>
          <p className="mb-10 max-w-2xl leading-relaxed text-mute">
            Designed for Stories Bar & Kitchen in Rajajinagar and Nagarbhavi — see the{" "}
            <Link href="/work/stories-bar-and-kitchen" className="link-underline text-bone">
              full Stories case study
            </Link>{" "}
            or our{" "}
            <Link href="/services/social-media-poster-design-bangalore" className="link-underline text-bone">
              social media poster design service
            </Link>
            .
          </p>
          <ul className="scrollbar-hide -mx-5 flex snap-x gap-3 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 lg:grid-cols-5">
            {WORKS.creatives.map((c) => (
              <li key={c.slug} className="w-[60vw] shrink-0 snap-start sm:w-auto">
                <img
                  src={c.thumb ?? c.image}
                  alt={c.alt}
                  width={c.width}
                  height={c.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                />
                <p className="mt-2 text-sm text-mute">{c.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cases + services */}
      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Eyebrow index="04" className="mb-8">Restaurant case studies</Eyebrow>
          <CaseCards slugs={PAGE.cases} className="lg:grid-cols-4" />
          <div className="mt-20">
            <Eyebrow className="mb-6">Services for restaurants</Eyebrow>
            <ServiceLinks slugs={PAGE.services} />
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-6">FAQs</Eyebrow>
            <h2 className="headline text-5xl text-bone sm:text-6xl">
              For owners <span className="accent">& managers.</span>
            </h2>
          </div>
          <FaqList faqs={PAGE.faqs} className="lg:col-span-8" />
        </div>
      </section>

      <Contact />
      <VideoLightbox videos={FNB_VIDEOS} index={videoIndex} onChange={setVideoIndex} />
    </PageShell>
  );
}
