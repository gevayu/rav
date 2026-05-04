import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type HomeTier = {
  label: string;
  name: string;
  description: string;
  badgeClass: string;
};

const homeTiers: HomeTier[] = [
  {
    label: "Ai01",
    name: "היכרות בסיסית",
    description:
      "מבוא ל-Ai, מושגי יסוד, היכרות כללית עם כלים נפוצים. נקודת הכניסה למתחילים.",
    badgeClass:
      "bg-[color:var(--color-tier-01-bg)] border-[color:var(--color-tier-01-border)] text-[color:var(--color-tier-01-ink)]",
  },
  {
    label: "Ai03",
    name: "התמחות מקצועית",
    description:
      "יישום פרקטי של עקרונות וכלי Ai מתקדמים בתחומך המקצועי הספציפי.",
    badgeClass: "bg-[#22c55e] border-[#16a34a] text-[#052e16]",
  },
  {
    label: "Ai05",
    name: "יישום ארגוני",
    description:
      "יישום, הטמעה והובלה של תהליכי Ai מתקדמים בארגון, בתחום עיסוק ספציפי.",
    badgeClass:
      "bg-[color:var(--color-tier-05-bg)] border-[color:var(--color-tier-05-border)] text-[color:var(--color-tier-05-ink)]",
  },
];

export function CertificationShowcase() {
  return (
    <section id="certification" className="relative bg-[color:var(--color-paper-soft)] py-14 sm:py-18 overflow-hidden scroll-mt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full" style={{ backgroundImage: "url('/images/wave-lines.svg')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.55 }} />
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="מדרג ההסמכה"
            title="סטנדרטיזציה של הסמכות בינה מלאכותית"
            lede="אצלנו לא לומדים הכשרת 'מבוא להמונים'. הקורסים שלנו מחייבים בכניסה הבנה בסיסית בתחום ה-AI (הסמכת Ai01) ואנחנו נעזור לכם להתקדם לרמת מומחה (Ai03) או מיישם מקצועי (Ai05)."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {homeTiers.map((tier, i) => (
            <Reveal key={tier.label} delay={i * 0.1}>
              <article className="group relative flex h-full flex-col items-center gap-6 rounded-[32px] bg-white p-2 ring-1 ring-[color:var(--color-ink)]/5 transition-all duration-500 hover:ring-[color:var(--color-bronze)]/40">
                <div className="flex h-full w-full flex-col items-center gap-5 rounded-[calc(32px-0.5rem)] bg-[color:var(--color-paper-soft)] p-8 pt-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(28,28,30,0.04)] transition-transform duration-500 group-hover:-translate-y-1">
                  <span
                    className={`inline-flex items-center rounded-full border-2 px-4 py-2 font-display text-xl font-medium tracking-[0.06em] ${tier.badgeClass}`}

                  >
                    {tier.label}
                  </span>

                  <div className="flex flex-col items-center gap-1.5">
                    <h3 className="font-display text-lg font-medium text-[color:var(--color-ink)]">
                      {tier.name}
                    </h3>
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                      דרגה {i + 1} מתוך 3
                    </span>
                  </div>

                  <p className="text-center text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                    {tier.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Certificate mockup */}
        <Reveal delay={0.3}>
          <div className="mt-16 flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[color:var(--color-bronze)]/30 bg-white shadow-[0_24px_60px_-20px_rgba(28,28,30,0.18)]">
              {/* Watermark */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <span
                  className="select-none font-display text-[5rem] font-bold tracking-widest text-[color:var(--color-ink)]/[0.06]"
                  style={{ transform: "rotate(-25deg)" }}
                >
                  דוגמה
                </span>
              </div>

              <div className="relative flex flex-col items-center gap-5 px-10 py-10 text-center">
                {/* Top accent line */}
                <div className="h-1 w-20 rounded-full bg-gradient-to-l from-[color:var(--color-bronze)] to-[color:var(--color-bronze)]/40" />

                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-ink-muted)]">
                  המרכז הרב-תחומי להכשרות Ai · אנליזה
                </p>

                <h4 className="font-display text-2xl font-medium leading-snug text-[color:var(--color-ink)]">
                  תעודת הסמכה מקצועית
                </h4>

                <p className="text-sm text-[color:var(--color-ink-muted)]">
                  מוענקת בזאת ל
                </p>

                <div className="h-px w-40 bg-[color:var(--color-ink)]/10" />
                <p className="font-display text-lg font-medium text-[color:var(--color-ink)]/30 italic">
                  שם המשתתף
                </p>
                <div className="h-px w-40 bg-[color:var(--color-ink)]/10" />

                <p className="text-sm text-[color:var(--color-ink-muted)]">
                  על השלמת דרישות ההסמכה ברמה
                </p>

                <span className="inline-flex items-center rounded-full border-2 border-[#16a34a] bg-[#22c55e] px-5 py-2 font-display text-2xl font-medium tracking-[0.06em] text-[#052e16]">
                  Ai03
                </span>

                <p className="text-[13px] font-medium text-[color:var(--color-ink)]">
                  התמחות מקצועית · עריכת דין ומשפטים
                </p>

                <p className="text-[13px] font-medium text-[color:var(--color-ink-muted)]">
                  40 שעות אקדמיות
                </p>

                <div className="mt-2 flex items-center justify-center gap-8 text-[11px] text-[color:var(--color-ink-muted)]">
                  <span>תאריך: ________</span>
                  <span>חתימה: ________</span>
                </div>

                {/* Bottom accent */}
                <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-l from-[color:var(--color-bronze)] to-[color:var(--color-bronze)]/40" />
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
