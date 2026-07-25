import Image from "next/image";
import { MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { REGIONS } from "@/data/site";

function RegionCard({
  region,
}: {
  region: (typeof REGIONS)[number];
}) {
  return (
    <div className="img-zoom group relative h-64 w-80 shrink-0 overflow-hidden rounded-card border border-mist shadow-soft">
      <Image
        src={region.image}
        alt={`${region.name} bölgesi`}
        fill
        sizes="320px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/92 via-graphite/25 to-transparent" />
      <div className="absolute inset-x-6 bottom-5">
        <p className="flex items-center gap-2 font-display text-xl font-medium text-white">
          <MapPin size={16} className="text-gold-bright" />
          {region.name}
        </p>
        <p className="mt-1 text-xs uppercase tracking-luxe text-gold-soft">
          {region.note}
        </p>
      </div>
    </div>
  );
}

export default function Regions() {
  const loop = [...REGIONS, ...REGIONS];

  return (
    <section id="bolgeler" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Nerelerdeyiz?"
          title="Ankara'nın değerli"
          accent="bölgelerinde."
          description="Eryaman'daki merkez ofisimizle Etimesgut, Sincan, Çankaya ve Gölbaşı başta olmak üzere; Antalya ve Kırıkkale'ye uzanan portföyümüzle hizmetinizdeyiz."
          align="center"
        />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-porcelain to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-porcelain to-transparent" />
        <div className="flex w-max animate-marquee gap-6 pr-6">
          {loop.map((region, i) => (
            <RegionCard key={`${region.name}-${i}`} region={region} />
          ))}
        </div>
      </div>
    </section>
  );
}
