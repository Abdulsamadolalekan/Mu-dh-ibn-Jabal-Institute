import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import StarMotif from "./StarMotif";
import CtaLink from "./CtaLink";
import { WA_LINKS } from "../lib/institute";

const POINTS = [
  {
    name: "Structure",
    text: "New portions are introduced slowly, at a pace suited to the student.",
  },
  {
    name: "Revision",
    text: "What is memorized today is reviewed tomorrow, and again each week, until it is secure.",
  },
  {
    name: "Correct recitation",
    text: "Each new portion is corrected for tajwīd before it is added to memory.",
  },
  {
    name: "Consistency",
    text: "Hifz is measured in years. Small, steady effort is what carries it.",
  },
];

/**
 * Hifz — the first dark movement of the page.
 * The subject carries the most weight the Institute has, so the
 * section does too: full depth, a framed panel of geometry, and
 * the relationship with the Qur'ān stated plainly.
 */
export default function HifzFeature() {
  return (
    <section className="bg-chocolate-950 py-24 text-cream-50 lg:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Words */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <AnimateOnScroll>
              <SectionLabel tone="onDark">03 · Hifz of the Qur'ān</SectionLabel>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.08}>
              <h2 className="mt-8 max-w-2xl font-display text-[40px] font-medium leading-[1.12] text-balance md:text-[48px]">
                Memorizing the Qur'ān is not simply about completing pages.{" "}
                <em className="text-cream-300">
                  It is about a lifelong relationship with the Book of
                  Allah.
                </em>
              </h2>
            </AnimateOnScroll>

            <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {POINTS.map((point, i) => (
                <AnimateOnScroll key={point.name} delay={0.1 + i * 0.06}>
                  <div className="border-t border-cream-50/15 pt-4">
                    <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-cream-100">
                      {point.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-[1.7] text-cream-300/85">
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
                  tone="onDark"
                  icon="whatsapp"
                >
                  Ask about Qur'ān memorization
                </CtaLink>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Panel */}
          <div className="lg:col-span-6">
            <AnimateOnScroll className="h-full" y={0}>
              <div className="relative flex h-full min-h-[420px] flex-col items-center justify-center overflow-hidden border border-cream-50/10 bg-chocolate-900/50 px-8 py-16 lg:min-h-[560px]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_30%,rgba(201,183,154,0.07),transparent_60%)]"
                />
                <StarMotif className="relative h-60 w-60 text-cream-50/20 sm:h-80 sm:w-80" />
                <p className="relative mt-10 text-[11px] font-medium uppercase tracking-[0.34em] text-cream-400">
                  Qur'ān · Ḥifẓ · Tajwīd
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
