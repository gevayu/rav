"use client";

import { sectors } from "@/data/sectors";
import type { CourseFormat, CourseLevel } from "@/data/courses";
import {
  FORMAT_LABELS,
  FORMAT_ORDER,
  LEVEL_LABELS,
  LEVEL_ORDER,
} from "./labels";

export type Filters = {
  sector: string;
  level: "all" | CourseLevel;
  format: "all" | CourseFormat;
};

type CatalogFiltersProps = {
  filters: Filters;
  onChange: (next: Filters) => void;
  totalMatching: number;
};

export function CatalogFilters({
  filters,
  onChange,
  totalMatching,
}: CatalogFiltersProps) {
  return (
    <div className="sticky top-24 z-30 -mx-6 border-y border-[color:var(--color-ink)]/8 bg-[color:var(--color-paper-soft)]/92 px-6 py-5 backdrop-blur-xl sm:-mx-10 sm:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink-muted)]">
            סינון לפי
          </span>
          <span className="tabular text-[12px] text-[color:var(--color-ink-muted)]">
            {totalMatching} קורסים תואמים
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <FilterRow label="תחום">
            <Pill
              active={filters.sector === "all"}
              onClick={() => onChange({ ...filters, sector: "all" })}
            >
              הכל
            </Pill>
            {sectors.map((s) => (
              <Pill
                key={s.slug}
                active={filters.sector === s.slug}
                onClick={() => onChange({ ...filters, sector: s.slug })}
              >
                {s.displayName}
              </Pill>
            ))}
          </FilterRow>

          <div className="grid gap-4 sm:grid-cols-2">
            <FilterRow label="רמה">
              <Pill
                active={filters.level === "all"}
                onClick={() => onChange({ ...filters, level: "all" })}
              >
                הכל
              </Pill>
              {LEVEL_ORDER.map((l) => (
                <Pill
                  key={l}
                  active={filters.level === l}
                  onClick={() => onChange({ ...filters, level: l })}
                >
                  {LEVEL_LABELS[l]}
                </Pill>
              ))}
            </FilterRow>

            <FilterRow label="פורמט">
              <Pill
                active={filters.format === "all"}
                onClick={() => onChange({ ...filters, format: "all" })}
              >
                הכל
              </Pill>
              {FORMAT_ORDER.map((f) => (
                <Pill
                  key={f}
                  active={filters.format === f}
                  onClick={() => onChange({ ...filters, format: f })}
                >
                  {FORMAT_LABELS[f]}
                </Pill>
              ))}
            </FilterRow>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="hidden shrink-0 text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]/80 sm:inline">
        {label}
      </span>
      <div
        className="flex flex-1 gap-2 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none" }}
        role="radiogroup"
        aria-label={label}
      >
        {children}
      </div>
    </div>
  );
}

type PillProps = {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

function Pill({ active, children, onClick }: PillProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onClick}
      className={
        "whitespace-nowrap rounded-full border px-4 py-2 text-[12.5px] font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
        (active
          ? "border-[color:var(--color-bronze)] bg-[color:var(--color-ink)] text-[color:var(--color-paper-soft)] shadow-[0_8px_20px_-12px_rgba(28,28,30,0.4)]"
          : "border-[color:var(--color-ink)]/12 bg-white/70 text-[color:var(--color-ink)] hover:border-[color:var(--color-bronze)]/50 hover:bg-white")
      }
    >
      {children}
    </button>
  );
}
