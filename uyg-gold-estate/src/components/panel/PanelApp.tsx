"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogOut, LayoutGrid, Loader2 } from "lucide-react";
import Logo from "@/components/Logo";
import {
  getSession,
  clearSession,
  type SafeAgent,
} from "@/lib/panel/store";
import LoginView from "./LoginView";
import DashboardView from "./DashboardView";
import ListingForm from "./ListingForm";
import ListingDetail from "./ListingDetail";

type View =
  | { name: "dashboard" }
  | { name: "new" }
  | { name: "detail"; id: string };

export default function PanelApp() {
  const [ready, setReady] = useState(false);
  const [agent, setAgent] = useState<SafeAgent | null>(null);
  const [view, setView] = useState<View>({ name: "dashboard" });
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    setAgent(getSession());
    setReady(true);
  }, []);

  const bump = () => setReloadKey((k) => k + 1);

  const logout = () => {
    clearSession();
    setAgent(null);
    setView({ name: "dashboard" });
  };

  if (!ready) {
    return (
      <div className="flex min-h-[100svh] items-center justify-center gap-3 text-stone">
        <Loader2 size={18} className="animate-spin" /> Yükleniyor…
      </div>
    );
  }

  if (!agent) {
    return (
      <LoginView
        onLogin={(a) => {
          setAgent(a);
          setView({ name: "dashboard" });
        }}
      />
    );
  }

  return (
    <div className="min-h-[100svh]">
      {/* Panel üst çubuğu */}
      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-ink/85 backdrop-blur-xl">
        <div className="container-luxe flex items-center justify-between py-4">
          <button
            onClick={() => setView({ name: "dashboard" })}
            aria-label="Panel anasayfa"
          >
            <Logo />
          </button>
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden text-right sm:block">
              <span className="block text-sm font-medium text-cream">
                {agent.name}
              </span>
              <span className="block text-[11px] uppercase tracking-luxe text-gold/80">
                {agent.role === "broker" ? "Broker" : "Danışman"}
              </span>
            </span>
            {view.name !== "dashboard" && (
              <button
                onClick={() => setView({ name: "dashboard" })}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:border-gold/60 hover:text-gold"
                title="Portföy"
              >
                <LayoutGrid size={16} />
              </button>
            )}
            <button
              onClick={logout}
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-cream transition-colors hover:border-gold/60 hover:text-gold"
            >
              <LogOut size={15} />
              <span className="hidden sm:inline">Çıkış</span>
            </button>
          </div>
        </div>
      </header>

      {/* Geçerli görünüm */}
      {view.name === "dashboard" && (
        <DashboardView
          agent={agent}
          reloadKey={reloadKey}
          onOpen={(id) => setView({ name: "detail", id })}
          onNew={() => setView({ name: "new" })}
        />
      )}
      {view.name === "new" && (
        <ListingForm
          agent={agent}
          onBack={() => setView({ name: "dashboard" })}
          onSaved={() => {
            bump();
            setView({ name: "dashboard" });
          }}
        />
      )}
      {view.name === "detail" && (
        <ListingDetail
          id={view.id}
          agent={agent}
          onBack={() => setView({ name: "dashboard" })}
          onDeleted={() => {
            bump();
            setView({ name: "dashboard" });
          }}
        />
      )}

      <footer className="border-t border-white/[0.05] py-8 text-center text-xs text-stone/60">
        <Link href="/" className="transition-colors hover:text-gold">
          ← UYG Gold Estate ana sitesine dön
        </Link>
        <p className="mt-2">Emlakçı Paneli — Demo sürümü</p>
      </footer>
    </div>
  );
}
