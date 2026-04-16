import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cases = [
  {
    org: "חברת שירותים משפטיים, 45 עובדים",
    challenge:
      "שותפים בכירים הקדישו 60% מזמנם לרקחמ ולסריקת חוזים - משימות שיכולות להתבצע ב-AI.",
    solution:
      'הכשרת כל הצוות (עו"ד, מתמחים, פרא-משפטנים) בקורסים סקטוריאליים מותאמים.',
    result:
      "40% ירידה בזמן המוקדש לסריקת חוזים, השותפים הבכירים חזרו לעבודה אסטרטגית, צמיחה של 25% בלקוחות ללא הגדלת צוות.",
  },
  {
    org: "חברת ביטוח עם מחלקת הסבה של 60 איש",
    challenge:
      "מחלקת הסבה ותביעות עמוסה. זמני מענה לקוח ארוכים, שחיקת צוות.",
    solution:
      "קורס ייעודי לאנשי הסבה עם דגש על אוטומציה בתהליכי טיפול בתביעה.",
    result:
      "35% ירידה בזמן טיפול בתביעה ממוצעת, 22% עלייה בשביעות רצון לקוחות, ירידה ניכרת בתחלופת עובדים.",
  },
  {
    org: 'משרד רו"ח בוטיק, 18 עובדים',
    challenge:
      'משרד קטן שמתחרה בגדולים, נלחם על שימור לקוחות ועובדים.',
    solution:
      "חבילה מותאמת, כל הצוות כולל הצוות האדמיניסטרטיבי עבר את הקורס.",
    result:
      "הגדלת תיק לקוחות ב-50% בשנה אחת ללא הגדלת כוח אדם, תהליכי איכות מהירים יותר, המשרד הפך למותג בענף - 3 לקוחות חדשים הגיעו במיוחד כי שמעו שהמשרד משלב AI.",
  },
];

export function BizCaseStudies() {
  return (
    <section className="relative bg-[color:var(--color-paper)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="מהשטח"
            title="משרד משפטי, חברת ביטוח, ובוטיק רו״ח. מה קרה אצלם."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.org} delay={i * 0.1}>
              <article className="flex h-full flex-col gap-5 rounded-[24px] border border-[color:var(--color-ink)]/8 bg-white p-7 transition-colors hover:border-[color:var(--color-bronze)]/35">
                <h3 className="font-display text-base font-medium text-[color:var(--color-ink)]">
                  {c.org}
                </h3>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                      האתגר
                    </span>
                    <p className="text-[13px] leading-relaxed text-[color:var(--color-ink-muted)]">
                      {c.challenge}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-bronze-ink)]">
                      הפתרון
                    </span>
                    <p className="text-[13px] leading-relaxed text-[color:var(--color-ink-soft)]">
                      {c.solution}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-bronze-ink)]">
                      התוצאה
                    </span>
                    <p className="text-[14px] font-medium leading-relaxed text-[color:var(--color-ink)]">
                      {c.result}
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
