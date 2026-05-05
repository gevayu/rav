import { Logo } from "@/components/brand/Logo";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

type FooterLink = { label: string; href: string; disabled?: boolean };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "תחומים",
    links: [
      { label: "עריכת דין",     href: "/courses/ai-law-applied" },
      { label: "ראיית חשבון",   href: "/courses/ai-finance" },
      { label: "רפואה",         href: "/courses/ai-medicine" },
      { label: "נדל״ן",          href: "/courses/ai-realestate" },
      { label: "הנדסה אזרחית", href: "/courses/ai-engineering" },
    ],
  },
  {
    title: "ניווט",
    links: [
      { label: "דף הבית", href: "/" },
      { label: "קורסים", href: "/courses" },
      { label: "אודות", href: "/about" },
      { label: "מדרג ההסמכה", href: "/#certification" },
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
            <div className="flex items-end gap-3">
              <span className="inline-block scale-[1.466] translate-x-[10px] origin-right">
                <Logo tone="bronze" size="lg" />
              </span>
              <span className="flex flex-col leading-[1.2] translate-x-[-5px] translate-y-[-17px]">
                <span className="font-display text-[14px] font-medium tracking-tight text-[color:var(--color-bronze)]">המרכז הרב-תחומי</span>
                <span className="font-display text-[14px] font-medium tracking-tight text-[color:var(--color-bronze)]">להכשרות Ai</span>
              </span>
            </div>
            <p className="text-[11px] text-[color:var(--color-paper-soft)]/45">
              מקבוצת אנליזה - המרכז הישראלי להכשרות טכנולוגיות
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-[color:var(--color-paper-soft)]/70">
              במרכז הרב-תחומי להכשרות Ai לומדים מהמומחים בתחומך, איך ליישם את חזית הטכנולוגיה לצרכים העסקיים הספציפיים שלך. ההכשרות מתבצעות על ידי המומחים המקצועיים ביותר בתחום העיסוק שלך.
            </p>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--color-bronze)]/35 bg-[color:var(--color-bronze)]/5 px-4 py-2 text-[11px] font-medium text-[color:var(--color-bronze)]">
              <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.6} />
              מכללה מפוקחת מטעם משרד העבודה - האגף להכשרה מקצועית
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
                09-3069322
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-3.5 w-3.5 text-[color:var(--color-bronze)]" strokeWidth={1.6} />
                info@ravthumi.ai
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-3.5 w-3.5 text-[color:var(--color-bronze)]" strokeWidth={1.6} />
                מנחם בגין 152, מגדל WeTLV, תל אביב, ישראל
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 items-center gap-4 border-t border-white/10 pt-8 text-[11px] text-[color:var(--color-paper-soft)]/45 sm:grid-cols-3">
          <span className="text-start">© 2026 המרכז הרב-תחומי להכשרות Ai. כל הזכויות שמורות.</span>
          <div className="flex items-center justify-center gap-5">
            <a href="/privacy" className="transition-colors hover:text-[color:var(--color-paper-soft)]">
              מדיניות פרטיות
            </a>
            <a href="/accessibility" className="transition-colors hover:text-[color:var(--color-paper-soft)]">
              הצהרת נגישות
            </a>
            <a href="/terms" className="transition-colors hover:text-[color:var(--color-paper-soft)]">
              תנאי שימוש
            </a>
          </div>
          <a
            href="/credits"
            className="text-end transition-colors hover:text-[color:var(--color-paper-soft)]"
          >
            קרדיטים לאתר
          </a>
        </div>
      </div>
    </footer>
  );
}
