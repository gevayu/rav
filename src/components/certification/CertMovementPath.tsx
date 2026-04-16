import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, ArrowLeft } from "lucide-react";

const steps = [
  {
    tier: "AI01",
    name: "יסוד",
    desc: "מכינה או קורס מבוא. 6-10 שעות של עקרונות וכלים ראשוניים.",
    color: "border-[color:var(--color-signal)]/40 bg-[color:var(--color-signal)]/10 text-[color:var(--color-signal)]",
  },
  {
    tier: "AI05",
    name: "מקצועי",
    desc: "קורס סקטוריאלי מלא. 40 שעות של יישום AI בתחום שלך.",
    color: "border-[color:var(--color-bronze)]/40 bg-[color:var(--color-bronze)]/10 text-[color:var(--color-bronze-ink)]",
  },
  {
    tier: "AI09",
    name: "מאסטר",
    desc: "קורס המשך מתקדם. הובלה, הטמעה ואסטרטגיית AI ארגונית.",
    color: "border-[color:var(--color-ink)]/20 bg-[color:var(--color-ink)]/8 text-[color:var(--color-ink)]",
  },
];

export function CertMovementPath() {
  return (
    <section className="relative bg-[color:var(--color-cream)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="המסלול"
            title="דרגה אחת בכל קורס. שלושה קורסים עד AI09."
            lede="כל קורס מעלה דרגה אחת. הנתיב ברור, הקצב שלך."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mt-16">
            <div
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-[52px] hidden h-px bg-gradient-to-l from-[color:var(--color-bronze)]/10 via-[color:var(--color-bronze)]/40 to-[color:var(--color-bronze)]/10 sm:block"
            />

            <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
              {steps.map((step, i) => (
                <div key={step.tier} className="flex flex-col items-center gap-5 text-center">
                  <div className="relative">
                    <div
                      className={`flex h-[104px] w-[104px] items-center justify-center rounded-full border-2 ${step.color}`}
                    >
                      <div className="flex flex-col items-center">
                        <span className="font-display text-xl font-medium tracking-[0.06em]">
                          {step.tier}
                        </span>
                      </div>
                    </div>
                    {i < steps.length - 1 && (
                      <ArrowLeft
                        className="absolute -left-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-[color:var(--color-bronze)]/50 sm:block"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-lg font-medium text-[color:var(--color-ink)]">
                      {step.name}
                    </h3>
                    <p className="mx-auto max-w-[240px] text-[13px] leading-relaxed text-[color:var(--color-ink-muted)]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-14 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-bronze)]/30 bg-white px-5 py-2.5 text-[13px] text-[color:var(--color-ink-muted)]">
              <ShieldCheck className="h-4 w-4 text-[color:var(--color-bronze)]" strokeWidth={1.6} />
              כל דרגה תקפה לשנתיים. חידוש באמצעות מבחן מקוון או קורס עדכון.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
