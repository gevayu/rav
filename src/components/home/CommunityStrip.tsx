import { Users, Clock, Wrench } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Users,
    title: "תמיכה בלתי פוסקת גם לאחר ההכשרה",
    body: "קהילת הבוגרים פעילה לאורך זמן — שאלות, עדכונים, שיתופי ידע. הלמידה לא נגמרת עם הקורס.",
  },
  {
    icon: Clock,
    title: "מענה וליווי מקצועי 24/7",
    body: "מומחים בתחומך זמינים לסייע, לענות ולהנחות — במהלך ההכשרה ואחריה.",
  },
  {
    icon: Wrench,
    title: "טכנולוגיה צמודה לאורך כל הדרך",
    body: "כלים מלווים ללימוד, תמיכה ויישום — פלטפורמה שמתעדכנת יחד אתך גם לאחר סיום ההכשרה.",
  },
];

export function CommunityStrip() {
  return (
    <section className="relative bg-[color:var(--color-ink)] py-14 sm:py-18 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/grunge-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-1/3 h-[400px] w-[400px] rounded-full bg-[color:var(--color-bronze)]/8 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            tone="paper"
            eyebrow="קהילתיות"
            title="הלמידה לא נגמרת עם הקורס"
            lede="למידה היא תהליך אינסופי ובלתי פוסק. השינויים התכופים מחייבים עדכון רציף גם אחרי שהקורס מסתיים. הצטרפות להכשרה שלנו מכניסה אותך לקהילת מומחים ובה העדכונים נמשכים כל העת."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3 sm:items-stretch">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-7 backdrop-blur-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-bronze)]/15 text-[color:var(--color-bronze)]">
                  <f.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-base font-medium leading-snug text-[color:var(--color-paper-soft)]">
                  {f.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[color:var(--color-paper-soft)]/60">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
