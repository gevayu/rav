import { Eyebrow } from "@/components/ui/Eyebrow";

type CatalogHeroProps = {
  totalCourses: number;
  totalSectors: number;
};

export function CatalogHero({ totalCourses, totalSectors }: CatalogHeroProps) {
  return (
    <section
      aria-labelledby="catalog-hero-title"
      className="relative bg-[color:var(--color-paper-soft)] pt-40 pb-20 sm:pt-48 sm:pb-24"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-24 h-[480px] w-[480px] rounded-full bg-[color:var(--color-bronze)]/14 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/30 to-transparent"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="flex flex-col gap-8">
          <Eyebrow tone="bronze">קטלוג קורסים</Eyebrow>

          <h1
            id="catalog-hero-title"
            className="max-w-4xl font-display text-[clamp(2.8rem,6.4vw,5.2rem)] font-medium leading-[0.98] tracking-tight text-[color:var(--color-ink)]"
          >
            כל הקורסים של המרכז.
            <br />
            <span className="text-[color:var(--color-bronze-ink)]">
              לכל תחום - מסלול אחד שמדבר בשפה שלו.
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--color-ink-muted)]">
            קורסי AI סקטוריאליים שנבנו על-ידי אנשי מקצוע פעילים - עם דוגמאות
            מהיומיום שלך, תיק פרויקטים אמיתי, וליווי אישי לאורך כל המחזור.
            בחר את התחום, הרמה והפורמט שמתאימים לך.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Chip value={totalCourses} label="קורסים פעילים" />
            <span className="h-1 w-1 rounded-full bg-[color:var(--color-ink-muted)]/40" />
            <Chip value={totalSectors} label="תחומים מקצועיים" />
            <span className="h-1 w-1 rounded-full bg-[color:var(--color-ink-muted)]/40" />
            <Chip label="מפוקח משרד העבודה" />
          </div>

          <span
            aria-hidden="true"
            className="mt-4 h-px w-16 bg-[color:var(--color-bronze)]"
          />
        </div>
      </div>
    </section>
  );
}

function Chip({ value, label }: { value?: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-bronze)]/35 bg-white/70 px-4 py-1.5 text-[12px] text-[color:var(--color-ink)]">
      {value !== undefined ? (
        <span className="tabular font-display text-[15px] font-medium text-[color:var(--color-bronze-ink)]">
          {value}
        </span>
      ) : null}
      <span className="text-[color:var(--color-ink-muted)]">{label}</span>
    </span>
  );
}
