import AnimateOnScroll from "./AnimateOnScroll";
import StarMotif from "./StarMotif";

/**
 * Character — the second dark movement of the page.
 * Nothing but type, space, and a whisper of geometry. A
 * statement of educational philosophy, not a poster.
 */
export default function Character() {
  return (
    <section className="relative overflow-hidden bg-chocolate-950 py-28 text-cream-50 lg:py-40">
      <StarMotif className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 text-cream-50/[0.035]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(201,183,154,0.05),transparent_65%)]"
      />

      <div className="container-x relative text-center">
        <AnimateOnScroll>
          <h2 className="mx-auto max-w-4xl font-display text-[2.6rem] leading-[1.06] text-balance sm:text-6xl lg:text-7xl">
            Knowledge should shape
            <span className="block italic text-cream-300">character.</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-cream-300 sm:text-lg">
            We teach students to carry what they learn beyond the classroom,
            into their manners, their discipline, and the way they treat the
            people around them. Knowledge that does not shape character is
            only half learned.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
