"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "כמה זמן לוקח עד שאנחנו רואים תוצאות?",
    a: "שינוי בתהליכים יומיומיים - תוך 4-6 שבועות מתחילת הקורס. שינוי מדיד ב-ROI - בין 3 ל-6 חודשים. שינוי תרבותי בארגון - 6-12 חודשים. אין פתרון מהיר, אבל יש תהליך מוכח.",
  },
  {
    q: "מה קורה אם עובד עוזב באמצע?",
    a: 'הוא ממשיך ללמוד על חשבונו אם ירצה. אבל אין החזר לארגון ואין "הגנה על מקום". ברוב המקרים, עובדים שעברו את הקורס - נשארים יותר בארגון. ההכשרה היא חלק מיצירת נאמנות.',
  },
  {
    q: "האם הנתונים שלנו בטוחים?",
    a: "כן. הקורסים מלמדים שיטות עבודה בטוחות עם Ai - איך להשתמש בכלים עסקיים (לא הגרסאות החינמיות הציבוריות), איך לשמור על סודיות מידע. יש מודול נפרד לנושא הרגולציה והפרטיות.",
  },
  {
    q: "אנחנו בסקטור עם רגולציה מיוחדת (בנקים, ביטוח, בריאות). האם זה מתאים?",
    a: "כן. זה בדיוק סוג המצב שבו חבילה מותאמת יוצרת ערך - אנחנו בונים את ההכשרה סביב הרגולציה שלך. עבדנו עם בנקים, חברות ביטוח, ומוסדות רפואיים, ויש לנו ניסיון ספציפי במגבלות של כל אחד.",
  },
  {
    q: "כמה זה עולה?",
    a: "אין מחירון אחד. עלות החבילה תלויה במספר העובדים, בסקטור, בהיקף ההתאמה, ובמשך הליווי. לפי ניסיוננו, ההכשרה מחזירה את העלות תוך חצי שנה עד שנה. הצעת מחיר מדויקת תקבל אחרי שיחת הייעוץ.",
  },
  {
    q: "האם ההכשרה מזכה בכיסוי על ידי מענקי הכשרה ממשלתיים?",
    a: "חלק מהקורסים שלנו זכאים לכיסוי על ידי משרד העבודה, דרך תוכניות שונות. אנחנו מסייעים בתהליך הבקשה. לא כל קורס מכזה - יועץ ההדרכה יעזור להבין אילו אפשרויות פתוחות לך.",
  },
];

export function BizFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const idPrefix = useId();

  return (
    <section
      aria-labelledby="biz-faq-title"
      className="relative bg-[color:var(--color-paper-soft)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-[860px] px-6 sm:px-10">
        <div className="mb-12 flex flex-col gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze-ink)]">
            שאלות נפוצות
          </span>
          <h2
            id="biz-faq-title"
            className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] text-[color:var(--color-ink)]"
          >
            לפני שמתחילים
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            const panelId = `${idPrefix}-biz-faq-${idx}-panel`;
            const buttonId = `${idPrefix}-biz-faq-${idx}-button`;
            return (
              <article
                key={item.q}
                className="overflow-hidden rounded-[20px] border border-[color:var(--color-ink)]/10 bg-white transition-colors hover:border-[color:var(--color-bronze)]/45"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="flex w-full items-center gap-5 px-6 py-5 text-right transition-colors hover:bg-[color:var(--color-bronze)]/5 focus-visible:outline-none focus-visible:bg-[color:var(--color-bronze)]/5 sm:px-7 sm:py-6"
                  >
                    <span className="flex-1 font-display text-[16px] font-medium leading-tight text-[color:var(--color-ink)] sm:text-[17px]">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={
                        "h-4 w-4 shrink-0 text-[color:var(--color-bronze)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                        (isOpen ? "rotate-180" : "rotate-0")
                      }
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                    (isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[color:var(--color-ink)]/8 px-6 py-5 text-[14px] leading-relaxed text-[color:var(--color-ink-soft)] sm:px-7 sm:py-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
