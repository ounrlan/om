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
          description="Bölgeyi sokak sokak bilen, güler yüzlü ve güven veren danışman kadromuz."
          align="center"
        />

        <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1} className="h-full">
              <article className="card-still group flex h-full flex-col">
                <div className="img-zoom relative aspect-[3/4] shrink-0">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 384px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-graphite via-slate to-graphite">
                      <span
                        className="flex h-28 w-28 items-center justify-center rounded-full border border-gold-soft/40 bg-gold/10 font-display text-4xl font-semibold text-gold-soft"
                        aria-hidden="true"
                      >
                        {initials(member.name)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-transparent to-transparent" />
                  {/* Hover'da hızlı iletişim */}
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-10 justify-center gap-3 pb-5 opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
                    {member.phoneHref && (
                      <a
                        href={member.phoneHref}
                        aria-label={`${member.name} telefon`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate backdrop-blur-sm transition-colors hover:text-gold-deep"
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
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white transition-colors hover:bg-gold-deep"
                    >
                      <MessageCircle size={15} />
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <h3 className="font-display text-lg font-medium text-ink">
                    {member.name}
                  </h3>
                  <p className="mb-4 mt-1 text-xs uppercase tracking-luxe text-gold-deep">
                    {member.role}
                  </p>
                  {member.phone && (
                    <a
                      href={member.phoneHref}
                      className="mt-auto inline-flex items-center gap-2 rounded-full border border-mist bg-porcelain px-4 py-2 text-sm font-medium text-slate transition-all duration-300 hover:border-gold/50 hover:text-gold-deep"
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
