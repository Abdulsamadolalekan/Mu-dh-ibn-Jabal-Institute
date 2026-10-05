import AnimateOnScroll from "./AnimateOnScroll";
import SectionLabel from "./SectionLabel";

/**
 * About the Institute.
 * A quiet moment: the heading states the philosophy, and two
 * short paragraphs say where the Institute is, how it teaches,
 * and what it believes. No lists, no cards. Just the idea.
 */
export default function About() {
  return (
    <section id="about" className="bg-cream-50 py-24 text-chocolate-950 lg:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <AnimateOnScroll>
              <SectionLabel tone="onLight">01 · The Institute</SectionLabel>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.08}>
              <h2 className="mt-7 font-display text-[40px] font-medium leading-[1.1] text-balance md:text-[48px]">
                The Qur'ān, and the character that carries it.
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <AnimateOnScroll delay={0.14}>
              <div className="space-y-6 text-[15px] leading-[1.7] text-chocolate-700 sm:text-base">
                <p>
                  The Institute is based at Kamadupe Masjid in Adeun,
                  Abeokuta, Ogun State. We teach in person and online, and
                  the two follow the same path.
                </p>
                <p>
                  Knowing the Qur'ān is one thing. Being formed by it is
                  another. That is why manners, discipline, and character
                  are taught in the same room, with the same seriousness.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
