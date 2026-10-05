"use client";

import { motion, useReducedMotion } from "framer-motion";
import StarMotif from "./StarMotif";
import CtaLink from "./CtaLink";
import { ADDRESS_LINE_1, WA_LINKS } from "../lib/institute";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Hero — the single statement the whole site is built on.
 * Typographic, full-height, dark. Geometry stays at the edges,
 * barely visible; the words do the work.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.13, delayChildren: 0.25 },
    },
  };
  const item = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-chocolate-950"
    >
      {/* Ambient warmth, top-right and bottom-left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_0%,rgba(201,183,154,0.09),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(75%_55%_at_0%_100%,rgba(201,183,154,0.05),transparent_60%)]"
      />

      {/* Quiet geometry */}
      <StarMotif className="pointer-events-none absolute -right-48 top-1/2 hidden h-[580px] w-[580px] -translate-y-1/2 text-cream-50/[0.055] sm:block" />
      <StarMotif className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 text-cream-50/[0.04]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-x relative pb-24 pt-40"
      >
        <motion.p
          variants={item}
          className="text-[11px] font-medium uppercase tracking-[0.34em] text-cream-400"
        >
          Islamic Education · Abeokuta, Nigeria
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-9 max-w-5xl font-display text-[34px] leading-[1.12] text-cream-50 sm:text-[44px] sm:leading-[1.08] md:text-[51px] lg:text-[68px] xl:text-[74px]"
        >
          <span className="block">Preparing Muslim generation</span>
          <span className="block">with knowledge and</span>
          <span className="block italic text-cream-300">noble character</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-9 max-w-xl text-base leading-relaxed text-cream-300 sm:text-lg"
        >
          A structured place to learn the Qur'ān, its correct recitation, the
          Arabic language and the knowledge of Islam — taught with patience,
          discipline and care.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-3.5 text-sm text-cream-400 sm:flex-row sm:items-center sm:gap-10"
        >
          <span className="flex items-center gap-3.5">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-cream-400/90" />
            <span>
              <span className="text-cream-100">Physical Learning</span> —{" "}
              {ADDRESS_LINE_1}
            </span>
          </span>
          <span className="flex items-center gap-3.5">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-cream-400/90" />
            <span>
              <span className="text-cream-100">Online Learning</span> — from
              anywhere
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10"
        >
          <CtaLink href={WA_LINKS.general} variant="primary" tone="onDark" icon="whatsapp">
            Enquire on WhatsApp
          </CtaLink>
          <CtaLink href="#programs" variant="text" tone="onDark" icon="arrow">
            Explore Our Programs
          </CtaLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
