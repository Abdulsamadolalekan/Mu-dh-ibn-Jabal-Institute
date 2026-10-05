"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "../lib/nav";
import { WA_LINKS } from "../lib/institute";
import BrandMark from "./BrandMark";
import CtaLink from "./CtaLink";
import MobileMenu from "./MobileMenu";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);

  // Scroll-reactive background: transparent over the cream hero, a
  // solid paper bar with a hairline once the visitor scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    // Return keyboard focus to the trigger for screen-reader users
    triggerRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? "border-b border-chocolate-950/10 bg-cream-50/95 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6">
          {/* Brand */}
          <a
            href="#home"
            className="group flex min-h-[44px] items-center gap-3 text-chocolate-950"
            aria-label="Mu'ādh ibn Jabal Institute — back to top"
          >
            <BrandMark className="h-10 w-10 shrink-0 text-chocolate-950 transition-transform duration-500 group-hover:rotate-[22.5deg]" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[19px] font-medium tracking-[0.01em]">
                Mu'ādh ibn Jabal
              </span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.34em] text-chocolate-500">
                Institute
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline flex min-h-[44px] items-center text-sm tracking-wide text-chocolate-700 transition-colors duration-300 hover:text-chocolate-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <CtaLink
                href={WA_LINKS.general}
                variant="primary"
                tone="onLight"
                icon="whatsapp"
                size="sm"
              >
                Enquire on WhatsApp
              </CtaLink>
            </div>

            {/* Mobile trigger */}
            <MobileMenuButton
              open={open}
              triggerRef={triggerRef}
              onToggle={() => setOpen((v) => !v)}
            />
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={closeMenu} />
    </>
  );
}

function MobileMenuButton({ open, onToggle, triggerRef }) {
  return (
    <button
      ref={triggerRef}
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      className="relative flex h-11 w-11 items-center justify-center text-chocolate-950 lg:hidden"
    >
      <span
        aria-hidden="true"
        className={`absolute h-px w-6 bg-current transition-all duration-300 ${
          open ? "rotate-45" : "-translate-y-[5px]"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute h-px w-6 bg-current transition-all duration-300 ${
          open ? "-rotate-45" : "translate-y-[5px]"
        }`}
      />
    </button>
  );
}
