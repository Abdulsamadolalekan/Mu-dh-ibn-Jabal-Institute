import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import StarMotif from "./StarMotif";
import CtaLink from "./CtaLink";
import { ADDRESS_LINE_1, ADDRESS_LINE_2, WA_LINKS } from "../lib/institute";

/**
 * Learning options — in person or online.
 * Two panels, two temperaments: the physical classroom is a full
 * dark panel (solid, present); online learning is a light,
 * outlined panel (open, reachable). Same standard either way.
 */
export default function Learning() {
  return (
    <section id="learning" className="bg-cream-50 py-24 text-chocolate-950 lg:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <AnimateOnScroll>
            <SectionLabel tone="onLight">05 · Learning Options</SectionLabel>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.08}>
            <h2 className="mt-7 font-display text-4xl leading-[1.08] text-balance sm:text-5xl">
              In person in Abeokuta, or online from home.
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* In person — dark panel */}
          <AnimateOnScroll className="lg:col-span-7">
            <div className="relative flex h-full min-h-[400px] flex-col overflow-hidden bg-chocolate-950 p-10 text-cream-50 sm:p-14">
              <StarMotif className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 text-cream-50/[0.07]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-cream-400">
                In Person
              </p>
              <h3 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
                Learn With Us In Person
              </h3>
              <p className="mt-5 max-w-md leading-relaxed text-cream-300">
                Our classroom is Kamadupe Masjid, Adeun, Abeokuta — a focused
                environment where students learn together, side by side, with
                their teachers close at hand.
              </p>
              <div className="relative mt-auto pt-12">
                <p className="font-display text-xl text-cream-100 sm:text-2xl">
                  {ADDRESS_LINE_1}
                </p>
                <p className="mt-1.5 text-sm text-cream-400">{ADDRESS_LINE_2}</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Online — light panel */}
          <AnimateOnScroll delay={0.1} className="lg:col-span-5">
            <div className="flex h-full min-h-[400px] flex-col border border-chocolate-950/25 p-10 sm:p-14">
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-chocolate-600">
                Online
              </p>
              <h3 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
                Learn With Us Online
              </h3>
              <p className="mt-5 max-w-md leading-relaxed text-chocolate-700">
                Distance learners study with the same structure and the same
                care — guided step by step, at a steady pace.
              </p>
              <div className="mt-auto pt-12">
                <CtaLink href={WA_LINKS.learning} variant="text" tone="onLight" icon="arrow">
                  Enquire about online learning
                </CtaLink>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={0.12} className="mt-10">
          <CtaLink
            href={WA_LINKS.learning}
            variant="primary"
            tone="onLight"
            icon="whatsapp"
          >
            Ask About Learning Options
          </CtaLink>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
