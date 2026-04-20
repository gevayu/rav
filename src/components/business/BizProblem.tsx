import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const rows = [
  {
    today: "50 עובדים, 50 רמות שימוש ב-Ai",
    after: "צוות שלם שעובד בשיטה אחת, מוכחת",
  },
  {
    today: "סיכוני פרטיות וסודיות - עובדים מכניסים מידע לכלים חיצוניים",
    after: "פרוטוקולים ברורים, שימוש בטוח במידע, סודיות ארגונית נשמרת",
  },
  {
    today: "אין דרך למדוד מי משתמש נכון ומי לא",
    after: "דוחות שימוש, מדידת ROI, מעקב אחר התקדמות הצוות",
  },
  {
    today: "כל עובד לומד לבד מיוטיוב וטיקטוק",
    after: "הכשרה מקצועית עם תעודה רשמית, מטעם מכללה מפוקחת",
  },
  {
    today: 'פחד ממה שקורה במתחרים, "הם כבר שם ואנחנו לא יודעים איפה אנחנו"',
    after: "ארגון שמוביל את השוק, עם יתרון מדיד על המתחרים",
  },
];

export function BizProblem() {
  return (
    <section className="relative bg-[color:var(--color-paper-soft)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="האתגר הארגוני"
            title="ב-Ai אין לכם חוסר. בסדר, כן."
            lede="עובדים כבר משתמשים ב-ChatGPT, Claude, ובעשרות כלים אחרים. חלקם - ברמה סבירה. חלקם - מעלים סיכונים של פרטיות, סודיות, איכות. אף אחד מהם לא - בשיטה המובנית שמאפשרת לארגון להשתפר כיחידה אחת."
          />
        </Reveal>

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-[24px] border border-[color:var(--color-ink)]/8 bg-white">
            <div className="grid grid-cols-2">
              <div className="border-b border-l border-[color:var(--color-ink)]/8 p-5 text-center">
                <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                  איך זה נראה היום
                </span>
              </div>
              <div className="border-b border-[color:var(--color-ink)]/8 p-5 text-center">
                <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-bronze-ink)]">
                  איך זה ייראה אחרי הכשרה ארגונית
                </span>
              </div>
            </div>
            {rows.map((row, i) => (
              <div
                key={i}
                className={
                  "grid grid-cols-2" +
                  (i < rows.length - 1
                    ? " border-b border-[color:var(--color-ink)]/6"
                    : "")
                }
              >
                <div className="border-l border-[color:var(--color-ink)]/6 p-5 text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                  {row.today}
                </div>
                <div className="p-5 text-[14px] leading-relaxed text-[color:var(--color-ink-soft)]">
                  {row.after}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
