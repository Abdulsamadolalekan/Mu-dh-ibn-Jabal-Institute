import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";
import { PROGRAMS } from "../lib/institute";

/**
 * Positioning — "More than memorization."
 * Asymmetric composition: the institute statement holds the left
 * column while the six studies are presented as a quiet editorial
 * index on the right — numbered, hairline-separated, with Hifz
 * carrying the first place it is owed.
 */
export default function About() {
  return (
    <section id="about" className="bg-cream-50 py-24 text-chocolate-950 lg:py-32">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Statement */}
          <div className="lg:col-span-5">
            <AnimateOnScroll>
              <SectionLabel tone="onLight">01 · The Institute</SectionLabel>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.08}>
              <h2 className="mt-7 font-display text-4xl leading-[1.08] text-balance sm:text-5xl">
                More than memorization. A foundation for life.
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.16}>
              <div className="mt-9 space-y-5 text-[15px] leading-relaxed text-chocolate-700 sm:text-base">
                <p>
                  Mu'ādh ibn Jabal Institute is a centre of Islamic learning
                  based at Kamadupe Masjid, Adeun, Abeokuta, Ogun State.
                  Students learn with us in person or online — the same
                  curriculum and the same attention, whether they sit in the
                  classroom or study from home.
                </p>
                <p>
                  At the Institute, each study deepens the others: the Qur'ān
                  is memorized with proper Tajwīd, Arabic opens the language
                  of the revelation, Islamic Studies gives knowledge its
                  roots, and character and manners give it its direction.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* The six studies, as an index */}
          <div className="lg:col-span-7">
            <ul>
              {PROGRAMS.map((program, i) => (
                <li key={program.id}>
                  <AnimateOnScroll delay={i * 0.06}>
                    <div
                      className={`grid grid-cols-[3.5rem_1fr] items-baseline gap-4 border-t border-chocolate-950/15 py-6 sm:grid-cols-[4.5rem_1fr] sm:py-7 ${
                        i === PROGRAMS.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <span className="text-xs font-medium tracking-[0.22em] text-chocolate-600">
                        {program.number}
                      </span>
                      <div>
                        <h3
                          className={`font-display leading-tight text-chocolate-950 ${
                            i === 0
                              ? "text-3xl text-balance sm:text-4xl"
                              : "text-2xl sm:text-[1.65rem]"
                          }`}
                        >
                          {program.name}
                        </h3>
                        <p
                          className={`mt-2.5 leading-relaxed text-chocolate-700 ${
                            i === 0 ? "max-w-lg text-[15px] sm:text-base" : "max-w-md text-sm"
                          }`}
                        >
                          {program.short}
                        </p>
                      </div>
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
