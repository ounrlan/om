import Image from "next/image";
import { BASE } from "@/data/site";

/**
 * Marka kimliği — gerçek işletme rozeti (logo-badge.png), ince altın halka ve
 * iki satırlı wordmark: serif isim + altında mikro etiketli konum satırı.
 */
export default function Logo({
  size = 44,
  showSub = true,
  className = "",
}: {
  size?: number;
  showSub?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <span
        className="relative shrink-0 rounded-full p-px"
        style={{
          background:
            "linear-gradient(150deg, rgba(241,225,180,0.85), rgba(156,120,40,0.35))",
        }}
      >
        <Image
          src={`${BASE}/images/logo-badge.png`}
          alt=""
          width={size}
          height={size}
          priority
          aria-hidden="true"
          className="block rounded-full"
          style={{ width: size, height: size }}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[21px] font-normal leading-none tracking-wide2 text-cream">
          HAS SİMİT <span className="gold-text">&amp;</span> FIRIN
        </span>
        {showSub && (
          <span className="mt-1.5 font-mono text-[9px] uppercase tracking-label text-cream3">
            Bağlıca · Etimesgut
          </span>
        )}
      </span>
    </span>
  );
}

/** Dekoratif simit işareti — altın taneli halka. */
export function SimitMark({
  size = 44,
  ring = "#D4B16A",
  seed = "#F1E1B4",
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
      <circle cx={cx} cy={cy} r={R} fill="none" stroke={ring} strokeWidth={7} />
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
