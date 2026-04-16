import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClipboardCheck, BarChart3, FileCheck2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type MeasurePoint = {
  icon: LucideIcon;
  phase: string;
  title: string;
  body: string;
};

const points: MeasurePoint[] = [
  {
    icon: ClipboardCheck,
    phase: "לפני הקורס",
    title: "מדידת בסיס (Baseline)",
    body: "כמה זמן לוקח היום ביצוע משימות נפוצות? כמה עובדים עובדים על אותה משימה? איך נראית החלוקה של המשאבים? אנחנו מודדים את כל זה לפני שמתחילים, כדי שיהיה קו בסיס ברור לשיפור.",
  },
  {
    icon: BarChart3,
    phase: "תוך כדי הקורס",
    title: "דוחות התקדמות",
    body: "מידי חודש, אתה מקבל דו\"ח שמראה: מי מסיים את השיעורים, מי פעיל בתרגילים, מי מיישם דברים בעבודה היומיומית, ומה הבעיות שעולות. אם עובד מפגר - אתה יודע, יכול להתערב, לעזור.",
  },
  {
    icon: FileCheck2,
    phase: "אחרי הקורס",
    title: "דו\"ח ROI",
    body: "כ-3 חודשים אחרי הסיום, אנחנו חוזרים ובוחנים: כמה זמן נחסך? באילו תהליכים? מה התפוקה שעלתה? מה היישומים שהעובדים בנו בעצמם? דו\"ח שאפשר להציג לוועד מנהל ולשאול: \"האם ההשקעה הצדיקה את עצמה\".",
  },
];

export function BizRoi() {
  return (
    <section className="relative bg-[color:var(--color-paper-soft)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="מדידה ו-ROI"
            title="מה בדיוק תציג להנהלה"
            lede='כשאתה מביא הצעה להוצאה ארגונית, ההנהלה רוצה לראות שני דברים: מה יוצא מזה, ואיך מודדים את זה. אנחנו דואגים שיהיו לך תשובות לשניהם - לפני, תוך כדי, ואחרי הקורס.'
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.phase} delay={i * 0.1}>
                <article className="group relative flex h-full flex-col gap-5 rounded-[32px] bg-[color:var(--color-ink)]/[0.03] p-2 ring-1 ring-[color:var(--color-ink)]/5 transition-all duration-500 hover:ring-[color:var(--color-bronze)]/40">
                  <div className="flex h-full flex-col gap-5 rounded-[calc(32px-0.5rem)] bg-white p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(28,28,30,0.04)] transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-bronze)]/10 text-[color:var(--color-bronze-ink)]">
                        <Icon className="h-5 w-5" strokeWidth={1.4} />
                      </div>
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-bronze-ink)]">
                        {point.phase}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-medium text-[color:var(--color-ink)]">
                      {point.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                      {point.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="mx-auto max-w-xl text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
            ברוב הארגונים שעבדנו איתם ההכשרה מחזירה את עצמה תוך 6 חודשים. רובם
            מגיעים ל-ROI חיובי תוך 3 חודשים. לא מבטיחים בלעדי - אבל זה מה שקרה
            ב-80%+ מהמקרים.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
