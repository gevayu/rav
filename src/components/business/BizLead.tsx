"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { sectors } from "@/data/sectors";
import { Check, FileDown } from "lucide-react";

const employeeRanges = [
  "10-30 עובדים",
  "30-80 עובדים",
  "80-150 עובדים",
  "150-500 עובדים",
  "500+ עובדים",
];

export function BizLead() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="biz-lead"
      className="relative isolate overflow-hidden bg-[color:var(--color-ink)] py-28 sm:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[color:var(--color-bronze)]/10 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/35 to-transparent"
      />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="flex flex-col gap-6">
              <Eyebrow tone="paper">לתיאום פגישה</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.05] text-[color:var(--color-paper-soft)]">
                הצעד הראשון הוא
                <br />
                <span className="text-[color:var(--color-bronze)]">
                  פגישה של 30 דקות.
                </span>
              </h2>
              <p className="max-w-md text-base leading-relaxed text-[color:var(--color-paper-soft)]/70">
                יועץ הדרכה בכיר יתקשר אליך תוך יום עסקים. בפגישת ההיכרות
                הראשונה (פרונטלית או בזום, כפי שנוח לך), נכיר את הארגון שלך, נבין
                את הצרכים, ונשתף את האפשרויות. בסוף הפגישה יהיה לך מסמך סיכום
                ברור, ואם תרצה - נקבע את הצעד הבא.
              </p>

              <a
                href="#"
                className="group mt-2 inline-flex items-center gap-2 text-[13px] font-medium text-[color:var(--color-bronze)] transition-colors hover:text-[color:var(--color-bronze-deep)]"
              >
                <FileDown
                  className="h-4 w-4"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                או להורדת חוברת ארגונית (PDF, 12 עמודים)
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative rounded-[36px] bg-white/[0.03] p-2 ring-1 ring-white/10 backdrop-blur-sm">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    setSubmitted(true);
                  }, 900);
                }}
                className="relative rounded-[calc(36px-0.5rem)] bg-[color:var(--color-ink)]/95 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-10"
              >
                {submitted ? (
                  <div className="flex flex-col items-start gap-4 py-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-bronze)]/15 text-[color:var(--color-bronze)]">
                      <Check className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <h3 className="font-display text-2xl font-medium text-[color:var(--color-paper-soft)]">
                      תודה. הפרטים התקבלו.
                    </h3>
                    <p className="text-[14px] text-[color:var(--color-paper-soft)]/70">
                      יועץ הדרכה בכיר יחזור אליך תוך יום עסקים לתיאום פגישת
                      היכרות.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <BizField
                        label="שם מלא"
                        name="biz-name"
                        type="text"
                        autoComplete="name"
                        required
                      />
                      <BizField
                        label="תפקיד"
                        name="biz-role"
                        type="text"
                        required
                      />
                      <BizField
                        label="שם החברה"
                        name="biz-company"
                        type="text"
                        autoComplete="organization"
                        required
                        className="sm:col-span-2"
                      />
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="biz-sector"
                          className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-paper-soft)]/55"
                        >
                          ענף / סקטור
                        </label>
                        <select
                          id="biz-sector"
                          name="sector"
                          required
                          className="h-12 w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-4 text-[14px] text-[color:var(--color-paper-soft)] transition-colors focus:border-[color:var(--color-bronze)]/60 focus:outline-none"
                          style={{ colorScheme: "dark" }}
                        >
                          <option value="" disabled>
                            בחר ענף
                          </option>
                          {sectors.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.displayName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="biz-size"
                          className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-paper-soft)]/55"
                        >
                          מספר עובדים
                        </label>
                        <select
                          id="biz-size"
                          name="size"
                          required
                          className="h-12 w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-4 text-[14px] text-[color:var(--color-paper-soft)] transition-colors focus:border-[color:var(--color-bronze)]/60 focus:outline-none"
                          style={{ colorScheme: "dark" }}
                        >
                          <option value="" disabled>
                            בחר טווח
                          </option>
                          {employeeRanges.map((r) => (
                            <option key={r} value={r}>
                              {r}
                            </option>
                          ))}
                        </select>
                      </div>
                      <BizField
                        label="אימייל"
                        name="biz-email"
                        type="email"
                        autoComplete="email"
                        required
                      />
                      <BizField
                        label="טלפון"
                        name="biz-phone"
                        type="tel"
                        autoComplete="tel"
                        required
                      />
                      <div className="flex flex-col gap-2 sm:col-span-2">
                        <label
                          htmlFor="biz-notes"
                          className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-paper-soft)]/55"
                        >
                          על מה תרצה לדבר בפגישה (אופציונלי)
                        </label>
                        <textarea
                          id="biz-notes"
                          name="notes"
                          rows={3}
                          className="resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-[color:var(--color-paper-soft)] placeholder:text-[color:var(--color-paper-soft)]/30 transition-colors focus:border-[color:var(--color-bronze)]/60 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col items-start gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={loading}
                      >
                        לתיאום פגישה עם יועץ הדרכה בכיר
                      </Button>
                      <p className="text-[11px] text-[color:var(--color-paper-soft)]/40">
                        אנחנו לא משתמשים בפרטים שלך בשום צורה אחרת. זמן הפגישה
                        ייבחר אחרי תיאום ישיר - לא שולחים ניוזלטרים, לא פונים
                        מחדש.
                      </p>
                    </div>
                  </>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BizField({
  label,
  name,
  type,
  className,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type: string;
  className?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`.trim()}>
      <label
        htmlFor={name}
        className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-paper-soft)]/55"
      >
        {label}
        {required ? (
          <span className="text-[color:var(--color-bronze)]"> *</span>
        ) : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-[14px] text-[color:var(--color-paper-soft)] placeholder:text-[color:var(--color-paper-soft)]/30 transition-colors focus:border-[color:var(--color-bronze)]/60 focus:outline-none"
      />
    </div>
  );
}
