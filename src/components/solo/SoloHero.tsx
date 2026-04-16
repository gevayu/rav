import { Button } from "@/components/ui/Button";
import { PlayCircle } from "lucide-react";

export function SoloHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--color-bronze)]/10 blur-[180px]"
      />

      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-8 px-6 text-center sm:px-10">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
          לעצמאיים ופרילאנסרים
        </span>

        <h1 className="font-display text-[clamp(2.4rem,5.8vw,4.5rem)] font-medium leading-[0.95] tracking-tight text-[color:var(--color-paper-soft)]">
          עצמאי אמיתי מכיר את זה.
        </h1>

        <h2 className="max-w-2xl font-display text-[clamp(1.3rem,2.8vw,1.8rem)] font-medium leading-[1.25] text-[color:var(--color-bronze)]">
          מתחרים על אותו תיק, אבל מול משרד של 15 אנשים. עכשיו יש לך דרך לסגור
          את הפער.
        </h2>

        <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--color-paper-soft)]/70">
          במרכז הרב-תחומי להכשרות Ai אנחנו מלמדים איך להפוך את ה-AI לעובד השקט
          ביותר שלך. אחד שלא לוקח משכורת, זמין 24/7, וכן - באמת טוב בתחום
          הספציפי שלך. הקורסים מועברים על ידי עצמאיים ושותפים-בכירים מהתחום שלך,
          לא ידועני-של-AI שמלמדים את הכל.
        </p>

        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Button as="a" href="/courses" variant="primary" size="lg">
            לקטלוג הקורסים בתחום שלי
          </Button>
          <a
            href="/#free"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[color:var(--color-paper-soft)]/60 transition-colors hover:text-[color:var(--color-bronze)]"
          >
            <PlayCircle
              className="h-4 w-4"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            לא בטוח? צפה ב-15 דקות ניסיון חינם
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[color:var(--color-paper-soft)]"
      />
    </section>
  );
}
