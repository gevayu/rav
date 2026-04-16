import { Award, BookOpen, Clock, LayoutGrid, Video } from "lucide-react";
import type { Course } from "@/data/courses";
import { FORMAT_LABELS } from "@/components/courses/labels";

type CourseStructureProps = {
  course: Course;
};

export function CourseStructure({ course }: CourseStructureProps) {
  const modulesCount = course.modules?.length ?? 0;

  const cells: { icon: typeof Clock; label: string; value: string }[] = [
    {
      icon: LayoutGrid,
      label: "מפגשים",
      value: `${modulesCount} מפגשים${course.preCourse ? " + מכינה" : ""}`,
    },
    {
      icon: Clock,
      label: "שעות אקדמיות",
      value: `${course.totalHours} שעות`,
    },
    {
      icon: Video,
      label: "פורמט",
      value: FORMAT_LABELS[course.format],
    },
    {
      icon: BookOpen,
      label: "מפגשי לייב",
      value: `${course.liveSessions} מפגשים`,
    },
    {
      icon: Award,
      label: "תעודה",
      value: "גישה למרכז ידע",
    },
  ];

  return (
    <section
      aria-labelledby="structure-title"
      className="relative bg-[color:var(--color-paper-soft)] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <h2 id="structure-title" className="sr-only">
          מבנה הקורס
        </h2>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-[color:var(--color-ink)]/10 bg-[color:var(--color-ink)]/10 sm:grid-cols-3 lg:grid-cols-5">
          {cells.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-3 bg-white p-6 sm:p-7"
            >
              <Icon
                className="h-5 w-5 text-[color:var(--color-bronze)]"
                strokeWidth={1.6}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]/80">
                  {label}
                </span>
                <span className="font-display text-[18px] font-medium leading-tight text-[color:var(--color-ink)]">
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
