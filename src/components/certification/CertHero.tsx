import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck } from "lucide-react";
import {
  CERTIFICATION_ORDER,
  CERTIFICATION_TIERS,
  TIER_COLORS,
} from "@/components/courses/labels";

export function CertHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] pb-28 pt-40 sm:pb-36 sm:pt-48">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--color-bronze)]/8 blur-[180px]"
      />

      <div className="relative mx-auto max-w-[1080px] px-6 text-center sm:px-10">
        <Reveal>
          <div className="flex flex-col items-center gap-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
              <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.8} />
              מדרג ההסמכה
            </span>

            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium leading-[1.02] tracking-tight text-[color:var(--color-paper-soft)]">
              סטנדרט חדש בשוק התעסוקה
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[color:var(--color-paper-soft)]/70">
              שלוש רמות הסמכה - Ai01, Ai05, Ai10 - שמסמנות בדיוק מה אתה יודע
              לעשות עם Ai בתחום שלך. תעודות ממכללה מפוקחת, עם תוכנית חידוש שנתית
              שמבטיחה שהדרגה שלך תמיד רלוונטית.
            </p>

            <div
              className="mt-4 flex items-center justify-center gap-3 sm:gap-5"
              role="list"
              aria-label="שלוש דרגות ההסמכה"
            >
              {CERTIFICATION_ORDER.map((tier, idx) => {
                const { label, name } = CERTIFICATION_TIERS[tier];
                return (
                  <div key={tier} className="flex items-center gap-3 sm:gap-5" role="listitem">
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full border-2 px-3 py-1.5 font-display text-[15px] font-medium tracking-[0.06em] sm:px-4 sm:py-2 sm:text-[17px] ${TIER_COLORS[tier].bg} ${TIER_COLORS[tier].border} ${TIER_COLORS[tier].text}`}
                      >
                        {label}
                      </span>
                      <span className="text-[12px] font-medium text-[color:var(--color-paper-soft)]/60">
                        {name}
                      </span>
                    </div>
                    {idx < CERTIFICATION_ORDER.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="h-px w-8 bg-gradient-to-l from-[color:var(--color-bronze)]/50 to-[color:var(--color-bronze)]/15 sm:w-14"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
