import { Eyebrow, Reveal, useOffscreenPause } from "@/components/motion";
import { BRANDS } from "@/lib/site";

export default function BrandMarquee({ index = "02" }: { index?: string }) {
  const { ref, paused } = useOffscreenPause<HTMLElement>();

  return (
    <section ref={ref} data-paused={paused} aria-labelledby="brands-heading" className="border-y border-line py-16 sm:py-20">
      <div className="mx-auto mb-10 flex max-w-[1400px] flex-col gap-4 px-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12">
        <Eyebrow index={index}>
          <span id="brands-heading">Brands we've worked with</span>
        </Eyebrow>
        <Reveal>
          <p className="max-w-md text-mute sm:text-right">
            Restaurants, bars, cafés and local businesses who trust us with how they look and sound online.
          </p>
        </Reveal>
      </div>

      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-32" />
        <ul className="marquee-track items-center group-hover:[animation-play-state:paused]" style={{ ["--marquee-duration" as string]: "38s" }}>
          {[0, 1].map((copy) =>
            BRANDS.map((brand) => (
              <li
                key={`${copy}-${brand.name}`}
                aria-hidden={copy === 1}
                className="flex h-20 w-40 shrink-0 items-center justify-center px-6 sm:h-24 sm:w-52 sm:px-8"
              >
                <img
                  src={brand.logo}
                  width={brand.width}
                  height={brand.height}
                  alt={copy === 0 ? brand.name : ""}
                  loading="lazy"
                  className={`max-h-full max-w-full object-contain opacity-60 transition-[opacity,filter] duration-300 hover:opacity-100 ${
                    brand.badge
                      ? "h-16 w-16 rounded-full grayscale hover:grayscale-0 sm:h-[4.5rem] sm:w-[4.5rem]"
                      : "max-h-14 [filter:brightness(0)_invert(1)] sm:max-h-16"
                  }`}
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}
