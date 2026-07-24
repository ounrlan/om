import Image from "next/image";
import { Sunrise, Wheat, Store, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import { story } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  sunrise: Sunrise,
  wheat: Wheat,
  store: Store,
};

export default function Story() {
  return (
    <section id="hikaye" className="scroll-mt-24 bg-cream2/50">
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-5">{story.eyebrow}</p>
            <h2 className="heading-lg max-w-[14ch]">{story.heading}</h2>
            <div className="mt-6 space-y-4">
              {story.body.map((para, i) => (
                <p
                  key={i}
                  className="max-w-[52ch] text-[18px] leading-[1.6] text-ink"
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-card">
              <Image
                src="/images/hikaye.jpg"
                alt={story.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 border-t border-pine/10 pt-10 sm:grid-cols-3">
          {story.values.map((v, i) => {
            const Icon = icons[v.icon] ?? Store;
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <Icon
                    className="mt-0.5 h-6 w-6 shrink-0 text-coffee"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                  <div>
                    <h3 className="font-display text-[20px] font-semibold text-pine">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink">
                      {v.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
