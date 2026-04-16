"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const DISMISS_KEY = "rav-sticky-lead-dismissed";
const HERO_THRESHOLD = 700;

export function StickyLead() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(DISMISS_KEY);
      if (raw) {
        const until = Number(raw);
        if (until > Date.now()) {
          return;
        }
      }
    } catch {}
    setDismissed(false);
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => setVisible(window.scrollY > HERO_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  const handleDismiss = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    } catch {}
    setDismissed(true);
  };

  return (
    <aside
      className={
        "pointer-events-none fixed right-4 bottom-6 z-40 flex flex-col items-end gap-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:right-8 sm:bottom-10 " +
        (visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")
      }
      aria-hidden={!visible}
    >
      {open ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleDismiss();
          }}
          className="pointer-events-auto relative w-[320px] overflow-hidden rounded-[28px] border border-[color:var(--color-bronze)]/30 bg-[color:var(--color-ink)]/95 p-1.5 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          <div className="relative rounded-[22px] bg-[color:var(--color-ink)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <button
              type="button"
              aria-label="סגור"
              onClick={handleDismiss}
              className="absolute left-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full text-[color:var(--color-paper-soft)]/60 transition-colors hover:bg-white/5 hover:text-[color:var(--color-paper-soft)]"
            >
              <X className="h-3.5 w-3.5" strokeWidth={1.8} />
            </button>
            <h3 className="font-display text-xl font-medium text-[color:var(--color-paper-soft)]">
              תיאום ייעוץ
            </h3>
            <p className="mt-1 text-[12px] text-[color:var(--color-paper-soft)]/60">
              יועץ הדרכה יחזור אליך תוך יום עסקים.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <input
                required
                type="text"
                name="name"
                autoComplete="name"
                placeholder="שם מלא"
                className="h-10 rounded-full border border-white/10 bg-white/5 px-4 text-[13px] text-[color:var(--color-paper-soft)] placeholder:text-[color:var(--color-paper-soft)]/40 focus:border-[color:var(--color-bronze)]/60 focus:outline-none"
              />
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="טלפון"
                className="h-10 rounded-full border border-white/10 bg-white/5 px-4 text-[13px] text-[color:var(--color-paper-soft)] placeholder:text-[color:var(--color-paper-soft)]/40 focus:border-[color:var(--color-bronze)]/60 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                autoComplete="email"
                spellCheck={false}
                placeholder="אימייל"
                className="h-10 rounded-full border border-white/10 bg-white/5 px-4 text-[13px] text-[color:var(--color-paper-soft)] placeholder:text-[color:var(--color-paper-soft)]/40 focus:border-[color:var(--color-bronze)]/60 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 h-11 w-full rounded-full bg-[color:var(--color-signal)] text-[13px] font-medium text-white shadow-[0_12px_32px_-10px_rgba(232,16,44,0.6)] transition-colors hover:bg-[color:var(--color-signal-deep)]"
            >
              שלח פרטים
            </button>
          </div>
        </form>
      ) : null}
      <button
        type="button"
        aria-expanded={open}
        aria-label="פתח טופס תיאום ייעוץ"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto group relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--color-bronze)]/40 bg-[color:var(--color-ink)] text-[color:var(--color-bronze)] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:border-[color:var(--color-bronze)]/80"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[color:var(--color-bronze)]/20 blur-xl transition-opacity duration-500 group-hover:opacity-80"
        />
        <MessageCircle className="relative h-5 w-5" strokeWidth={1.5} />
      </button>
    </aside>
  );
}
