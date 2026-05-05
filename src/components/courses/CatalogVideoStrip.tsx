"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const VIDEO_URL =
  "https://iframe.mediadelivery.net/embed/653849/903b1f50-83b6-45be-b571-8d59a1b636f0";
const PLAY_URL = `${VIDEO_URL}?autoplay=true`;
const VIDEO_THUMB =
  "https://vz-d15780e3-ebb.b-cdn.net/903b1f50-83b6-45be-b571-8d59a1b636f0/thumbnail.jpg";
const SUBTITLE = "למה צריך הכשרת Ai מותאמת למקצוע";

export function CatalogVideoStrip() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative bg-[color:var(--color-ink)] py-14 sm:py-18 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/3 h-[400px] w-[400px] rounded-full bg-[color:var(--color-bronze)]/8 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Video */}
          <div className="w-full lg:w-[55%]">
            <div className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-[color:var(--color-ink-soft)] ring-1 ring-white/10">
              {playing ? (
                <iframe
                  src={PLAY_URL}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  title="סרטון הסבר"
                />
              ) : (
                <>
                  <Image
                    src={VIDEO_THUMB}
                    alt="תצוגה מקדימה של הסרטון"
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 1024px) 100vw, 650px"
                    unoptimized
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/60 via-transparent to-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-colors hover:bg-white/5"
                    aria-label="הפעל סרטון"
                  >
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-bronze)] text-[color:var(--color-ink)] shadow-[0_0_40px_rgba(229,184,155,0.3)] transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" strokeWidth={0} />
                    </span>
                    <span className="text-[12px] font-medium tracking-wide text-[color:var(--color-paper-soft)]/60">
                      לחץ להפעלה
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 lg:w-[45%]">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
              נדב גולדשמיט מנור, מנהל ההדרכה של המרכז
            </span>
            <p className="text-lg leading-relaxed text-[color:var(--color-paper-soft)]/80">
              {SUBTITLE}
            </p>
            <span
              aria-hidden="true"
              className="h-px w-14 bg-[color:var(--color-bronze)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
