"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { courses as allCourses } from "@/data/courses";
import { sectors } from "@/data/sectors";
import { CatalogHero } from "@/components/courses/CatalogHero";
import { FlagshipBanner } from "@/components/courses/FlagshipBanner";
import {
  CatalogFilters,
  type Filters,
} from "@/components/courses/CatalogFilters";
import { CatalogGrid } from "@/components/courses/CatalogGrid";
import { CertificationLegend } from "@/components/courses/CertificationLegend";
import { EmptyState } from "@/components/courses/EmptyState";
import { CatalogCtaBand } from "@/components/courses/CatalogCtaBand";
import { Reveal } from "@/components/ui/Reveal";

const DEFAULT_FILTERS: Filters = {
  sector: "all",
  level: "all",
  format: "all",
};

const flagshipCourses = allCourses.filter((c) => c.level === "advanced").slice(0, 5);
const flagshipIds = new Set(flagshipCourses.map((c) => c.id));
const gridCourses = allCourses.filter((c) => !flagshipIds.has(c.id));

function CatalogPageInner() {
  const params = useSearchParams();
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  useEffect(() => {
    const s = params.get("sector");
    if (s && sectors.some((x) => x.slug === s)) {
      setFilters((prev) => ({ ...prev, sector: s }));
    }
  }, [params]);

  const filteredCourses = useMemo(() => {
    return gridCourses.filter((c) => {
      if (filters.sector !== "all" && c.sectorSlug !== filters.sector) return false;
      if (filters.level !== "all" && c.level !== filters.level) return false;
      if (filters.format !== "all" && c.format !== filters.format) return false;
      return true;
    });
  }, [filters]);

  const resetFilters = () => setFilters(DEFAULT_FILTERS);

  return (
    <main className="flex flex-col">
      <CatalogHero
        totalCourses={allCourses.length}
        totalSectors={sectors.length}
      />

      <Reveal>
        <FlagshipBanner courses={flagshipCourses} />
      </Reveal>

      <section className="relative bg-[color:var(--color-paper-soft)] pt-12 pb-28 sm:pt-16 sm:pb-36">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
          <CertificationLegend />

          <CatalogFilters
            filters={filters}
            onChange={setFilters}
            totalMatching={filteredCourses.length}
          />

          {filteredCourses.length > 0 ? (
            <CatalogGrid courses={filteredCourses} />
          ) : (
            <EmptyState onReset={resetFilters} />
          )}
        </div>
      </section>

      <CatalogCtaBand />
    </main>
  );
}

export function CatalogPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[color:var(--color-paper-soft)]">
          <span className="text-[color:var(--color-ink-muted)]">טוען קטלוג…</span>
        </main>
      }
    >
      <CatalogPageInner />
    </Suspense>
  );
}
