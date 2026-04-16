import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type TierDetail = {
  tier: string;
  name: string;
  tagline: string;
  description: string;
  format: string;
  duration: string;
  prerequisite: string | null;
  outcomes: string[];
  borderColor: string;
  tagBg: string;
  tagText: string;
};

const tiers: TierDetail[] = [
  {
    tier: "AI01",
    name: "יסוד",
    tagline: "נקודת הכניסה",
    description:
      "הכרות מעשית עם AI - מושגי בסיס, עקרונות עבודה, וכלים ראשוניים. מי שמסיים עם AI01 יודע לתקשר עם מודלים, לזהות מתי AI רלוונטי לעבודה שלו, ולהפעיל כלים בסיסיים.",
    format: "מכינה / קורס מבוא",
    duration: "6-10 שעות",
    prerequisite: null,
    outcomes: [
      "הבנת עקרונות עבודה עם מודלי שפה",
      "כתיבת פרומפטים ברורים ומבניים",
      "שימוש בכלי AI נפוצים לצרכים יומיומיים",
      "הבחנה בין שימוש בסיסי לשימוש מקצועי",
    ],
    borderColor: "border-[color:var(--color-signal)]/30",
    tagBg: "bg-[color:var(--color-signal)]/10",
    tagText: "text-[color:var(--color-signal)]",
  },
  {
    tier: "AI05",
    name: "מקצועי",
    tagline: "התמחות סקטוריאלית",
    description:
      "40 שעות של יישום AI בתחום המקצועי שלך. מי שמסיים עם AI05 יודע לשלב AI בתהליכי עבודה אמיתיים, לבנות אוטומציות, ולהציג תוצאות מדידות.",
    format: "קורס סקטוריאלי מלא",
    duration: "40 שעות · 10 מפגשים",
    prerequisite: "AI01",
    outcomes: [
      "הנדסת פרומפטים מתקדמת בהקשר מקצועי",
      "בניית תהליכי עבודה אוטומטיים עם AI",
      "יישום AI במשימות סקטוריאליות ספציפיות",
      "מדידת ROI ותיעוד חיסכון בזמן",
    ],
    borderColor: "border-[color:var(--color-bronze)]/30",
    tagBg: "bg-[color:var(--color-bronze)]/10",
    tagText: "text-[color:var(--color-bronze-ink)]",
  },
  {
    tier: "AI09",
    name: "מאסטר",
    tagline: "הובלה והטמעה",
    description:
      "לבוגרי AI05 שרוצים להוביל שינוי. מי שמסיים עם AI09 יודע לתכנן אסטרטגיית AI לארגון, להכשיר צוותים, ולנהל פרויקטי הטמעה מקצה לקצה.",
    format: "קורס המשך מתקדם",
    duration: "30-40 שעות",
    prerequisite: "AI05",
    outcomes: [
      "תכנון אסטרטגיית AI ארגונית",
      "הכשרה והדרכה של צוותים",
      "ניהול פרויקטי הטמעת AI",
      "מדידת השפעה ברמה ארגונית",
    ],
    borderColor: "border-[color:var(--color-ink)]/20",
    tagBg: "bg-[color:var(--color-ink)]/8",
    tagText: "text-[color:var(--color-ink)]",
  },
];

export function CertTiers() {
  return (
    <section className="relative bg-[color:var(--color-paper)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="שלוש דרגות"
            title="כל דרגה מסמנת יכולות ספציפיות"
            lede="מדרג ההסמכה בנוי כמדרג מקצועי. כל דרגה דורשת את הקודמת, ומוסיפה שכבה של עומק ויישום."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.tier} delay={i * 0.1}>
              <article
                className={`flex h-full flex-col gap-6 rounded-[24px] border ${t.borderColor} bg-white p-8 transition-colors hover:border-[color:var(--color-bronze)]/35`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center rounded-full border px-4 py-1.5 font-display text-[14px] font-medium tracking-[0.06em] ${t.borderColor} ${t.tagBg} ${t.tagText}`}
                  >
                    {t.tier}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                    {t.tagline}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-medium text-[color:var(--color-ink)]">
                  {t.name}
                </h3>

                <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                  {t.description}
                </p>

                <div className="flex flex-col gap-2 rounded-xl border border-[color:var(--color-ink)]/8 bg-[color:var(--color-paper-soft)] p-4 text-[13px]">
                  <div className="flex justify-between">
                    <span className="text-[color:var(--color-ink-muted)]">פורמט</span>
                    <span className="font-medium text-[color:var(--color-ink)]">{t.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[color:var(--color-ink-muted)]">משך</span>
                    <span className="font-medium text-[color:var(--color-ink)]">{t.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[color:var(--color-ink-muted)]">דרישת קדם</span>
                    <span className="font-medium text-[color:var(--color-ink)]">
                      {t.prerequisite ?? "ללא"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-bronze-ink)]">
                    מה תדעו לעשות
                  </span>
                  <ul className="flex flex-col gap-1.5">
                    {t.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-2 text-[13px] leading-relaxed text-[color:var(--color-ink-soft)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--color-bronze)]"
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-2">
                  <Button as="a" href="/courses" variant="secondary" size="md">
                    לקורסים בדרגה {t.tier}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
