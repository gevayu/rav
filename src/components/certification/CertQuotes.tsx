import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIER_COLORS } from "@/components/courses/labels";

type Quote = {
  tier: "Ai01" | "Ai05" | "Ai10";
  text: string;
  name: string;
  role: string;
  avatar: string;
};

const quotes: Quote[] = [
  {
    tier: "Ai01",
    text: "המכינה שינתה לי את הגישה. הפסקתי לפחד מ-Ai והתחלתי לעבוד איתו. עכשיו אני יודע מה לשאול, ואני מבין מה אני מקבל.",
    name: "עמית כהן",
    role: "עו״ד, משרד בוטיק",
    avatar: "/images/lect/Professional Portrait - 2.png",
  },
  {
    tier: "Ai05",
    text: "אחרי 10 מפגשים יש לי תהליכי עבודה חדשים שחוסכים לי 8 שעות בשבוע. הפרויקט הגמר שלי הפך לכלי שהמשרד כולו משתמש בו.",
    name: "מירב לוי",
    role: "רואת חשבון, פרילאנסרית",
    avatar: "/images/lect/Smiling Woman with Glasses.png",
  },
  {
    tier: "Ai10",
    text: "Ai10 נתן לי את הכלים להוביל הטמעה ארגונית. תוך 3 חודשים הכשרתי 40 עובדים והצגתי להנהלה דו״ח ROI שהפתיע את כולם.",
    name: "אריק ברנשטיין",
    role: "מנהל הדרכה, חברת ביטוח",
    avatar: "/images/lect/Man Presenting on Stage.png",
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
            title="המלצות מהבוגרים שלנו"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.1}>
              <article className="flex h-full flex-col gap-5 rounded-[24px] border border-[color:var(--color-ink)]/8 bg-white p-7">
                <span
                  className={`inline-flex w-fit items-center rounded-full border px-2 py-0.5 font-display text-[12px] font-medium tracking-[0.06em] ${TIER_COLORS[q.tier].bg} ${TIER_COLORS[q.tier].border} ${TIER_COLORS[q.tier].text}`}
                >
                  {q.tier}
                </span>

                <blockquote className="flex-1 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
                  ״{q.text}״
                </blockquote>

                <footer className="flex items-center gap-3 border-t border-[color:var(--color-ink)]/5 pt-4">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[color:var(--color-bronze)]/30">
                    <Image
                      src={q.avatar}
                      alt={q.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
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
