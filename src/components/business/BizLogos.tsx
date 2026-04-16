import { Reveal } from "@/components/ui/Reveal";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "חיפשנו גוף הדרכה שמבין גם AI וגם את העולם המקצועי שלנו. מצאנו את שניהם בחבילה אחת. אחרי 4 חודשים, לא בטוח איך עבדנו בלי זה.",
    name: "דנה לוינסון",
    title: "VP Operations, חברת שירותים פיננסיים עם 80 עובדים",
  },
  {
    text: "היתרון הוא שהעובדים לא חשים שהם נלמדים. הם חשים שהם מתעדכנים. זה שינוי תודעתי שקשה להשיג.",
    name: "יורם בן-שמעון",
    title: 'מנכ"ל, חברת ייעוץ הנדסי עם 120 עובדים',
  },
];

export function BizLogos() {
  return (
    <section className="relative bg-[color:var(--color-ink)] py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/25 to-transparent"
      />

      <div className="mx-auto max-w-[1080px] px-6 sm:px-10">
        <Reveal className="mb-14 text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
            ארגונים שכבר סומכים עלינו
          </span>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.1}>
              <article className="flex h-full flex-col gap-6 rounded-[24px] border border-[color:var(--color-bronze)]/20 bg-white/[0.04] p-8">
                <Quote
                  className="h-8 w-8 text-[color:var(--color-bronze)]/30"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <blockquote className="flex-1 font-display text-[17px] font-medium leading-[1.45] text-[color:var(--color-paper-soft)]">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <div className="flex flex-col gap-0.5 border-t border-white/10 pt-5">
                  <span className="text-[14px] font-medium text-[color:var(--color-paper-soft)]">
                    {q.name}
                  </span>
                  <span className="text-[12px] text-[color:var(--color-paper-soft)]/50">
                    {q.title}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
