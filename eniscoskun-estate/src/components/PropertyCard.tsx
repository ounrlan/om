"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BedDouble,
  Ruler,
  Heart,
  Eye,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  UserRound,
} from "lucide-react";
import { CONTACT, type Property } from "@/data/site";

export default function PropertyCard({
  property,
  detailsHref,
}: {
  property: Property;
  detailsHref?: string;
}) {
  const [fav, setFav] = useState(false);

  return (
    <article className="card group flex h-full flex-col">
      <div className="img-zoom relative aspect-[4/3]">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/75 via-transparent to-graphite/10" />

        <span className="absolute left-4 top-4 rounded-full bg-graphite/85 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold-bright backdrop-blur-sm">
          {property.status === "kiralik" ? "Kiralık" : "Satılık"}
        </span>

        {property.tag && (
          <span className="absolute left-4 top-[52px] rounded-full bg-gold/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {property.tag}
          </span>
        )}

        <button
          onClick={() => setFav((v) => !v)}
          aria-label={fav ? "Favorilerden çıkar" : "Favorilere ekle"}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
            fav ? "text-gold-deep" : "text-slate"
          }`}
        >
          <Heart size={16} fill={fav ? "currentColor" : "none"} />
        </button>

        {/* Hover'da yukarı kayan hızlı işlemler */}
        <div className="absolute inset-x-4 bottom-4 flex translate-y-20 gap-2 opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={detailsHref ?? "#iletisim"}
            target={detailsHref ? "_blank" : undefined}
            rel={detailsHref ? "noopener" : undefined}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white/90 py-3 text-sm font-medium text-slate backdrop-blur-sm transition-colors hover:bg-white hover:text-gold-deep"
          >
            <Eye size={15} />
            Görüntüle
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
              `Merhaba, "${property.title}" ilanınız hakkında bilgi almak istiyorum.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-medium text-white transition-colors hover:bg-gold-deep"
          >
            <MessageCircle size={15} />
            Bilgi Al
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-luxe text-ash">
            {property.type}
          </span>
          <span className="font-display text-xl font-semibold text-gold-deep">
            {property.price}
          </span>
        </div>

        <h3 className="font-display text-lg font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-gold-deep">
          {property.title}
        </h3>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-ash">
          <MapPin size={13} className="text-gold" />
          {property.location}
        </p>

        {property.agent && (
          <p className="mt-2 flex items-center gap-1.5 text-xs text-ash">
            <UserRound size={12} className="text-gold" />
            Yetkili: <span className="font-medium text-slate">{property.agent}</span>
          </p>
        )}

        <div className="mt-5 flex items-center gap-5 border-t border-mist pt-5 text-sm text-ash">
          {property.rooms && (
            <span className="flex items-center gap-1.5">
              <BedDouble size={15} className="text-gold" /> {property.rooms}
            </span>
          )}
          {property.area && (
            <span className="flex items-center gap-1.5">
              <Ruler size={15} className="text-gold" /> {property.area}
            </span>
          )}
          <a
            href={detailsHref ?? "#iletisim"}
            target={detailsHref ? "_blank" : undefined}
            rel={detailsHref ? "noopener" : undefined}
            className="ml-auto flex items-center gap-1 font-medium text-gold-deep transition-all duration-300 hover:gap-2"
            aria-label={`${property.title} detayları`}
          >
            Detay <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
