import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CreditCard, CalendarClock, Building, Combine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Plan = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const plans: Plan[] = [
  {
    icon: CreditCard,
    title: "תשלום מלא מראש",
    body: "הנחה של 8% על המחיר המחירוני. מנפיקים חשבונית מס מידית.",
  },
  {
    icon: CalendarClock,
    title: "עד 12 תשלומים ללא ריבית",
    body: "הנוסחה הפופולרית ביותר. מחלק את העלות לאורך כמעט שנה.",
  },
  {
    icon: Building,
    title: "מענק משרד העבודה",
    body: "למי שזכאי. לא כל קורס מכזה. נסייע לך לבדוק אם הקורס שלך בתוכנית.",
  },
  {
    icon: Combine,
    title: "תשלום חלקי + מענק",
    body: "ברוב המקרים ניתן לשלב מענק עם תשלומים אישיים. יועץ הדרכה יעזור למצוא את השילוב הטוב ביותר עבורך.",
  },
];

export function SoloPayment() {
  return (
    <section className="relative bg-[color:var(--color-paper-soft)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="מסלולי תשלום"
            title="שלא תצטרך לדאוג בנוגע למחיר"
            lede="אנחנו יודעים שעצמאי שוקל כל שקל, ולכן יש לנו ארבעה מסלולי תשלום, ולפחות אחד מהם מתאים לך."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <Reveal key={plan.title} delay={i * 0.08}>
                <article className="flex h-full flex-col gap-4 rounded-[24px] border border-[color:var(--color-ink)]/8 bg-white p-7 transition-colors hover:border-[color:var(--color-bronze)]/35">
                  <Icon
                    className="h-8 w-8 text-[color:var(--color-bronze)]"
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-[17px] font-medium leading-tight text-[color:var(--color-ink)]">
                    {plan.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
                    {plan.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-[14px] leading-relaxed text-[color:var(--color-ink-muted)]">
            לא בטוח איזה מסלול מתאים לך? יועץ הדרכה יתקשר אליך תוך יום עסקים
            לבדוק יחד. לחץ על הכפתור למטה ומלא את הפרטים.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
