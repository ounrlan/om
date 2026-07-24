"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Açılış animasyonu: logo belirir, ardından ikiz perdeler açılarak
 * sayfayı ortaya çıkarır.
 */
export default function Preloader() {
  const [phase, setPhase] = useState<"logo" | "done">("logo");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const toDone = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 1600);
    return () => {
      clearTimeout(toDone);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.4, delay: 1 } }}
          aria-hidden="true"
        >
          {/* Curtains */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-ink"
            exit={{ x: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-ink"
            exit={{ x: "100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          />
          {/* Gold seam between the curtains */}
          <motion.div
            className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gold/60"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          <motion.div
            className="relative z-10 flex flex-col items-center"
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.5 } }}
          >
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/logo.png"
                alt=""
                width={96}
                height={96}
                priority
                className="mb-5"
              />
              <span className="font-display text-3xl font-semibold tracking-[0.25em] text-cream sm:text-4xl">
                UYG <span className="text-gold">GOLD</span>
              </span>
              <motion.span
                className="mt-3 text-[10px] font-medium uppercase tracking-[0.7em] text-stone"
                initial={{ opacity: 0, letterSpacing: "1.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.7em" }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Estate
              </motion.span>
              <motion.div
                className="mt-5 h-px w-40 bg-gold-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
