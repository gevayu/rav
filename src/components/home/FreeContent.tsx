"use client";

import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLeft, ArrowRight, BookOpen, Download, Video, Mic } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ContentCard = {
  type: string;
  icon: LucideIcon;
  category: string;
  title: string;
  meta: string;
  cta: string;
  image: string;
};

const cards: ContentCard[] = [
  {
    type: "article",
    icon: BookOpen,
    category: "מאמר · עריכת דין",
    title: "איך Ai משנה את עריכת חוזים - והדברים שעדיין חייבים ידיים אנושיות",
    meta: "קריאה של 8 דקות · עו״ד דנה ברק",
    cta: "לקריאה מלאה",
    image: "/images/feel/Focused Work Session.png",
  },
  {
    type: "guide",
    icon: Download,
    category: "מדריך להורדה · רפואה",
    title: "10 prompts קליניים שכל רופא ראשוני צריך לדעת לנסח נכון",
    meta: "PDF · 18 עמודים · חינם",
    cta: "להורדה",
    image: "/images/feel/Woman Working at Table.png",
  },
  {
    type: "webinar",
    icon: Video,
    category: "ובינר מוקלט · פיננסים",
    title: "מסגרת עבודה לאוטומציית סגירות חודשיות עם סוכני Ai",
    meta: "52 דקות · רו״ח אבי מזרחי",
    cta: "לצפייה",
    image: "/images/feel/Office Collaboration.png",
  },
  {
    type: "article",
    icon: BookOpen,
    category: "מאמר · נדל״ן",
    title: "5 שימושים מיידיים ל-Ai בתהליך הערכת נכסים ושיווק דירות",
    meta: "קריאה של 6 דקות · יזם נדל״ן",
    cta: "לקריאה מלאה",
    image: "/images/feel/Focused Woman Working Remotely in a Serene Setting.png",
  },
  {
    type: "guide",
    icon: Download,
    category: "מדריך להורדה · מכירות",
    title: "תסריטי שיחה + סיכומי פגישות אוטומטיים עם Ai לאנשי מכירות B2B",
    meta: "PDF · 12 עמודים · חינם",
    cta: "להורדה",
    image: "/images/feel/Typing on Laptop.png",
  },
  {
    type: "webinar",
    icon: Mic,
    category: "ובינר מוקלט · הנדסה",
    title: "Code review, תיעוד ובדיקות אוטומטיות — Ai לצוותי פיתוח",
    meta: "44 דקות · מהנדס בכיר",
    cta: "לצפייה",
    image: "/images/feel/Focused Work.png",
  },
];

const CARD_WIDTH = 350;
const GAP = 24;

export function FreeContent() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "next" ? -(CARD_WIDTH + GAP) : (CARD_WIDTH + GAP),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="free"
      className="relative bg-[color:var(--color-paper)] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="תוכן מקצועי · חינם"
              title={
                <>
                  מתחילים ללמוד עוד{" "}
                  <span className="text-[color:var(--color-bronze-ink)]">
                    לפני
                  </span>{" "}
                  שנרשמים.
                </>
              }
              lede="מדריכים מעשיים, ובינרים מוקלטים ומאמרים כתובים בידי המדריכים עצמם. גישה חופשית, תוכן ברמה של קורס."
            />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("prev")}
                aria-label="הקודם"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--color-ink)]/15 bg-[color:var(--color-ink)]/5 text-[color:var(--color-ink-soft)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[color:var(--color-bronze)]/55 hover:bg-[color:var(--color-bronze)]/10 hover:text-[color:var(--color-bronze-ink)]"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={() => scroll("next")}
                aria-label="הבא"
                className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--color-ink)]/15 bg-[color:var(--color-ink)]/5 text-[color:var(--color-ink-soft)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[color:var(--color-bronze)]/55 hover:bg-[color:var(--color-bronze)]/10 hover:text-[color:var(--color-bronze-ink)]"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.6} />
              </button>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ direction: "rtl" }}
          >

            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="group relative flex w-[350px] shrink-0 flex-col overflow-hidden rounded-[28px] bg-white p-1.5 ring-1 ring-[color:var(--color-ink)]/6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:ring-[color:var(--color-bronze)]/45 hover:shadow-[0_28px_60px_-32px_rgba(28,28,30,0.22)]"
                  style={{ direction: "rtl" }}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[calc(28px-0.375rem)]">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="350px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="relative flex h-full flex-col rounded-b-[calc(28px-0.375rem)] bg-[color:var(--color-paper-soft)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[color:var(--color-bronze)]/30 bg-[color:var(--color-bronze)]/8 text-[color:var(--color-bronze-ink)]">
                        <Icon className="h-5 w-5" strokeWidth={1.4} />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-bronze-ink)]">
                        {card.category}
                      </span>
                    </div>

                    <h3 className="font-display text-[22px] font-medium leading-[1.2] text-[color:var(--color-ink)]">
                      {card.title}
                    </h3>

                    <p className="mt-auto pt-1 text-[12px] text-[color:var(--color-ink-muted)]">
                      {card.meta}
                    </p>

                    <div className="mt-4 flex items-center gap-2 border-t border-[color:var(--color-ink)]/5 pt-4">
                      <span className="text-[13px] font-medium text-[color:var(--color-bronze-ink)]">
                        {card.cta}
                      </span>
                      <ArrowLeft
                        className="h-3.5 w-3.5 text-[color:var(--color-bronze-ink)] transition-transform duration-300 group-hover:-translate-x-1"
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/#champions"
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--color-bronze)]/45 px-7 py-3 text-[14px] font-medium text-[color:var(--color-bronze-ink)] transition-all duration-300 hover:border-[color:var(--color-bronze)] hover:bg-[color:var(--color-bronze)]/8"
            >
              לכל המדריכים המקצועיים
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
