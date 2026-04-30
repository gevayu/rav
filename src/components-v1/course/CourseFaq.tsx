"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Course } from "@/data/courses";

type CourseFaqProps = {
  course: Course;
};

export function CourseFaq({ course }: CourseFaqProps) {
  const items = course.faq ?? [];
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const idPrefix = useId();

  if (items.length === 0) return null;

  return (
    <section
      aria-labelledby="faq-title"
      className="relative bg-[color:var(--color-paper-soft)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[860px] px-6 sm:px-10">
        <div className="mb-12 flex flex-col gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze-ink)]">
            שאלות נפוצות
          </span>
          <h2
            id="faq-title"
            className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] text-[color:var(--color-ink)]"
          >
            לפני שנרשמים
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            const panelId = `${idPrefix}-faq-${idx}-panel`;
            const buttonId = `${idPrefix}-faq-${idx}-button`;
            return (
              <article
                key={item.q}
                className="overflow-hidden rounded-[20px] border border-[color:var(--color-ink)]/10 bg-white transition-colors hover:border-[color:var(--color-bronze)]/45"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="flex w-full items-center gap-5 px-6 py-5 text-right transition-colors hover:bg-[color:var(--color-bronze)]/5 focus-visible:outline-none focus-visible:bg-[color:var(--color-bronze)]/5 sm:px-7 sm:py-6"
                  >
                    <span className="flex-1 font-display text-[16px] font-medium leading-tight text-[color:var(--color-ink)] sm:text-[17px]">
                      {item.q}
                    </span>
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
                    <p className="border-t border-[color:var(--color-ink)]/8 px-6 py-5 text-[14px] leading-relaxed text-[color:var(--color-ink-soft)] sm:px-7 sm:py-6">
                      {item.a}
                    </p>
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
