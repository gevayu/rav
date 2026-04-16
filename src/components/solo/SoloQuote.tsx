import { Reveal } from "@/components/ui/Reveal";
import { Quote } from "lucide-react";

export function SoloQuote() {
  return (
    <section className="relative bg-[color:var(--color-cream)] py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/30 to-transparent"
      />

      <div className="mx-auto max-w-[860px] px-6 sm:px-10">
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center">
            <Quote
              className="h-10 w-10 text-[color:var(--color-bronze)]/40"
              strokeWidth={1}
              aria-hidden="true"
            />

            <blockquote className="font-display text-[clamp(1.3rem,2.8vw,1.9rem)] font-medium leading-[1.35] text-[color:var(--color-ink)]">
              &ldquo;לפני הקורס הייתי מסיים יום עבודה ב-21:00. אחרי הקורס,
              ב-17:30. אותה הכנסה, יותר זמן לאישה ולילדים. הקורס החזיר
              לי את ההשקעה תוך חודש.&rdquo;
            </blockquote>

            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-base font-medium text-[color:var(--color-ink)]">
                עו&quot;ד אמיר לוי
              </span>
              <span className="text-[13px] text-[color:var(--color-ink-muted)]">
                עצמאי, תל אביב | בוגר AI למשפטים 2024
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
