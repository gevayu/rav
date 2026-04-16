import { Calendar, Clock, ShieldCheck, Video } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { sectors } from "@/data/sectors";
import type { Course } from "@/data/courses";
import {
  FORMAT_LABELS,
  LEVEL_LABELS,
  getCertificationPath,
} from "@/components/courses/labels";

type CourseHeroProps = {
  course: Course;
};

const formatPrice = (min: number, max: number) =>
  `₪${min.toLocaleString("he-IL")}–${max.toLocaleString("he-IL")}`;

export function CourseHero({ course }: CourseHeroProps) {
  const sector = sectors.find((s) => s.slug === course.sectorSlug);
  const cert = getCertificationPath(course);

  return (
    <section
      aria-labelledby="course-title"
      className="relative isolate overflow-hidden bg-[color:var(--color-ink)] pb-0 pt-36 sm:pt-44"
    >
      {/* Ambient bronze glow */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[color:var(--color-bronze)]/10 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/30 to-transparent"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-16 xl:grid-cols-[1fr_380px]">
          {/* Left: text content */}
          <div className="flex flex-col gap-7 pb-16 sm:pb-20">
            <div className="flex flex-wrap items-center gap-3">
              {sector && (
                <Eyebrow tone="bronze">{sector.displayName}</Eyebrow>
              )}
              <span className="h-3 w-px bg-[color:var(--color-bronze)]/30" aria-hidden="true" />
              <Eyebrow tone="paper">{LEVEL_LABELS[course.level]}</Eyebrow>
              <span className="h-3 w-px bg-[color:var(--color-bronze)]/30" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-bronze)]/50 bg-[color:var(--color-bronze)]/10 px-2.5 py-1 text-[11px] font-medium tracking-[0.08em] text-[color:var(--color-bronze)]">
                <ShieldCheck className="h-3 w-3" strokeWidth={1.8} aria-hidden="true" />
                {cert.exit}
              </span>
            </div>

            <h1
              id="course-title"
              className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-medium leading-[1.0] tracking-tight text-[color:var(--color-paper-soft)]"
            >
              {course.title}
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-[color:var(--color-paper-soft)]/70">
              {course.subtitle}
            </p>

            {/* Highlights */}
            {course.highlights.length > 0 && (
              <ul className="flex flex-col gap-2.5">
                {course.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-[14px] text-[color:var(--color-paper-soft)]/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-bronze)]"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {/* Meta pills */}
            <div className="flex flex-wrap items-center gap-2.5 border-t border-white/10 pt-6">
              <MetaPill icon={Clock} text={`${course.totalHours} שעות אקדמיות`} />
              <MetaPill icon={Calendar} text={`${course.durationWeeks} שבועות`} />
              <MetaPill icon={Video} text={`${course.liveSessions} מפגשי לייב`} />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[12px] text-[color:var(--color-paper-soft)]/60">
                {FORMAT_LABELS[course.format]}
              </span>
            </div>

            {/* Mobile QuickFacts (below content on small screens) */}
            <div className="lg:hidden">
              <QuickFactsCard course={course} />
            </div>
          </div>

          {/* Right: sticky QuickFacts on desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-28 pb-16">
              <QuickFactsCard course={course} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickFactsCard({ course }: { course: Course }) {
  const formatPrice = (min: number, max: number) =>
    `₪${min.toLocaleString("he-IL")}–${max.toLocaleString("he-IL")}`;

  return (
    <div className="relative overflow-hidden rounded-[28px] bg-white/[0.04] p-1.5 ring-1 ring-[color:var(--color-bronze)]/30">
      <div className="flex flex-col rounded-[calc(28px-0.375rem)] bg-[color:var(--color-ink)]/95 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        {/* Price */}
        <div className="border-b border-white/10 pb-6">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-paper-soft)]/50">
            טווח השקעה
          </p>
          <p className="mt-2 font-display text-[clamp(2rem,4vw,2.6rem)] font-medium leading-none text-[color:var(--color-bronze)]">
            {formatPrice(course.priceMin, course.priceMax)}
          </p>
        </div>

        {/* Meta rows */}
        <dl className="mt-5 flex flex-col gap-3.5 text-[13px]">
          <FactRow label="מחזור הבא" value={course.nextCohort.replace("מחזור הבא: ", "")} />
          <FactRow label="שעות אקדמיות" value={`${course.totalHours} שעות`} />
          <FactRow label="מפגשי לייב" value={`${course.liveSessions} מפגשים`} />
          <FactRow label="פורמט" value={FORMAT_LABELS[course.format]} />
          <FactRow label="רמה" value={LEVEL_LABELS[course.level]} />
        </dl>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3">
          <Button as="a" href="/#lead" variant="primary" size="lg">
            להרשמה לקורס
          </Button>
          <Button as="a" href="/#lead" variant="secondary" size="lg" trailingIcon={false}>
            תיאום ייעוץ
          </Button>
        </div>

        <p className="mt-4 text-center text-[11px] text-[color:var(--color-paper-soft)]/40">
          ללא התחייבות · ניתן לבטל עד 14 יום
        </p>
      </div>
    </div>
  );
}

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-[color:var(--color-paper-soft)]/50">{label}</dt>
      <dd className="text-right font-medium text-[color:var(--color-paper-soft)]/85">{value}</dd>
    </div>
  );
}

function MetaPill({ icon: Icon, text }: { icon: typeof Clock; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-bronze)]/25 bg-[color:var(--color-bronze)]/5 px-3 py-1.5 text-[12px] text-[color:var(--color-paper-soft)]/65">
      <Icon className="h-3.5 w-3.5 text-[color:var(--color-bronze)]" strokeWidth={1.8} />
      {text}
    </span>
  );
}
