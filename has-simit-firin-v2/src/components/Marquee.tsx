import { marqueeItems } from "@/data/site";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {marqueeItems.map((text, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-10 font-mono text-[10.5px] uppercase tracking-label text-cream2">
            {text}
          </span>
          <span
            aria-hidden="true"
            className="inline-block h-[5px] w-[5px] rotate-45 bg-gold/70"
          />
        </span>
      ))}
    </div>
  );
}

/** Güven şeridi — altın hairline'lar arasında yavaş akan mikro etiketler. */
export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-[rgba(212,177,106,0.16)] bg-night2 py-4">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
