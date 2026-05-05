import Image from "next/image";
import { Calendar, Clock, Layers, Radio, UserRound, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CourseFormat } from "@/data/courses";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { sectors } from "@/data/sectors";
import type { Course } from "@/data/courses";
import {
  FORMAT_LABELS,
  TIER_COLORS,
  getCertificationPath,
} from "@/components/courses/labels";

type CourseHeroProps = {
  course: Course;
};

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
              <a
                href="#cert-standard"
                className={`inline-flex items-center rounded-full border-2 px-3 py-1 font-display text-[13px] font-medium tracking-[0.06em] transition-transform hover:scale-105 ${TIER_COLORS[cert.exit].bg} ${TIER_COLORS[cert.exit].border} ${TIER_COLORS[cert.exit].text}`}
                aria-label={`עבור לסקשן הסטנדרט החדש בתעשייה — ${cert.exit}`}
              >
                {cert.exit}
              </a>
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
              <MetaPill icon={FORMAT_ICONS[course.format]} text={FORMAT_LABELS[course.format]} />
            </div>

            {/* Mobile portrait (below content on small screens) */}
            <div className="lg:hidden">
              <InstructorPortraitCard course={course} />
            </div>
          </div>

          {/* Right: sticky instructor portrait on desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-28 pb-16">
              <InstructorPortraitCard course={course} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstructorPortraitCard({ course }: { course: Course }) {
  const hasCo = Boolean(course.coInstructorName && course.coInstructorPortraitUrl);
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-white/[0.04] p-1.5 ring-1 ring-[color:var(--color-bronze)]/30">
      <div className="flex flex-col gap-5 rounded-[calc(28px-0.375rem)] bg-[color:var(--color-ink)]/95 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        {hasCo ? (
          <div className="grid grid-cols-2 gap-3">
            <PortraitSquare src={course.instructorPortraitUrl} alt={course.instructorName} />
            <PortraitSquare src={course.coInstructorPortraitUrl!} alt={course.coInstructorName!} />
          </div>
        ) : (
          <PortraitSquare
            src={course.instructorPortraitUrl}
            alt={course.instructorName}
            large
          />
        )}

        <div className="flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
            ראש התחום
          </span>
          <p className="font-display text-[17px] font-medium text-[color:var(--color-paper-soft)]">
            {course.instructorName}
          </p>
          {course.instructorTitle && (
            <p className="text-[12px] leading-relaxed text-[color:var(--color-paper-soft)]/65">
              {course.instructorTitle}
            </p>
          )}
        </div>

        {hasCo && (
          <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
              ראש התחום משותף
            </span>
            <p className="font-display text-[17px] font-medium text-[color:var(--color-paper-soft)]">
              {course.coInstructorName}
            </p>
            {course.coInstructorTitle && (
              <p className="text-[12px] leading-relaxed text-[color:var(--color-paper-soft)]/65">
                {course.coInstructorTitle}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function PortraitSquare({
  src,
  alt,
  large = false,
}: {
  src: string;
  alt: string;
  large?: boolean;
}) {
  return (
    <div
      className={
        "relative w-full overflow-hidden " +
        (large
          ? "aspect-square rounded-[24px] ring-2 ring-[color:var(--color-bronze)]/60 ring-offset-4 ring-offset-[color:var(--color-ink)]"
          : "aspect-square rounded-[18px] ring-2 ring-[color:var(--color-bronze)]/55 ring-offset-2 ring-offset-[color:var(--color-ink)]")
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={large ? "340px" : "170px"}
        className="object-cover"
      />
    </div>
  );
}

const FORMAT_ICONS: Record<CourseFormat, LucideIcon> = {
  live: Radio,
  hybrid: Layers,
  "self-paced": UserRound,
};

function MetaPill({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-bronze)]/25 bg-[color:var(--color-bronze)]/5 px-3 py-1.5 text-[12px] text-[color:var(--color-paper-soft)]/65">
      <Icon className="h-3.5 w-3.5 text-[color:var(--color-bronze)]" strokeWidth={1.8} />
      {text}
    </span>
  );
}
