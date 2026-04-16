import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, Clock, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Advantage = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const advantages: Advantage[] = [
  {
    icon: GraduationCap,
    title: "המדריכים הם אנשי התחום שלך",
    body: "לא מרצים שלמדו את המקצוע שלך מסרטון. עו\"ד עם 15 שנות ניסיון מלמד את קורס ה-AI לעו\"ד. רופא פעיל מלמד את קורס ה-AI לרופאים. המדריך שלך הוא מישהו שאם היית פוגש אותו באירוע מקצועי, היית רוצה ללחוץ לו את היד.",
  },
  {
    icon: Clock,
    title: "גמישות אמיתית, לא הבטחות",
    body: "יש לך ביזנס לרוץ. כל השיעורים מוקלטים, ואתה מגיע אליהם כשנוח לך. המפגשים החיים מתקיימים בערבים (20:00-22:00), אחרי היום שלך. לא צריך לקחת חופש, לא צריך לבטל ללקוחות.",
  },
  {
    icon: Wallet,
    title: "תשלום שנכנס לתקציב של עצמאי",
    body: "פריסת תשלומים עד 12 תשלומים ללא ריבית. מסלולים מסוימים זכאים למענק משרד העבודה. אנחנו גם מנפיקים חשבונית מוכרת בתור הוצאה מוכרת — הקורס חוזר לך גם דרך המס.",
  },
];

export function SoloAdvantages() {
  return (
    <section className="relative bg-[color:var(--color-paper-soft)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="למה אנחנו"
            title="למה המרכז שלנו ולא קורס ביוטיוב"
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <Reveal key={adv.title} delay={i * 0.1}>
                <article className="group relative flex h-full flex-col gap-5 rounded-[32px] bg-[color:var(--color-ink)]/[0.03] p-2 ring-1 ring-[color:var(--color-ink)]/5 transition-all duration-500 hover:ring-[color:var(--color-bronze)]/40">
                  <div className="flex h-full flex-col gap-5 rounded-[calc(32px-0.5rem)] bg-white p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(28,28,30,0.04)] transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--color-bronze)]/10 text-[color:var(--color-bronze-ink)] ring-1 ring-[color:var(--color-bronze)]/25">
                      <Icon className="h-6 w-6" strokeWidth={1.4} />
                    </div>
                    <h3 className="font-display text-xl font-medium leading-tight text-[color:var(--color-ink)]">
                      {adv.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                      {adv.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
