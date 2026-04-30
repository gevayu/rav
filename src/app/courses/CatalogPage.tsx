"use client";

import { Suspense } from "react";
import { courses as allCourses } from "@/data/courses";
import { sectors } from "@/data/sectors";
import { CatalogHero } from "@/components/courses/CatalogHero";
import { FlagshipBanner } from "@/components/courses/FlagshipBanner";
import { CatalogGrid } from "@/components/courses/CatalogGrid";
import { CertificationLegend } from "@/components/courses/CertificationLegend";
import { CatalogCtaBand } from "@/components/courses/CatalogCtaBand";
import { CatalogVideoStrip } from "@/components/courses/CatalogVideoStrip";
import { Reveal } from "@/components/ui/Reveal";

function CatalogPageInner() {
  return (
    <main className="flex flex-col">
      <CatalogHero
        totalCourses={allCourses.length}
        totalSectors={sectors.length}
      />

      <CatalogVideoStrip />

      <Reveal>
        <FlagshipBanner courses={allCourses} />
      </Reveal>

      <section className="relative bg-[color:var(--color-paper-soft)] pt-12 pb-28 sm:pt-16 sm:pb-36">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
          <CertificationLegend />
          <CatalogGrid courses={allCourses} />
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
