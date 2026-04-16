import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Quote = {
  tier: string;
  text: string;
  name: string;
  role: string;
  tagColor: string;
};

const quotes: Quote[] = [
  {
    tier: "AI01",
    text: "המכינה שינתה לי את הגישה. הפסקתי לפחד מ-AI והתחלתי לעבוד איתו. עכשיו אני יודע מה לשאול, ואני מבין מה אני מקבל.",
    name: "עמית כהן",
    role: "עו״ד, משרד בוטיק",
    tagColor: "border-[color:var(--color-signal)]/30 bg-[color:var(--color-signal)]/10 text-[color:var(--color-signal)]",
  },
  {
    tier: "AI05",
    text: "אחרי 10 מפגשים יש לי תהליכי עבודה חדשים שחוסכים לי 8 שעות בשבוע. הפרויקט הגמר שלי הפך לכלי שהמשרד כולו משתמש בו.",
    name: "מירב לוי",
    role: "רואת חשבון, פרילאנסרית",
    tagColor: "border-[color:var(--color-bronze)]/30 bg-[color:var(--color-bronze)]/10 text-[color:var(--color-bronze-ink)]",
  },
  {
    tier: "AI09",
    text: "AI09 נתן לי את הכלים להוביל הטמעה ארגונית. תוך 3 חודשים הכשרתי 40 עובדים והצגתי להנהלה דו״ח ROI שהפתיע את כולם.",
    name: "אריק ברנשטיין",
    role: "מנהל הדרכה, חברת ביטוח",
    tagColor: "border-[color:var(--color-ink)]/20 bg-[color:var(--color-ink)]/8 text-[color:var(--color-ink)]",
  },
];

export function CertQuotes() {
  return (
    <section className="relative bg-[color:var(--color-cream)] py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="בוגרים מספרים"
            title="ציטוט אחד מכל דרגה"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.1}>
              <article className="flex h-full flex-col gap-5 rounded-[24px] border border-[color:var(--color-ink)]/8 bg-white p-7">
                <span
                  className={`inline-flex w-fit items-center rounded-full border px-3 py-1 font-display text-[12px] font-medium tracking-[0.06em] ${q.tagColor}`}
                >
                  {q.tier}
                </span>

                <blockquote className="flex-1 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
                  ״{q.text}״
                </blockquote>

                <footer className="border-t border-[color:var(--color-ink)]/5 pt-4">
                  <cite className="not-italic">
                    <span className="block text-[14px] font-medium text-[color:var(--color-ink)]">
                      {q.name}
                    </span>
                    <span className="text-[12px] text-[color:var(--color-ink-muted)]">
                      {q.role}
                    </span>
                  </cite>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
