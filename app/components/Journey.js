"use client";

import { motion, useReducedMotion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";

const STAGES = [
  {
    num: "01",
    title: "Learn",
    text: "The Qur'ān, its recitation, and the foundations of the faith.",
  },
  {
    num: "02",
    title: "Understand",
    text: "Arabic and Islamic studies give every lesson its meaning.",
  },
  {
    num: "03",
    title: "Practice",
    text: "Daily recitation and revision, and the habits that make knowledge permanent.",
  },
  {
    num: "04",
    title: "Live It",
    text: "What is learned is carried home, and into the years after.",
  },
];

/**
 * The Learning Journey — four stages on a single thread.
 * A quiet cream movement between the two dark ones. On desktop
 * the hairline draws itself across the numbers as the section
 * enters the viewport; on mobile it becomes a vertical path.
 */
export default function Journey() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-cream-50 py-24 text-chocolate-950 lg:py-32">
      <div className="container-x relative">
        <div className="max-w-2xl">
          <AnimateOnScroll>
            <SectionLabel tone="onLight">04 · How We Teach</SectionLabel>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.08}>
            <h2 className="mt-7 font-display text-[40px] font-medium leading-[1.1] text-balance md:text-[48px]">
              From the first letter to everyday life.
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Desktop — horizontal thread */}
        <div className="relative mt-20 hidden lg:block">
          <motion.div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 h-px origin-left bg-chocolate-950/15"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          />
          <ol className="grid grid-cols-4 gap-10">
            {STAGES.map((stage, i) => (
              <li key={stage.num}>
                <AnimateOnScroll delay={0.15 + i * 0.1}>
                  <span
                    className="relative z-10 inline-block bg-cream-50 pr-6 font-display text-[44px] italic leading-none text-chocolate-400"
                    aria-hidden="true"
                  >
                    {stage.num}
                  </span>
                  <h3 className="mt-6 font-display text-[26px] font-medium md:text-[28px]">{stage.title}</h3>
                  <p className="mt-3 max-w-[15.5rem] text-[15px] leading-[1.7] text-chocolate-700">
                    {stage.text}
                  </p>
                </AnimateOnScroll>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile — vertical thread */}
        <ol className="relative mt-16 lg:hidden">
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-5 top-2 w-px bg-chocolate-950/15"
          />
          {STAGES.map((stage, i) => (
            <li key={stage.num} className="relative flex gap-7 pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center bg-cream-50"
              >
                <span className="h-2 w-2 rotate-45 bg-chocolate-500" />
              </span>
              <AnimateOnScroll delay={i * 0.05} className="min-w-0">
                <span className="text-[11px] font-medium tracking-[0.3em] text-chocolate-600">
                  {stage.num}
                </span>
                <h3 className="mt-2.5 font-display text-[26px] font-medium md:text-[28px]">{stage.title}</h3>
                <p className="mt-2.5 text-[15px] leading-[1.7] text-chocolate-700">
                  {stage.text}
                </p>
              </AnimateOnScroll>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
