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
    <article className="card-luxe group">
      <div className="img-zoom relative aspect-[4/3]">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />

        {property.tag && (
          <span className="glass absolute left-4 top-4 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-gold">
            {property.tag}
          </span>
        )}

        <button
          onClick={() => setFav((v) => !v)}
          aria-label={fav ? "Favorilerden çıkar" : "Favorilere ekle"}
          className={`glass absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
            fav ? "text-gold" : "text-cream/80"
          }`}
        >
          <Heart size={16} fill={fav ? "currentColor" : "none"} />
        </button>

        {/* Quick actions slide up on hover */}
        <div className="absolute inset-x-4 bottom-4 flex translate-y-20 gap-2 opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={detailsHref ?? "#iletisim"}
            target={detailsHref ? "_blank" : undefined}
            rel={detailsHref ? "noopener" : undefined}
            className="glass flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-cream transition-colors hover:text-gold"
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
            className="glass flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-cream transition-colors hover:text-gold"
          >
            <MessageCircle size={15} />
            Bilgi Al
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-medium uppercase tracking-luxe text-khaki">
            {property.type}
          </span>
          <span className="font-display text-xl font-semibold text-gold">
            {property.price}
          </span>
        </div>

        <h3 className="font-display text-lg font-medium leading-snug text-cream transition-colors duration-300 group-hover:text-gold-soft">
          {property.title}
        </h3>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-stone">
          <MapPin size={13} className="text-gold/70" />
          {property.location}
        </p>

        {property.agent && (
          <p className="mt-2 flex items-center gap-1.5 text-xs text-stone/80">
            <UserRound size={12} className="text-khaki" />
            Yetkili: <span className="text-cream/75">{property.agent}</span>
          </p>
        )}

        <div className="mt-5 flex items-center gap-5 border-t border-white/[0.07] pt-5 text-sm text-stone">
          {property.rooms && (
            <span className="flex items-center gap-1.5">
              <BedDouble size={15} className="text-khaki" /> {property.rooms}
            </span>
          )}
          {property.area && (
            <span className="flex items-center gap-1.5">
              <Ruler size={15} className="text-khaki" /> {property.area}
            </span>
          )}
          <a
            href={detailsHref ?? "#iletisim"}
            target={detailsHref ? "_blank" : undefined}
            rel={detailsHref ? "noopener" : undefined}
            className="ml-auto flex items-center gap-1 text-gold transition-all duration-300 hover:gap-2"
            aria-label={`${property.title} detayları`}
          >
            Detay <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
