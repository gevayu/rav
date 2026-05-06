"use client";

import { useCallback, useEffect, useState } from "react";
import { Accessibility, Link2, Pause, Type, Contrast, RotateCcw, X } from "lucide-react";

const STORAGE_KEY = "rav-a11y-prefs";

type Prefs = {
  fontScale: number;
  highContrast: boolean;
  highlightLinks: boolean;
  pauseAnimations: boolean;
};

const DEFAULTS: Prefs = {
  fontScale: 1,
  highContrast: false,
  highlightLinks: false,
  pauseAnimations: false,
};

const FONT_SCALES = [0.9, 1, 1.15, 1.3];

function applyPrefs(p: Prefs) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.setProperty("--rav-a11y-font-scale", String(p.fontScale));
  root.classList.toggle("rav-a11y-contrast", p.highContrast);
  root.classList.toggle("rav-a11y-links", p.highlightLinks);
  root.classList.toggle("rav-a11y-no-anim", p.pauseAnimations);
}

export function AccessibilityToggle() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);

  useEffect(() => {
    let parsed: Prefs | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        parsed = { ...DEFAULTS, ...JSON.parse(raw) } as Prefs;
      }
    } catch {}
    if (parsed) {
      applyPrefs(parsed);
      queueMicrotask(() => setPrefs(parsed!));
    }
  }, []);

  const update = useCallback((next: Prefs) => {
    setPrefs(next);
    applyPrefs(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  }, []);

  const cycleFont = () => {
    const idx = FONT_SCALES.indexOf(prefs.fontScale);
    const next = FONT_SCALES[(idx + 1) % FONT_SCALES.length] ?? 1;
    update({ ...prefs, fontScale: next });
  };

  const reset = () => update(DEFAULTS);

  return (
    <aside className="pointer-events-none fixed bottom-6 left-4 z-40 flex flex-col items-start gap-3 sm:bottom-10 sm:left-8">
      {open && (
        <div className="pointer-events-auto relative w-[320px] overflow-hidden rounded-[28px] border border-[color:var(--color-bronze)]/30 bg-[color:var(--color-ink)]/95 p-1.5 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <div className="relative rounded-[22px] bg-[color:var(--color-ink)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <button
              type="button"
              aria-label="סגור"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full text-[color:var(--color-paper-soft)]/60 transition-colors hover:bg-white/5 hover:text-[color:var(--color-paper-soft)]"
            >
              <X className="h-3.5 w-3.5" strokeWidth={1.8} />
            </button>
            <h3 className="font-display text-xl font-medium text-[color:var(--color-paper-soft)]">
              נגישות
            </h3>
            <p className="mt-1 text-[12px] text-[color:var(--color-paper-soft)]/60">
              התאמות אישיות לחוויית הגלישה.
            </p>

            <div className="mt-4 flex flex-col gap-2">
              <PrefRow
                icon={Type}
                label="גודל טקסט"
                value={`${Math.round(prefs.fontScale * 100)}%`}
                onClick={cycleFont}
              />
              <PrefToggle
                icon={Contrast}
                label="ניגודיות גבוהה"
                active={prefs.highContrast}
                onClick={() =>
                  update({ ...prefs, highContrast: !prefs.highContrast })
                }
              />
              <PrefToggle
                icon={Link2}
                label="הדגשת קישורים"
                active={prefs.highlightLinks}
                onClick={() =>
                  update({ ...prefs, highlightLinks: !prefs.highlightLinks })
                }
              />
              <PrefToggle
                icon={Pause}
                label="עצירת אנימציות"
                active={prefs.pauseAnimations}
                onClick={() =>
                  update({ ...prefs, pauseAnimations: !prefs.pauseAnimations })
                }
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 text-[12px] text-[color:var(--color-paper-soft)]/60 transition-colors hover:text-[color:var(--color-paper-soft)]"
              >
                <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.6} />
                איפוס
              </button>
              <a
                href="/accessibility"
                className="text-[12px] text-[color:var(--color-bronze)] transition-colors hover:text-[color:var(--color-paper-soft)]"
              >
                להצהרת הנגישות
              </a>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-expanded={open}
        aria-label="פתח את תפריט הנגישות"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto group relative inline-flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--color-bronze)]/40 bg-[color:var(--color-ink)] text-[color:var(--color-bronze)] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:border-[color:var(--color-bronze)]/80"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[color:var(--color-bronze)]/20 blur-xl transition-opacity duration-500 group-hover:opacity-80"
        />
        <Accessibility className="relative h-6 w-6" strokeWidth={1.5} />
      </button>
    </aside>
  );
}

function PrefRow({
  icon: Icon,
  label,
  value,
  onClick,
}: {
  icon: typeof Type;
  label: string;
  value: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-11 items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 text-[13px] text-[color:var(--color-paper-soft)] transition-colors hover:border-[color:var(--color-bronze)]/40"
    >
      <span className="inline-flex items-center gap-2">
        <Icon className="h-4 w-4 text-[color:var(--color-bronze)]" strokeWidth={1.6} />
        {label}
      </span>
      <span className="text-[color:var(--color-paper-soft)]/60">{value}</span>
    </button>
  );
}

function PrefToggle({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: typeof Type;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        "flex h-11 items-center justify-between rounded-full border px-4 text-[13px] transition-colors " +
        (active
          ? "border-[color:var(--color-bronze)]/60 bg-[color:var(--color-bronze)]/10 text-[color:var(--color-paper-soft)]"
          : "border-white/10 bg-white/5 text-[color:var(--color-paper-soft)]/85 hover:border-[color:var(--color-bronze)]/40")
      }
    >
      <span className="inline-flex items-center gap-2">
        <Icon className="h-4 w-4 text-[color:var(--color-bronze)]" strokeWidth={1.6} />
        {label}
      </span>
      <span
        aria-hidden="true"
        dir="ltr"
        className={
          "relative inline-flex h-5 w-10 items-center rounded-full p-0.5 transition-colors " +
          (active ? "justify-end bg-[color:var(--color-bronze)]" : "justify-start bg-white/15")
        }
      >
        <span className="block h-4 w-4 rounded-full bg-white shadow-sm transition-all" />
      </span>
    </button>
  );
}
