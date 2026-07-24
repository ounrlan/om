"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Açılış animasyonu — tam ekran krem overlay; ortada işletme rozeti zarif
 * bir belirişle (scale 0.85→1) gelir + fade-in wordmark. ~1.5s sonra yukarı
 * kayıp yok olur (toplam ~2s). prefers-reduced-motion açıksa hiç gösterilmez.
 */
export default function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hareket azaltma tercihinde overlay'i anında kaldır, scroll'a dokunma
    if (reduce) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, [reduce]);

  const unlock = () => {
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence onExitComplete={unlock}>
      {show && !reduce && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="drop-shadow-[0_14px_34px_rgba(14,59,46,0.28)]"
          >
            <Image
              src="/images/logo-badge.png"
              alt=""
              width={128}
              height={128}
              priority
              className="h-32 w-32 rounded-full"
            />
          </motion.div>
          <motion.p
            className="mt-6 font-display text-2xl font-semibold tracking-tightlg text-pine"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          >
            Has Simit <span className="text-sesame">&amp;</span> Fırın
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
