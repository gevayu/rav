"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { sectors } from "@/data/sectors";
import { Check } from "lucide-react";

export function SoloLead() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="solo-lead"
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
              <Eyebrow tone="paper">לתיאום שיחה</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.05] text-[color:var(--color-paper-soft)]">
                הצעד הראשון הוא
                <br />
                <span className="text-[color:var(--color-bronze)]">
                  שיחה של 15 דקות.
                </span>
              </h2>
              <p className="max-w-md text-base leading-relaxed text-[color:var(--color-paper-soft)]/70">
                יועץ הדרכה יתקשר אליך תוך יום עסקים. בלי לחץ, בלי מכירה
                אגרסיבית. הוא ישאל מה התחום שלך, איפה אתה עכשיו ואיפה היית רוצה
                להיות. ואם המרכז לא מתאים לך, הוא יגיד לך את זה בפתיחות.
              </p>
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
                      יועץ הדרכה יחזור אליך תוך יום עסקים לתיאום שיחה של 15
                      דקות.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        label="שם מלא"
                        name="solo-name"
                        type="text"
                        autoComplete="name"
                        required
                      />
                      <FormField
                        label="טלפון"
                        name="solo-phone"
                        type="tel"
                        autoComplete="tel"
                        required
                      />
                      <FormField
                        label="אימייל"
                        name="solo-email"
                        type="email"
                        autoComplete="email"
                        required
                        className="sm:col-span-2"
                      />
                      <div className="flex flex-col gap-2 sm:col-span-2">
                        <label
                          htmlFor="solo-sector"
                          className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-paper-soft)]/55"
                        >
                          תחום מקצועי
                        </label>
                        <select
                          id="solo-sector"
                          name="sector"
                          required
                          className="h-12 w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-4 text-[14px] text-[color:var(--color-paper-soft)] transition-colors focus:border-[color:var(--color-bronze)]/60 focus:outline-none"
                          style={{ colorScheme: "dark" }}
                        >
                          <option value="" disabled>
                            בחר תחום
                          </option>
                          {sectors.map((s) => (
                            <option key={s.slug} value={s.slug}>
                              {s.displayName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-2 sm:col-span-2">
                        <label
                          htmlFor="solo-pain"
                          className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-paper-soft)]/55"
                        >
                          מהו הכאב המרכזי שאתה מחפש לפתור (אופציונלי)
                        </label>
                        <textarea
                          id="solo-pain"
                          name="pain"
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
                        לתיאום שיחה
                      </Button>
                      <p className="text-[11px] text-[color:var(--color-paper-soft)]/40">
                        אנחנו לא משתמשים בפרטים שלך בשום צורה אחרת, ולא שולחים
                        ניוזלטרים אלא אם מבקשים.
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

function FormField({
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
