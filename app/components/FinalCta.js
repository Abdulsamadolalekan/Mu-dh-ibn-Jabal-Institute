import AnimateOnScroll from "./AnimateOnScroll";
import CtaLink from "./CtaLink";
import {
  PHONE_TEL,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  WA_LINKS,
} from "../lib/institute";

/**
 * The closing invitation — centred, calm, and unmissable.
 * Both numbers are shown in full, both CTAs one tap away.
 */
export default function FinalCta() {
  return (
    <section id="contact" className="bg-cream-50 py-24 text-chocolate-950 lg:py-36">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <p className="flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-chocolate-600">
              <span aria-hidden="true" className="h-px w-9 bg-chocolate-600/50" />
              Enquiries
              <span aria-hidden="true" className="h-px w-9 bg-chocolate-600/50" />
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.08}>
            <h2 className="mt-8 font-display text-[44px] font-medium leading-[1.08] text-balance md:text-[56px]">
              The first step is a conversation.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.16}>
            <p className="mx-auto mt-7 max-w-xl text-base leading-[1.7] text-chocolate-700 sm:text-lg">
              A short message on WhatsApp is all it takes to begin. Tell us
              about your child, and we will tell you how the studies work,
              in person or online.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.22}>
            <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-chocolate-600">
                  WhatsApp
                </p>
                <a
                  href={WA_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-3 inline-block font-display text-2xl text-chocolate-950 sm:text-3xl"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-chocolate-600">
                  Phone
                </p>
                <a
                  href={PHONE_TEL}
                  className="link-underline mt-3 inline-block font-display text-2xl text-chocolate-950 sm:text-3xl"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CtaLink href={WA_LINKS.general} variant="primary" tone="onLight" icon="whatsapp">
                Enquire on WhatsApp
              </CtaLink>
              <CtaLink href={PHONE_TEL} variant="outline" tone="onLight">
                Call the institute
              </CtaLink>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
