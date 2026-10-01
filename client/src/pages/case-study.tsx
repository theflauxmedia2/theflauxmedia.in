import { useState } from "react";
import { Expand } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/page-shell";
import PageHeader from "@/components/page-header";
import Breadcrumbs from "@/components/breadcrumbs";
import ReelCard from "@/components/reel-card";
import VideoLightbox from "@/components/video-lightbox";
import Lightbox from "@/components/lightbox";
import ServiceLinks from "@/components/service-links";
import CaseCards from "@/components/case-cards";
import Contact from "@/components/contact";
import { Eyebrow, Reveal } from "@/components/motion";
import { CASE_STUDIES, casePath, getCaseStudy } from "@/content/cases";
import { WORKS, cleanDescription } from "@/lib/works";
import { getRoute } from "@/seo/routes";
import NotFound from "@/pages/not-found";

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const [videoIndex, setVideoIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const cs = getCaseStudy(params.slug);
  if (!cs) return <NotFound />;

  const route = getRoute(casePath(cs.slug));
  const videos = WORKS.videos.filter((v) => v.case === cs.slug);
  const creatives = WORKS.creatives.filter((c) => c.case === cs.slug);
  const image = imageIndex === null ? null : creatives[imageIndex];
  const others = CASE_STUDIES.filter((c) => c.slug !== cs.slug).slice(0, 3).map((c) => c.slug);

  return (
    <PageShell>
      <PageHeader
        h1={cs.h1}
        breadcrumbs={<Breadcrumbs trail={route.breadcrumbs ?? []} />}
        lines={[cs.display[0], <span className="accent">{cs.display[1]}</span>]}
        intro={cs.summary}
        aside={<p className="eyebrow">{cs.location}</p>}
      />

      {/* Brief / idea / made */}
      <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-3 lg:px-12">
        <Reveal>
          <h2 className="eyebrow mb-4 !text-flame">The brief</h2>
          <div className="space-y-4 leading-relaxed text-bone/85">
            {cs.brief.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="eyebrow mb-4 !text-flame">The idea</h2>
          <div className="space-y-4 leading-relaxed text-bone/85">
            {cs.idea.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="eyebrow mb-4 !text-flame">What we made</h2>
          <ul className="space-y-3 text-bone/85">
            {cs.made.map((item) => (
              <li key={item} className="border-b border-line pb-3">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {videos.length > 0 && (
        <section className="border-t border-line py-20 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Eyebrow className="mb-10">Reels</Eyebrow>
            <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {videos.map((video, i) => (
                <li key={video.id}>
                  <ReelCard video={video} index={i} onOpen={() => setVideoIndex(i)} />
                  <h3 className="mt-3 font-medium text-bone">{video.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mute">{cleanDescription(video.description)}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {creatives.length > 0 && (
        <section className="border-t border-line py-20 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Eyebrow className="mb-10">Posters & creatives</Eyebrow>
            <ul className="columns-2 gap-3 sm:gap-4 lg:columns-3">
              {creatives.map((c, i) => (
                <li key={c.slug} className="mb-3 break-inside-avoid sm:mb-4">
                  <figure>
                    <button
                      type="button"
                      onClick={() => setImageIndex(i)}
                      className="group relative block w-full overflow-hidden rounded-2xl bg-ink-high"
                      aria-label={`View ${c.title}`}
                    >
                      <img
                        src={c.thumb ?? c.image}
                        alt={c.alt}
                        width={c.width}
                        height={c.height}
                        loading="lazy"
                        decoding="async"
                        className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <Expand size={18} className="absolute right-3 top-3 text-bone opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                    <figcaption className="mt-2 text-sm text-mute">
                      {c.title}
                      {c.outlet ? ` · ${c.outlet}` : ""}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Only shown once real, client-approved numbers exist (see content/cases.ts) */}
      {cs.results.length > 0 && (
        <section className="border-t border-line py-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Eyebrow className="mb-6">Results</Eyebrow>
            <ul className="space-y-3 text-xl text-bone">
              {cs.results.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-t border-line py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-6">Services used</Eyebrow>
            <p className="max-w-sm leading-relaxed text-mute">
              Want something similar for your outlet? See how we work with{" "}
              <Link href="/restaurant-marketing-bangalore" className="link-underline text-bone">
                restaurants, cafés and bars in Bengaluru
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <ServiceLinks slugs={cs.services} />
          </div>
        </div>
        <div className="mx-auto mt-24 max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <Eyebrow className="mb-8">More case studies</Eyebrow>
          <CaseCards slugs={others} />
        </div>
      </section>

      <Contact />

      <VideoLightbox videos={videos} index={videoIndex} onChange={setVideoIndex} />
      <Lightbox
        open={image !== null}
        label={image?.title ?? "Creative"}
        onClose={() => setImageIndex(null)}
        onPrev={() => imageIndex !== null && setImageIndex((imageIndex - 1 + creatives.length) % creatives.length)}
        onNext={() => imageIndex !== null && setImageIndex((imageIndex + 1) % creatives.length)}
        caption={image && <p className="headline text-2xl text-bone">{image.title}</p>}
      >
        {image && <img key={image.image} src={image.image} alt={image.alt} className="max-h-[72vh] w-auto max-w-full rounded-2xl object-contain" />}
      </Lightbox>
    </PageShell>
  );
}
