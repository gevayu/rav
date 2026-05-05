import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "אודות | המרכז הרב-תחומי להכשרות Ai",
  description:
    "המרכז הרב-תחומי להכשרות Ai - התמחות סקטוריאלית עמוקה בהובלת אנשי מקצוע מובילים בתחומם.",
};

const sectorHeads = [
  {
    sector: "ראש תחום רפואה",
    name: 'ד"ר אסתר טחובר',
    bio: "ראש מחלקת אונקולוגיה בבית חולים אסותא ומרצה מובילה בתחום.",
    portraitUrl: "/images/lect/esti-tachover.jpeg",
  },
  {
    sector: "ראש תחום משפט",
    name: 'עו"ד שרה צרפתי כהן',
    bio: "מומחית בדיני בינה מלאכותית ומשפט, יזמת ומשפיעה בתחום.",
    portraitUrl: "/images/lect/sarah-cohen.jpeg",
  },
  {
    sector: "ראש תחום פיננסי",
    name: 'רו"ח טל ולנשטיין',
    bio: "בוגרת Big4, מרצה מובילה בתחום וממייסדי קהילת AI-Finance.",
    portraitUrl: "/images/lect/tal-valnstein.png",
  },
  {
    sector: 'ראש תחום נדל"ן',
    name: "הגברת יוליה חביה",
    bio: "מייסדת חברת השקעות נדל״ן Happy Homes US ומרצה מובילה בתחום.",
    portraitUrl: "/images/lect/yulia-chabia.jpeg",
  },
  {
    sector: "ראש תחום הנדסה אזרחית",
    name: "מר מתן מכלוף",
    bio: "מהנדס מנוסה אשר הוביל פרויקטי בנייה גדולים.",
    portraitUrl: "/images/lect/matan-makhluf.jpeg",
  },
  {
    sector: "ראש תחום פיתוח ותשתיות תוכנה",
    name: "מר פאדי עראקי",
    bio: "מרצה בכיר בתחום ומוביל טכנולוגי בכיר בחברת אנליזה.",
    portraitUrl: "/images/lect/fadi-araki.jpg",
  },
];

const partners = [
  { name: "משרד העבודה", file: "/images/ministries/labor.png" },
  { name: "משרד הביטחון", file: "/images/ministries/defense.svg" },
  { name: "משרד החינוך", file: "/images/ministries/education.png" },
];

