import Image from "next/image";

/**
 * Marka kimliği — gerçek işletme rozeti (logo-badge.png) + Fraunces wordmark.
 * SimitMark SVG'si dekoratif kullanım için korunur.
 */

export function SimitMark({
  size = 42,
  ring = "#0E3B2E",
  seed = "#D4A94C",
  className = "",
}: {
  size?: number;
  ring?: string;
  seed?: string;
  className?: string;
}) {
  const R = 19;
  const cx = 32;
  const cy = 32;
  const n = 11;
  const seeds = Array.from({ length: n }, (_, i) => {
    const a = (i * 360) / n;
    const rad = (a * Math.PI) / 180;
    return {
      x: +(cx + R * Math.cos(rad)).toFixed(2),
      y: +(cy + R * Math.sin(rad)).toFixed(2),
      a: +a.toFixed(2),
    };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={ring} strokeWidth={9} />
      {seeds.map((s, i) => (
        <ellipse
          key={i}
          cx={s.x}
          cy={s.y}
          rx={2}
          ry={1.05}
          fill={seed}
          transform={`rotate(${(s.a + 40).toFixed(2)} ${s.x} ${s.y})`}
        />
      ))}
    </svg>
  );
}

export default function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Gerçek işletme rozeti — koyu zeminli, ince altın halka ile her iki
          header varyantında da okunur */}
      <Image
        src="/images/logo-badge.png"
        alt=""
        width={42}
        height={42}
        priority
        aria-hidden="true"
        className="h-[42px] w-[42px] rounded-full ring-1 ring-sesame/40"
      />
      <span
        className={`font-display text-[19px] font-semibold leading-none tracking-tightlg ${
          isLight ? "text-cream" : "text-pine"
        }`}
      >
        Has Simit <span className="text-sesame">&amp;</span> Fırın
      </span>
    </span>
  );
}
