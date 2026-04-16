import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { number: "+4,500", label: "בוגרים בחמש שנים" },
  { number: "+40", label: "מדריכים פעילים בתעשייה" },
  { number: "+3,000", label: "שעות הדרכה בחודש" },
  { number: "11", label: "תחומים מקצועיים" },
];

export function SocialProofBar() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[color:var(--color-cream)] py-20 sm:py-28"
      aria-label="מספרים"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/40 to-transparent"
      />
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal className="mb-14 flex flex-col items-center gap-4 text-center">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-bronze-ink)]">
            העוצמה במספרים
          </span>
          <h2 className="max-w-2xl font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-medium leading-[1.1] text-[color:var(--color-ink)]">
            חמש שנים. 4,500 בוגרים. תוצאות מדידות.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-start">
                <span className="tabular font-display text-[clamp(2.75rem,5.6vw,4.5rem)] font-medium leading-none tracking-tight text-[color:var(--color-ink)]">
                  {stat.number}
                </span>
                <span className="mt-3 h-px w-10 bg-[color:var(--color-bronze)]" aria-hidden="true" />
                <span className="mt-3 text-sm leading-snug text-[color:var(--color-ink-muted)]">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
