import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Users, BarChart3, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type OrgPoint = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const points: OrgPoint[] = [
  {
    icon: Users,
    title: "שפה אחידה",
    body: "כשכל הצוות עובד עם אותו מידרג, יש שפה משותפת. מנהלים יודעים מי באיזו רמה, ומי צריך איזו הכשרה.",
  },
  {
    icon: BarChart3,
    title: "מדידה ודיווח",
    body: "דו״חות התקדמות לפי דרגות. ההנהלה רואה כמה עובדים עברו AI01, כמה הגיעו ל-AI05, ומה ההשפעה על תהליכי העבודה.",
  },
  {
    icon: ShieldCheck,
    title: "תוקף מוסדי",
    body: "תעודות ממכללה מפוקחת, עם תוכנית חידוש. הארגון יודע שהידע של העובדים עדכני — גם שנה אחרי הקורס.",
  },
];

export function CertOrganizations() {
  return (
    <section className="relative bg-[color:var(--color-ink)] py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--color-bronze)]/8 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1080px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            align="center"
            tone="paper"
            eyebrow="לארגונים"
            title="מערכת הסרטיפיקציה בהקשר ארגוני"
            lede="מידרג AI01/AI05/AI09 עובד גם ברמת הארגון. שפה אחידה, מדידה ברורה, ותעודות שההנהלה יכולה לדווח עליהן."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={i * 0.1}>
                <article className="flex h-full flex-col gap-5 rounded-[24px] border border-[color:var(--color-bronze)]/20 bg-white/[0.04] p-8">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-bronze)]/10 text-[color:var(--color-bronze)]">
                    <Icon className="h-5 w-5" strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-[color:var(--color-paper-soft)]">
                    {point.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[color:var(--color-paper-soft)]/65">
                    {point.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <Button as="a" href="/business" variant="secondary" size="md">
              למסלול הארגוני
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
