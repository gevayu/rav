import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Cpu, Layers, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Axis = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const axes: Axis[] = [
  {
    icon: Cpu,
    title: "כלי Ai שמתאימים לך",
    body: 'לא "כל הכלים". הכלים הקונקרטיים שעובדים על התחום הספציפי שלך - Prompt engineering מעמיק, סוכנים אוטונומיים, שילובים עם כלים שכבר יש לך.',
  },
  {
    icon: Layers,
    title: "תהליכים מקצועיים-סקטוריאליים",
    body: "עו\"ד? נלמד איך Ai מנתח חוזים ברמה של שותף-בכיר. רו\"ח? נראה איך לבנות מערכת אזהרה על אנומליות בדוחות. רופא? נראה איך לסכם ביקור קליני ב-3 דקות.",
  },
  {
    icon: Briefcase,
    title: "תהליכים עסקיים כלליים",
    body: "מה שמשותף לכל עצמאי - ניהול לקוחות, תקשורת שיווקית, חשבוניות, אוטומציות משרדיות. הבסיס שיחסוך לך 10-15 שעות בשבוע.",
  },
];

export function SoloSolution() {
  return (
    <section className="relative bg-[color:var(--color-paper)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="הגישה שלנו"
            title="הכשרה שמתחילה מהתהליכים שלך"
            lede="מהמשימות שאתה עושה כל יום, מהכאבים של העסק שלך, מהלקוחות שלך. ואז מראים איך Ai נכנס לכל אחד מהם."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {axes.map((axis, i) => {
            const Icon = axis.icon;
            return (
              <Reveal key={axis.title} delay={i * 0.1}>
                <article className="group relative flex h-full flex-col gap-5 rounded-[32px] bg-[color:var(--color-ink)]/[0.03] p-2 ring-1 ring-[color:var(--color-ink)]/5 transition-all duration-500 hover:ring-[color:var(--color-bronze)]/40">
                  <div className="flex h-full flex-col gap-5 rounded-[calc(32px-0.5rem)] bg-white p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(28,28,30,0.04)] transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--color-bronze)]/10 text-[color:var(--color-bronze-ink)] ring-1 ring-[color:var(--color-bronze)]/25">
                      <Icon className="h-6 w-6" strokeWidth={1.4} />
                    </div>
                    <h3 className="font-display text-xl font-medium leading-tight text-[color:var(--color-ink)]">
                      {axis.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                      {axis.body}
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
