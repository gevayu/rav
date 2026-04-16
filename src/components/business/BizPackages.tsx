import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type Package = {
  badge?: string;
  title: string;
  audience: string;
  includes: string;
  highlighted?: boolean;
};

const packages: Package[] = [
  {
    title: "חבילה ארגונית בסיסית",
    audience: "ארגונים של 10-30 עובדים שרוצים להתחיל.",
    includes:
      "הכשרה מובנית בקורסים סטנדרטיים מתוך הקטלוג, שיבוץ מחזורי של עובדים, דו\"ח התקדמות רבעוני להנהלה. משבועיים מההחלטה - העובדים הראשונים מתחילים ללמוד.",
  },
  {
    badge: "הבחירה הפופולרית",
    title: "חבילה ארגונית מותאמת",
    audience: "ארגונים של 30-150 עובדים שרוצים הכשרה שבנויה סביב הסקטור שלהם.",
    includes:
      "אבחון ארגוני מלא, קורסים מותאמים לסקטור ולתהליכים הספציפיים, יועץ הדרכה ייעודי, דוחות חודשיים, תעודות סיום מטעם המרכז. התוצר: צוות שלם שעובד עם AI באותה שיטה, מהונדסת לצרכי הארגון.",
    highlighted: true,
  },
  {
    title: "רישיון Enterprise",
    audience:
      "ארגונים של 150+ עובדים או ארגונים עם דרישות מיוחדות (רגולציה, סודיות, מגזרים מיוחדים).",
    includes:
      "גישה מלאה לכל הקטלוג, הכשרות פרטיות על פי דרישה, יועץ הדרכה בכיר ייעודי, הטמעה של פלטפורמות AI במערכות הפנימיות של הארגון, דוחות מותאמים להנהלה הבכירה.",
  },
];

export function BizPackages() {
  return (
    <section className="relative bg-[color:var(--color-ink)] py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--color-bronze)]/8 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="חבילות"
            title="מתחילים קטן או נכנסים ברחב? יש חבילה לכל שלב."
            tone="paper"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.title} delay={i * 0.1}>
              <article
                className={
                  "relative flex h-full flex-col gap-5 rounded-[24px] border p-8 " +
                  (pkg.highlighted
                    ? "border-[color:var(--color-bronze)]/50 bg-[color:var(--color-bronze)]/[0.07]"
                    : "border-[color:var(--color-bronze)]/20 bg-white/[0.04]")
                }
              >
                {pkg.badge && (
                  <span className="absolute -top-3 right-6 rounded-full bg-[color:var(--color-bronze)] px-4 py-1 text-[11px] font-medium text-[color:var(--color-ink)]">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="font-display text-xl font-medium text-[color:var(--color-paper-soft)]">
                  {pkg.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[color:var(--color-paper-soft)]/55">
                  <span className="font-medium text-[color:var(--color-bronze)]">
                    מיועד ל:
                  </span>{" "}
                  {pkg.audience}
                </p>
                <p className="text-[14px] leading-relaxed text-[color:var(--color-paper-soft)]/70">
                  <span className="font-medium text-[color:var(--color-bronze)]">
                    כולל:
                  </span>{" "}
                  {pkg.includes}
                </p>
                <div className="mt-auto pt-4">
                  <Button
                    as="a"
                    href="#biz-lead"
                    variant={pkg.highlighted ? "primary" : "secondary"}
                    size="md"
                  >
                    לתיאום פגישה
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="mx-auto max-w-xl text-[14px] leading-relaxed text-[color:var(--color-paper-soft)]/55">
            לא בטוח איזה חבילה מתאימה לך? זו בדיוק השיחה שיועץ ההדרכה שלנו יעשה
            איתך. אין מחירון קבוע - כי כל ארגון הוא אחר. יש שיחה קצרה, ואחריה
            הצעת מחיר מותאמת.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
