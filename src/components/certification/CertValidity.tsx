import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const rows = [
  {
    tier: "AI01",
    validity: "שנתיים",
    renewal: "מבחן מקוון (30 דקות)",
    cost: "ללא עלות",
    tagColor: "bg-[color:var(--color-signal)]/10 text-[color:var(--color-signal)] border-[color:var(--color-signal)]/30",
  },
  {
    tier: "AI05",
    validity: "שנתיים",
    renewal: "מבחן מקוון או קורס עדכון (4 שעות)",
    cost: "מסובסד לבוגרים",
    tagColor: "bg-[color:var(--color-bronze)]/10 text-[color:var(--color-bronze-ink)] border-[color:var(--color-bronze)]/30",
  },
  {
    tier: "AI09",
    validity: "שנתיים",
    renewal: "קורס עדכון (8 שעות) + פרויקט",
    cost: "מסובסד לבוגרים",
    tagColor: "bg-[color:var(--color-ink)]/8 text-[color:var(--color-ink)] border-[color:var(--color-ink)]/20",
  },
];

export function CertValidity() {
  return (
    <section className="relative bg-[color:var(--color-paper-soft)] py-24 sm:py-28">
      <div className="mx-auto max-w-[960px] px-6 sm:px-10">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="תוקף וחידוש"
            title="הדרגה שלך תקפה לשנתיים. החידוש פשוט."
            lede="AI משתנה מהר. תוכנית החידוש מבטיחה שהתעודה שלך תמיד מעודכנת - בלי לחזור על כל הקורס."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 overflow-hidden rounded-[20px] border border-[color:var(--color-ink)]/8 bg-white">
            <div className="hidden grid-cols-[100px_1fr_1fr_1fr] items-center border-b border-[color:var(--color-ink)]/8 bg-[color:var(--color-paper-soft)] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)] sm:grid">
              <span>דרגה</span>
              <span>תוקף</span>
              <span>אופן חידוש</span>
              <span>עלות חידוש</span>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.tier}
                className={
                  "flex flex-col gap-3 px-6 py-5 sm:grid sm:grid-cols-[100px_1fr_1fr_1fr] sm:items-center sm:gap-0" +
                  (i < rows.length - 1 ? " border-b border-[color:var(--color-ink)]/5" : "")
                }
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full border px-3 py-1 font-display text-[13px] font-medium tracking-[0.06em] ${row.tagColor}`}
                >
                  {row.tier}
                </span>
                <span className="text-[14px] text-[color:var(--color-ink)]">
                  <span className="text-[color:var(--color-ink-muted)] sm:hidden">תוקף: </span>
                  {row.validity}
                </span>
                <span className="text-[14px] text-[color:var(--color-ink-muted)]">
                  <span className="font-medium text-[color:var(--color-ink-muted)] sm:hidden">חידוש: </span>
                  {row.renewal}
                </span>
                <span className="text-[14px] text-[color:var(--color-ink-muted)]">
                  <span className="font-medium text-[color:var(--color-ink-muted)] sm:hidden">עלות: </span>
                  {row.cost}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
