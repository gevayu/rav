import { Logo } from "@/components/brand/Logo";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

type FooterLink = { label: string; href: string; disabled?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "תחומים",
    links: [
      "עריכת דין",
      "ראיית חשבון",
      "רפואה",
      "נדל״ן",
      "הנדסת בניין",
      "יצירת תוכן",
      "מכירות",
      "פיתוח תוכנה",
    ].map((s) => ({ label: s, href: "#" })),
  },
  {
    title: "ניווט",
    links: [
      { label: "דף הבית", href: "/" },
      { label: "קורסים", href: "/courses" },
      { label: "מדרג ההסמכה", href: "/certification", disabled: true },
      { label: "לעצמאים", href: "/solo", disabled: true },
      { label: "למסלול ארגוני", href: "/business", disabled: true },
      { label: "המומחים", href: "/#champions" },
      { label: "בלוג", href: "/#free" },
      { label: "צור קשר", href: "/#lead" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-paper-soft)]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-1/4 h-[420px] w-[420px] rounded-full bg-[color:var(--color-bronze)]/10 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-6 pt-24 pb-12 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.25fr_1fr_1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <Logo tone="bronze" showWordmark className="scale-[1.275] translate-x-[10px] origin-right" />
            <p className="text-[11px] text-[color:var(--color-paper-soft)]/45">
              מקבוצת אנליזה - המרכז הישראלי להכשרות הייטק
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-[color:var(--color-paper-soft)]/70">
              לא מלמדים Ai. מלמדים איך ליישם את ה-Ai בתחום המקצועי שלך.
              הכשרות סקטוריאליות ברמה הגבוהה בישראל.
            </p>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--color-bronze)]/35 bg-[color:var(--color-bronze)]/5 px-4 py-2 text-[11px] font-medium text-[color:var(--color-bronze)]">
              <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.6} />
              מפוקח משרד העבודה, הביטחון והחינוך
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="font-display text-base font-medium text-[color:var(--color-bronze)]">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.disabled ? (
                      <span className="text-[13px] text-[color:var(--color-paper-soft)]/25 cursor-default">
                        {link.label}
                      </span>
                    ) : (
                      <a
                        href={link.href}
                        className="text-[13px] text-[color:var(--color-paper-soft)]/65 transition-colors hover:text-[color:var(--color-paper-soft)]"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-base font-medium text-[color:var(--color-bronze)]">
              יצירת קשר
            </h3>
            <ul className="flex flex-col gap-3 text-[13px] text-[color:var(--color-paper-soft)]/75">
              <li className="flex items-center gap-3">
                <Phone className="h-3.5 w-3.5 text-[color:var(--color-bronze)]" strokeWidth={1.6} />
                054-7700634
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-3.5 w-3.5 text-[color:var(--color-bronze)]" strokeWidth={1.6} />
                info@analiza-college.co.il
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-3.5 w-3.5 text-[color:var(--color-bronze)]" strokeWidth={1.6} />
                הרצליה, ישראל
              </li>
            </ul>
            <div className="mt-2 flex flex-col gap-2">
              <label className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-paper-soft)]/50">
                ניוזלטר מקצועי
              </label>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 pr-4">
                <input
                  type="email"
                  placeholder="האימייל שלך"
                  spellCheck={false}
                  className="flex-1 bg-transparent text-[13px] text-[color:var(--color-paper-soft)] placeholder:text-[color:var(--color-paper-soft)]/40 focus:outline-none"
                />
                <button
                  type="button"
                  className="rounded-full bg-[color:var(--color-bronze)] px-4 py-2 text-[12px] font-medium text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-bronze-deep)]"
                >
                  הרשמה
                </button>
              </div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 accent-[color:var(--color-bronze)] cursor-pointer"
                />
                <span className="text-[11px] text-[color:var(--color-paper-soft)]/50">
                  מוסכם עלי לקבל מהאתר דיוור פרסומי
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-[11px] text-[color:var(--color-paper-soft)]/45 sm:flex-row sm:items-center">
          <span>© 2026 המרכז הרב-תחומי להכשרות Ai. כל הזכויות שמורות.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-[color:var(--color-paper-soft)]">
              מדיניות פרטיות
            </a>
            <a href="#" className="transition-colors hover:text-[color:var(--color-paper-soft)]">
              הצהרת נגישות
            </a>
            <a href="#" className="transition-colors hover:text-[color:var(--color-paper-soft)]">
              תנאי שימוש
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
