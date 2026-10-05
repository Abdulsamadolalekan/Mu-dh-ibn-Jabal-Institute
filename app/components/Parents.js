import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import CtaLink from "./CtaLink";
import { WA_LINKS } from "../lib/institute";

const LIST = [
  "Qur'ān and proper tajwīd",
  "Islamic Studies",
  "Arabic Language",
  "Discipline and self-responsibility",
  "Good manners and character",
];

/**
 * For Parents.
 * A parent arriving here is asking: can I trust this place, what
 * exactly is taught, and how do I ask questions? This section
 * answers plainly, with no borrowed credibility.
 */
export default function Parents() {
  return (
    <section className="bg-cream-50 py-24 text-chocolate-950 lg:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <AnimateOnScroll>
              <SectionLabel tone="onLight">06 · For Parents</SectionLabel>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.08}>
              <h2 className="mt-7 font-display text-[40px] font-medium leading-[1.12] text-balance md:text-[48px]">
                The Qur'ān, taught properly.
                <span className="block italic text-chocolate-500">
                  The child, treated with care.
                </span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.16}>
              <div className="mt-9 max-w-xl space-y-5 text-[15px] leading-[1.7] text-chocolate-700 sm:text-base">
                <p>
                  A parent's first question is usually the same. Will my
                  child learn the Qur'ān properly? That is the first task of
                  the Institute. Around it, the child learns Arabic, Islamic
                  knowledge, and the manners that make knowledge useful.
                </p>
                <p>
                  We keep the pace steady and the correction honest. If you
                  would like to speak with us about your child, we would be
                  glad to hear from you.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.22}>
              <div className="mt-10">
                <CtaLink href={WA_LINKS.general} variant="primary" tone="onLight" icon="whatsapp">
                  Speak with the Institute
                </CtaLink>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="lg:col-span-5">
            <AnimateOnScroll delay={0.1}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.32em] text-chocolate-600">
                What your child learns
              </h3>
            </AnimateOnScroll>
            <ul className="mt-6">
              {LIST.map((item, i) => (
                <li key={item}>
                  <AnimateOnScroll delay={0.12 + i * 0.06}>
                    <div
                      className={`flex items-baseline gap-5 border-t border-chocolate-950/15 py-5 ${
                        i === LIST.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <span className="text-[11px] tracking-[0.24em] text-chocolate-600">
                        0{i + 1}
                      </span>
                      <span className="font-display text-[22px] font-medium leading-snug md:text-[24px]">
                        {item}
                      </span>
                    </div>
                  </AnimateOnScroll>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
