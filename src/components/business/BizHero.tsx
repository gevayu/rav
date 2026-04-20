import { Button } from "@/components/ui/Button";
import { FileDown } from "lucide-react";

export function BizHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--color-ink)] pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[40%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--color-bronze)]/10 blur-[180px]"
      />

      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-8 px-6 text-center sm:px-10">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
          לארגונים
        </span>

        <h1 className="font-display text-[clamp(2.2rem,5.2vw,4rem)] font-medium leading-[0.95] tracking-tight text-[color:var(--color-paper-soft)]">
          העובדים שלך כבר משתמשים ב-Ai.
          <br />
          <span className="text-[color:var(--color-bronze)]">
            השאלה היחידה: איך.
          </span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--color-paper-soft)]/70">
          50 עובדים, 50 גישות שונות ל-Ai. הכשרה מובנית אחת מסדרת את זה.
        </p>

        <p className="max-w-2xl text-base leading-relaxed text-[color:var(--color-paper-soft)]/55">
          מכללה מוסדית, 4,500+ בוגרים, 40+ מדריכים מהתעשייה. ההכשרה בנויה סביב
          הסקטור שלך והתהליכים הספציפיים של הארגון. יועץ הדרכה מלווה את הצוות
          מהפנייה עד דו&quot;ח ROI.
        </p>

        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Button as="a" href="#biz-lead" variant="primary" size="lg">
            לתיאום פגישה עם יועץ הדרכה
          </Button>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[color:var(--color-paper-soft)]/60 transition-colors hover:text-[color:var(--color-bronze)]"
          >
            <FileDown
              className="h-4 w-4"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            להורדת חוברת ארגונית
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
