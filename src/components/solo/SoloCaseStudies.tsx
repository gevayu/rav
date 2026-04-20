import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cases = [
  {
    name: "מירב",
    role: "יועצת ארגונית עצמאית",
    before:
      "מטפלת ב-4 לקוחות במקביל. כל ניתוח ארגוני לוקח לה 3-4 ימי עבודה.",
    during:
      "בנתה תהליך Ai שמנתח רקע ארגוני, מזהה דפוסים, ומפיק המלצה ראשונית תוך שעתיים.",
    after:
      "מטפלת ב-9 לקוחות במקביל, העלתה מחירים ב-30%, עובדת פחות שעות.",
  },
  {
    name: "אריק",
    role: "רואה חשבון עצמאי",
    before:
      "חושש לאבד לקוחות לפירמות הגדולות שמציעות מחירים נמוכים.",
    during:
      "בנה מערכת Ai שסורקת דוחות ומזהה חריגות אוטומטית.",
    after:
      'יצר שירות חדש - "בדיקת עומק חודשית" שנמכר רק דרך המערכת. 40% מההכנסה שלו היום מגיעה משם.',
  },
  {
    name: "טל",
    role: 'מתווכת נדל"ן עצמאית',
    before:
      "80% מהזמן שלה הולך על סינון נכסים ולקוחות, לא על סגירות.",
    during:
      "בנתה סוכן Ai שמבצע את הסינון הראשוני ושולח לה רק התאמות רלוונטיות.",
    after:
      "מבצעת 3x יותר עסקאות, עם כמעט אותו היקף שעות עבודה.",
  },
];

export function SoloCaseStudies() {
  return (
    <section className="relative bg-[color:var(--color-ink)] py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[color:var(--color-bronze)]/8 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="סיפורי בוגרים"
            title="מה קרה אצל מירב, אריק וטל"
            lede="השמות שונו. הסיפורים אמיתיים."
            tone="paper"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <article className="flex h-full flex-col gap-5 rounded-[24px] border border-[color:var(--color-bronze)]/20 bg-white/[0.04] p-7 backdrop-blur-sm">
                <div className="flex flex-col gap-1">
                  <span className="font-display text-lg font-medium text-[color:var(--color-paper-soft)]">
                    {c.name}
                  </span>
                  <span className="text-[12px] text-[color:var(--color-paper-soft)]/55">
                    {c.role}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-bronze)]">
                      לפני הקורס
                    </span>
                    <p className="text-[13px] leading-relaxed text-[color:var(--color-paper-soft)]/65">
                      {c.before}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-bronze)]">
                      עם הקורס
                    </span>
                    <p className="text-[13px] leading-relaxed text-[color:var(--color-paper-soft)]/65">
                      {c.during}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-bronze)]">
                      אחרי הקורס
                    </span>
                    <p className="text-[14px] font-medium leading-relaxed text-[color:var(--color-paper-soft)]">
                      {c.after}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
