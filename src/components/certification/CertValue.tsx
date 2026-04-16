import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase, TrendingUp, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ValueBlock = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const blocks: ValueBlock[] = [
  {
    icon: GraduationCap,
    title: "מכללה מפוקחת",
    body: "התעודות מונפקות ממכללה מפוקחת על ידי משרד העבודה, הביטחון והחינוך. זה אומר: סטנדרטים קבועים, פיקוח חיצוני, וערך מוסדי שמעסיקים מזהים.",
  },
  {
    icon: Briefcase,
    title: "רלוונטיות בשוק העבודה",
    body: "הדרגות בנויות סביב יכולות מדידות. מעסיק שרואה AI05 יודע שהמועמד עבר 40 שעות של יישום AI סקטוריאלי, עם פרויקט גמר ומבחן מעשי.",
  },
  {
    icon: TrendingUp,
    title: "תוכנית חידוש שנתית",
    body: "AI משתנה מהר. הדרגה תקפה לשנתיים, עם חידוש פשוט - מבחן מקוון או קורס עדכון קצר. כך התעודה שלך תמיד משקפת ידע עדכני.",
  },
];

export function CertValue() {
  return (
    <section className="relative bg-[color:var(--color-paper)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1080px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="למה זה שונה"
            title="הסמכה שעובדת בעולם האמיתי"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <Reveal key={block.title} delay={i * 0.1}>
                <article className="group relative flex h-full flex-col gap-5 rounded-[32px] bg-[color:var(--color-ink)]/[0.03] p-2 ring-1 ring-[color:var(--color-ink)]/5 transition-all duration-500 hover:ring-[color:var(--color-bronze)]/40">
                  <div className="flex h-full flex-col gap-5 rounded-[calc(32px-0.5rem)] bg-white p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(28,28,30,0.04)] transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-bronze)]/10 text-[color:var(--color-bronze-ink)]">
                      <Icon className="h-5 w-5" strokeWidth={1.4} />
                    </div>
                    <h3 className="font-display text-lg font-medium text-[color:var(--color-ink)]">
                      {block.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                      {block.body}
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
