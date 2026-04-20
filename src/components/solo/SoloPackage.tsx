import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

const items = [
  "10 מפגשים בני 4 שעות אקדמיות - חלקם מוקלטים, חלקם לייב בזום, חלקם פרונטליים במרכז",
  "גישה מלאה למרכז הידע שנשאר פתוח גם אחרי הקורס - סרטונים, מסמכים, תבניות, כלים",
  "קהילת בוגרים - גישה לקבוצת ווטסאפ ולינקדאין של בוגרי הקורס שלך",
  "עדכוני תכנים - כשיש גרסה חדשה של כלי Ai מרכזי, אנחנו שולחים עדכון ישיר לכל הבוגרים",
  "תעודת סיום מטעם המרכז, מפוקח על ידי משרד העבודה",
  "שיחת ייעוץ אישית אחת עם המדריך - אחרי סיום הקורס, לבחינת יישום בעסק שלך",
];

export function SoloPackage() {
  return (
    <section className="relative bg-[color:var(--color-paper)] py-24 sm:py-28">
      <div className="mx-auto max-w-[860px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow="מה כלול" title="מה בדיוק נמצא בחבילה" />
        </Reveal>

        <ul className="mt-14 flex flex-col gap-5">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 0.06} as="li">
              <div className="flex items-start gap-4 rounded-2xl border border-[color:var(--color-ink)]/6 bg-white p-5 transition-colors hover:border-[color:var(--color-bronze)]/30">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-bronze)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
                  {item}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
