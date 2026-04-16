import Image from "next/image";
import { ArrowLeft, Calendar, Clock, GraduationCap, ShieldCheck, Video } from "lucide-react";
import type { Course } from "@/data/courses";
import { LEVEL_LABELS, FORMAT_LABELS, getCertificationPath } from "./labels";

type CourseCardProps = {
  course: Course;
};

const formatPrice = (min: number, max: number) =>
  `₪${min.toLocaleString("he-IL")}–${max.toLocaleString("he-IL")}`;

export function CourseCard({ course }: CourseCardProps) {
  const cert = getCertificationPath(course);
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white p-1.5 ring-1 ring-[color:var(--color-ink)]/8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:ring-[color:var(--color-bronze)]/55 hover:shadow-[0_32px_60px_-30px_rgba(28,28,30,0.22)]">
      <div className="relative flex h-full flex-col rounded-[calc(28px-0.375rem)] bg-[color:var(--color-paper-soft)] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[color:var(--color-bronze)]/55 ring-offset-2 ring-offset-[color:var(--color-paper-soft)]">
            <Image
              src={course.instructorPortraitUrl}
              alt={course.instructorName}
              fill
              sizes="56px"
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-medium text-[color:var(--color-ink)]">
              {course.instructorName}
            </p>
            <p className="truncate text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-bronze-ink)]">
              {LEVEL_LABELS[course.level]} · {FORMAT_LABELS[course.format]}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-bronze)]/40 bg-[color:var(--color-bronze)]/10 px-2.5 py-1 text-[11px] font-medium tracking-[0.08em] text-[color:var(--color-bronze-ink)]">
            <ShieldCheck className="h-3 w-3" strokeWidth={1.8} aria-hidden="true" />
            {cert.exit}
          </span>
          {cert.entry && (
            <span className="text-[10px] text-[color:var(--color-ink-muted)]/70">
              דורש {cert.entry}
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display text-[22px] font-medium leading-[1.2] text-[color:var(--color-ink)]">
          {course.title}
        </h3>
        <p className="mt-3 text-[13.5px] leading-relaxed text-[color:var(--color-ink-muted)]">
          {course.subtitle}
        </p>

        <dl className="mt-auto grid grid-cols-2 gap-3 pt-7 text-[12px] text-[color:var(--color-ink-muted)]">
          <Meta
            icon={Clock}
            label="שעות אקדמיות"
            value={`${course.totalHours} שעות`}
          />
          <Meta
            icon={Calendar}
            label="משך"
            value={`${course.durationWeeks} שבועות`}
          />
          <Meta
            icon={Video}
            label="לייב"
            value={`${course.liveSessions} מפגשים`}
          />
          <Meta
            icon={GraduationCap}
            label="מחזור"
            value={course.nextCohort.replace("מחזור הבא: ", "")}
          />
        </dl>

        <div className="mt-6 flex items-end justify-between border-t border-[color:var(--color-ink)]/8 pt-5">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]/80">
              טווח השקעה
            </span>
            <span className="tabular mt-1 font-display text-[18px] font-medium text-[color:var(--color-bronze-ink)]">
              {formatPrice(course.priceMin, course.priceMax)}
            </span>
          </div>
          <a
            href={`/courses/${course.slug}`}
            className="group/cta inline-flex items-center gap-2 text-[13px] font-medium text-[color:var(--color-bronze-ink)] transition-colors hover:text-[color:var(--color-bronze-deep)]"
            aria-label={`לפרטי הקורס ${course.title}`}
          >
            לפרטי הקורס
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:-translate-x-1"
              strokeWidth={1.8}
            />
          </a>
        </div>
      </div>
    </article>
  );
}

type MetaProps = {
  icon: typeof Clock;
  label: string;
  value: string;
};

function Meta({ icon: Icon, label, value }: MetaProps) {
  return (
    <div className="flex items-start gap-2">
      <Icon
        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[color:var(--color-bronze)]"
        strokeWidth={1.8}
      />
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-ink-muted)]/70">
          {label}
        </span>
        <span className="tabular text-[12px] text-[color:var(--color-ink)]">
          {value}
        </span>
      </div>
    </div>
  );
}
