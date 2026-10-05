import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import StarMotif from "./StarMotif";
import CtaLink from "./CtaLink";
import { WA_LINKS } from "../lib/institute";

const POINTS = [
  {
    name: "Structured Memorization",
    text: "New portions are introduced at a measured pace, matched to each student.",
  },
  {
    name: "Steady Revision",
    text: "What is memorized today is revisited tomorrow — daily and weekly, so it stays.",
  },
  {
    name: "Proper Recitation",
    text: "Every new portion is corrected for Tajwīd before it is added to memory.",
  },
  {
    name: "Consistency",
    text: "Small, steady practice that holds — a journey measured in years, not weeks.",
  },
];

/**
 * Hifz — the feature spread. Cream ground, a full-height dark
 * panel carrying the geometry, and the words on the left doing
 * the talking. This is the section a parent remembers.
 */
export default function HifzFeature() {
  return (
    <section className="bg-cream-50 py-24 text-chocolate-950 lg:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Words */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <AnimateOnScroll>
              <SectionLabel tone="onLight">03 · Hifz of the Qur'ān</SectionLabel>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.08}>
              <h2 className="mt-7 font-display text-4xl leading-[1.08] text-balance sm:text-5xl">
                Begin the Journey of Hifz
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.16}>
              <blockquote className="mt-9 border-l border-chocolate-400 pl-6 font-display text-xl italic leading-relaxed text-chocolate-800 sm:text-[1.4rem]">
                “Memorizing the Qur'ān is not simply about completing pages.
                It is about building a lifelong relationship with the Book of
                Allah.”
              </blockquote>
            </AnimateOnScroll>

            <div className="mt-11 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {POINTS.map((point, i) => (
                <AnimateOnScroll key={point.name} delay={0.1 + i * 0.06}>
                  <div className="border-t border-chocolate-950/15 pt-4">
                    <h3 className="text-sm font-semibold tracking-wide text-chocolate-950">
                      {point.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-chocolate-700">
                      {point.text}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.24}>
              <div className="mt-11">
                <CtaLink
                  href={WA_LINKS.hifz}
                  variant="primary"
                  tone="onLight"
                  icon="whatsapp"
                >
                  Ask About Hifz
                </CtaLink>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Panel */}
          <div className="lg:col-span-6">
            <AnimateOnScroll className="h-full" y={0}>
              <div className="relative flex h-full min-h-[420px] flex-col items-center justify-center overflow-hidden bg-chocolate-950 px-8 py-16 lg:min-h-[560px]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_30%,rgba(201,183,154,0.10),transparent_60%)]"
                />
                <StarMotif className="relative h-60 w-60 text-cream-50/20 sm:h-80 sm:w-80" />
                <div className="relative mt-10 text-center">
                  <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-cream-400">
                    Qur'ān · Ḥif · Tajwīd
                  </p>
                  <p className="mt-3 font-display text-xl italic text-cream-200">
                    A lifelong relationship with the Book of Allah
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
