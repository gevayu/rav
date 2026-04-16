import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const timeline = [
  {
    time: "7:30",
    text: "סוכן ה-AI מכין לה סיכום של כל החדשות המשפטיות הרלוונטיות מהלילה. במקום לסרוק אתרי חדשות חצי שעה, היא קוראת תקציר של 2 דקות.",
  },
  {
    time: "9:00",
    text: "פגישה עם לקוח. אחרי הפגישה, מערכת שבנתה בקורס מפיקה אוטומטית סיכום פגישה, רשימת משימות, וטיוטת מייל המשך. כולם מוכנים תוך 90 שניות.",
  },
  {
    time: "11:00",
    text: "לקוח שולח חוזה בן 40 עמודים לבדיקה. רונית מריצה אותו דרך תהליך AI שלמדה בקורס. תוך 12 דקות, יש לה רשימה של 7 סעיפים בעייתיים, 3 סעיפים חסרים, וניסוח מתוקן לכל אחד. בעבר, זה היה עבודה של 3 שעות.",
  },
  {
    time: "14:00",
    text: "מעדכנת את המערכת של ניהול התיקים שלה. ה-AI שבנתה בעצמה בקורס סורקת תיקים פתוחים ומסמנת לה מה דורש מעקב השבוע.",
  },
  {
    time: "17:00",
    text: "סיום יום. במקום לסיים ב-20:30 כמו פעם, היא מספיקה לגשת לאימון ולערוב עם המשפחה. עדיין גובה את אותם מחירים כמו קודם — אבל עכשיו היא מטפלת ב-60% יותר תיקים.",
  },
];

export function SoloDayInLife() {
  return (
    <section className="relative bg-[color:var(--color-cream)] py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/30 to-transparent"
      />

      <div className="mx-auto max-w-[860px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="יום בחיים"
            title={
              <>
                יום אחד בחייה של רונית, עו&quot;ד עצמאית,{" "}
                <span className="text-[color:var(--color-bronze-ink)]">
                  אחרי הקורס
                </span>
              </>
            }
            lede="לא סיפור תיאורטי. זו השגרה החדשה של בוגרת אמיתית. השם שונה."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-0">
          {timeline.map((item, i) => (
            <Reveal key={item.time} delay={i * 0.08}>
              <div className="group flex gap-6 py-6">
                <div className="flex flex-col items-center gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-bronze)]/30 bg-[color:var(--color-bronze)]/10 font-display text-[13px] font-medium text-[color:var(--color-bronze-ink)]">
                    {item.time}
                  </span>
                  {i < timeline.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="w-px flex-1 bg-[color:var(--color-bronze)]/20"
                    />
                  )}
                </div>
                <p className="pt-2 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="text-center text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
            זה לא חזון. זו שגרה של +400 עצמאיים שעברו את הקורסים שלנו בשנתיים
            האחרונות.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
