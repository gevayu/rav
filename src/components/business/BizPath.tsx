import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, Route, Rocket, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Stage = {
  icon: LucideIcon;
  badge: string;
  title: string;
  body: string;
  deliverable: string;
};

const stages: Stage[] = [
  {
    icon: Search,
    badge: "שלב 1",
    title: "אבחון ארגוני",
    body: "יועץ הדרכה בכיר נפגש עם ההנהלה, ממפה את התפקידים, את התהליכים המקצועיים, ואת הכאבים הספציפיים.",
    deliverable:
      "דו\"ח אבחון — מסמך שמזהה את 3-5 נקודות ההשפעה המרכזיות של AI בארגון שלך.",
  },
  {
    icon: Route,
    badge: "שלב 2",
    title: "הרכבת המסלול",
    body: "על בסיס האבחון, בונים מסלול הכשרה מותאם. מי לומד מה, באיזה סדר, באיזה פורמט (לייב / מוקלט / פרונטלי).",
    deliverable:
      "תוכנית הכשרה עם תקציב ולוחות זמנים ברורים, שההנהלה תשקף אליה.",
  },
  {
    icon: Rocket,
    badge: "שלב 3",
    title: "הוצאה לפועל",
    body: "הקורסים רצים. יועץ ההדרכה שלך נשאר בקשר שוטף — שיחות חודשיות עם ההנהלה, מעקב אחר התקדמות הצוות, פתרון מכשולים. לא משאירים אף אחד מאחור.",
    deliverable: "",
  },
  {
    icon: BarChart3,
    badge: "שלב 4",
    title: "מדידה וליווי שוטף",
    body: "דו\"ח סיום מקיף: מי סיים, מה נלמד, כמה זמן חוסכים כבר, איפה רואים את ההשפעה הראשונית. אחרי סיום הקורסים — עדכוני תוכן, שיחות ייעוץ תקופתיות, הזמנה להרחיב את ההכשרה לצוותים נוספים.",
    deliverable: "",
  },
];

export function BizPath() {
  return (
    <section className="relative bg-[color:var(--color-paper)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="המסלול הארגוני"
            title="מהפנייה ועד ההטמעה, ב-4 שלבים"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <Reveal key={stage.badge} delay={i * 0.08}>
                <article className="flex h-full flex-col gap-4 rounded-[24px] border border-[color:var(--color-ink)]/8 bg-white p-7 transition-colors hover:border-[color:var(--color-bronze)]/35">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-bronze)]/10 text-[color:var(--color-bronze-ink)]">
                      <Icon className="h-5 w-5" strokeWidth={1.4} />
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-bronze-ink)]">
                      {stage.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-medium text-[color:var(--color-ink)]">
                    {stage.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                    {stage.body}
                  </p>
                  {stage.deliverable && (
                    <div className="mt-auto rounded-xl border border-[color:var(--color-bronze)]/15 bg-[color:var(--color-bronze)]/5 p-4">
                      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--color-bronze-ink)]">
                        תוצר:{" "}
                      </span>
                      <span className="text-[13px] leading-relaxed text-[color:var(--color-ink-soft)]">
                        {stage.deliverable}
                      </span>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
