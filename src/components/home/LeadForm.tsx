"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { sectors } from "@/data/sectors";
import { Check } from "lucide-react";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="lead"
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
              <Eyebrow tone="paper">תיאום שיחה</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.05] text-[color:var(--color-paper-soft)]">
                לשיחה עם יועץ הדרכה
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-[color:var(--color-paper-soft)]/70">
                שיחה קצרה של 15 דקות בה נסביר איפה Ai יכול לעזור בתחום המקצועי
                שלך, איזה מסלול מתאים לך, ומה ההתקדמות הריאלית שאפשר לצפות בתוך
                שלושה חודשים.
              </p>

              <ul className="mt-2 flex flex-col gap-3 text-[13px] text-[color:var(--color-paper-soft)]/75">
                {[
                  "חזרה תוך יום עסקים",
                  "ללא התחייבות",
                  "שיחה עם יועץ שמכיר את התחום המקצועי שלך",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-bronze)]/15 text-[color:var(--color-bronze)]">
                      <Check className="h-3 w-3" strokeWidth={2} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
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
                      יועץ הדרכה יחזור אליך תוך יום עסקים לתיאום שיחה של 15 דקות.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="שם מלא" name="name" type="text" autoComplete="name" required />
                      <Field label="טלפון" name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
                      <Field label="אימייל" name="email" type="email" autoComplete="email" spellCheck={false} required className="sm:col-span-2" />
                      <div className="flex flex-col gap-2 sm:col-span-2">
                        <label
                          htmlFor="sector"
                          className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-paper-soft)]/55"
                        >
                          תחום עניין
                        </label>
                        <div className="relative">
                          <select
                            id="sector"
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
                      </div>
                      <div className="flex flex-col gap-2 sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-paper-soft)]/55"
                        >
                          הודעה קצרה (אופציונלי)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-[color:var(--color-paper-soft)] placeholder:text-[color:var(--color-paper-soft)]/30 transition-colors focus:border-[color:var(--color-bronze)]/60 focus:outline-none"
                          placeholder="מה האתגר המקצועי שאתה רוצה לפתור?"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <Button type="submit" variant="primary" size="lg" loading={loading}>
                        לתיאום ייעוץ
                      </Button>
                      <a
                        href="#free"
                        className="group inline-flex items-center gap-2 text-[13px] font-medium text-[color:var(--color-bronze)] transition-colors hover:text-[color:var(--color-bronze-deep)]"
                      >
                        לא מוכן עדיין? צפה בשיעור ניסיון חינם
                        <span
                          aria-hidden="true"
                          className="inline-block transition-transform duration-300 group-hover:-translate-x-0.5"
                        >
                          ←
                        </span>
                      </a>
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

type FieldProps = {
  label: string;
  name: string;
  type: string;
  className?: string;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text" | "numeric";
  required?: boolean;
  spellCheck?: boolean;
};

function Field({
  label,
  name,
  type,
  className,
  autoComplete,
  inputMode,
  required,
  spellCheck,
}: FieldProps) {
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
        inputMode={inputMode}
        required={required}
        spellCheck={spellCheck}
        className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-[14px] text-[color:var(--color-paper-soft)] placeholder:text-[color:var(--color-paper-soft)]/30 transition-colors focus:border-[color:var(--color-bronze)]/60 focus:outline-none"
      />
    </div>
  );
}
