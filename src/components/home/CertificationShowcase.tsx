import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ShieldCheck } from "lucide-react";
import {
  CERTIFICATION_ORDER,
  CERTIFICATION_TIERS,
  TIER_COLORS,
} from "@/components/courses/labels";

const tierDescriptions: Record<string, string> = {
  Ai01: "מבוא ל-Ai, מושגי בסיס ועקרונות עבודה. נקודת הכניסה לכל מי שמתחיל.",
  Ai05: "התמחות סקטוריאלית. 40 שעות של יישום Ai בתחום המקצועי שלך.",
  Ai10: "העמקה, הובלה והטמעה ארגונית. לבוגרי Ai05 שרוצים להוביל את השינוי.",
};

export function CertificationShowcase() {
  return (
    <section className="relative bg-[color:var(--color-paper-soft)] py-28 sm:py-36 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full" style={{ backgroundImage: "url('/images/wave-lines.svg')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="מדרג ההסמכה"
            title="סטנדרט חדש בשוק התעסוקה"
            lede="כל קורס מעלה דרגה אחת. מ-Ai01 (יסוד) דרך Ai05 (מקצועי) ועד Ai10 (מאסטר). תעודות מוסדיות ממכללה מפוקחת - עם ערך אמיתי בשוק העבודה."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CERTIFICATION_ORDER.map((tier, i) => {
            const { label, name } = CERTIFICATION_TIERS[tier];
            const colors = TIER_COLORS[tier];
            return (
              <Reveal key={tier} delay={i * 0.1}>
                <article className="group relative flex h-full flex-col items-center gap-6 rounded-[32px] bg-white p-2 ring-1 ring-[color:var(--color-ink)]/5 transition-all duration-500 hover:ring-[color:var(--color-bronze)]/40">
                  <div className="flex h-full w-full flex-col items-center gap-5 rounded-[calc(32px-0.5rem)] bg-[color:var(--color-paper-soft)] p-8 pt-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(28,28,30,0.04)] transition-transform duration-500 group-hover:-translate-y-1">
                    <span
                      className={`inline-flex items-center rounded-full border-2 px-4 py-2 font-display text-xl font-medium tracking-[0.06em] ${colors.border} ${colors.bg} ${colors.text}`}
                    >
                      {label}
                    </span>

                    <div className="flex flex-col items-center gap-1.5">
                      <h3 className="font-display text-lg font-medium text-[color:var(--color-ink)]">
                        {name}
                      </h3>
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                        דרגה {i + 1} מתוך 3
                      </span>
                    </div>

                    <p className="text-center text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                      {tierDescriptions[tier]}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.35}>
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <a
              href="/certification"
              className="inline-flex h-12 items-center gap-3 rounded-full border border-[color:var(--color-ink)]/12 bg-[#F5F2ED] px-6 text-sm font-medium text-[color:var(--color-ink)] transition-colors hover:bg-[#e8ded0]"
            >
              על מדרג ההסמכה
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
