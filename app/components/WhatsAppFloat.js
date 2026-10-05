"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";
import { WA_LINKS } from "../lib/institute";

/**
 * Mobile-only floating WhatsApp button. Appears once the visitor
 * has scrolled past the hero, so the primary CTA is always within
 * reach — and disappears on larger screens where the header CTA
 * already is.
 */
export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WA_LINKS.general}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire on WhatsApp"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-chocolate-950 text-cream-50 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.55)] ring-1 ring-cream-50/25 transition-transform duration-300 active:scale-95 md:hidden"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
