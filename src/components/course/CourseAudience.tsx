import { BadgeCheck, Sparkles } from "lucide-react";
import type { Course } from "@/data/courses";
import { getCertificationPath } from "@/components/courses/labels";

type CourseAudienceProps = {
  course: Course;
};

export function CourseAudience({ course }: CourseAudienceProps) {
  if (!course.targetAudience || course.targetAudience.length === 0) return null;
  const cert = getCertificationPath(course);
  const needsEntry = cert.entry !== null;
  const hasPreCourse = Boolean(course.preCourse);

  return (
    <section
      aria-labelledby="audience-title"
      className="relative bg-[color:var(--color-cream)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="mb-12 flex flex-col gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze-ink)]">
            קהל יעד
          </span>
          <h2
            id="audience-title"
            className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] text-[color:var(--color-ink)]"
          >
            למי הקורס מיועד
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {course.targetAudience.map((item, idx) => (
            <article
              key={item}
              className="flex items-start gap-5 rounded-[22px] border border-[color:var(--color-ink)]/8 bg-white p-6 sm:p-7"
            >
              <span className="font-display text-[28px] font-medium leading-none text-[color:var(--color-bronze)]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
                {item}
              </p>
            </article>
          ))}
        </div>

        {(course.prerequisites && course.prerequisites.length > 0) || needsEntry ? (
          <div className="mt-10 grid gap-5 rounded-[24px] border border-[color:var(--color-ink)]/10 bg-white/70 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <BadgeCheck
                  className="h-4 w-4 text-[color:var(--color-bronze)]"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze-ink)]">
                  דרישות מקדימות
                </span>
              </div>
              {course.prerequisites && (
                <ul className="flex flex-col gap-2">
                  {course.prerequisites.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-3 text-[14px] leading-relaxed text-[color:var(--color-ink-soft)]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-bronze)]"
                      />
                      {req}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {needsEntry && hasPreCourse && (
              <div className="flex items-start gap-3 rounded-[16px] bg-[color:var(--color-bronze)]/12 p-5 md:max-w-xs">
                <Sparkles
                  className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-bronze-ink)]"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <p className="text-[13px] leading-relaxed text-[color:var(--color-ink-soft)]">
                  למי שאין רקע —{" "}
                  <strong className="font-medium text-[color:var(--color-ink)]">
                    המכינה (Pre-Course) כלולה בקורס
                  </strong>{" "}
                  ומאפשרת להגיע מוכנים למפגש הראשון.
                </p>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
