import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { TEAM, CONTACT } from "@/data/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p.charAt(0).toLocaleUpperCase("tr-TR"))
    .slice(0, 2)
    .join("");
}

export default function Team() {
  return (
    <section id="ekip" className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Ekibimiz"
          title="Uzmanlıkla"
          accent="tanışın."
          description="Bölgeyi sokak sokak bilen, lüks segmentin dilinden anlayan danışman kadromuz."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1} className="h-full">
              <article className="card-still group flex h-full flex-col">
                <div className="img-zoom relative aspect-[3/4] shrink-0">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-olive-deep via-charcoal to-ink">
                      <span
                        className="flex h-28 w-28 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.08] font-display text-4xl font-semibold text-gold shadow-gold-glow"
                        aria-hidden="true"
                      >
                        {initials(member.name)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                  {/* Hover'da hızlı iletişim */}
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-10 justify-center gap-3 pb-5 opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
                    {member.phoneHref && (
                      <a
                        href={member.phoneHref}
                        aria-label={`${member.name} telefon`}
                        className="glass flex h-10 w-10 items-center justify-center rounded-full text-cream transition-colors hover:text-gold"
                      >
                        <Phone size={15} />
                      </a>
                    )}
                    <a
                      href={`https://wa.me/${(member.phoneHref ?? CONTACT.phoneHref)
                        .replace("tel:+", "")}?text=${encodeURIComponent(
                        `Merhaba ${member.name}, portföyünüz hakkında bilgi almak istiyorum.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} WhatsApp`}
                      className="glass flex h-10 w-10 items-center justify-center rounded-full text-cream transition-colors hover:text-gold"
                    >
                      <MessageCircle size={15} />
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <h3 className="font-display text-lg font-medium text-cream">
                    {member.name}
                  </h3>
                  <p className="mb-4 mt-1 text-xs uppercase tracking-luxe text-gold/80">
                    {member.role}
                  </p>
                  {member.phone && (
                    <a
                      href={member.phoneHref}
                      className="mt-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-charcoal px-4 py-2 text-sm font-medium text-cream/85 transition-all duration-300 hover:border-gold/50 hover:text-gold"
                    >
                      <Phone size={13} className="text-gold" />
                      {member.phone}
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
