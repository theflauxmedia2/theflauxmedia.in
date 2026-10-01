import { Link } from "wouter";
import { CONTACT, FOOTER_AREAS_LINE, NAV_LINKS, SITE_NAME, TAGLINE } from "@/lib/site";
import { FOOTER_LINK_GROUPS } from "@/content/footer-links";

/**
 * Revealed as the page panel scrolls away (fixed layer on md+). On small screens it sits in
 * normal flow so nothing gets clipped by the viewport height.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer-takeover order-last flex flex-col md:order-none md:overflow-y-auto"
      aria-label="Site footer"
    >
      <div className="mx-auto mt-auto grid w-full max-w-[1400px] grid-cols-2 gap-x-6 gap-y-10 px-5 pb-10 pt-16 sm:px-8 md:grid-cols-12 lg:px-12">
        <div className="col-span-2 md:col-span-4">
          <p className="eyebrow mb-4">Got a brief?</p>
          <a href={`mailto:${CONTACT.email}`} className="link-underline headline break-all text-3xl text-bone lg:text-4xl">
            {CONTACT.email}
          </a>
          {/* NAP — keep identical to the contact page and schema */}
          <address className="mt-6 space-y-1 text-sm not-italic leading-relaxed text-bone/70">
            <span className="block text-bone">{SITE_NAME}</span>
            <span className="block">{TAGLINE}</span>
            <span className="block">{CONTACT.location}</span>
            <a href={CONTACT.phoneHref} className="link-underline block w-fit hover:text-bone">
              {CONTACT.phoneDisplay}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="link-underline block w-fit hover:text-bone">
              WhatsApp us
            </a>
          </address>
        </div>

        {FOOTER_LINK_GROUPS.map((group) => (
          <nav key={group.title} aria-label={group.title} className="md:col-span-3 lg:col-span-3">
            <p className="eyebrow mb-4">{group.title}</p>
            <ul className="space-y-2 text-sm text-bone/80">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline hover:text-bone">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <nav aria-label="Studio" className="md:col-span-2">
          <p className="eyebrow mb-4">Studio</p>
          <ul className="space-y-2 text-sm text-bone/80">
            {[{ href: "/", label: "Home" }, ...NAV_LINKS, { href: "/contact", label: "Contact" }].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-underline hover:text-bone">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-bone">
                Instagram
              </a>
            </li>
            <li>
              <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-bone">
                YouTube
              </a>
            </li>
          </ul>
        </nav>

        <p className="col-span-2 text-sm text-mute md:col-span-12">{FOOTER_AREAS_LINE}.</p>
      </div>

      <div className="border-t border-line">
        <p
          aria-hidden
          className="headline select-none whitespace-nowrap px-3 pt-5 text-center text-[16.8vw] uppercase leading-[0.8] text-bone lg:text-[13vw]"
        >
          The Flaux Media
        </p>
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-2 px-5 py-5 text-xs text-mute sm:px-8 lg:px-12">
          <span>
            © {year} {SITE_NAME}. All rights reserved.
          </span>
          <span className="font-mono uppercase tracking-[0.14em]">Made in Bengaluru</span>
        </div>
      </div>
    </footer>
  );
}
