"use client";

import { useEffect, useMemo, useState } from "react";
import { Plus, Building2, Users, Loader2 } from "lucide-react";
import {
  listAll,
  type PanelListing,
  type SafeAgent,
} from "@/lib/panel/store";
import PanelCard from "./PanelCard";

type Tab = "mine" | "shared";

export default function DashboardView({
  agent,
  onOpen,
  onNew,
  reloadKey,
}: {
  agent: SafeAgent;
  onOpen: (id: string) => void;
  onNew: () => void;
  reloadKey: number;
}) {
  const [tab, setTab] = useState<Tab>("mine");
  const [all, setAll] = useState<PanelListing[] | null>(null);

  useEffect(() => {
    let active = true;
    listAll().then((l) => active && setAll(l));
    return () => {
      active = false;
    };
  }, [reloadKey]);

  const mine = useMemo(
    () => (all ?? []).filter((l) => l.ownerId === agent.id),
    [all, agent.id]
  );
  const shown = tab === "mine" ? mine : all ?? [];

  const TABS = [
    { key: "mine" as const, label: "Kendi Portföyüm", icon: Building2, count: mine.length },
    {
      key: "shared" as const,
      label: "Ortak Portföy (Şirket)",
      icon: Users,
      count: (all ?? []).length,
    },
  ];

  return (
    <div className="container-luxe py-10 sm:py-14">
      {/* Başlık + yeni ilan */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-3">Portföy Yönetimi</p>
          <h1 className="heading-lg !text-3xl sm:!text-4xl">
            Hoş geldiniz,{" "}
            <span className="accent-serif">{agent.name.split(" ")[0]}</span>
          </h1>
        </div>
        <button onClick={onNew} className="btn-gold shrink-0">
          <Plus size={17} />
          Yeni İlan Ekle
        </button>
      </div>

      {/* Sekmeler */}
      <div className="mt-8 flex flex-wrap gap-2 border-b border-white/[0.07] pb-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-2 rounded-t-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
              tab === t.key
                ? "bg-white/[0.04] text-gold"
                : "text-cream/60 hover:text-cream"
            }`}
          >
            <t.icon size={16} />
            {t.label}
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] ${
                tab === t.key ? "bg-gold/15 text-gold" : "bg-white/5 text-stone"
              }`}
            >
              {t.count}
            </span>
          </button>
        ))}
      </div>

      {/* İçerik */}
      {all === null ? (
        <div className="flex items-center justify-center gap-3 py-24 text-stone">
          <Loader2 size={18} className="animate-spin" /> Yükleniyor…
        </div>
      ) : shown.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
          <Building2 size={36} className="text-stone/50" />
          <p className="text-stone">
            {tab === "mine"
              ? "Henüz ilanınız yok. İlk ilanınızı ekleyin."
              : "Ortak portföyde ilan bulunmuyor."}
          </p>
          {tab === "mine" && (
            <button onClick={onNew} className="btn-ghost">
              <Plus size={16} /> İlan Ekle
            </button>
          )}
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {shown.map((l) => (
            <PanelCard
              key={l.id}
              listing={l}
              onOpen={onOpen}
              showOwner={tab === "shared"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
