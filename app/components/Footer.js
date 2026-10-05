import BrandMark from "./BrandMark";
import WhatsAppIcon from "./WhatsAppIcon";
import {
  TAGLINE,
  PROGRAMS,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  PHONE_TEL,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  WA_LINKS,
} from "../lib/institute";

/**
 * Footer — brand, the six programs, location, and contact.
 * Quiet, ordered, nothing extra.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-cream-50/10 bg-chocolate-950 text-cream-50"
    >
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-3.5" aria-label="Back to top">
              <BrandMark className="h-10 w-10 text-cream-50" />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-[19px] font-medium tracking-[0.01em]">
                  Mu'ādh ibn Jabal
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.34em] text-cream-400">
                  Institute
                </span>
              </span>
            </a>
            <p className="mt-7 max-w-xs font-display text-[22px] italic leading-[1.35] text-cream-300">
              {TAGLINE}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-cream-400">
              {ADDRESS_LINE_1}
              <br />
              {ADDRESS_LINE_2}
            </p>
          </div>

          {/* Programs */}
          <nav aria-label="Programs" className="lg:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-cream-400">
              Programs
            </p>
            <ul className="mt-6 space-y-3">
              {PROGRAMS.map((program) => (
                <li key={program.id}>
                  <a
                    href="#programs"
                    className="link-underline text-sm text-cream-300/90 transition-colors hover:text-cream-100"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Institute */}
          <nav aria-label="Institute" className="lg:col-span-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-cream-400">
              Institute
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Learning Options", href: "#learning" },
                { label: "Find Us", href: "#location" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-cream-300/90 transition-colors hover:text-cream-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-cream-400">
              Contact
            </p>
            <a
              href={WA_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[44px] items-center gap-2.5 bg-cream-50 px-5 text-[13px] font-medium tracking-wide text-chocolate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-100"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
            <ul className="mt-5 space-y-2 text-sm text-cream-300/90">
              <li>
                <a href={WA_LINKS.general} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cream-100">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={PHONE_TEL} className="transition-colors hover:text-cream-100">
                  {PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="container-x flex flex-col justify-between gap-2 py-6 text-xs text-cream-400/80 sm:flex-row sm:items-center">
          <p>© {year} Mu'ādh ibn Jabal Institute. All rights reserved.</p>
          <p>Abeokuta, Ogun State, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
