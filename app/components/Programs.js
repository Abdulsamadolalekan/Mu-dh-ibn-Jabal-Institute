import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import StarMotif from "./StarMotif";
import CtaLink from "./CtaLink";
import { PROGRAMS, WA_LINKS } from "../lib/institute";

const featured = PROGRAMS[0];
const rest = PROGRAMS.slice(1);

/**
 * Programs — "What We Teach".
 * An editorial index on warm paper. Hifz is presented first and
 * largest, as the heart of the Institute. The remaining five
 * studies follow, each with a distinct description.
 */
export default function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden bg-cream-100 py-24 text-chocolate-950 lg:py-32">
      <div className="container-x relative">
        <div className="max-w-2xl">
          <AnimateOnScroll>
            <SectionLabel tone="onLight">02 · Programs</SectionLabel>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.08}>
            <h2 className="mt-7 font-display text-4xl leading-[1.08] sm:text-5xl">
              What We Teach
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Featured — Hifz */}
        <AnimateOnScroll className="mt-16 lg:mt-20">
          <article className="grid gap-10 border-y border-chocolate-950/15 py-12 lg:grid-cols-12 lg:items-center lg:py-16">
            <div className="lg:col-span-8">
              <span
                aria-hidden="true"
                className="font-display text-6xl italic leading-none text-chocolate-400 sm:text-7xl"
              >
                {featured.number}
              </span>
              <h3 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-4xl">
                {featured.name}
              </h3>
              <p className="mt-5 max-w-xl leading-relaxed text-chocolate-700">
                {featured.short}
              </p>
              <div className="mt-8">
                <CtaLink href={WA_LINKS.hifz} variant="text" tone="onLight" icon="arrow">
                  Ask about Hifz
                </CtaLink>
              </div>
            </div>
            <div className="hidden lg:col-span-4 lg:block" aria-hidden="true">
              <StarMotif className="mx-auto h-52 w-52 text-chocolate-950/[0.08]" />
            </div>
          </article>
        </AnimateOnScroll>

        {/* The remaining five */}
        <ul className="mt-2 grid gap-x-14 md:grid-cols-2">
          {rest.map((program, i) => (
            <li key={program.id}>
              <AnimateOnScroll delay={(i % 2) * 0.08}>
                <div className="group border-t border-chocolate-950/15 py-8">
                  <span className="text-xs font-medium tracking-[0.22em] text-chocolate-600 transition-colors duration-300 group-hover:text-chocolate-950">
                    {program.number}
                  </span>
                  <h3 className="mt-3 font-display text-2xl">
                    {program.name}
                  </h3>
                  <p className="mt-2.5 max-w-md text-sm leading-relaxed text-chocolate-700">
                    {program.short}
                  </p>
                </div>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>

        <AnimateOnScroll delay={0.1} className="mt-10">
          <p className="text-sm text-chocolate-600">
            Not sure where to begin?{" "}
            <a
              href={WA_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-chocolate-950"
            >
              Ask us on WhatsApp
            </a>
            .
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
