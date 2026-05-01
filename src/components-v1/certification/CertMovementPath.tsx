import { Fragment } from "react";
import { Reveal } from "@/components-v1/ui/Reveal";
import { SectionHeading } from "@/components-v1/ui/SectionHeading";
import { ShieldCheck } from "lucide-react";
import { TIER_COLORS } from "@/components-v1/courses/labels";

const steps = [
  {
    tier: "Ai01" as const,
    name: "יסוד",
    desc: "מכינה או קורס מבוא. 6-10 שעות של עקרונות וכלים ראשוניים.",
  },
  {
    tier: "Ai03" as const,
    name: "התמחות מקצועית",
    desc: "קורס ביניים. 20-30 שעות של יישום מעמיק בתחום.",
  },
  {
    tier: "Ai05" as const,
    name: "מקצועי",
    desc: "קורס סקטוריאלי מלא. 40 שעות של יישום Ai בתחום שלך.",
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
            title="דרגה אחת בכל קורס. שלושה קורסים עד Ai05."
            lede="כל קורס מעלה דרגה אחת. הנתיב ברור, הקצב שלך."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col gap-4">
            {/* Badge row: badges are siblings of flex-1 connectors so items-center pins line to capsule midpoint */}
            <div className="flex items-center">
              {steps.map((step, i) => (
                <Fragment key={step.tier}>
                  <span
                    className={`inline-flex shrink-0 items-center rounded-full border-2 px-5 py-2 font-display text-xl font-medium tracking-[0.06em] ${TIER_COLORS[step.tier].bg} ${TIER_COLORS[step.tier].border} ${TIER_COLORS[step.tier].text}`}
                  >
                    {step.tier}
                  </span>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="flex-1 h-px mx-5 bg-gradient-to-l from-[color:var(--color-bronze)]/15 via-[color:var(--color-bronze)]/55 to-[color:var(--color-bronze)]/15"
                    />
                  )}
                </Fragment>
              ))}
            </div>

            {/* Label row: spacers mirror connectors to keep labels under their badge */}
            <div className="flex">
              {steps.map((step, i) => (
                <Fragment key={step.tier}>
                  <div className="flex shrink-0 flex-col gap-2 text-center">
                    <h3 className="font-display text-lg font-medium text-[color:var(--color-ink)]">
                      {step.name}
                    </h3>
                    <p className="max-w-[200px] text-[13px] leading-relaxed text-[color:var(--color-ink-muted)]">
                      {step.desc}
                    </p>
                  </div>
                  {i < steps.length - 1 && <span className="flex-1 mx-5" aria-hidden="true" />}
                </Fragment>
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
