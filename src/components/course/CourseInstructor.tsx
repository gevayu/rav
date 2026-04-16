import Image from "next/image";
import { Quote } from "lucide-react";
import type { Course } from "@/data/courses";
import { sectors } from "@/data/sectors";

type CourseInstructorProps = {
  course: Course;
};

export function CourseInstructor({ course }: CourseInstructorProps) {
  const sector = sectors.find((s) => s.slug === course.sectorSlug);
  const title = course.instructorTitle ?? sector?.guideTitle;
  const years = sector?.guideYears;
  const bio = course.instructorBio ?? "";
  const paragraphs = bio.split("\n\n").filter(Boolean);
  const quote = paragraphs[0]?.split(".").slice(0, 2).join(".").trim();

  return (
    <section
      aria-labelledby="instructor-title"
      className="relative overflow-hidden bg-[color:var(--color-ink)] py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full bg-[color:var(--color-bronze)]/8 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="grid items-start gap-10 md:grid-cols-[260px_1fr] md:gap-14 lg:grid-cols-[300px_1fr] lg:gap-20">
          <div className="flex flex-col items-start gap-5">
            <div className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-full ring-2 ring-[color:var(--color-bronze)]/55 ring-offset-4 ring-offset-[color:var(--color-ink)]">
              <Image
                src={course.instructorPortraitUrl}
                alt={course.instructorName}
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 768px) 260px, 220px"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
              מי מעביר את הקורס
            </span>
            <div className="flex flex-col gap-2">
              <h2
                id="instructor-title"
                className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] text-[color:var(--color-paper-soft)]"
              >
                {course.instructorName}
              </h2>
              {title && (
                <p className="text-[15px] text-[color:var(--color-paper-soft)]/75">{title}</p>
              )}
              {years && (
                <p className="text-[13px] text-[color:var(--color-paper-soft)]/50">{years}</p>
              )}
            </div>

            {quote && (
              <figure className="relative my-2 border-r-2 border-[color:var(--color-bronze)]/60 pr-6">
                <Quote
                  className="absolute -right-4 top-0 h-4 w-4 rotate-180 text-[color:var(--color-bronze)]/60"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <blockquote className="font-display text-[20px] font-medium leading-[1.35] text-[color:var(--color-paper-soft)]/90">
                  {quote}.
                </blockquote>
              </figure>
            )}

            <div className="flex flex-col gap-4">
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-[15px] leading-relaxed text-[color:var(--color-paper-soft)]/70"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
