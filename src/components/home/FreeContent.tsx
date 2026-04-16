import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLeft, BookOpen, Download, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ContentCard = {
  type: string;
  icon: LucideIcon;
  category: string;
  title: string;
  meta: string;
  cta: string;
};

const cards: ContentCard[] = [
  {
    type: "article",
    icon: BookOpen,
    category: "מאמר · עריכת דין",
    title: "איך AI משנה את עריכת חוזים — והדברים שעדיין חייבים ידיים אנושיות",
    meta: "קריאה של 8 דקות · עו״ד דנה ברק",
    cta: "לקריאה מלאה",
  },
  {
    type: "guide",
    icon: Download,
    category: "מדריך להורדה · רפואה",
    title: "10 prompts קליניים שכל רופא ראשוני צריך לדעת לנסח נכון",
    meta: "PDF · 18 עמודים · חינם",
    cta: "להורדה",
  },
  {
    type: "webinar",
    icon: Video,
    category: "ובינר מוקלט · פיננסים",
    title: "מסגרת עבודה לאוטומציית סגירות חודשיות עם סוכני AI",
    meta: "52 דקות · רו״ח אבי מזרחי",
    cta: "לצפייה",
  },
];

export function FreeContent() {
  return (
    <section
      id="free"
      className="relative bg-[color:var(--color-paper)] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
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

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 0.1}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white p-1.5 ring-1 ring-[color:var(--color-ink)]/6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:ring-[color:var(--color-bronze)]/45 hover:shadow-[0_28px_60px_-32px_rgba(28,28,30,0.22)]">
                  <div className="relative flex h-full flex-col rounded-[calc(28px-0.375rem)] bg-[color:var(--color-paper-soft)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
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

                    <p className="mt-auto pt-8 text-[12px] text-[color:var(--color-ink-muted)]">
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
