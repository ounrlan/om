"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Sayfanın en üstünde ince altın ilerleme çizgisi.
 * Header'ın üstünde durur; okuma ilerlemesini gösterir.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: width }}
      className="fixed left-0 right-0 top-0 z-[80] h-px origin-left bg-gradient-to-r from-golddk via-gold to-goldlt"
    />
  );
}
