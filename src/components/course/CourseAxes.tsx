import { Briefcase, Cpu, Layers } from "lucide-react";
import type { Course, CourseAxes as CourseAxesType } from "@/data/courses";

type CourseAxesProps = {
  course: Course;
};

type AxisSpec = {
  key: keyof CourseAxesType;
  title: string;
  eyebrow: string;
  icon: typeof Cpu;
};

const AXES: AxisSpec[] = [
  { key: "ai", title: "תהליכי Ai", eyebrow: "ציר ראשון", icon: Cpu },
  { key: "sector", title: "תהליכים סקטוריאליים", eyebrow: "ציר שני", icon: Layers },
  { key: "general", title: "תהליכים עסקיים כלליים", eyebrow: "ציר שלישי", icon: Briefcase },
];

export function CourseAxes({ course }: CourseAxesProps) {
  if (!course.axes) return null;
  const axes = course.axes;

  return (
    <section
      aria-labelledby="axes-title"
      className="relative bg-[color:var(--color-ink)] py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/25 to-transparent"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="mb-14 flex flex-col gap-4 text-center">
          <span className="self-center text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
            מתודולוגיה
          </span>
          <h2
            id="axes-title"
            className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] text-[color:var(--color-paper-soft)]"
          >
            שלושת צירי הלימוד
          </h2>
          <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-[color:var(--color-paper-soft)]/65">
            כל מפגש בקורס משלב שלושה מישורי עבודה שלא נפרדים אחד מהשני בעבודה היומיומית.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {AXES.map(({ key, title, eyebrow, icon: Icon }) => {
            const items = axes[key];
            return (
              <article
                key={key}
                className="flex flex-col gap-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-bronze)]/12 text-[color:var(--color-bronze)]">
                    <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-paper-soft)]/45">
                      {eyebrow}
                    </span>
                    <h3 className="font-display text-[18px] font-medium text-[color:var(--color-paper-soft)]">
                      {title}
                    </h3>
                  </div>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] leading-relaxed text-[color:var(--color-paper-soft)]/80"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-bronze)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
