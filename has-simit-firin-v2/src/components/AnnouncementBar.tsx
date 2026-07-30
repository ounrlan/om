import { Phone } from "lucide-react";
import StatusChip from "./StatusChip";
import { announcement, business } from "@/data/site";

/**
 * En üst ince şerit — solda canlı açık/kapalı rozeti, ortada duyuru,
 * sağda telefon. Altında altın hairline.
 */
export default function AnnouncementBar() {
  return (
    <div className="relative z-30 bg-night">
      <div className="container-x flex h-11 items-center justify-between gap-6">
        <StatusChip className="hidden md:inline-flex" />

        <p className="mx-auto font-mono text-[10.5px] uppercase tracking-wide2 text-cream2 md:tracking-label">
          {announcement.text}
        </p>

        <a
          href={business.phoneHref}
          className="hidden items-center gap-2 font-mono text-[10.5px] uppercase tracking-label text-gold transition-colors hover:text-goldlt md:inline-flex"
          aria-label={`Sipariş için ara: ${business.phoneDisplay}`}
        >
          <Phone className="h-3 w-3" aria-hidden="true" strokeWidth={1.5} />
          {announcement.phone}
        </a>
      </div>
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,177,106,0.28), transparent)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
