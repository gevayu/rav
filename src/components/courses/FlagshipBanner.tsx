"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Calendar, Check, ChevronLeft, ChevronRight, Clock, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Course } from "@/data/courses";
import { FORMAT_LABELS } from "./labels";

type FlagshipBannerProps = {
  courses: Course[];
};

const formatPrice = (min: number, max: number) =>
  `₪${Math.round((min + max) / 2).toLocaleString("he-IL")}`;

export function FlagshipBanner({ courses }: FlagshipBannerProps) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      setFading(true);
      setTimeout(() => {
        setIndex(next);
        setFading(false);
      }, 400);
    },
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((index + 1) % courses.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [index, courses.length, goTo]);

  const prev = () => goTo((index - 1 + courses.length) % courses.length);
  const next = () => goTo((index + 1) % courses.length);

  const course = courses[index];

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
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium text-[color:var(--color-bronze)]">
            קורסי הדגל של המרכז
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={next}
              aria-label="הקורס הבא"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[color:var(--color-paper-soft)]/70 transition hover:border-[color:var(--color-bronze)]/40 hover:bg-white/[0.08] hover:text-[color:var(--color-bronze)]"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <span className="tabular text-[13px] text-[color:var(--color-paper-soft)]/40">
              {index + 1} / {courses.length}
            </span>
            <button
              onClick={prev}
              aria-label="הקורס הקודם"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[color:var(--color-paper-soft)]/70 transition hover:border-[color:var(--color-bronze)]/40 hover:bg-white/[0.08] hover:text-[color:var(--color-bronze)]"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="relative rounded-[40px] bg-white/[0.03] p-2 ring-1 ring-white/10 backdrop-blur-sm">
          <div
            className="relative rounded-[calc(40px-0.5rem)] bg-[color:var(--color-ink)]/95 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-12 lg:p-14 transition-opacity duration-[400ms]"
            style={{ opacity: fading ? 0 : 1 }}
          >
            <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
              <div className="flex flex-col gap-6">
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

                <div className="mt-4 flex flex-wrap items-center gap-3 text-[12px] text-[color:var(--color-paper-soft)]/75">
                  <MetaPill icon={Clock} text={`${course.totalHours} שעות אקדמיות`} />
                  <MetaPill icon={Calendar} text={`${course.durationWeeks} שבועות`} />
                  <MetaPill icon={Video} text={`${course.liveSessions} מפגשי לייב`} />
                  <MetaPill icon={Users} text={FORMAT_LABELS[course.format]} />
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:justify-end">
                <div
                  className="relative w-full overflow-hidden rounded-[32px] ring-2 ring-[color:var(--color-bronze)]/60 ring-offset-4 ring-offset-[color:var(--color-ink)]"
                  style={{ aspectRatio: "1" }}
                >
                  <Image
                    src={course.instructorPortraitUrl}
                    alt={course.instructorName}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"

                    priority
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-tl from-[color:var(--color-ink)]/55 via-transparent to-[color:var(--color-bronze)]/15"
                  />
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-[color:var(--color-bronze)]/40 bg-[color:var(--color-ink)]/90 px-5 py-3 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-bronze)]">
                    ראש התחום
                  </p>
                  <div className="h-4 w-px bg-white/20" />
                  <p className="font-display text-[17px] font-medium text-[color:var(--color-paper-soft)]">
                    {course.instructorName}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-6 border-t border-white/10 pt-6 sm:flex-row sm:justify-between sm:gap-6">
              <Button
                as="a"
                href={`/courses/${course.slug}`}
                variant="secondary"
                size="lg"
                className="sm:order-last"
              >
                לפרטי הקורס
              </Button>
              <Button
                as="a"
                href={`/courses/${course.slug}#register`}
                variant="primary"
                size="lg"
                className="sm:order-last"
              >
                להרשמה עכשיו
              </Button>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-paper-soft)]/55">
                  טווח השקעה
                </span>
                <span dir="ltr" className="tabular mt-1 font-display text-2xl font-medium text-[color:var(--color-bronze)]">
                  {formatPrice(course.priceMin, course.priceMax)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-paper-soft)]/55">
                  המחזור הבא
                </span>
                <span className="tabular mt-1 font-display text-2xl font-medium text-[color:var(--color-bronze)]">
                  {course.nextCohort.replace("מחזור הבא: ", "")}
                </span>
              </div>
              <span className="inline-flex items-center rounded-full border-2 border-[color:var(--color-tier-05-border)] bg-[color:var(--color-tier-05-bg)] px-4 py-2 font-display text-xl font-medium tracking-[0.06em] text-[color:var(--color-tier-05-ink)]">
                Ai05
              </span>
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
