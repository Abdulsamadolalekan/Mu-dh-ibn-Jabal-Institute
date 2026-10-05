"use client";

import { motion, useReducedMotion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  PHONE_TEL,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  WA_LINKS,
} from "../lib/institute";

/**
 * Find Us — location, phone and WhatsApp, with a stylised map.
 * The map is an abstract study of the area in deep chocolate:
 * streets, blocks, and a quiet ring around the marker. It is
 * deliberately not an iframe, so it never fights the design.
 */
export default function Location() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="location" className="bg-cream-100 py-24 text-chocolate-950 lg:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Details */}
          <div className="lg:col-span-6">
            <AnimateOnScroll>
              <SectionLabel tone="onLight">Visit the Institute</SectionLabel>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.08}>
              <h2 className="mt-7 font-display text-4xl leading-[1.08] sm:text-5xl">
                Find Us
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.14}>
              <address className="mt-9 font-display text-2xl not-italic leading-snug sm:text-3xl">
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </address>
            </AnimateOnScroll>

            <div className="mt-12 grid gap-9 sm:grid-cols-2">
              <AnimateOnScroll delay={0.18}>
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-chocolate-600">
                  Phone
                </p>
                <a
                  href={PHONE_TEL}
                  className="link-underline mt-3 inline-block font-display text-2xl"
                >
                  {PHONE_DISPLAY}
                </a>
              </AnimateOnScroll>
              <AnimateOnScroll delay={0.24}>
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-chocolate-600">
                  WhatsApp
                </p>
                <a
                  href={WA_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-3 inline-block font-display text-2xl"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Stylised map */}
          <div className="lg:col-span-6">
            <AnimateOnScroll y={0}>
              <div className="relative h-full min-h-[420px] overflow-hidden bg-chocolate-950">
                <MapArt reduceMotion={reduceMotion} />
                <p className="absolute bottom-5 left-5 text-[11px] font-medium uppercase tracking-[0.28em] text-cream-400">
                  Kamadupe Masjid · Adeun, Abeokuta
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Abstract map — streets, blocks and a quiet ring around the
 * marker. No street names; just the feel of a place.
 */
function MapArt({ reduceMotion }) {
  return (
    <svg
      viewBox="0 0 480 480"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full text-cream-400"
      aria-hidden="true"
      focusable="false"
    >
      {/* Street lines */}
      <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35">
        <path d="M-20 140 C 120 118, 210 196, 500 168" />
        <path d="M-20 306 C 140 324, 262 258, 500 330" />
        <path d="M118 -20 C 138 140, 96 300, 158 500" />
        <path d="M322 -20 C 302 158, 362 322, 308 500" />
        <path d="M-20 62 L 500 98" opacity="0.6" />
        <path d="M58 -20 L 18 500" opacity="0.6" />
        <path d="M424 -20 L 462 500" opacity="0.6" />
        <path d="M-20 420 L 500 400" opacity="0.6" />
      </g>

      {/* Blocks */}
      <g stroke="currentColor" fill="none" opacity="0.22">
        <rect x="196" y="216" width="72" height="52" />
        <rect x="112" y="236" width="56" height="62" />
        <rect x="300" y="238" width="64" height="48" />
        <rect x="212" y="96" width="58" height="44" />
        <rect x="320" y="110" width="50" height="40" />
        <rect x="180" y="330" width="60" height="46" />
        <rect x="300" y="344" width="54" height="44" />
      </g>

      {/* Rings around the marker */}
      <g stroke="currentColor" fill="none">
        <circle cx="240" cy="212" r="58" opacity="0.3" />
        <circle cx="240" cy="212" r="104" opacity="0.18" />
        <circle cx="240" cy="212" r="150" opacity="0.1" />
      </g>

      {/* Gentle pulse */}
      {!reduceMotion && (
        <motion.circle
          cx="240"
          cy="212"
          r="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ r: 18, opacity: 0.5 }}
          animate={{ r: 58, opacity: 0 }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* Marker — an eight-pointed star */}
      <g transform="translate(240 212)" stroke="#ede0d0" fill="none">
        <rect x="-10" y="-10" width="20" height="20" strokeWidth="1.4" />
        <rect
          x="-10"
          y="-10"
          width="20"
          height="20"
          strokeWidth="1.4"
          transform="rotate(45)"
        />
        <circle r="2.6" fill="#ede0d0" stroke="none" />
      </g>
    </svg>
  );
}
