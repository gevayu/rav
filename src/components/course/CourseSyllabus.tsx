"use client";

import { useId, useState } from "react";
import { ChevronDown, Play, Sparkles } from "lucide-react";
import type { Course, CourseModule, PreCourseBlock } from "@/data/courses";

type CourseSyllabusProps = {
  course: Course;
};

type SyllabusItem = {
  key: string;
  badge: string;
  isPreCourse: boolean;
  hasVideo: boolean;
  title: string;
  durationHours?: number;
  topics: string[];
};

function buildItems(course: Course): SyllabusItem[] {
  const items: SyllabusItem[] = [];
  if (course.preCourse) {
    items.push(preCourseItem(course.preCourse));
  }
  course.modules?.forEach((mod, idx) => {
    items.push(moduleItem(mod, idx, course.sampleVideoModuleId));
  });
  return items;
}

function preCourseItem(pre: PreCourseBlock): SyllabusItem {
  return {
    key: "pre-course",
    badge: "מכינה",
    isPreCourse: true,
    hasVideo: false,
    title: pre.title,
    topics: pre.topics,
  };
}

function moduleItem(mod: CourseModule, idx: number, sampleVideoModuleId?: string): SyllabusItem {
  return {
    key: mod.id,
    badge: `מפגש ${idx + 1}`,
    isPreCourse: false,
    hasVideo: mod.id === sampleVideoModuleId,
    title: mod.title,
    durationHours: mod.durationHours,
    topics: mod.topics,
  };
}

export function CourseSyllabus({ course }: CourseSyllabusProps) {
  const items = buildItems(course);
  const videoItem = items.find((i) => i.hasVideo);
  const [openKey, setOpenKey] = useState<string | null>(videoItem?.key ?? items[0]?.key ?? null);
  const idPrefix = useId();

  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby="syllabus-title"
      className="relative bg-[color:var(--color-paper-soft)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[1040px] px-6 sm:px-10">
        <div className="mb-12 flex flex-col gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze-ink)]">
            תוכן הקורס
          </span>
          <h2
            id="syllabus-title"
            className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] text-[color:var(--color-ink)]"
          >
            סילבוס מפורט
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item) => {
            const isOpen = openKey === item.key;
            const panelId = `${idPrefix}-${item.key}-panel`;
            const buttonId = `${idPrefix}-${item.key}-button`;
            return (
              <article
                key={item.key}
                className="overflow-hidden rounded-[20px] border border-[color:var(--color-ink)]/10 bg-white transition-colors hover:border-[color:var(--color-bronze)]/45"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenKey(isOpen ? null : item.key)}
                    className="flex w-full items-center gap-5 px-6 py-5 text-right transition-colors hover:bg-[color:var(--color-bronze)]/5 focus-visible:outline-none focus-visible:bg-[color:var(--color-bronze)]/5 sm:px-7 sm:py-6"
                  >
                    <span
                      className={
                        "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.06em] " +
                        (item.isPreCourse
                          ? "bg-[color:var(--color-bronze)]/15 text-[color:var(--color-bronze-ink)]"
                          : "border border-[color:var(--color-ink)]/15 text-[color:var(--color-ink-muted)]")
                      }
                    >
                      {item.isPreCourse && (
                        <Sparkles
                          className="h-3 w-3"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      )}
                      {item.badge}
                    </span>

                    <span className="flex-1 font-display text-[17px] font-medium leading-tight text-[color:var(--color-ink)] sm:text-[19px]">
                      {item.title}
                    </span>

                    {item.durationHours && (
                      <span className="hidden shrink-0 text-[12px] text-[color:var(--color-ink-muted)] sm:inline">
                        {item.durationHours} שעות
                      </span>
                    )}

                    <ChevronDown
                      className={
                        "h-4 w-4 shrink-0 text-[color:var(--color-bronze)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                        (isOpen ? "rotate-180" : "rotate-0")
                      }
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                    (isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="overflow-hidden">
                    <ul className="flex flex-col gap-2.5 border-t border-[color:var(--color-ink)]/8 px-6 py-5 sm:px-7 sm:py-6">
                      {item.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-3 text-[14px] leading-relaxed text-[color:var(--color-ink-soft)]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-bronze)]"
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>

                    {item.hasVideo && (
                      <div className="mx-6 mb-6 sm:mx-7 sm:mb-7">
                        <div className="group/video relative cursor-pointer overflow-hidden rounded-2xl bg-[color:var(--color-ink)]">
                          <div className="relative aspect-video w-full">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-signal)] shadow-[0_8px_32px_-8px_rgba(6,78,59,0.6)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/video:scale-110">
                                <Play
                                  className="h-5 w-5 text-white"
                                  strokeWidth={2}
                                  fill="currentColor"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                              <span className="rounded-full bg-[color:var(--color-bronze)]/15 px-3 py-1 text-[11px] font-medium tracking-[0.06em] text-[color:var(--color-bronze)]">
                                שיעור לדוגמה
                              </span>
                              <span className="text-[12px] text-[color:var(--color-paper-soft)]/50">
                                12:18
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="mt-3 text-[13px] text-[color:var(--color-ink-muted)]">
                          צפו בקטע מתוך המפגש - טעימה ממה שמחכה לכם בפנים.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
