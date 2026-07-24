import { marqueeItems } from "@/data/site";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {marqueeItems.map((text, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-mono text-[12.5px] font-semibold uppercase tracking-label text-pine/80">
            {text}
          </span>
          <span
            aria-hidden="true"
            className="inline-block h-1.5 w-1.5 rotate-45 bg-sesame"
          />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-pine/10 bg-cream2 py-3">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
