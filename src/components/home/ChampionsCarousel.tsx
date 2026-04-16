"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { champions } from "@/data/instructors";

export function ChampionsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.75;
    // In RTL, visual "next" means smaller scrollLeft (more negative).
    el.scrollBy({ left: dir === "next" ? -delta : delta, behavior: "smooth" });
  };

  return (
    <section
      id="champions"
      className="relative isolate overflow-hidden bg-[color:var(--color-ink)] py-28 sm:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/4 h-[520px] w-[520px] rounded-full bg-[color:var(--color-bronze)]/10 blur-[160px]"
      />
      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              tone="paper"
              eyebrow="הכירו את המדריכים"
              title={
                <>
                  +40 מדריכים{" "}
                  <span className="text-[color:var(--color-bronze)]">
                    מהתעשייה.
                  </span>
                  <br />
                  לכל תחום, את המומחה שלו.
                </>
              }
              lede="אנשי מקצוע פעילים שעדיין עובדים בתחום שלהם. מכירים כל דפוס של יום עבודה אמיתי, כי הם חיים אותו."
            />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("prev")}
                aria-label="הקודם"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[color:var(--color-paper-soft)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[color:var(--color-bronze)]/55 hover:bg-[color:var(--color-bronze)]/10 hover:text-[color:var(--color-bronze)]"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={() => scroll("next")}
                aria-label="הבא"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[color:var(--color-paper-soft)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[color:var(--color-bronze)]/55 hover:bg-[color:var(--color-bronze)]/10 hover:text-[color:var(--color-bronze)]"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.6} />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            ref={scrollRef}
            className="mask-fade-edges mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
            style={{ scrollbarWidth: "none" }}
          >
            {champions.map((person) => (
              <article
                key={person.id}
                className="group relative flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-[32px] bg-white/[0.03] p-1.5 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:ring-[color:var(--color-bronze)]/50 sm:w-[340px]"
              >
                <div className="relative flex flex-col rounded-[calc(32px-0.375rem)] bg-[color:var(--color-ink)]/95 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full ring-2 ring-[color:var(--color-bronze)]/70 ring-offset-4 ring-offset-[color:var(--color-ink)] sm:h-44 sm:w-44">
                    <Image
                      src={person.portraitUrl}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 144px, 176px"
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div className="mt-6 flex flex-col items-center text-center">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
                      {person.sector}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-medium text-[color:var(--color-paper-soft)]">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-[13px] text-[color:var(--color-paper-soft)]/70">
                      {person.title}
                    </p>
                  </div>

                  <p className="mt-6 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-[12px] leading-relaxed text-[color:var(--color-paper-soft)]/65">
                    {person.experience}
                  </p>

                  <div className="mt-6 flex items-center justify-center gap-2 text-[12px] font-medium text-[color:var(--color-bronze)]">
                    <span>לפרופיל המלא</span>
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.8} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
