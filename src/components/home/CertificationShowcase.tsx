import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ShieldCheck } from "lucide-react";
import {
  CERTIFICATION_ORDER,
  CERTIFICATION_TIERS,
} from "@/components/courses/labels";

const tierColors: Record<string, { bg: string; border: string; text: string }> = {
  AI01: {
    bg: "bg-[color:var(--color-signal)]/10",
    border: "border-[color:var(--color-signal)]/40",
    text: "text-[color:var(--color-signal)]",
  },
  AI05: {
    bg: "bg-[color:var(--color-bronze)]/10",
    border: "border-[color:var(--color-bronze)]/40",
    text: "text-[color:var(--color-bronze-ink)]",
  },
  AI09: {
    bg: "bg-[color:var(--color-ink)]/10",
    border: "border-[color:var(--color-ink)]/25",
    text: "text-[color:var(--color-ink)]",
  },
};

const tierDescriptions: Record<string, string> = {
  AI01: "מבוא ל-AI, מושגי בסיס ועקרונות עבודה. נקודת הכניסה לכל מי שמתחיל.",
  AI05: "התמחות סקטוריאלית. 40 שעות של יישום AI בתחום המקצועי שלך.",
  AI09: "העמקה, הובלה והטמעה ארגונית. לבוגרי AI05 שרוצים להוביל את השינוי.",
};

export function CertificationShowcase() {
  return (
    <section className="relative bg-[color:var(--color-paper-soft)] py-28 sm:py-36">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="מערכת הסרטיפיקציה"
            title="שלוש דרגות. נתיב אחד."
            lede="כל קורס מעלה דרגה אחת. מ-AI01 (יסוד) דרך AI05 (מקצועי) ועד AI09 (מאסטר). תעודות מוסדיות ממכללה מפוקחת — עם ערך אמיתי בשוק העבודה."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CERTIFICATION_ORDER.map((tier, i) => {
            const { label, name } = CERTIFICATION_TIERS[tier];
            const colors = tierColors[tier];
            return (
              <Reveal key={tier} delay={i * 0.1}>
                <article className="group relative flex h-full flex-col items-center gap-6 rounded-[32px] bg-white p-2 ring-1 ring-[color:var(--color-ink)]/5 transition-all duration-500 hover:ring-[color:var(--color-bronze)]/40">
                  <div className="flex h-full w-full flex-col items-center gap-5 rounded-[calc(32px-0.5rem)] bg-[color:var(--color-paper-soft)] p-8 pt-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(28,28,30,0.04)] transition-transform duration-500 group-hover:-translate-y-1">
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-full border-2 ${colors.border} ${colors.bg}`}
                    >
                      <span
                        className={`font-display text-xl font-medium tracking-[0.06em] ${colors.text}`}
                      >
                        {label}
                      </span>
                    </div>

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

        <div className="mt-8 flex justify-center">
          <Reveal delay={0.3}>
            <div className="flex items-center gap-2 sm:gap-4" aria-hidden="true">
              {CERTIFICATION_ORDER.map((tier, idx) => (
                <div key={tier} className="flex items-center gap-2 sm:gap-4">
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-[10px] font-medium tracking-wider ${tierColors[tier].border} ${tierColors[tier].bg} ${tierColors[tier].text}`}
                  >
                    {tier}
                  </span>
                  {idx < CERTIFICATION_ORDER.length - 1 && (
                    <span className="h-px w-8 bg-gradient-to-l from-[color:var(--color-bronze)]/50 to-[color:var(--color-bronze)]/15 sm:w-12" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.35}>
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-bronze)]/30 bg-[color:var(--color-bronze)]/5 px-4 py-2 text-[12px] font-medium text-[color:var(--color-bronze-ink)]">
              <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.6} />
              מוכר על ידי מכללה מפוקחת משרד העבודה, הביטחון והחינוך
            </div>
            <Button as="a" href="/certification" variant="secondary" size="md">
              על מערכת הסרטיפיקציה
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
