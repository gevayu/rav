import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectors } from "@/data/sectors";
import { ArrowLeft } from "lucide-react";

export function SectorsGrid() {
  return (
    <section
      id="sectors"
      className="relative bg-[color:var(--color-paper-soft)] py-28 sm:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/35 to-transparent"
      />
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="11 תחומים מקצועיים"
            title={
              <>
                Ai שמדבר בשפה{" "}
                <span className="text-[color:var(--color-bronze-ink)]">
                  המקצועית
                </span>{" "}
                שלך.
              </>
            }
            lede="לכל תחום - ראש תחום אחד, מומחה אמיתי מהשטח. אתה לומד איך ליישם Ai דרך דוגמאות מהיומיום המקצועי שלך, לא דרך case studies גנריים."
          />
        </Reveal>

        <ul className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sectors.map((sector, i) => (
            <Reveal key={sector.slug} delay={(i % 4) * 0.06} as="li">
              <a
                href={`/courses?sector=${sector.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white pb-1.5 ring-1 ring-[color:var(--color-ink)]/8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:ring-[color:var(--color-bronze)]/50 hover:shadow-[0_30px_60px_-30px_rgba(28,28,30,0.25)]"
              >
                <div className={`h-5 bg-gradient-to-l ${sector.gradient}`} />
                <div className="relative mx-1.5 flex h-full flex-col rounded-b-[calc(28px-0.375rem)] bg-[color:var(--color-paper-soft)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <h3 className="font-display text-lg font-medium leading-tight text-[color:var(--color-ink)]">
                    Ai ל{sector.displayName}
                  </h3>

                  <p className="mt-4 flex-1 text-[13px] leading-relaxed text-[color:var(--color-ink-muted)]">
                    {sector.oneLine}
                  </p>

                  <div className="mt-6 flex items-center justify-end border-t border-[color:var(--color-ink)]/6 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[color:var(--color-bronze-ink)] transition-all duration-300 group-hover:gap-2.5">
                      לקורסים
                      <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.8} />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