export default function AboutPage() {
  return (
    <>
      <Header forceDark />
      <main className="bg-[color:var(--color-paper-soft)]">
        {/* Hero */}
        <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-24">
          <div className="mx-auto max-w-[860px] px-6 sm:px-10">
            <Eyebrow tone="bronze">אודות</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-tight text-[color:var(--color-ink)]">
              המרכז הרב-תחומי להכשרות Ai
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-[color:var(--color-ink-muted)]">
              המרכז הרב־תחומי להכשרות בינה מלאכותית (Ai) הוקם מתוך הבנה כי שוק
              ההכשרות עובר בשנים האחרונות שינוי מהותי: מעבר מהיכרות כללית עם
              כלים וטכנולוגיות, להתמקצעות עמוקה, יישומית ובעיקר סקטוריאלית.
              בעוד שנת 2025 התאפיינה בריבוי קורסים גנריים ותכנים רחבים לקהל
              הרחב, שנת 2026 מסמנת מעבר ברור לעידן שבו נדרשת מומחיות אמיתית –
              כזו המחוברת באופן ישיר לעולמות התוכן והעשייה של כל תחום מקצועי.
            </p>

            <FounderVideo
              videoId="Ssv1xPEnpmY"
              title="גל גנוט, ממייסדי המרכז, מסביר על חשיבות הכשרות ה-Ai המקצועיות"
              caption="גל גנוט, ממייסדי המרכז, מסביר על חשיבות הכשרות ה-Ai המקצועיות"
            />
          </div>
        </section>

        {/* Founders + Analiza */}
        <section className="relative bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-[860px] px-6 sm:px-10">
            <Eyebrow tone="bronze">המייסדים</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-[1.1] text-[color:var(--color-ink)]">
              חלק מקבוצת אנליזה
              <br />
              המרכז הישראלי להכשרות טכנולוגיות
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-[color:var(--color-ink-muted)]">
              מייסדי המרכז הם פיני מכלוף, מומחה למערכות בינה מלאכותית ובעל
              ניסיון עשיר בשילוב הדרכה, מערכות מידע ובינה מלאכותית, וגל גנוט,
              בוגר תעשיית הסייבר, בעל ניסיון עשיר בהדרכה טכנולוגית בתחומים
              מגוונים. אנליזה היא גוף מפוקח מטעם האגף להכשרה מקצועית במשרד
              העבודה, ספק מורשה של משרד הביטחון ומשרד החינוך.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FounderCard
                name="פיני מכלוף"
                role="ממייסדי המרכז"
                bio="מומחה למערכות בינה מלאכותית, משלב ניסיון עשיר בהדרכה, מערכות מידע ובינה מלאכותית."
                portraitUrl="/images/lect/פיני מכלוף (1) (1).jpg"
              />
              <FounderCard
                name="גל גנוט"
                role="ממייסדי המרכז"
                bio="בוגר תעשיית הסייבר, בעל ניסיון עשיר בהדרכה טכנולוגית בתחומים מגוונים."
                portraitUrl="/images/lect/gal-ganot-closeup.jpg"
              />
            </div>

            {/* Partner credentials */}
            <div className="mt-12 rounded-2xl border border-[color:var(--color-ink)]/10 bg-[color:var(--color-paper-soft)] p-6">
              <p className="text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
                גוף מפוקח וספק מורשה
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {partners.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-center justify-center rounded-xl border border-[color:var(--color-ink)]/10 bg-white px-4 py-5"
                  >
                    <div className="relative h-14 w-32">
                      <Image
                        src={p.file}
                        alt={p.name}
                        fill
                        sizes="128px"
                        className="object-contain"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Sector model + heads */}
        <section className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
            <div className="max-w-[760px]">
              <Eyebrow tone="bronze">המודל הסקטוריאלי</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-[1.1] text-[color:var(--color-ink)]">
                התמחות אמיתית, לפי ענפים מקצועיים
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-[color:var(--color-ink-muted)]">
                המרכז נמצא בחלק העליון של סקאלת המורכבות והאיכות, ומציע מודל
                הכשרה ייחודי המבוסס על התמחות לפי ענפים מקצועיים — בין היתר
                בתחום הרפואה, המשפט, החשבונאות, הנדל&quot;ן, הנדסה וכדומה.
                ההכשרות נבנות ומועברות על ידי אנשי מקצוע מובילים בתחומם,
                המשלבים ניסיון מעשי עם הבנה טכנולוגית מתקדמת. גישה זו מאפשרת
                יצירת חיבור ישיר בין עולם הבינה המלאכותית לבין תהליכי עבודה
                קיימים, תוך התאמה מדויקת לצרכים הספציפיים של כל סקטור — החל
                ממשפטים וכספים, דרך רפואה ונדל&quot;ן, ועד תחומי תוכנה, נתונים
                ותשתיות.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sectorHeads.map((h) => (
                <SectorHeadCard key={h.name} {...h} />
              ))}
            </div>
          </div>
        </section>

        {/* Pedagogical model */}
        <section className="relative bg-[color:var(--color-ink)] py-20 text-[color:var(--color-paper-soft)] sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[color:var(--color-bronze)]/8 blur-[140px]"
          />
          <div className="relative mx-auto max-w-[1100px] px-6 sm:px-10">
            <div className="max-w-[760px]">
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
                המודל הפדגוגי
              </span>
              <h2 className="mt-5 font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-[1.1]">
                שלושה צירים שמייצרים השפעה מדידה
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-[color:var(--color-paper-soft)]/75">
                המודל הפדגוגי של המרכז מבוסס על שילוב בין שלושה צירים: תהליכי
                AI מתקדמים, תהליכים עסקיים סקטוריאליים ומתודולוגיות עבודה
                יישומיות. שילוב זה מבטיח כי הלמידה אינה תיאורטית בלבד, אלא
                ממוקדת ביישום ישיר בסביבת העבודה. המשתתפים מתמחים בשיטת עבודה
                מקצועית עם AI: הגדרת תהליך ומשימות, הכנת חומרים, בקרה ומציאת
                פתרונות AI רלוונטיים. בין היתר ההכשרה תעסוק בכלים לבניית
                אוטומציות, פיתוח סוכני AI, שיפור תהליכים קיימים והטמעת פתרונות
                חדשניים — תוך יצירת השפעה מדידה והחזר השקעה ברור כבר במהלך
                ההכשרה.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              <AxisCard
                index="01"
                title="תהליכי AI מתקדמים"
                body="כלים, מודלים, סוכנים ואוטומציות בחזית הטכנולוגיה — עם הבנה עמוקה של איך לחבר אותם לעבודה האמיתית."
              />
              <AxisCard
                index="02"
                title="תהליכים עסקיים סקטוריאליים"
                body="תהליכי העבודה האמיתיים של כל ענף — משפט, רפואה, פיננסים, נדל״ן, הנדסה ותוכנה — כנקודת מוצא ללמידה."
              />
              <AxisCard
                index="03"
                title="מתודולוגיות עבודה יישומיות"
                body="הגדרת תהליך ומשימות, הכנת חומרים, בקרה ומדידת תוצאות — שיטת עבודה מקצועית עם AI."
              />
            </div>

            <div className="mt-14">
              <FounderVideo
                videoId="6jLpfYrgdno"
                title="נדב גולדשמיט מנור, מנהל ההדרכה של המרכז, מסביר למה צריך הכשרת Ai מותאמת למקצוע"
                caption="נדב גולדשמיט מנור, מנהל ההדרכה של המרכז, מסביר למה צריך הכשרת Ai מותאמת למקצוע"
                dark
              />
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-[860px] px-6 sm:px-10">
            <Eyebrow tone="bronze">היתרון המרכזי</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-[1.1] text-[color:var(--color-ink)]">
              מהיכרות שטחית ל<span className="text-[color:var(--color-bronze-ink)]">יישום מקצועי מעמיק</span>
            </h2>
            <p className="mt-8 text-[16px] leading-relaxed text-[color:var(--color-ink-muted)]">
              יתרונו המרכזי של המרכז טמון ביכולתו לגשר על הפער הקיים בין שימוש
              שטחי בכלי AI לבין יישום מקצועי ומעמיק. בניגוד לגישות רווחות
              המתמקדות בהדגמות כלליות או בפתרונות אחידים, המרכז מתמקד בלמידה
              מבוססת הקשר מקצועי, הבנה של תהליכים ארגוניים והטמעה הדרגתית של
              פתרונות מותאמים. גישה זו מאפשרת לארגונים ולאנשי מקצוע לשפר
              יעילות, להגדיל תפוקות ולבסס יתרון תחרותי מובהק בשוק משתנה.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-[color:var(--color-ink-muted)]">
              הפעילות נשענת על תשתית מקצועית וניהולית רחבה, הכוללת ניסיון רב
              בהכשרות טכנולוגיות, מערך פדגוגי מתקדם, סגל הדרכה מומחה והיקף
              פעילות משמעותי. המרכז פועל בסטנדרטים גבוהים של איכות, אמינות
              ורלוונטיות מקצועית, ומיועד לאנשי מקצוע, מנהלים ומקבלי החלטות
              המבקשים להטמיע בינה מלאכותית באופן מושכל, מדויק ומבוסס תוצאות.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FounderVideo({
  videoId,
  title,
  caption,
  placeholder = false,
  dark = false,
}: {
  videoId?: string;
  title: string;
  caption: string;
  placeholder?: boolean;
  dark?: boolean;
}) {
  const captionTone = dark
    ? "text-[color:var(--color-paper-soft)]/65"
    : "text-[color:var(--color-ink-muted)]";

  return (
    <figure className="mt-12">
      <div
        className={
          "relative aspect-video w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_-24px_rgba(0,0,0,0.25)] " +
          (dark
            ? "ring-1 ring-[color:var(--color-bronze)]/25"
            : "ring-1 ring-[color:var(--color-ink)]/10")
        }
      >
        {placeholder ? (
          <div
            className={
              "flex h-full w-full flex-col items-center justify-center gap-2 " +
              (dark
                ? "bg-[color:var(--color-ink)]/40 text-[color:var(--color-paper-soft)]/70"
                : "bg-[color:var(--color-ink)]/[0.04] text-[color:var(--color-ink-muted)]")
            }
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
              סרטון בקרוב
            </span>
            <span className="text-[14px]">{title}</span>
          </div>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        )}
      </div>
      <figcaption className={`mt-3 text-center text-[13px] ${captionTone}`}>
        {caption}
      </figcaption>
    </figure>
  );
}

function FounderCard({
  name,
  role,
  bio,
  portraitUrl,
}: {
  name: string;
  role: string;
  bio: string;
  portraitUrl: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-[color:var(--color-ink)]/10 bg-[color:var(--color-paper-soft)] p-5">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl ring-2 ring-[color:var(--color-bronze)]/40">
        <Image src={portraitUrl} alt={name} fill sizes="96px" className="object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
          {role}
        </span>
        <p className="font-display text-[18px] font-medium text-[color:var(--color-ink)]">
          {name}
        </p>
        <p className="text-[13px] leading-relaxed text-[color:var(--color-ink-muted)]">
          {bio}
        </p>
      </div>
    </div>
  );
}

function SectorHeadCard({
  sector,
  name,
  bio,
  portraitUrl,
}: {
  sector: string;
  name: string;
  bio: string;
  portraitUrl: string | null;
}) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-[color:var(--color-ink)]/10 bg-white p-5">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-[color:var(--color-bronze)]/40">
          {portraitUrl ? (
            <Image src={portraitUrl} alt={name} fill sizes="64px" className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[color:var(--color-bronze)]/10 font-display text-[18px] text-[color:var(--color-bronze)]">
              {name.split(" ").slice(-1)[0]?.[0] ?? ""}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-bronze)]">
            {sector}
          </span>
          <p className="font-display text-[16px] font-medium text-[color:var(--color-ink)]">
            {name}
          </p>
        </div>
      </div>
      <p className="text-[13px] leading-relaxed text-[color:var(--color-ink-muted)]">
        {bio}
      </p>
    </article>
  );
}

function AxisCard({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[color:var(--color-bronze)]/20 bg-white/[0.03] p-6">
      <span className="font-display text-[14px] font-medium text-[color:var(--color-bronze)]">
        {index}
      </span>
      <h3 className="font-display text-[18px] font-medium text-[color:var(--color-paper-soft)]">
        {title}
      </h3>
      <p className="text-[13px] leading-relaxed text-[color:var(--color-paper-soft)]/70">
        {body}
      </p>
    </div>
  );
}
