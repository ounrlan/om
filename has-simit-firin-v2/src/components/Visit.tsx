import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import GoldButton from "./GoldButton";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { visit, business } from "@/data/site";

export default function Visit() {
  return (
    <section
      id="ziyaret"
      className="scroll-mt-28 border-t border-[rgba(212,177,106,0.16)] bg-night2"
    >
      <div className="container-x py-24 sm:py-28 lg:py-36">
        <div className="grid items-stretch gap-14 lg:grid-cols-[1fr_1.08fr] lg:gap-20">
          {/* Sol — bilgiler */}
          <div>
            <SectionHead
              index={visit.index}
              eyebrow={visit.eyebrow}
              heading={visit.heading}
              intro={visit.intro}
            />

            <Reveal delay={0.2}>
              <dl className="mt-12 divide-y divide-[rgba(212,177,106,0.14)] border-y border-[rgba(212,177,106,0.14)]">
                {/* Adres */}
                <div className="flex gap-6 py-7">
                  <MapPin
                    className="mt-1 h-[18px] w-[18px] shrink-0 text-gold"
                    aria-hidden="true"
                    strokeWidth={1.25}
                  />
                  <div className="flex-1">
                    <dt className="font-mono text-[9.5px] uppercase tracking-label text-cream3">
                      {visit.addressLabel}
                    </dt>
                    <dd className="mt-2.5 text-[15.5px] font-light leading-[1.7] text-cream">
                      {business.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </dd>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex gap-6 py-7">
                  <Phone
                    className="mt-1 h-[18px] w-[18px] shrink-0 text-gold"
                    aria-hidden="true"
                    strokeWidth={1.25}
                  />
                  <div className="flex-1">
                    <dt className="font-mono text-[9.5px] uppercase tracking-label text-cream3">
                      {visit.phoneLabel}
                    </dt>
                    <dd className="mt-2.5">
                      <a
                        href={business.phoneHref}
                        className="font-display text-[24px] font-light tracking-wide text-cream transition-colors hover:text-gold"
                      >
                        {business.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>

                {/* Saatler */}
                <div className="flex gap-6 py-7">
                  <Clock
                    className="mt-1 h-[18px] w-[18px] shrink-0 text-gold"
                    aria-hidden="true"
                    strokeWidth={1.25}
                  />
                  <div className="w-full">
                    <dt className="font-mono text-[9.5px] uppercase tracking-label text-cream3">
                      {visit.hoursLabel}
                    </dt>
                    <dd className="mt-3 max-w-[24rem] space-y-2.5">
                      {visit.hoursRows.map((row) => (
                        <div
                          key={row.days}
                          className="flex items-baseline justify-between gap-4"
                        >
                          <span className="text-[14.5px] font-light text-cream2">
                            {row.days}
                          </span>
                          <span
                            aria-hidden="true"
                            className="h-px flex-1 self-center bg-[rgba(212,177,106,0.14)]"
                          />
                          <span className="font-mono text-[13px] text-gold">
                            {row.hours}
                          </span>
                        </div>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
                <GoldButton href={visit.directionsCta.href} external>
                  {visit.directionsCta.label}
                  <ArrowUpRight
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                    strokeWidth={1.5}
                  />
                </GoldButton>
                <a href={visit.callCta.href} className="link-gold">
                  {visit.callCta.label}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Sağ — koyu temalı harita */}
          <Reveal delay={0.16}>
            <div className="hair-frame relative min-h-[380px] w-full overflow-hidden lg:h-full">
              <iframe
                title={visit.mapTitle}
                src={business.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-dark absolute inset-0 h-full w-full"
                style={{ border: 0 }}
              />
              {/* Kenar vinyeti — haritayı gece paletine oturtur */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(8,12,10,0.55)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
