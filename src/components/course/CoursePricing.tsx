import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Course } from "@/data/courses";

type CoursePricingProps = {
  course: Course;
};

const formatPrice = (min: number, max: number) =>
  `₪${min.toLocaleString("he-IL")}–${max.toLocaleString("he-IL")}`;

export function CoursePricing({ course }: CoursePricingProps) {
  return (
    <section
      aria-labelledby="pricing-title"
      className="relative overflow-hidden bg-[color:var(--color-ink)] py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--color-bronze)]/8 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[720px] px-6 text-center sm:px-10">
        <div className="flex flex-col items-center gap-8 rounded-[32px] border border-[color:var(--color-bronze)]/25 bg-white/[0.03] p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-14">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
              טווח השקעה
            </span>
            <h2
              id="pricing-title"
              className="font-display text-[clamp(2.6rem,6vw,4.2rem)] font-medium leading-[1] text-[color:var(--color-bronze)]"
            >
              {formatPrice(course.priceMin, course.priceMax)}
            </h2>
            <p className="text-[12px] tracking-wide text-[color:var(--color-paper-soft)]/55">
              ללא התחייבות · ניתן לבטל עד 14 יום
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch gap-3 sm:max-w-sm">
            <Button as="a" href="/#lead" variant="primary" size="lg">
              להרשמה לקורס
            </Button>
            <Button
              as="a"
              href="/#lead"
              variant="secondary"
              size="lg"
              trailingIcon={false}
            >
              דבר עם יועץ הדרכה
            </Button>
          </div>

          <a
            href="/#free"
            className="group inline-flex items-center gap-2 text-[13px] text-[color:var(--color-paper-soft)]/60 transition-colors hover:text-[color:var(--color-bronze)]"
          >
            <PlayCircle className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
            לא בטוחים? צפו בשיעור ניסיון חינם
          </a>
        </div>
      </div>
    </section>
  );
}
