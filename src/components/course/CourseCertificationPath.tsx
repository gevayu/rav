import { ShieldCheck } from "lucide-react";
import type { Course } from "@/data/courses";
import {
  CERTIFICATION_ORDER,
  CERTIFICATION_TIERS,
  getCertificationPath,
} from "@/components/courses/labels";

type CourseCertificationPathProps = {
  course: Course;
};

export function CourseCertificationPath({ course }: CourseCertificationPathProps) {
  const cert = getCertificationPath(course);

  const isActive = (tier: (typeof CERTIFICATION_ORDER)[number]) =>
    tier === cert.entry || tier === cert.exit;
  const isExit = (tier: (typeof CERTIFICATION_ORDER)[number]) => tier === cert.exit;

  return (
    <section
      aria-labelledby="cert-path-title"
      className="relative overflow-hidden bg-[color:var(--color-ink)] py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[color:var(--color-bronze)]/8 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 self-start text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
              <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
              מדרג ההסמכה
            </span>
            <h2
              id="cert-path-title"
              className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] text-[color:var(--color-paper-soft)]"
            >
              מסלול ההסמכה שלך
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-[color:var(--color-paper-soft)]/70">
              {cert.entry
                ? `מגיעים עם ${cert.entry} ויוצאים עם ${cert.exit}. קורסי ההמשך שלנו זמינים לבוגרים שלנו אחרי הסיום.`
                : `קורס זה הוא נקודת הכניסה לעולם ה-AI. מסיימים עם ${cert.exit} ויכולים להמשיך לקורסי AI05.`}
            </p>
          </div>

          <div
            className="flex items-center justify-between gap-3 sm:gap-6"
            role="list"
            aria-label="שלושת דרגות ההסמכה"
          >
            {CERTIFICATION_ORDER.map((tier, idx) => {
              const active = isActive(tier);
              const exit = isExit(tier);
              const { label, name } = CERTIFICATION_TIERS[tier];
              return (
                <div
                  key={tier}
                  className="flex flex-1 items-center"
                  role="listitem"
                >
                  <div className="flex flex-1 flex-col items-center gap-3">
                    <div
                      className={
                        "relative flex h-16 w-16 items-center justify-center rounded-full border transition-colors sm:h-20 sm:w-20 " +
                        (active
                          ? "border-[color:var(--color-bronze)] bg-[color:var(--color-bronze)]/15 text-[color:var(--color-bronze)] shadow-[0_0_0_4px_rgba(229,184,155,0.1)]"
                          : "border-white/15 bg-white/[0.03] text-[color:var(--color-paper-soft)]/35")
                      }
                      aria-current={exit ? "step" : undefined}
                    >
                      <span className="font-display text-[15px] font-medium tracking-[0.06em] sm:text-[17px]">
                        {label}
                      </span>
                      {exit && (
                        <span
                          aria-hidden="true"
                          className="absolute -top-2 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-bronze)] text-[color:var(--color-ink)]"
                        >
                          <ShieldCheck className="h-3 w-3" strokeWidth={2.2} />
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <span
                        className={
                          "text-[13px] font-medium " +
                          (active
                            ? "text-[color:var(--color-paper-soft)]"
                            : "text-[color:var(--color-paper-soft)]/40")
                        }
                      >
                        {name}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-paper-soft)]/35">
                        {exit ? "יעד הקורס" : tier === cert.entry ? "דרישת קדם" : "קורסי המשך"}
                      </span>
                    </div>
                  </div>
                  {idx < CERTIFICATION_ORDER.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={
                        "mx-2 h-px flex-1 sm:mx-4 " +
                        (isActive(tier) && isActive(CERTIFICATION_ORDER[idx + 1])
                          ? "bg-gradient-to-l from-[color:var(--color-bronze)]/15 via-[color:var(--color-bronze)]/60 to-[color:var(--color-bronze)]/15"
                          : "bg-white/10")
                      }
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
