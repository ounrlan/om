import { MapPin, Phone, Clock } from "lucide-react";
import ButtonPrimary from "./ButtonPrimary";
import Reveal from "./Reveal";
import { visit, business } from "@/data/site";

export default function Visit() {
  return (
    <section id="ziyaret" className="scroll-mt-24 bg-cream2/50">
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Sol — bilgiler */}
          <Reveal>
            <p className="eyebrow mb-5">{visit.eyebrow}</p>
            <h2 className="heading-lg">{visit.heading}</h2>
            <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-ink">
              {visit.intro}
            </p>

            <dl className="mt-9 space-y-7">
              <div className="flex gap-4">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-coffee"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
                <div>
                  <dt className="font-mono text-[12px] font-semibold uppercase tracking-label text-pine/60">
                    {visit.addressLabel}
                  </dt>
                  <dd className="mt-1.5 text-[16px] leading-relaxed text-pine">
                    {business.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-coffee"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
                <div>
                  <dt className="font-mono text-[12px] font-semibold uppercase tracking-label text-pine/60">
                    {visit.phoneLabel}
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={business.phoneHref}
                      className="font-mono text-[16px] font-semibold text-pine underline-offset-4 hover:underline"
                    >
                      {business.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-coffee"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
                <div className="w-full">
                  <dt className="font-mono text-[12px] font-semibold uppercase tracking-label text-pine/60">
                    {visit.hoursLabel}
                  </dt>
                  <dd className="mt-2 max-w-[22rem] space-y-1.5">
                    {visit.hoursRows.map((row) => (
                      <div
                        key={row.days}
                        className="flex items-center justify-between gap-4 border-b border-pine/10 pb-1.5 last:border-0"
                      >
                        <span className="text-[15px] text-ink">{row.days}</span>
                        <span className="font-mono text-[14px] font-semibold text-pine">
                          {row.hours}
                        </span>
                      </div>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-9">
              <ButtonPrimary href={visit.directionsCta.href} external>
                {visit.directionsCta.label}
              </ButtonPrimary>
            </div>
          </Reveal>

          {/* Sağ — harita */}
          <Reveal delay={0.12}>
            <div className="relative min-h-[340px] w-full overflow-hidden rounded-card border border-pine/10 lg:h-full">
              <iframe
                title={visit.mapTitle}
                src={business.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
