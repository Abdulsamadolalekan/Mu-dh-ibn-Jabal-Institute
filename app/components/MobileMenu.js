"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAV_LINKS } from "../lib/nav";
import { WA_LINKS, PHONE_TEL, PHONE_DISPLAY, WHATSAPP_DISPLAY } from "../lib/institute";
import BrandMark from "./BrandMark";
import CtaLink from "./CtaLink";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Mobile slide-out menu. A full-height panel that slides in from the
 * right with a dimmed, blurred backdrop. Large editorial links, the
 * WhatsApp CTA, and direct contact details at the foot of the panel.
 */
export default function MobileMenu({ open, onClose }) {
  const reduceMotion = useReducedMotion();
  const closeRef = useRef(null);

  // Lock page scroll while the panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape; move focus into the panel for screen-reader users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => closeRef.current?.focus(), 80);
    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open, onClose]);

  const list = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.18 } },
  };
  const row = {
    hidden: reduceMotion ? {} : { opacity: 0, x: 28 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-chocolate-950/70 backdrop-blur-[2px] lg:hidden"
          />

          <motion.aside
            key="panel"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-[24rem] flex-col border-l border-cream-50/10 bg-chocolate-950 lg:hidden"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-cream-50/10 px-7 py-5">
              <BrandMark className="h-9 w-9 text-cream-50" />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center text-cream-50"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <motion.nav
              aria-label="Mobile"
              variants={list}
              initial="hidden"
              animate="show"
              className="flex-1 overflow-y-auto px-7 pb-8 pt-4"
            >
              <ul>
                {NAV_LINKS.map((link, i) => (
                  <motion.li key={link.href} variants={row}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-baseline gap-5 border-b border-cream-50/10 py-5"
                    >
                      <span className="text-[11px] tracking-[0.3em] text-cream-400/70 transition-colors group-hover:text-cream-300">
                        0{i + 1}
                      </span>
                      <span className="font-display text-[28px] font-medium leading-[1.1] text-cream-50 transition-colors group-hover:text-cream-300">
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* Panel footer */}
            <div className="border-t border-cream-50/10 px-7 pb-9 pt-7">
              <CtaLink
                href={WA_LINKS.general}
                variant="primary"
                tone="onDark"
                icon="whatsapp"
                className="w-full"
              >
                Enquire on WhatsApp
              </CtaLink>
              <div className="mt-7 space-y-1.5 text-sm text-cream-400">
                <a href={PHONE_TEL} className="block transition-colors hover:text-cream-200">
                  Phone: {PHONE_DISPLAY}
                </a>
                <a href={WA_LINKS.general} className="block transition-colors hover:text-cream-200">
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
