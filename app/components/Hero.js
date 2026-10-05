"use client";

import { motion, useReducedMotion } from "framer-motion";
import StarMotif from "./StarMotif";
import CtaLink from "./CtaLink";
import { ADDRESS_LINE_1, WA_LINKS } from "../lib/institute";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Hero — the frontispiece of the site.
 * Warm cream, deep chocolate type, one idea presented with
 * space to breathe: what the Institute teaches, where it is,
 * and how to reach it.
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
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-cream-50"
    >
      {/* A whisper of warmth, top right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_0%,rgba(26,14,10,0.05),transparent_55%)]"
      />

      {/* Quiet geometry, in ink at low strength */}
      <StarMotif className="pointer-events-none absolute -right-48 top-1/2 hidden h-[580px] w-[580px] -translate-y-1/2 text-chocolate-950/[0.05] sm:block" />
      <StarMotif className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 text-chocolate-950/[0.04]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-x relative pb-24 pt-40"
      >
        <motion.p
          variants={item}
          className="text-[11px] font-medium uppercase tracking-[0.34em] text-chocolate-600"
        >
          Islamic Education in Abeokuta
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-10 max-w-5xl font-display text-[40px] font-medium leading-[1.07] tracking-[-0.01em] text-balance text-chocolate-950 md:text-[54px] lg:text-[70px] xl:text-[78px]"
        >
          The Qur'ān, portion by portion.{" "}
          <em className="text-chocolate-500">The character, day by day.</em>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-9 max-w-xl text-base leading-[1.7] text-chocolate-700 sm:text-lg"
        >
          The Institute teaches the Qur'ān and its recitation, the Arabic
          language, Islamic knowledge, and the manners that carry them.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col gap-3.5 text-sm text-chocolate-600 sm:flex-row sm:items-center sm:gap-10"
        >
          <span className="flex items-center gap-3.5">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-chocolate-400" />
            <span>
              In person at{" "}
              <span className="text-chocolate-950">{ADDRESS_LINE_1}</span>
            </span>
          </span>
          <span className="flex items-center gap-3.5">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-chocolate-400" />
            <span>
              Online, <span className="text-chocolate-950">from anywhere</span>
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10"
        >
          <CtaLink href={WA_LINKS.general} variant="primary" tone="onLight" icon="whatsapp">
            Enquire on WhatsApp
          </CtaLink>
          <CtaLink href="#programs" variant="text" tone="onLight" icon="arrow">
            Explore our programs
          </CtaLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
