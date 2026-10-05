import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import CtaLink from "./CtaLink";
import { WA_LINKS } from "../lib/institute";

const LIST = [
  "Qur'ān and proper Tajwīd",
  "Islamic Studies",
  "Arabic Language",
  "Discipline and self-responsibility",
  "Good manners and character",
];

/**
 * For Parents — a quiet, sincere invitation. No testimonials,
 * no statistics, no superlatives. Just what the child will
 * learn, and an open door.
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
              <h2 className="mt-7 font-display text-4xl leading-[1.08] text-balance sm:text-5xl">
                Give Your Child a Stronger Foundation
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.16}>
              <div className="mt-9 max-w-xl space-y-5 text-[15px] leading-relaxed text-chocolate-700 sm:text-base">
                <p>
                  Every child deserves to grow up with the Qur'ān close to
                  the heart and good character in daily life. At the
                  Institute, your child learns Qur'ān, Islamic knowledge,
                  Arabic and Tajwīd — alongside the discipline and manners
                  that turn knowledge into a way of living.
                </p>
                <p>
                  We keep the learning honest and the pace steady. If you
                  would like to speak with us about your child&rsquo;s
                  studies, we would be glad to hear from you.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.22}>
              <div className="mt-10">
                <CtaLink href={WA_LINKS.general} variant="primary" tone="onLight" icon="whatsapp">
                  Speak With Us
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
                      <span className="font-display text-xl leading-snug text-chocolate-950 sm:text-[1.4rem]">
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
