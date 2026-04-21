import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Course } from "@/data/courses";

type CourseOutcomesProps = {
  course: Course;
};

export function CourseOutcomes({ course }: CourseOutcomesProps) {
  if (!course.whatYouLearn || course.whatYouLearn.length === 0) return null;

  return (
    <section
      aria-labelledby="outcomes-title"
      className="relative bg-[color:var(--color-paper-soft)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="mb-14 flex flex-col gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze-ink)]">
            בסיום הקורס
          </span>
          <h2
            id="outcomes-title"
            className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] text-[color:var(--color-ink)]"
          >
            מה תוכלו לעשות אחרי הקורס
          </h2>
          {course.overview && (
            <p className="max-w-2xl text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
              {course.overview}
            </p>
          )}
        </div>

        <ul className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {course.whatYouLearn.map((item) => (
            <li
              key={item.text}
              className="flex flex-col gap-4 rounded-[20px] border border-[color:var(--color-ink)]/8 bg-white p-6"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-bronze)]"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <span className="text-[14px] leading-relaxed text-[color:var(--color-ink-soft)]">
                  {item.text}
                </span>
              </div>
              {item.saving && (
                <span className="inline-flex w-fit items-center rounded-full bg-[color:var(--color-bronze)]/10 px-3 py-1 text-[12px] font-medium text-[color:var(--color-bronze-ink)]">
                  חיסכון: {item.saving}
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className="relative mt-6 h-[280px] w-full overflow-hidden rounded-[24px] sm:h-[340px]">
          <Image
            src="/images/org/Focused Professional in a Green-Themed Modern Office.png"
            alt=""
            fill
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="object-cover object-center"
            unoptimized
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
