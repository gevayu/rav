import Image from "next/image";
import { Calendar, Check, Clock, Users, Video } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import type { Course } from "@/data/courses";
import { LEVEL_LABELS, FORMAT_LABELS } from "./labels";

type FlagshipBannerProps = {
  course: Course;
};

const formatPrice = (min: number, max: number) =>
  `₪${min.toLocaleString("he-IL")}–${max.toLocaleString("he-IL")}`;

export function FlagshipBanner({ course }: FlagshipBannerProps) {
  return (
    <section
      aria-labelledby="flagship-title"
      className="relative isolate overflow-hidden bg-[color:var(--color-ink)] py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-[color:var(--color-bronze)]/12 blur-[180px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/40 to-transparent"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="relative rounded-[40px] bg-white/[0.03] p-2 ring-1 ring-white/10 backdrop-blur-sm">
          <div className="relative grid gap-10 rounded-[calc(40px-0.5rem)] bg-[color:var(--color-ink)]/95 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:p-14">
            <div className="flex flex-col gap-6">
              <Eyebrow tone="bronze">קורס הדגל של המרכז</Eyebrow>
              <h2
                id="flagship-title"
                className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.02] text-[color:var(--color-paper-soft)]"
              >
                {course.title}
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-[color:var(--color-paper-soft)]/75">
                {course.subtitle}
              </p>

              <ul className="mt-2 flex flex-col gap-3 text-[14px] text-[color:var(--color-paper-soft)]/85">
                {course.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-bronze)]/15 text-[color:var(--color-bronze)]">
                      <Check className="h-3 w-3" strokeWidth={2.2} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6 text-[12px] text-[color:var(--color-paper-soft)]/75">
                <MetaPill
                  icon={Clock}
                  text={`${course.totalHours} שעות אקדמיות`}
                />
                <MetaPill
                  icon={Calendar}
                  text={`${course.durationWeeks} שבועות`}
                />
                <MetaPill
                  icon={Video}
                  text={`${course.liveSessions} מפגשי לייב`}
                />
                <MetaPill
                  icon={Users}
                  text={`${LEVEL_LABELS[course.level]} · ${FORMAT_LABELS[course.format]}`}
                />
              </div>

              <div className="mt-4 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
                <Button as="a" href={`/courses/${course.slug}`} variant="primary" size="lg">
                  לפרטי הקורס
                </Button>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-paper-soft)]/55">
                    טווח השקעה
                  </span>
                  <span className="tabular mt-1 font-display text-2xl font-medium text-[color:var(--color-bronze)]">
                    {formatPrice(course.priceMin, course.priceMax)}
                  </span>
                </div>
              </div>

              <p className="text-[12px] text-[color:var(--color-paper-soft)]/60">
                {course.nextCohort}
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative h-[320px] w-[320px] shrink-0 overflow-hidden rounded-[32px] ring-2 ring-[color:var(--color-bronze)]/60 ring-offset-4 ring-offset-[color:var(--color-ink)] sm:h-[380px] sm:w-[380px]">
                <Image
                  src={course.instructorPortraitUrl}
                  alt={course.instructorName}
                  fill
                  sizes="(max-width: 1024px) 320px, 380px"
                  className="object-cover"
                  unoptimized
                  priority
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tl from-[color:var(--color-ink)]/55 via-transparent to-[color:var(--color-bronze)]/15"
                />
              </div>
              <div className="absolute -bottom-2 right-4 rounded-2xl border border-[color:var(--color-bronze)]/40 bg-[color:var(--color-ink)]/90 px-5 py-3 shadow-[0_20px_40px_-16px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:right-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-bronze)]">
                  ראש התחום
                </p>
                <p className="mt-1 font-display text-[17px] font-medium text-[color:var(--color-paper-soft)]">
                  {course.instructorName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type MetaPillProps = {
  icon: typeof Clock;
  text: string;
};

function MetaPill({ icon: Icon, text }: MetaPillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-bronze)]/30 bg-[color:var(--color-bronze)]/5 px-3 py-1.5">
      <Icon className="h-3.5 w-3.5 text-[color:var(--color-bronze)]" strokeWidth={1.8} />
      <span className="tabular">{text}</span>
    </span>
  );
}
