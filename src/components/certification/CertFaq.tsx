"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type FaqItem = { q: string; a: string };

const faqs: FaqItem[] = [
  {
    q: "מה ההבדל בין ההסמכה הזו לתעודות AI אחרות?",
    a: "הדרגות שלנו מונפקות ממכללה מפוקחת על ידי משרד העבודה, הביטחון והחינוך. הן בנויות סביב יישום סקטוריאלי - מה שאתה באמת עושה בעבודה - עם תוכנית חידוש שנתית שמבטיחה שהדרגה תמיד רלוונטית.",
  },
  {
    q: "אני חייב לעבור AI01 לפני AI05?",
    a: "כן. AI01 היא דרישת הקדם ל-AI05. במרבית הקורסים הסקטוריאליים, המכינה (AI01) כלולה כחלק מהקורס - אין צורך להירשם אליה בנפרד.",
  },
  {
    q: "מה קורה כשהתעודה פגה?",
    a: "הדרגה תקפה לשנתיים. כשהתוקף מתקרב, תקבל הודעה עם אפשרויות חידוש - מבחן מקוון או קורס עדכון קצר, תלוי בדרגה. העלות מסובסדת לבוגרים.",
  },
  {
    q: "האם הדרגות מוכרות בחו״ל?",
    a: "המכללה פועלת תחת פיקוח ישראלי. הדרגות מוכרות על ידי מעסיקים ישראליים ומותאמות לשוק המקומי. לגבי הכרה בינלאומית - אנחנו עובדים על שותפויות, אבל נכון להיום ההכרה היא ישראלית.",
  },
  {
    q: "אפשר לדלג ישר ל-AI09?",
    a: "המידרג בנוי כנתיב מצטבר. כל דרגה מניחה את הידע של הקודמת. גם אם יש לך ניסיון רב, הקורסים בנויים כך שתלמד דברים חדשים בכל שלב.",
  },
];

export function CertFaq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="relative bg-[color:var(--color-paper)] py-24 sm:py-28">
      <div className="mx-auto max-w-[800px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="שאלות נפוצות"
            title="עוד כמה דברים שכדאי לדעת"
          />
        </Reveal>

        <div className="mt-14 flex flex-col divide-y divide-[color:var(--color-ink)]/8 rounded-[20px] border border-[color:var(--color-ink)]/8 bg-white">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `cert-faq-panel-${i}`;
            const headerId = `cert-faq-header-${i}`;
            return (
              <div key={i}>
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right transition-colors hover:bg-[color:var(--color-paper-soft)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[color:var(--color-bronze)]"
                >
                  <span className="font-display text-[15px] font-medium text-[color:var(--color-ink)]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={
                      "h-4 w-4 shrink-0 text-[color:var(--color-bronze)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                      (isOpen ? "rotate-180" : "")
                    }
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className={
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                    (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-[15px] text-[color:var(--color-ink-muted)]">
              מוכנים להתחיל את הנתיב?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button as="a" href="/courses" variant="primary" size="lg">
                לקטלוג הקורסים
              </Button>
              <Button as="a" href="/#lead" variant="secondary" size="lg">
                לשיחה עם יועץ
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
