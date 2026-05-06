import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description:
    "הצהרת הנגישות של המרכז הרב-תחומי להכשרות Ai - הסדרי נגישות במשרדים ברחוב מנחם בגין 152 תל אביב, התאמות נגישות באתר, פרטי רכז הנגישות ודרכי פנייה. עדכון אחרון: 01.05.2026.",
  openGraph: {
    title: "הצהרת נגישות | המרכז הרב-תחומי להכשרות Ai",
    description:
      "הסדרי נגישות במבנה ובאתר, ודרכי פנייה לבקשות והצעות שיפור.",
    url: "/accessibility",
    locale: "he_IL",
    type: "article",
  },
  robots: { index: true, follow: true },
};

const buildingFeatures = [
  "קיימות חניות נכים בחניון המבנה כולל לרכב גבוה (בתשלום).",
  "קיים רצף גישה מהחניה דרך הכניסה ועד למשרדנו (כולל מעליות).",
  "קיימים שירותי נכים נגישים.",
  "קיימים שלטי זיהוי והכוונה.",
  "מותרת כניסה למשרדנו לחיית שירות המיועדת לסייע לאדם עם מוגבלות.",
];

const siteAdjustments = [
  "אמצעי הניווט באתר פשוטים וברורים.",
  "תכני האתר, רובם ככולם, כתובים באופן ברור, מסודר והיררכי. במידת הצורך קיימים הסברים לצד התוכן.",
  "האתר מותאם לצפייה בדפדפנים מודרניים (Chrome, FireFox, Opera, Mozilla).",
  "האתר מותאם גם לסוגי מכשירים שונים (מחשב נייח, מחשב נייד וטלפונים ניידים).",
  "תוכן האתר כתוב בשפה פשוטה, ברורה ובעלת היררכיה.",
  "כל הדפים באתר בעלי מבנה קבוע.",
  "מרביתן המוחלט של התמונות באתר עם הסבר טקסטואלי חלופי (alt).",
  "האתר מאפשר שינוי גודל הגופן.",
  "אין באתר שימוש בתצוגת טקסט נע או מהבהב.",
];

const reportFields = [
  "תיאור הבעיה",
  "מהי הפעולה שניסיתם לבצע",
  "קישור לדף בו גלשתם",
  "סוג הדפדפן וגרסתו",
  "מערכת הפעלה",
  "סוג הטכנולוגיה המסייעת (במידה והשתמשתם)",
];

