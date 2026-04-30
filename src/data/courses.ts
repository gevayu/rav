import { sectors } from "./sectors";

export type CourseLevel = "foundation" | "advanced" | "mastery";
export type CourseFormat = "live" | "hybrid" | "self-paced";

export type CourseModule = {
  id: string;
  title: string;
  durationHours: number;
  sessions: number;
  topics: string[];
};

export type CourseFaqItem = {
  q: string;
  a: string;
};

export type CourseOutcome = {
  text: string;
  saving?: string;
};

export type PreCourseBlock = {
  title: string;
  topics: string[];
};

export type CertificationTier = "Ai01" | "Ai03" | "Ai05" | "Ai10";

export type CourseAxes = {
  ai: string[];
  sector: string[];
  general: string[];
};

export type Course = {
  id: string;
  slug: string;
  sectorSlug: string;
  title: string;
  subtitle: string;
  level: CourseLevel;
  format: CourseFormat;
  durationWeeks: number;
  totalHours: number;
  liveSessions: number;
  priceMin: number;
  priceMax: number;
  nextCohort: string;
  instructorName: string;
  instructorPortraitUrl: string;
  highlights: string[];
  isFlagship?: boolean;
  // Extended fields for course detail page
  overview?: string;
  whatYouLearn?: CourseOutcome[];
  sampleVideoModuleIds?: string[];
  targetAudience?: string[];
  prerequisites?: string[];
  tools?: string[];
  modules?: CourseModule[];
  instructorBio?: string;
  instructorTitle?: string;
  coInstructorName?: string;
  coInstructorTitle?: string;
  coInstructorPortraitUrl?: string;
  coInstructorBio?: string;
  preCourse?: PreCourseBlock;
  axes?: CourseAxes;
  certification?: {
    entry: CertificationTier | null;
    exit: CertificationTier;
  };
  faq?: CourseFaqItem[];
};

const portraitFor = (slug: string) =>
  sectors.find((s) => s.slug === slug)?.portraitUrl ?? "";
const nameFor = (slug: string) =>
  sectors.find((s) => s.slug === slug)?.guideName ?? "";

