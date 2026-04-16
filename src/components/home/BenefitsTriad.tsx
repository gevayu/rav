import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Benefit = {
  image: string;
  title: string;
  body: string;
  stat: string;
};

const benefits: Benefit[] = [
  {
    image: "/images/benefit-sectorial.jpg",
    title: "מקצועיות סקטוריאלית",
    body: "לא הכשרת AI גנרית. הכשרה מותאמת בדיוק לתחום המקצועי שלך - תהליכים, כלים ואתגרים ספציפיים.",
    stat: "11 תחומים",
  },
  {
    image: "/images/benefit-experts.jpg",
    title: "מומחים אמיתיים",
    body: "ראשי תחומים שהם אנשי מקצוע פעילים מהשטח, לא מדריכי AI גנריים שלמדו את התחום מסרטון יוטיוב.",
    stat: "+40 מדריכים",
  },
  {
    image: "/images/benefit-roi.jpg",
    title: "ROI מיידי",
    body: "תהליכי עבודה, סוכנים ואוטומציות שעובדים מהיום הראשון של הקורס - לא רק תיאוריה.",
    stat: "מהיום הראשון",
  },
];

export function BenefitsTriad() {
  return (
    <section
      className="relative bg-[color:var(--color-paper)] py-28 sm:py-36"
      id="benefits"
    >
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="למה אנחנו"
            title={
              <>
                שלושה דברים ש<span className="text-[color:var(--color-bronze-ink)]">באמת</span> משנים
                את איך שאתה עובד.
              </>
            }
            lede="המרכז הרב-תחומי הוקם כהסתעפות של אנליזה, המרכז הישראלי להכשרות הייטק. חמש שנים של תוצאות, עכשיו עם מיקוד מקצועי לכל סקטור."
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
                        unoptimized
                      />
                    </div>

                    <div className="p-8">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-2xl font-medium leading-tight text-[color:var(--color-ink)]">
                          {benefit.title}
                        </h3>
                        <span className="tabular mt-1 shrink-0 font-display text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-bronze-ink)]">
                          {benefit.stat}
                        </span>
                      </div>
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