export default function AccessibilityPage() {
  return (
    <>
      <Header forceDark />
      <main className="bg-[color:var(--color-paper-soft)]">
        <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-24">
          <div className="mx-auto max-w-[860px] px-6 sm:px-10">
            <Eyebrow tone="bronze">הצהרת נגישות</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,5.5vw,4rem)] font-medium leading-[1.05] tracking-tight text-[color:var(--color-ink)]">
              הצהרת נגישות
            </h1>

            <div className="mt-10 flex flex-col gap-6 text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
              <p>
                משרדנו נוקט את מירב המאמצים ומשקיע משאבים רבים על מנת לספק לכל
                לקוחותיו שירות שוויוני, מכובד, נגיש ומקצועי. בהתאם לחוק שוויון
                זכויות לאנשים עם מוגבלויות תשנ&quot;ח-1998 ולתקנות שהותקנו
                מכוחו, מושקעים מאמצים ומשאבים רבים בביצוע התאמות הנגישות
                הנדרשות שיביאו לכך שאדם בעל מוגבלות יוכל לקבל את השירותים
                הניתנים לכלל הלקוחות, באופן עצמאי ושוויוני.
              </p>
              <p>
                הנגשת האתר נועדה להפוך אותו לזמין, ידידותי ונוח יותר לשימוש
                עבור אנשים עם צרכים מיוחדים, הנובעים בין היתר ממוגבלויות
                מוטוריות שונות, לקויות קוגניטיביות, קוצר רואי, עיוורון או
                עיוורון צבעים, לקויות שמיעה וכן אנשים בני הגיל השלישי.
              </p>
            </div>

            <section className="mt-12 flex flex-col gap-5">
              <h2 className="font-display text-[22px] font-medium text-[color:var(--color-ink)]">
                הסדרי נגישות מבנים
              </h2>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                המרכז הרב-תחומי להכשרות Ai הינו ספק הנותן שירותי הדרכות
                והכשרות. להלן הסדרי הנגישות הקיימים במשרדנו, אשר ממוקמים ברחוב
                מנחם בגין 152 תל אביב.
              </p>
              <ul className="flex list-disc flex-col gap-2 ps-5 text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                {buildingFeatures.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                ניתן להתייעץ עמנו ולקבל אינפורמציה בכל דבר ובכל נושא. לפרטים
                נוספים על הסדרי הנגישות במקום - יש לפנות אלינו למייל{" "}
                <a
                  href="mailto:gal@ravthumi.ai"
                  className="text-[color:var(--color-bronze-ink)] hover:underline"
                >
                  gal@ravthumi.ai
                </a>
                .
              </p>
            </section>

            <section className="mt-12 flex flex-col gap-5">
              <h2 className="font-display text-[22px] font-medium text-[color:var(--color-ink)]">
                הנגשת האתר
              </h2>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                באתר מושקעים מאמצי הנגשה בכל האספקטים. ייתכן שיתגלו חלקים או
                יכולות שלא הונגשו כראוי או שטרם הונגשו. אנו מיישמים את המלצות
                מסמך WCAG 2.0 מאת ארגון W3C.
              </p>
              <h3 className="mt-2 font-display text-[18px] font-medium text-[color:var(--color-ink)]">
                תיקונים והתאמות שבוצעו באתר
              </h3>
              <ul className="flex list-disc flex-col gap-2 ps-5 text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                {siteAdjustments.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>

            <section className="mt-12 flex flex-col gap-5">
              <h2 className="font-display text-[22px] font-medium text-[color:var(--color-ink)]">
                דרכי פנייה לבקשות והצעות לשיפור בנושא נגישות
              </h2>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק מהמחויבות שלנו
                לאפשר לכלל האוכלוסייה, בהם גם אנשים עם מוגבלויות, לקבל את
                השירות הנגיש ביותר. אם נתקלת בבעיה או בתקלה כלשהי בנושא
                הנגישות, נשמח שתעדכן אותנו בכך ואנחנו נעשה כל מאמץ למצוא עבורך
                פתרון מתאים ולטפל בתקלה בהקדם ככל שניתן.
              </p>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                כדי שנוכל לטפל בבעיה בדרך הטובה ביותר, אנו ממליצים לצרף פרטים
                מלאים ככל שניתן:
              </p>
              <ul className="flex list-disc flex-col gap-2 ps-5 text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                {reportFields.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-muted)]">
                אנו נעשה ככל שביכולתנו על מנת להנגיש את האתר בצורה המיטבית
                ולענות לפניות בצורה המקצועית והמהירה ביותר.
              </p>
            </section>

            <div className="mt-12 rounded-2xl border border-[color:var(--color-ink)]/10 bg-white p-6">
              <p className="font-display text-[16px] font-medium text-[color:var(--color-ink)]">
                פרטי רכז הנגישות במשרדנו
              </p>
              <ul className="mt-3 flex flex-col gap-1 text-[14px] text-[color:var(--color-ink-muted)]">
                <li>שם: גל גנוט</li>
                <li>
                  טלפון:{" "}
                  <a
                    href="tel:+97293069322"
                    className="text-[color:var(--color-bronze-ink)] hover:underline"
                  >
                    09-3069322
                  </a>
                </li>
                <li>
                  דואר אלקטרוני:{" "}
                  <a
                    href="mailto:gal@ravthumi.ai"
                    className="text-[color:var(--color-bronze-ink)] hover:underline"
                  >
                    gal@ravthumi.ai
                  </a>
                </li>
              </ul>
            </div>

            <p className="mt-8 text-[13px] text-[color:var(--color-ink-muted)]">
              תאריך עדכון: 1.5.2026
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