export const courses: Course[] = [
  /* ─── 1. Medicine ─── */
  {
    id: "c-medicine-1",
    slug: "ai-medicine-teams",
    sectorSlug: "medicine",
    title: "Ai לרופאים, אחיות וצוותים רפואיים",
    subtitle: "שימוש מעשי בכלי בינה מלאכותית לתיעוד קליני, מחקר רפואי, קבלת החלטות והעברת מידע לצוות ולמטופלים.",
    level: "advanced",
    format: "hybrid",
    durationWeeks: 10,
    totalHours: 40,
    liveSessions: 10,
    priceMin: 6800,
    priceMax: 7900,
    nextCohort: "מחזור הבא: מאי 2026",
    instructorName: "ד״ר אסתר טחובר",
    instructorTitle: "מנהלת תחום גידולי מערכת העיכול, אסותא רמת החייל",
    instructorPortraitUrl: "/images/lect/Smiling Woman with Glasses.png",
    instructorBio: "מנהלת תחום גידולי מערכת העיכול באסותא רמת החייל ומרצה מובילה בשימוש ב-AI לצוותי רפואה.",
    highlights: [
      "10 מפגשי ערב 18:00–21:00 (פרונטלי ומקוון)",
      "תיעוד קליני, מחקר רפואי וקבלת החלטות עם Ai",
      "כלים מאושרי רגולציה לסביבה רפואית",
    ],
    isFlagship: true,
    certification: { entry: "Ai01", exit: "Ai03" },
  },

  /* ─── 2. Law ─── */
  {
    id: "c-law-1",
    slug: "ai-law-applied",
    sectorSlug: "law",
    title: "Ai לשופטים, עורכי דין ומשפטנים",
    subtitle:
      "מחקר, חוזים, ליטיגציה וניהול ידע — מהבנה מעשית של כלי Ai ועד הטמעה מלאה בעבודה המשפטית.",
    level: "advanced",
    format: "hybrid",
    durationWeeks: 10,
    totalHours: 40,
    liveSessions: 10,
    priceMin: 6800,
    priceMax: 7900,
    nextCohort: "מחזור הבא: מאי 2026",
    instructorName: "עו״ד שרה צרפתי כהן",
    instructorTitle: "מומחית בדיני בינה מלאכותית ומשפט, יזמת ומשפיעה בתחום",
    instructorPortraitUrl: "/images/lect/Professional Portrait - 2.png",
    highlights: [
      "10 מפגשי ערב 18:00–21:00 (פרונטלי ומקוון)",
      "מכינה (Pre-Course) כלולה - למי שאין רקע ב-Ai",
      "3 צירי עבודה: מחקר, חוזים, ליטיגציה וניהול ידע",
      "פרויקט מסכם אישי + הצגה בפני הכיתה",
    ],
    isFlagship: true,
    certification: { entry: "Ai01", exit: "Ai03" },
    overview:
      "המקצוע המשפטי עובר שינוי עומק - כלי Ai מאפשרים היום לעורכת דין לצמצם שעות מחקר, לנסח חוזים בגרסה ראשונה תוך דקות, להכין תיקי ליטיגציה עם ניתוח תרחישים רב-שכבתי ולנהל ידע ארגוני באופן חכם. הקורס הזה הוא לא מבוא כללי ל-Ai - אלא מסלול יישומי בן 10 מפגשים שבסופו תצאי עם מתודולוגיית עבודה מבוססת, תבניות מוכנות לשימוש ואסטרטגיית הטמעה למשרד שלך. הקורס פתוח לעורכי דין מכל רמות הניסיון. מי שלא עבד עם כלי Ai בעבר מקבל מכינה (Pre-Course) שמיישרת את הבסיס לפני המפגש הראשון.",
    sampleVideoModuleIds: ["mod-4", "mod-7"],
    whatYouLearn: [
      { text: "הנדסת פרומפטים משפטיים מתקדמים לעבודה עם מסמכים מורכבים", saving: "~3 שעות/שבוע" },
      { text: "בניית תהליך מחקר משפטי חכם - פסיקה, חקיקה והשוואת מקורות", saving: "~5 שעות/תיק" },
      { text: "ניסוח חוזים, זיהוי סיכונים והתאמה ללקוח עם כלי Ai", saving: "~4 שעות/חוזה" },
      { text: "הכנת תיקי ליטיגציה: טיעונים, סימולציות חקירה וניתוח תרחישים", saving: "~6 שעות/תיק" },
      { text: "ארגון מסמכים ובניית מאגרי ידע חכמים למשרד", saving: "~₪8,000/שנה" },
      { text: "אוטומציה של תהליכים משפטיים וסוכני Ai ייעודיים", saving: "~10 שעות/שבוע" },
      { text: "אסטרטגיית Ai למשרד - ROI, שינוי תהליכים והתנעת פרויקט אישי", saving: "~₪120,000/שנה" },
    ],
    targetAudience: [
      "עורכי דין במשרדים פרטיים - משותפים ועד מתמחים",
      "פרקליטים במחלקות משפטיות פנימיות בחברות",
      "עו״ד שרוצים להוביל את הטמעת ה-Ai במשרד שלהם",
      "יועצים משפטיים וסגני יועמ״ש בארגונים ציבוריים",
    ],
    prerequisites: [
      "רישיון עריכת דין פעיל או תעודת סיום של הפקולטה למשפטים",
      "אין צורך בניסיון קודם ב-Ai - המכינה מיישרת את הבסיס",
    ],
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "NotebookLM",
      "Perplexity",
      "Harvey",
    ],
    preCourse: {
      title: "מכינה (Pre-Course)",
      topics: [
        "היכרות בסיסית עם כלי Ai המובילים בשוק",
        "עקרונות עבודה בסיסיים ומושגי יסוד",
        "הבדלים מעשיים בין הכלים - מתי משתמשים במה",
        "תרגיל מקדים - פרומפט ראשון בהקשר משפטי",
      ],
    },
    axes: {
      ai: [
        "הנדסת פרומפטים מתקדמת",
        "סוכני Ai ומתודולוגיות עבודה",
        "אוטומציה וזרימות עבודה",
        "זיהוי ומניעת הזיות מודל",
      ],
      sector: [
        "מחקר משפטי - פסיקה, חקיקה והשוואת מקורות",
        "חוזים והסכמים - ניסוח, סקירה וזיהוי סיכונים",
        "ליטיגציה - טיעונים, סימולציות וניתוח תרחישים",
        "ניהול ידע משפטי וארגון מסמכים",
      ],
      general: [
        "אסטרטגיית Ai למשרד - תכנון והטמעה",
        "ROI ושינוי תהליכי עבודה",
        "עבודה בצוות עם כלי Ai",
        "התנעת פרויקט פנים-ארגוני",
      ],
    },
    modules: [
      {
        id: "mod-1",
        title: "פתיחה וסקירת התחום",
        durationHours: 4,
        sessions: 1,
        topics: [
          "היכרות עם המשתתפים והמרצה",
          "מגמות Ai בשוק המשפטי הישראלי והעולמי",
          "הפער בין שימוש בסיסי ליישום מקצועי",
          "דוגמאות ממשרדים שהטמיעו Ai בהצלחה",
        ],
      },
      {
        id: "mod-2",
        title: "הנדסת פרומפטים מתקדמת",
        durationHours: 4,
        sessions: 1,
        topics: [
          "עקרונות פרומפטים משפטיים",
          "עבודה עם מסמכים מורכבים",
          "תבניות פרומפט לעבודה שוטפת",
          "סוכני Ai במשפט",
        ],
      },
      {
        id: "mod-3",
        title: "מחקר משפטי מתקדם",
        durationHours: 4,
        sessions: 1,
        topics: [
          "שימוש ב-Ai לאיתור פסיקה וחקיקה",
          "השוואת מקורות וניתוח הפסיקה",
          "תהליך מחקר חכם מא׳ ועד ת׳",
          "הכנת דוח מחקר מלא",
        ],
      },
      {
        id: "mod-4",
        title: "חוזים והסכמים",
        durationHours: 4,
        sessions: 1,
        topics: [
          "יצירת חוזים עם Ai",
          "זיהוי סיכונים בחוזה קיים",
          "התאמת חוזה ללקוח ולעסקה",
          "ניהול גרסאות ושבלונות",
        ],
      },
      {
        id: "mod-5",
        title: "ליטיגציה והכנה להליך",
        durationHours: 4,
        sessions: 1,
        topics: [
          "בניית טיעונים משפטיים",
          "סימולציות חקירה",
          "ניתוח תרחישים משפטיים",
          "תרגול בניית קו הגנה/תביעה",
        ],
      },
      {
        id: "mod-6",
        title: "ניהול ידע משפטי",
        durationHours: 4,
        sessions: 1,
        topics: [
          "ארגון מסמכים במשרד",
          "בניית מאגרי ידע חכמים",
          "שליטה במידע ארגוני",
          "מערכות ידע אישיות לעו״ד",
        ],
      },
      {
        id: "mod-7",
        title: "אוטומציה של תהליכים משפטיים",
        durationHours: 4,
        sessions: 1,
        topics: [
          "תהליכים אוטומטיים במשרד",
          "שילוב עם כלים קיימים",
          "סוכני Ai ייעודיים",
          "בניית אוטומציות בסיסיות",
        ],
      },
      {
        id: "mod-8",
        title: "מתודולוגיות עבודה עם Ai",
        durationHours: 4,
        sessions: 1,
        topics: [
          "מהראש לפרקטיקה - העברת רעיון ליישום",
          "המרדף אחר הידע",
          "המהפכה הטקסטואלית במשפט",
          "שפת Ai למקצוע המשפטי",
        ],
      },
      {
        id: "mod-9",
        title: "יישום והטמעה בארגון משפטי",
        durationHours: 4,
        sessions: 1,
        topics: [
          "אסטרטגיית Ai למשרד",
          "שינוי תהליכי עבודה",
          "מדידת ROI",
          "התנעת פרויקט אישי",
        ],
      },
      {
        id: "mod-10",
        title: "פרויקטים וסיכום",
        durationHours: 4,
        sessions: 1,
        topics: [
          "הצגת פרויקטים אישיים",
          "משוב מקצועי מהמרצה ומהכיתה",
          "סיכום הקורס והמסלול קדימה",
          "המשך הדרך - קהילת הבוגרים",
        ],
      },
    ],
    instructorBio:
      "עו״ד שרה צרפתי כהן מלווה משרדי עורכי דין ויחידות משפטיות בהטמעת כלי Ai. בפרקטיקה היומיומית שלה היא בונה תהליכי עבודה שעורכי דין באמת משתמשים בהם, ומפתחת שיטות לשילוב הכלים בצורה בטוחה.\n\nשרה מרצה בפורומים מקצועיים ומפרסמת תוכן על Ai במשפט. היא מביאה לקורס ניסיון מעשי מהשטח, מעבר לתיאוריה.",
    faq: [
      {
        q: "מה אם אין לי רקע ב-Ai?",
        a: "המכינה (Pre-Course) כלולה בקורס ונועדה בדיוק בשביל זה. בין ההרשמה למפגש הראשון תקבלו גישה לחומר יסודי - הכרות עם הכלים, מושגי בסיס ותרגיל מעשי - כך שתגיעו מוכנים. אין צורך בניסיון מוקדם.",
      },
      {
        q: "כמה זמן לימוד נדרש בשבוע?",
        a: "מפגש לייב שבועי של 4 שעות אקדמיות, בתוספת 2-3 שעות תרגול ועבודה על הפרויקט האישי. סה״כ כ-6-7 שעות בשבוע לאורך 10 שבועות.",
      },
      {
        q: "האם הקורס מוכר לנקודות השתלמות בלשכה?",
        a: "כן. הקורס מוכר ב-40 שעות אקדמיות לטובת חובת ההשתלמות השנתית של לשכת עורכי הדין בישראל.",
      },
      {
        q: "מה קורה אם פספסתי מפגש לייב?",
        a: "כל המפגשים מוקלטים ונגישים בפלטפורמה תוך 24 שעות. בנוסף, ניתן לשלוח שאלות לאחר הצפייה ולקבל מענה בצ׳אנל Slack הייעודי של הקורס.",
      },
      {
        q: "האם יש ליווי לאחר סיום הקורס?",
        a: "בוגרי הקורס מקבלים גישה לקהילת הבוגרים, עדכוני תוכן כשמשתחררים כלים חדשים, וגישה מוקדמת לקורסי ההמשך ברמת Ai10.",
      },
    ],
  },
  /* ─── 3. Accounting / Finance ─── */
  {
    id: "c-accounting-1",
    slug: "ai-accounting-finance",
    sectorSlug: "accounting",
    title: "Ai לרואי חשבון ותפקידנים פיננסיים",
    subtitle: "חשבונאות ניהולית, ניתוח פיננסי ואוטומציה של תהליכים — יישום כלי Ai בעבודה היומיומית של אנשי הפיננסים.",
    level: "advanced",
    format: "hybrid",
    durationWeeks: 10,
    totalHours: 40,
    liveSessions: 10,
    priceMin: 6800,
    priceMax: 7900,
    nextCohort: "מחזור הבא: מאי 2026",
    instructorName: "רו״ח טל ולנשטיין",
    instructorTitle: "בוגרת Big 4, ממייסדי קהילת Ai-Finance",
    instructorPortraitUrl: "/images/lect/Professional Portrait.png",
    instructorBio: "בוגרת Big 4, מרצה מובילה בתחום וממייסדי קהילת Ai-Finance.",
    coInstructorName: "רועי ולנשטיין",
    coInstructorTitle: "מייסד מועדון ה-Ai לסטודנטים, אוניברסיטת רייכמן",
    coInstructorPortraitUrl: "/images/lect/Man Speaking in Professional Setting.png",
    coInstructorBio: "מייסד מועדון ה-Ai לסטודנטים פיננסים באוניברסיטת רייכמן, מרצה טכנולוגי מוביל לצוותים פיננסיים וממייסדי קהילת Ai-Finance.",
    highlights: [
      "10 מפגשי ערב 18:00–21:00 (פרונטלי ומקוון)",
      "הנחיה משותפת: רו׳ח טל ולנשטיין ורועי ולנשטיין",
      "אוטומציה פיננסית, ניתוח נתונים ודיווח חכם",
    ],
    isFlagship: true,
    certification: { entry: "Ai01", exit: "Ai03" },
  },

  /* ─── 4. Real Estate ─── */
  {
    id: "c-realestate-1",
    slug: "ai-realestate-investors",
    sectorSlug: "realestate",
    title: "Ai למשקיעי נדל״ן ומתווכים",
    subtitle: "איתור נכסים, ניתוח שוק, תמחור עסקאות וניהול לקוחות — כלי Ai מעשיים לשדרוג כל שלב בתהליך.",
    level: "advanced",
    format: "hybrid",
    durationWeeks: 10,
    totalHours: 40,
    liveSessions: 10,
    priceMin: 6800,
    priceMax: 7900,
    nextCohort: "מחזור הבא: יוני 2026",
    instructorName: "יוליה חביה",
    instructorTitle: "מייסדת Happy Homes US",
    instructorPortraitUrl: "/images/lect/Cheerful Woman in Library.png",
    instructorBio: "מייסדת חברת השקעות נדל״ן Happy Homes US ומרצה מובילה בשילוב טכנולוגיה ובינה מלאכותית בתחומי השקעות נדל״ן.",
    highlights: [
      "10 מפגשי ערב 18:00–21:00 (פרונטלי ומקוון)",
      "ניתוח שוק, תמחור ואיתור נכסים עם Ai",
      "שיווק נכסים וניהול לקוחות אוטומטי",
    ],
    isFlagship: true,
    certification: { entry: "Ai01", exit: "Ai03" },
  },

  /* ─── 5. Civil Engineering ─── */
  {
    id: "c-engineering-1",
    slug: "ai-civil-engineering",
    sectorSlug: "engineering",
    title: "Ai למנהלי פרוייקטים בדגש על הנדסה אזרחית",
    subtitle: "שילוב כלי בינה מלאכותית בניהול פרויקטי בנייה — תכנון, בקרה, תיאום ותיעוד חכם לאורך כל מחזור הפרויקט.",
    level: "advanced",
    format: "hybrid",
    durationWeeks: 10,
    totalHours: 40,
    liveSessions: 10,
    priceMin: 6800,
    priceMax: 7900,
    nextCohort: "מחזור הבא: יוני 2026",
    instructorName: "מתן מכלוף",
    instructorTitle: "מהנדס, ניהול פרויקטי בנייה גדולים",
    instructorPortraitUrl: "/images/lect/Professional Presentation.png",
    instructorBio: "מהנדס מנוסה בניהול פרויקטי בנייה גדולים, עתיר ידע וניסיון בשילוב טכנולוגיה ובינה מלאכותית בפרויקטים אזרחיים.",
    highlights: [
      "10 מפגשי ערב 18:00–21:00 (פרונטלי ומקוון)",
      "כלים לתכנון, בקרת ביצוע ותיאום קבלנים",
      "תיעוד חכם ודיווח אוטומטי לבעלי עניין",
    ],
    isFlagship: true,
    certification: { entry: "Ai01", exit: "Ai03" },
  },

  /* ─── 6. Sales & Business Development ─── */
  {
    id: "c-sales-1",
    slug: "ai-sales-business",
    sectorSlug: "sales",
    title: "Ai לאנשי פיתוח עסקי, שיווק ומכירות",
    subtitle: "איתור לקוחות, בניית תסריטי שיחה, ניתוח עסקאות ושיווק מונחה נתונים — כלי Ai לכל שלב במשפך המכירה.",
    level: "advanced",
    format: "hybrid",
    durationWeeks: 10,
    totalHours: 40,
    liveSessions: 10,
    priceMin: 6800,
    priceMax: 7900,
    nextCohort: "מחזור הבא: מאי 2026",
    instructorName: "גיל פרץ",
    instructorTitle: "VP Sales, חברת SaaS",
    instructorPortraitUrl: "/images/lect/Speaker on Stage.png",
    instructorBio: "VP Sales בחברת SaaS מובילה עם 13 שנות ניסיון בבניית צוותי מכירות B2B ופיתוח עסקי.",
    highlights: [
      "10 מפגשי ערב 18:00–21:00 (פרונטלי ומקוון)",
      "אוטומציה של מחקר לידים ובניית פייפליין",
      "שיווק מונחה Ai ופיתוח עסקי חכם",
    ],
    isFlagship: true,
    certification: { entry: "Ai01", exit: "Ai03" },
  },

];
