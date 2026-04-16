import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck } from "lucide-react";
import {
  CERTIFICATION_ORDER,
  CERTIFICATION_TIERS,
} from "@/components/courses/labels";

const tierColors: Record<string, string> = {
  AI01: "border-[color:var(--color-signal)]/50 bg-[color:var(--color-signal)]/15 text-[color:var(--color-signal)]",
  AI05: "border-[color:var(--color-bronze)]/50 bg-[color:var(--color-bronze)]/15 text-[color:var(--color-bronze)]",
  AI09: "border-white/25 bg-white/10 text-[color:var(--color-paper-soft)]",
};

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
              מידרג של דרגות מוסדיות.
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[color:var(--color-paper-soft)]/70">
              שלוש רמות הסמכה - AI01, AI05, AI09 - שמסמנות בדיוק מה אתה יודע
              לעשות עם AI בתחום שלך. תעודות ממכללה מפוקחת, עם תוכנית חידוש שנתית
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
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-full border-2 sm:h-20 sm:w-20 ${tierColors[tier]}`}
                      >
                        <span className="font-display text-[15px] font-medium tracking-[0.06em] sm:text-[17px]">
                          {label}
                        </span>
                      </div>
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
