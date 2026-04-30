import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Benefit = {
  image: string;
  title: string;
  body: string;
};

const benefits: Benefit[] = [
  {
    image: "/images/feel/Typing on a Laptop.png",
    title: "למידה אג'ילית",
    body: "הכשרות מדוייקות וממוקדות, חיכוך עם מקרי בוחן אמיתיים, דגש על פרקטיקה ועבודה יישומית עצמאית. מינימום תיאוריה ומקסימום אפקט על העשייה העסקית שלך.",
  },
  {
    image: "/images/feel/Focused Work.png",
    title: "דגש על תהליכים עסקיים",
    body: "אנחנו מתמקדים בפעולות העסקיות והתהליכים המקצועיים הרלוונטים בתחום שלך. ההכשרה לא רק תציג את הטכנולוגיה החדישה, אלא איך היא פוגשת אותך ביום-יום.",
  },
  {
    image: "/images/lect/Man Presenting on Stage.png",
    title: "מומחים אמיתיים",
    body: "אנשי ההדרכה כולם אנשי מקצוע המשלבים ניסיון עסקי משמעותי, מקצוענות הדרכתית והבנה עמוקה בטכנולוגיה וכלי בינה מלאכותית. אצלנו לומדים מהמומחים בתחומך, ולא רק ממקצועני Ai.",
  },
];

export function BenefitsTriad() {
  return (
    <section
      className="relative bg-[color:var(--color-paper)] py-14 sm:py-18"
      id="benefits"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            title="למה אנחנו?"
            lede={
              <>
                זו לא שאלה של 'האם', אלא 'מתי' תצטרפו למהפכה. אנחנו מאמינים שעדיף כמה שיותר מוקדם, וכדאי ללמוד מאנשי המקצוע הטובים ביותר בתחומך.
                <br />
                <br />
                המרכז הרב תחומי להכשרות Ai הוא חלק מקבוצת 'אנליזה', המרכז הישראלי להכשרות טכנולוגיות. אנחנו נמצאים בליבת ההכשרות הטכנולוגיות מאז 2021 ונשמח לעזור גם לך לעמוד בחזית הטכנולוגיה העסקית.
              </>
            }
          />
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 0.1}>
                <article className="group relative h-full rounded-[32px] bg-[color:var(--color-ink)]/[0.03] p-2 ring-1 ring-[color:var(--color-ink)]/5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:ring-[color:var(--color-bronze)]/40">
                  <div
                    className="relative h-full overflow-hidden rounded-[calc(32px-0.5rem)] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(28,28,30,0.04),0_24px_48px_-32px_rgba(28,28,30,0.18)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] w-full bg-[color:var(--color-cream)]">
                      <Image
                        src={benefit.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"

                      />
                    </div>

                    <div className="p-8">
                      <h3 className="font-display text-2xl font-medium leading-tight text-[color:var(--color-ink)]">
                        {benefit.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-[color:var(--color-ink-muted)]">
                        {benefit.body}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-xs text-[color:var(--color-ink-muted)]">
                        <span className="inline-block h-px w-6 bg-[color:var(--color-bronze)]" />
                        <span>עיקרון מנחה {String(i + 1).padStart(2, "0")}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
