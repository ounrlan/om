"use client";

import Image from "next/image";
import { BedDouble, Ruler, MapPin, UserRound, ImageIcon } from "lucide-react";
import type { PanelListing } from "@/lib/panel/store";

export default function PanelCard({
  listing,
  onOpen,
  showOwner,
}: {
  listing: PanelListing;
  onOpen: (id: string) => void;
  showOwner?: boolean;
}) {
  const cover = listing.photos[0];

  return (
    <button
      onClick={() => onOpen(listing.id)}
      className="card-still group text-left"
    >
      <div className="img-zoom relative aspect-[4/3]">
        {cover ? (
          <Image
            src={cover}
            alt={listing.title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover"
            unoptimized={cover.startsWith("data:")}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-charcoal text-stone">
            <ImageIcon size={28} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/10" />

        <span
          className={`glass absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
            listing.status === "kiralik" ? "text-cream" : "text-gold"
          }`}
        >
          {listing.status === "kiralik" ? "Kiralık" : "Satılık"}
        </span>

        {listing.photos.length > 1 && (
          <span className="glass absolute right-3 top-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] text-cream">
            <ImageIcon size={12} /> {listing.photos.length}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-[10px] font-medium uppercase tracking-luxe text-khaki">
            {listing.type}
          </span>
          <span className="font-display text-lg font-semibold text-gold">
            {listing.price}
          </span>
        </div>
        <h3 className="line-clamp-1 font-display text-base font-medium text-cream transition-colors group-hover:text-gold-soft">
          {listing.title}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-stone">
          <MapPin size={12} className="text-gold/70" />
          <span className="line-clamp-1">
            {listing.district}
            {listing.city ? `, ${listing.city}` : ""}
          </span>
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-white/[0.07] pt-4 text-xs text-stone">
          {listing.rooms && (
            <span className="flex items-center gap-1.5">
              <BedDouble size={13} className="text-khaki" /> {listing.rooms}
            </span>
          )}
          {listing.area && (
            <span className="flex items-center gap-1.5">
              <Ruler size={13} className="text-khaki" /> {listing.area}
            </span>
          )}
          {showOwner && (
            <span className="ml-auto flex items-center gap-1.5 text-cream/70">
              <UserRound size={12} className="text-gold/70" />
              {listing.ownerName}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
