import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CatalogCtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[color:var(--color-bronze)]/10 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-5">
            <Eyebrow tone="bronze">לא בטוח איזה מסלול מתאים לך?</Eyebrow>
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.2rem)] font-medium leading-[1.05] text-[color:var(--color-paper-soft)]">
              שיחת ייעוץ של 15 דקות עם יועץ הדרכה שמכיר את התחום שלך.
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed text-[color:var(--color-paper-soft)]/70">
              ללא מכירות ובלי התחייבות — רק התאמה מדויקת בין מה שאתה צריך לבין
              הקורס הנכון, והסבר מה ההתקדמות הריאלית בתוך שלושה חודשים.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button as="a" href="/#lead" variant="primary" size="lg">
              לתיאום ייעוץ
            </Button>
            <Button as="a" href="/#champions" variant="secondary" size="lg">
              למדריכי הקורסים
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
