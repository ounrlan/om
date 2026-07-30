"use client";

import { useEffect, useState } from "react";
import { business } from "@/data/site";

/**
 * Canlı "şu an açık / kapalı" rozeti. Saat, ziyaretçinin cihaz saat diliminden
 * bağımsız olarak Europe/Istanbul'a göre hesaplanır.
 * Sunucu-istemci uyuşmazlığı olmaması için yalnızca mount sonrası render edilir.
 */

function istanbulMinutes(): number {
  const parts = new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const m = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  return h * 60 + m;
}

export default function StatusChip({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = istanbulMinutes();
      setOpen(now >= business.opensAt && now < business.closesAt);
    };
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (open === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-label ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        {open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
        )}
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
            open ? "bg-gold" : "bg-cream3"
          }`}
        />
      </span>
      <span className={open ? "text-gold" : "text-cream3"}>
        {open ? "Şu an açık" : "Şu an kapalı"}
      </span>
      <span className="text-cream3">·</span>
      <span className="text-cream2">{business.hoursShort}</span>
    </span>
  );
}
