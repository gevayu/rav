import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "lucide-react";

const cards = [
  {
    tag: "לעצמאיים",
    image: "/images/freelance/Man Working at Computer with Comic Book-Style Shirt.png",
    title: "עובד לבד. מתחרה מול גדולים.",
    subtitle:
      "Ai הוא היתרון שיאפשר לך להציע שירות ברמה של משרד עם 30 עובדים, בלי להפסיק להיות עצמאי.",
    benefits: [
      "קורסים שמעבירים עצמאיים ושותפים-בכירים מהתחום שלך",
      "מסלולי תשלומים גמישים ואפשרות מענק ממשרד העבודה",
      "כל השיעורים מוקלטים, למד בקצב שלך - בלי לבטל פגישות",
    ],
    cta: "לעצמאים",
    href: "/solo",
    ctaClass: "border-[#059669] bg-[#059669] hover:bg-[#064e3b] hover:border-[#064e3b] hover:shadow-[0_12px_32px_-12px_rgba(5,150,105,0.5)]",
    cardBg: "bg-[#1a2220]",
  },
  {
    tag: "לארגונים",
    image: "/images/org/Office Discussion Scene.png",
    title: "צריך שהצוות שלך יהיה שם, ולא יישאר מאחור.",
    subtitle:
      "הכשרה מובנית לצוותים שלמים, בשפה המקצועית של התחום, עם מדידה שתוכל להציג להנהלה.",
    benefits: [
      "חבילות קבוצתיות או הכשרה פרטית, מותאמת לסקטור של הארגון",
      "דוחות התקדמות, מדידת ROI, ותעודות סיום לעובדים",
      "יועץ הדרכה שמלווה את התהליך מול ההנהלה ומול הצוות",
    ],
    cta: "לארגונים",
    href: "/business",
    ctaClass: "border-[#2563eb] bg-[#2563eb] hover:bg-[#1e3a8a] hover:border-[#1e3a8a] hover:shadow-[0_12px_32px_-12px_rgba(37,99,235,0.5)]",
    cardBg: "bg-[#1a1d26]",
  },
];

export function AudienceRouter() {
  return (
    <section
      className="relative bg-[color:var(--color-ink)] py-24 sm:py-28"
      aria-labelledby="audience-title"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full" style={{ backgroundImage: "url('/images/topo-bg.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.5 }} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[color:var(--color-bronze)]/25 to-transparent"
      />

      <div className="mx-auto max-w-[1180px] px-6 sm:px-10">
        <Reveal className="mb-14 flex flex-col items-center gap-4 text-center">
          <h2
            id="audience-title"
            className="max-w-2xl font-display text-[clamp(2rem,4.2vw,3.25rem)] font-medium leading-[1.1] text-[color:var(--color-paper-soft)]"
          >
            עצמאים או חברה גדולה?<br />יש לנו פתרונות לכולם
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-[color:var(--color-paper-soft)]/65">
            פרילאנסר ומנהל ארגון מחפשים דברים שונים. בחר את המסלול שלך ונראה לך
            בדיוק מה יש לנו בשבילך.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.tag} delay={i * 0.1}>
              <div
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-bronze)]/15 ${card.cardBg}`}
              >
                <div className="relative aspect-[16/9] w-full bg-[color:var(--color-ink)]">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"

                  />
                </div>

                <div className="flex flex-1 flex-col gap-6 p-10 sm:p-12">
                  <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--color-bronze)]">
                    {card.tag}
                  </span>

                  <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight text-[color:var(--color-paper-soft)]">
                    {card.title}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-[color:var(--color-paper-soft)]/65">
                    {card.subtitle}
                  </p>

                  <ul className="flex flex-col gap-3">
                    {card.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[14px] leading-relaxed text-[color:var(--color-paper-soft)]/80"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-bronze)]/15">
                          <Check
                            className="h-3 w-3 text-[color:var(--color-bronze)]"
                            strokeWidth={2}
                          />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4">
                    <span className={`inline-flex h-12 items-center justify-center gap-3 rounded-full border px-6 text-[14px] font-medium text-white transition-all duration-300 ${card.ctaClass}`}>
                      {card.cta}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
