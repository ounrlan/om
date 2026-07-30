import type { ReactNode } from "react";
import Reveal, { MaskLine } from "./Reveal";

/**
 * Bölüm başlığı — numaralı altın etiket + dev serif başlık + giriş metni.
 * Tüm bölümlerde aynı ritmi kurar.
 */
export default function SectionHead({
  index,
  eyebrow,
  heading,
  accent,
  intro,
  align = "left",
  className = "",
}: {
  index: string;
  eyebrow: string;
  heading: string;
  accent?: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      <Reveal>
        <p className={`eyebrow mb-7 ${centered ? "justify-center" : ""}`}>
          <span className="text-gold/60">{index}</span>
          <span className="text-gold">{eyebrow}</span>
        </p>
      </Reveal>

      <h2 className="heading-lg">
        <MaskLine>{heading}</MaskLine>
        {accent && (
          <MaskLine delay={0.1}>
            <em className="gold-text font-display font-light italic">{accent}</em>
          </MaskLine>
        )}
      </h2>

      {intro && (
        <Reveal delay={0.18}>
          <p
            className={`mt-7 text-[16.5px] font-light leading-[1.8] text-cream2 ${
              centered ? "mx-auto max-w-[56ch]" : "max-w-[54ch]"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Bölümler arası ince altın ayraç. */
export function HairRule({ children }: { children?: ReactNode }) {
  return (
    <div className="container-x">
      <div className="flex items-center gap-6">
        <span className="h-px flex-1 bg-[linear-gradient(90deg,transparent,rgba(212,177,106,0.28))]" />
        {children && (
          <span className="font-mono text-[9.5px] uppercase tracking-label text-cream3">
            {children}
          </span>
        )}
        <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(212,177,106,0.28),transparent)]" />
      </div>
    </div>
  );
}
