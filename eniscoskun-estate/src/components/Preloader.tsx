"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Açılış animasyonu: gerçek logo belirir, ardından ikiz perdeler
 * açılarak sayfayı ortaya çıkarır.
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
          {/* Perdeler */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-graphite"
            exit={{ x: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-graphite"
            exit={{ x: "100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          />
          {/* Altın dikiş çizgisi */}
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
                src="/logo-white.png"
                alt="Enis Coşkun Gayrimenkul"
                width={264}
                height={74}
                priority
              />
              <motion.div
                className="mt-7 h-px w-44 bg-gold-line"
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
