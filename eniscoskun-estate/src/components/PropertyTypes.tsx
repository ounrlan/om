import { Home, Building2, Trees, KeyRound } from "lucide-react";
import Reveal from "./Reveal";
import { LISTINGS, PROPERTY_TYPES } from "@/data/site";

const ICONS: Record<string, typeof Home> = {
  konut: Home,
  isyeri: Building2,
  arsa: Trees,
  kiralik: KeyRound,
};

export default function PropertyTypes() {
  return (
    <section className="relative py-6">
      <div className="container-luxe">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROPERTY_TYPES.map((cat, i) => {
            const count = LISTINGS.filter(cat.match).length;
            const Icon = ICONS[cat.key] ?? Home;
            return (
              <Reveal key={cat.key} delay={i * 0.08}>
                <a
                  href="#ilanlar"
                  className="card group flex items-center gap-4 p-5"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gold-pale/60 text-gold-deep transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-semibold text-ink">
                        {count}
                      </span>
                      <span className="text-sm font-medium text-slate">
                        {cat.label}
                      </span>
                    </span>
                    <span className="mt-0.5 block text-xs text-ash">
                      {cat.note}
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
