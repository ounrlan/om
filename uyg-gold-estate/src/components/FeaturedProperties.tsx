import SectionHeading from "./SectionHeading";
import PropertyCard from "./PropertyCard";
import Reveal from "./Reveal";
import { FEATURED_PROPERTIES } from "@/data/site";

export default function FeaturedProperties() {
  return (
    <section id="portfoy" className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Seçkin Portföy"
          title="Öne çıkan"
          accent="mülkler"
          description="Her biri titizlikle seçilmiş, mimarisi ve konumuyla ayrıcalık vadeden gayrimenkuller."
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {FEATURED_PROPERTIES.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.12}>
              <PropertyCard property={p} detailsHref={p.sahibindenUrl} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
