"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ButtonPrimary from "./ButtonPrimary";
import Reveal from "./Reveal";
import { reviewsSection } from "@/data/site";
import { aggregate, featuredReviews } from "@/data/reviews";

/** Google'ın 4 renkli "G" logosu — yorum kaynağını belirtir. */
function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

/** Orantılı dolgu ile yıldız satırı (susam altını). */
function Stars({ value, size = 18 }: { value: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const pct = Math.max(0, Math.min(1, value - i)) * 100;
        return (
          <span
            key={i}
            className="relative inline-block"
            style={{ width: size, height: size }}
          >
            <Star
              width={size}
              height={size}
              className="absolute inset-0 text-sesame"
              fill="none"
              strokeWidth={1.5}
            />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pct}%` }}
            >
              <Star
                width={size}
                height={size}
                className="text-sesame"
                fill="#D4A94C"
                strokeWidth={1.5}
              />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function Reviews() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Otomatik ilerleme yalnızca `pausedUntil` zamanından sonra çalışır.
  // Etkileşimde ileriye alınır; hover süresince "sonsuza" ötelenir.
  const pausedUntil = useRef(0);
  const ratingText = String(aggregate.rating).replace(".", ",");

  // Adım genişliği: kart + boşluk (snap yapısıyla birebir hizalı).
  const cardStep = (el: HTMLDivElement) =>
    (el.firstElementChild?.getBoundingClientRect().width ?? 320) + 20;

  const pause = (ms = 6000) => {
    pausedUntil.current = Date.now() + ms;
  };

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    // Ok butonları prefers-reduced-motion'da da her zaman çalışır.
    el.scrollBy({ left: dir * cardStep(el), behavior: "smooth" });
    pause();
  };

  // Otomatik kayma — ~4 sn'de bir sonraki kart; sona gelince başa döner.
  // prefers-reduced-motion açıksa tamamen kapalı.
  useEffect(() => {
    if (reduce) return;
    const el = scrollerRef.current;
    if (!el) return;
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardStep(el), behavior: "smooth" });
      }
    }, 4000);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section id="yorumlar" className="scroll-mt-24">
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow mb-5">{reviewsSection.eyebrow}</p>
              <h2 className="heading-lg">{reviewsSection.heading}</h2>
              <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-ink">
                {reviewsSection.intro}
              </p>
            </div>

            {/* Google rozeti */}
            <div className="flex items-center gap-4 rounded-card bg-cream2 px-6 py-5">
              <GoogleG className="h-8 w-8 shrink-0" />
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-display text-4xl font-semibold leading-none text-pine">
                    {ratingText}
                  </span>
                  <Stars value={aggregate.rating} size={18} />
                </div>
                <a
                  href={aggregate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block font-mono text-[12.5px] font-medium tracking-wide text-ink underline-offset-2 hover:underline"
                >
                  Google&apos;da {aggregate.count} yorum
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Kaydırma okları */}
        <div className="mt-10 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Önceki yorumlar"
            className="hover-scale grid h-11 w-11 place-items-center rounded-full border border-pine/25 text-pine transition-colors hover:bg-pine hover:text-cream"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Sonraki yorumlar"
            className="hover-scale grid h-11 w-11 place-items-center rounded-full border border-pine/25 text-pine transition-colors hover:bg-pine hover:text-cream"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Yorum kaydırıcısı */}
        <div
          ref={scrollerRef}
          onMouseEnter={() => pause(365 * 24 * 60 * 60 * 1000)}
          onMouseLeave={() => pause()}
          onPointerDown={() => pause()}
          onWheel={() => pause()}
          className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {featuredReviews.map((r) => (
            <article
              key={r.author}
              className="flex w-[290px] shrink-0 snap-start flex-col rounded-card bg-cream2 p-6 sm:w-[340px]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-pine font-display text-lg font-semibold text-cream"
                  aria-hidden="true"
                >
                  {r.author.charAt(0).toLocaleUpperCase("tr-TR")}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-pine">
                    {r.author}
                  </p>
                  <Stars value={r.rating} size={14} />
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-ink">
                &ldquo;{r.text}&rdquo;
              </p>
            </article>
          ))}
        </div>

        {/* CTA'lar */}
        <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-5">
          <ButtonPrimary href={reviewsSection.ctaPrimary.href} external>
            {reviewsSection.ctaPrimary.label}
          </ButtonPrimary>
          <a
            href={reviewsSection.ctaText.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {reviewsSection.ctaText.label}
          </a>
        </div>
      </div>
    </section>
  );
}
