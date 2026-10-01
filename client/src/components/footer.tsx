import { Link } from "wouter";
import { CONTACT, NAV_LINKS } from "@/lib/site";

/** Fixed layer revealed as the page panel scrolls away. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-takeover flex flex-col justify-end" aria-label="Site footer">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-x-6 gap-y-10 px-5 pb-10 sm:px-8 md:grid-cols-4 lg:px-12">
        <div className="col-span-2">
          <p className="eyebrow mb-4">Got a brief?</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="link-underline headline text-3xl text-bone sm:text-5xl"
          >
            {CONTACT.email}
          </a>
        </div>

        <div>
          <p className="eyebrow mb-4">Pages</p>
          <ul className="space-y-2 text-bone/80">
            {[{ href: "/", label: "Home" }, ...NAV_LINKS, { href: "/contact", label: "Contact" }].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-underline hover:text-bone">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Elsewhere</p>
          <ul className="space-y-2 text-bone/80">
            <li>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-bone">
                Instagram
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-bone">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={CONTACT.phoneHref} className="link-underline hover:text-bone">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="text-mute">{CONTACT.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p
          aria-hidden
          className="headline select-none whitespace-nowrap px-3 pt-5 text-center text-[16.8vw] uppercase leading-[0.8] text-bone"
        >
          The Flaux Media
        </p>
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-2 px-5 py-5 text-xs text-mute sm:px-8 lg:px-12">
          <span>© {year} The Flaux Media. All rights reserved.</span>
          <span className="font-mono uppercase tracking-[0.14em]">Made in Bengaluru</span>
        </div>
      </div>
    </footer>
  );
}
