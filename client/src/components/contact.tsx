import { ArrowUpRight, Instagram, MessageCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import { Eyebrow, Headline, Reveal } from "@/components/motion";
import { CONTACT } from "@/lib/site";

/** Closing call-to-action used at the bottom of pages. */
export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(247,99,0,0.15),transparent)]"
      />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Eyebrow className="mb-8">Start a project</Eyebrow>
        <Headline
          className="text-[15vw] text-bone sm:text-8xl lg:text-[9rem]"
          lines={["Let's make", <>something people</>, <span className="accent">stop for.</span>]}
        />

        <Reveal delay={0.2} className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-3">Write to us</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="link-underline headline break-all text-3xl text-bone sm:text-5xl lg:text-6xl"
            >
              {CONTACT.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary group">
              Send a brief
              <ArrowUpRight size={16} className="btn-arrow" />
            </Link>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href={CONTACT.phoneHref} className="btn btn-ghost" aria-label={`Call ${CONTACT.phoneDisplay}`}>
              <Phone size={16} /> Call
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !px-0 w-12"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
