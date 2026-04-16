import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  TrendingDown,
  Clock,
  MessageSquareX,
  BookX,
  UserRoundX,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type PainBlock = {
  icon: LucideIcon;
  quote: string;
  body: string;
};

const pains: PainBlock[] = [
  {
    icon: TrendingDown,
    quote: "הלקוחות מצפים יותר, אבל המחיר שלי תקוע.",
    body: "השוק השתנה. לקוחות מצפים לתוצרים מהירים יותר, יותר מקצועיים, יותר זולים. אתה מתקשה להעלות מחיר בלי לאבד עבודות.",
  },
  {
    icon: Clock,
    quote: "אין לי זמן ללמוד משהו חדש.",
    body: "הימים שלך מלאים. כל שעה שאתה משקיע בלמידה היא שעה שלא חייבת. קורס ארוך של שישה חודשים הוא לא אופציה.",
  },
  {
    icon: MessageSquareX,
    quote: "ניסיתי ChatGPT, אבל זה לא באמת עוזר לי.",
    body: "אתה מכיר את הכלי, אבל עדיין מקבל תוצאות שטחיות או לא מדויקות. אתה יודע שיש משהו שם אבל לא יודע איך להגיע אליו.",
  },
  {
    icon: BookX,
    quote: "כל הקורסים הם גנריים.",
    body: 'כל מה שמצאת זה "מבוא ל-AI" או "איך לעבוד עם ChatGPT". אף אחד לא מדבר על התחום הספציפי שלך, על הכלים שאתה באמת צריך.',
  },
  {
    icon: UserRoundX,
    quote: "אני מרגיש שהמתחרים כבר שם ואני מפגר.",
    body: "רואה בלינקדאין איך אחרים מתגאים בפרויקטים עם AI. מרגיש שהרכבת עוזבת את התחנה והוא עדיין בשלב ההסתכלות.",
  },
];

export function SoloPain() {
  return (
    <section className="relative bg-[color:var(--color-paper-soft)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="מזהה את עצמך?"
            title="חמישה דברים שעצמאיים אומרים לנו בשיחה הראשונה"
          />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <Reveal key={pain.quote} delay={i * 0.08}>
                <article className="flex h-full flex-col gap-4 rounded-[24px] border border-[color:var(--color-ink)]/8 bg-white p-7 transition-colors hover:border-[color:var(--color-bronze)]/35">
                  <Icon
                    className="h-8 w-8 text-[color:var(--color-bronze)]"
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-[17px] font-medium leading-tight text-[color:var(--color-ink)]">
                    &ldquo;{pain.quote}&rdquo;
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                    {pain.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="font-display text-lg font-medium text-[color:var(--color-ink)]">
            כל אחד מהם נפתר בתוך 10 שבועות.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
