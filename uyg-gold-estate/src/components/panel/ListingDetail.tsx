"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  BedDouble,
  Ruler,
  MapPin,
  UserRound,
  Building2,
  Tag,
  Trash2,
  Loader2,
} from "lucide-react";
import {
  getById,
  remove,
  type PanelListing,
  type SafeAgent,
} from "@/lib/panel/store";

export default function ListingDetail({
  id,
  agent,
  onBack,
  onDeleted,
}: {
  id: string;
  agent: SafeAgent;
  onBack: () => void;
  onDeleted: () => void;
}) {
  const [listing, setListing] = useState<PanelListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let on = true;
    getById(id).then((l) => {
      if (!on) return;
      setListing(l);
      setLoading(false);
    });
    return () => {
      on = false;
    };
  }, [id]);

  const del = async () => {
    if (!listing) return;
    if (!window.confirm("Bu ilanı silmek istediğinize emin misiniz?")) return;
    setDeleting(true);
    try {
      await remove(listing.id, agent.id);
      onDeleted();
    } catch (e) {
      window.alert((e as Error).message);
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="container-luxe flex items-center justify-center gap-3 py-32 text-stone">
        <Loader2 size={18} className="animate-spin" /> Yükleniyor…
      </div>
    );
  }
  if (!listing) {
    return (
      <div className="container-luxe py-32 text-center text-stone">
        İlan bulunamadı.
        <button onClick={onBack} className="btn-ghost mt-6">
          <ArrowLeft size={16} /> Geri dön
        </button>
      </div>
    );
  }

  const isOwner = listing.ownerId === agent.id;
  const cover = listing.photos[active] ?? listing.photos[0];

  const facts = [
    { icon: Tag, label: "Durum", value: listing.status === "kiralik" ? "Kiralık" : "Satılık" },
    { icon: Building2, label: "Tip", value: listing.type },
    { icon: BedDouble, label: "Oda", value: listing.rooms || "—" },
    { icon: Ruler, label: "Alan", value: listing.area || "—" },
  ];

  return (
    <div className="container-luxe py-10 sm:py-14">
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-luxe text-stone transition-colors hover:text-gold"
      >
        <ArrowLeft size={14} /> Portföye dön
      </button>

      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        {/* Galeri */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-white/[0.07]">
            {cover ? (
              <Image
                src={cover}
                alt={listing.title}
                fill
                sizes="(max-width:1024px) 100vw, 60vw"
                className="object-cover"
                unoptimized={cover.startsWith("data:")}
              />
            ) : null}
          </div>
          {listing.photos.length > 1 && (
            <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">
              {listing.photos.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative aspect-square overflow-hidden rounded-lg border transition-all ${
                    i === active
                      ? "border-gold"
                      : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={p}
                    alt={`${listing.title} ${i + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                    unoptimized={p.startsWith("data:")}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bilgiler */}
        <div>
          <span
            className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
              listing.status === "kiralik"
                ? "bg-white/10 text-cream"
                : "bg-gold/15 text-gold"
            }`}
          >
            {listing.status === "kiralik" ? "Kiralık" : "Satılık"}
          </span>
          <h1 className="mt-4 font-display text-2xl font-semibold leading-tight text-cream sm:text-3xl">
            {listing.title}
          </h1>
          <p className="mt-3 font-display text-3xl font-semibold text-gold">
            {listing.price}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
              >
                <f.icon size={18} className="text-gold" />
                <span>
                  <span className="block text-[10px] uppercase tracking-luxe text-stone">
                    {f.label}
                  </span>
                  <span className="text-sm font-medium text-cream">
                    {f.value}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4 text-sm">
            <p className="flex items-start gap-3 text-cream/85">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              {listing.address}
            </p>
            <p className="flex items-center gap-3 text-cream/85">
              <UserRound size={16} className="shrink-0 text-gold" />
              Yetkili danışman: {listing.ownerName}
            </p>
          </div>

          {isOwner && (
            <button
              onClick={del}
              disabled={deleting}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-red-500/30 px-5 py-2.5 text-sm font-medium text-red-300 transition-colors hover:bg-red-500/10 disabled:opacity-60"
            >
              <Trash2 size={15} />
              {deleting ? "Siliniyor…" : "İlanı Sil"}
            </button>
          )}
        </div>
      </div>

      {/* Açıklama */}
      {listing.description && (
        <div className="mt-12 max-w-3xl">
          <p className="eyebrow mb-4">Açıklama</p>
          <p className="whitespace-pre-line text-sm leading-relaxed text-cream/80">
            {listing.description}
          </p>
        </div>
      )}
    </div>
  );
}
