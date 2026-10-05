"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Scroll-triggered reveal. Content fades and rises gently the first
 * time it enters the viewport, then stays put. Honours the visitor's
 * prefers-reduced-motion setting by rendering without any movement.
 */
export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
  y = 26,
  duration = 0.75,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
