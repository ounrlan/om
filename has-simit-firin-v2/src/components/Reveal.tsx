"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Giriş animasyonu — viewport'a girince bir kez çalışır.
 * v2'de hareket daha uzun ve daha yumuşak (lüks ritim).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.95,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration, delay, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Maskeli satır açılışı — metin, alttan yukarı doğru bir "perde" arkasından
 * çıkar. Dev serif başlıklarda kullanılır.
 */
export function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={`block ${className}`}>{children}</span>;
  }

  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "108%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.05, delay, ease: [0.19, 1, 0.22, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
