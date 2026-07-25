"use client";

import { useState, type FormEvent } from "react";
import { LogIn, Lock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { authenticate, type SafeAgent } from "@/lib/panel/store";

export default function LoginView({
  onLogin,
}: {
  onLogin: (agent: SafeAgent) => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const agent = await authenticate(username, password);
      if (!agent) {
        setError("Kullanıcı adı veya şifre hatalı.");
        return;
      }
      onLogin(agent);
    } finally {
      setBusy(false);
    }
  };

  const inputBase =
    "w-full rounded-2xl border border-white/10 bg-ink/70 pl-11 pr-4 py-3.5 text-sm text-cream placeholder:text-stone/60 outline-none transition-all duration-300 focus:border-gold/60 focus:shadow-gold-glow";

  return (
    <div className="flex min-h-[100svh] items-center justify-center px-5 py-16">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-luxe text-stone transition-colors hover:text-gold"
        >
          <ArrowLeft size={14} /> Siteye dön
        </Link>

        <div className="glass rounded-card bg-ink/60 p-8 shadow-luxe-lg sm:p-10">
          <div className="mb-8 text-center">
            <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/25 bg-gold/[0.07] text-gold">
              <Lock size={22} strokeWidth={1.6} />
            </span>
            <h1 className="font-display text-2xl font-semibold text-cream">
              Emlakçı Girişi
            </h1>
            <p className="mt-2 text-sm text-stone">
              Portföyünüzü yönetmek için giriş yapın.
            </p>
          </div>

          <form onSubmit={submit} className="space-y-4" aria-label="Giriş formu">
            <div className="relative">
              <User
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone"
              />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Kullanıcı adı"
                autoComplete="username"
                className={inputBase}
                required
              />
            </div>
            <div className="relative">
              <Lock
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre"
                autoComplete="current-password"
                className={inputBase}
                required
              />
            </div>

            {error && (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="btn-gold w-full disabled:opacity-60"
            >
              <LogIn size={16} />
              {busy ? "Giriş yapılıyor…" : "Giriş Yap"}
            </button>
          </form>

          <div className="mt-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs leading-relaxed text-stone">
            <p className="mb-1font-medium text-cream/80">Demo hesapları</p>
            <p>
              Kullanıcı: <span className="text-gold">ugur</span> ·{" "}
              <span className="text-gold">furkan</span> ·{" "}
              <span className="text-gold">sidar</span> ·{" "}
              <span className="text-gold">dincer</span>
              <br />
              Şifre (hepsi): <span className="text-gold">uyg2026</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
