import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    label: "יום 0",
    text: "אתה ממלא טופס. יועץ הדרכה בכיר מתקשר אליך תוך יום עסקים.",
  },
  {
    label: "שבוע 1",
    text: "פגישת היכרות (30 דקות, בזום או פרונטלית). מבינים את הארגון, את הצרכים, את הציפיות.",
  },
  {
    label: "שבוע 2-3",
    text: 'אבחון ארגוני (אם בחרת חבילה שכוללת אבחון). הצגת דו"ח האבחון להנהלה.',
  },
  {
    label: "שבוע 3-4",
    text: "הצעת מחיר מותאמת + תוכנית הכשרה מפורטת. חתימה על הסכם.",
  },
  {
    label: "שבוע 5",
    text: "העובדים הראשונים מתחילים ללמוד. יועץ ההדרכה שלך מלווה מרגע זה ועד תום התהליך.",
  },
];

export function BizProcess() {
  return (
    <section className="relative bg-[color:var(--color-paper-soft)] py-24 sm:py-28">
      <div className="mx-auto max-w-[860px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="תהליך העבודה"
            title="מה קורה מהרגע שתלחץ על הכפתור"
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-0">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.08}>
              <div className="group flex gap-6 py-6">
                <div className="flex flex-col items-center gap-2">
                  <span className="flex h-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-bronze)]/30 bg-[color:var(--color-bronze)]/10 px-3 font-display text-[12px] font-medium text-[color:var(--color-bronze-ink)]">
                    {step.label}
                  </span>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="w-px flex-1 bg-[color:var(--color-bronze)]/20"
                    />
                  )}
                </div>
                <p className="pt-2 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
