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
              <h2 className="mt-7 font-display text-4xl leading-[1.1] text-balance sm:text-5xl">
                The Qur'ān, and the character that carries it.
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <AnimateOnScroll delay={0.14}>
              <div className="space-y-6 text-[15px] leading-relaxed text-chocolate-700 sm:text-base">
                <p>
                  Mu'ādh ibn Jabal Institute is based at Kamadupe Masjid in
                  Adeun, Abeokuta, Ogun State. We teach in person, and we
                  teach online. The students in our classroom and the
                  students learning from home follow the same path.
                </p>
                <p>
                  We teach Qur'ān memorization, Islamic studies, Arabic, and
                  tajwīd, and we believe knowledge should be accompanied by
                  good character and manners. In practice, each subject
                  supports the others.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
