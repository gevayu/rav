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

export type CertificationTier = "Ai01" | "Ai05" | "Ai10";

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
  {
    id: "c-law-1",
    slug: "ai-law-applied",
    sectorSlug: "law",
    title: "יישומי בינה מלאכותית בעריכת דין",
    subtitle:
      "מהבנה מעשית של כלי Ai ועד הטמעה בעבודה המשפטית - מחקר, חוזים, ליטיגציה וניהול ידע.",
    level: "advanced",
    format: "live",
    durationWeeks: 10,
    totalHours: 40,
    liveSessions: 10,
    priceMin: 6800,
    priceMax: 7900,
    nextCohort: "מחזור הבא: יוני 2026",
    instructorName: "עו״ד שרה צרפתי כהן",
    instructorTitle: "מומחית בדיני בינה מלאכותית ומשפט, יזמת ומשפיעה בתחום",
    instructorPortraitUrl: "/images/lect/Professional Portrait - 2.png",
    highlights: [
      "10 מפגשי לייב בהעברת עו״ד שרה צרפתי כהן",
      "מכינה (Pre-Course) כלולה - למי שאין רקע ב-Ai",
      "3 צירי עבודה: מחקר, חוזים, ליטיגציה וניהול ידע",
      "פרויקט מסכם אישי + הצגה בפני הכיתה",
    ],
    isFlagship: true,
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
  {
    id: "c-law-2",
    slug: "ai-legal-research",
    sectorSlug: "law",
    title: "מחקר משפטי בעזרת Ai",
    subtitle:
      "איך לנסח prompts משפטיים מדויקים, לבצע ניתוח פסיקה רב-מקורי ולחסוך שעות בהכנת תיק.",
    level: "foundation",
    format: "live",
    durationWeeks: 6,
    totalHours: 42,
    liveSessions: 12,
    priceMin: 3900,
    priceMax: 4600,
    nextCohort: "מחזור הבא: מאי 2026",
    instructorName: nameFor("law"),
    instructorPortraitUrl: "/images/lect/Professional Portrait - 2.png",
    highlights: [
      "טכניקות prompt engineering למחקר משפטי",
      "בדיקת מקורות וצמצום הזיות מודל",
      "אינטגרציה עם מאגרים משפטיים מובילים",
    ],
  },

  {
    id: "c-acc-1",
    slug: "ai-closing-automation",
    sectorSlug: "accounting",
    title: "אוטומציית סגירות חודשיות עם סוכני Ai",
    subtitle:
      "איך להעביר את סגירת החודש משבוע עבודה לעשר שעות, תוך שמירה על סטנדרט ביקורת.",
    level: "advanced",
    format: "hybrid",
    durationWeeks: 10,
    totalHours: 64,
    liveSessions: 14,
    priceMin: 6800,
    priceMax: 7900,
    nextCohort: "מחזור הבא: יולי 2026",
    instructorName: nameFor("accounting"),
    instructorPortraitUrl: portraitFor("accounting"),
    highlights: [
      "בניית סוכנים לעיבוד חשבוניות והתאמות",
      "זיהוי אנומליות אוטומטי ב-P&L",
      "דוחות הנהלה בשפה טבעית",
    ],
  },
  {
    id: "c-acc-2",
    slug: "ai-audit-foundations",
    sectorSlug: "accounting",
    title: "יסודות Ai לביקורת",
    subtitle:
      "קורס מבוא למבקרי פנים וחוץ - איזה כלים להכניס לפלואו הביקורת ומתי האנוש חייב להישאר במשוואה.",
    level: "foundation",
    format: "self-paced",
    durationWeeks: 8,
    totalHours: 36,
    liveSessions: 6,
    priceMin: 3200,
    priceMax: 3900,
    nextCohort: "פתוח להרשמה - התחלה גמישה",
    instructorName: nameFor("accounting"),
    instructorPortraitUrl: portraitFor("accounting"),
    highlights: [
      "מפת כלי Ai לביקורת ב-2026",
      "ניהול סיכונים אתיים ורגולטוריים",
      "מתודולוגיה לאימוץ הדרגתי בצוות",
    ],
  },

  {
    id: "c-med-1",
    slug: "ai-clinical-docs",
    sectorSlug: "medicine",
    title: "תיעוד קליני חכם עם Ai",
    subtitle:
      "איך לצמצם 70% מזמן כתיבת סיכומי הביקור מבלי לפגוע בקשר האישי עם המטופל.",
    level: "foundation",
    format: "live",
    durationWeeks: 6,
    totalHours: 40,
    liveSessions: 12,
    priceMin: 4200,
    priceMax: 4900,
    nextCohort: "מחזור הבא: יוני 2026",
    instructorName: nameFor("medicine"),
    instructorPortraitUrl: portraitFor("medicine"),
    highlights: [
      "כלים עם תקני HIPAA ו-GDPR",
      "תיעוד ambient בזמן ביקור",
      "שליטה בקלט רפואי בעברית ואנגלית",
    ],
  },
  {
    id: "c-med-2",
    slug: "ai-clinical-decisions",
    sectorSlug: "medicine",
    title: "תמיכת החלטות קלינית",
    subtitle:
      "איך להשתמש במודלים גדולים כשותף להחלטות, לא כתחליף - עם פרוטוקולים מעשיים מהמרפאה.",
    level: "advanced",
    format: "hybrid",
    durationWeeks: 12,
    totalHours: 72,
    liveSessions: 16,
    priceMin: 7400,
    priceMax: 8600,
    nextCohort: "מחזור הבא: ספטמבר 2026",
    instructorName: nameFor("medicine"),
    instructorPortraitUrl: portraitFor("medicine"),
    highlights: [
      "ניתוח מקרה רב-תחומי עם Ai",
      "הפחתת שגיאות אבחון",
      "אתיקה רפואית ועבודה מול רגולציה",
    ],
  },

  {
    id: "c-re-1",
    slug: "ai-realestate-analysis",
    sectorSlug: "realestate",
    title: "Ai לאנליזת עסקאות נדל״ן",
    subtitle:
      "מודלים לחיזוי שווי, ניתוח שוק וסקירת פרויקטים - מה שקופץ מאקסל לפלטפורמת החלטה.",
    level: "advanced",
    format: "live",
    durationWeeks: 10,
    totalHours: 60,
    liveSessions: 14,
    priceMin: 5800,
    priceMax: 6900,
    nextCohort: "מחזור הבא: יולי 2026",
    instructorName: nameFor("realestate"),
    instructorPortraitUrl: portraitFor("realestate"),
    highlights: [
      "תמחור עסקאות בזמן אמת",
      "ניתוח תבע״ות ומגמות שוק",
      "שיווק נכסים עם קריאייטיב אוטומטי",
    ],
  },

  {
    id: "c-eng-1",
    slug: "ai-structural-engineering",
    sectorSlug: "engineering",
    title: "Ai בתכנון הנדסי מתקדם",
    subtitle:
      "אינטגרציה של כלי סימולציה חכמים עם BIM ותכנון סטרוקטורלי - מהכיתה לפרויקט רב-קומות.",
    level: "mastery",
    format: "hybrid",
    durationWeeks: 14,
    totalHours: 90,
    liveSessions: 18,
    priceMin: 8800,
    priceMax: 9800,
    nextCohort: "מחזור הבא: נובמבר 2026",
    instructorName: nameFor("engineering"),
    instructorPortraitUrl: portraitFor("engineering"),
    highlights: [
      "מודלים גנרטיביים לתכנון",
      "אופטימיזציה של עומסים וחיבורים",
      "אינטגרציה עם Revit ו-Tekla",
    ],
  },

  {
    id: "c-content-1",
    slug: "ai-content-studio",
    sectorSlug: "content",
    title: "סטודיו תוכן עם Ai",
    subtitle:
      "זרימת יצירה מלאה - מקריאייטיב לעריכת וידאו - שמכפילה פי 4 את קצב ההפקה של צוותים קטנים.",
    level: "advanced",
    format: "hybrid",
    durationWeeks: 8,
    totalHours: 56,
    liveSessions: 12,
    priceMin: 5400,
    priceMax: 6400,
    nextCohort: "מחזור הבא: מאי 2026",
    instructorName: nameFor("content"),
    instructorPortraitUrl: portraitFor("content"),
    highlights: [
      "פלואו עריכת וידאו אוטומטית",
      "קריאייטיב ועיצוב עם Midjourney, Runway",
      "בניית מערכת הפקה חוזרת",
    ],
  },
  {
    id: "c-content-2",
    slug: "ai-copy-foundations",
    sectorSlug: "content",
    title: "יסודות קופירייטינג עם Ai",
    subtitle:
      "איך לכתוב טקסט שיווקי, עמודי נחיתה ופוסטים ברמה מקצועית, בלי ליפול לסגנון Ai גנרי.",
    level: "foundation",
    format: "self-paced",
    durationWeeks: 6,
    totalHours: 28,
    liveSessions: 4,
    priceMin: 3200,
    priceMax: 3800,
    nextCohort: "פתוח להרשמה - התחלה גמישה",
    instructorName: nameFor("content"),
    instructorPortraitUrl: portraitFor("content"),
    highlights: [
      "זיהוי וסילוק טון רובוטי",
      "בניית voice guidelines אישית",
      "מסגרות prompt לכתיבה שיווקית",
    ],
  },

  {
    id: "c-sales-1",
    slug: "ai-sales-enablement",
    sectorSlug: "sales",
    title: "Ai לצוותי מכירות B2B",
    subtitle:
      "מחקר ליד, תסריטי שיחה דינמיים, חיזוי סגירות - כלי עבודה יומיומיים לסוכן ולמנהל.",
    level: "advanced",
    format: "live",
    durationWeeks: 8,
    totalHours: 52,
    liveSessions: 14,
    priceMin: 5600,
    priceMax: 6800,
    nextCohort: "מחזור הבא: יוני 2026",
    instructorName: nameFor("sales"),
    instructorPortraitUrl: portraitFor("sales"),
    highlights: [
      "אוטומציה של מחקר ליד",
      "playbooks דינמיים פר לקוח",
      "ניתוח שיחות וחיזוי המרה",
    ],
  },

  {
    id: "c-sw-1",
    slug: "ai-engineering-agents",
    sectorSlug: "engineering-soft",
    title: "בניית סוכני Ai לפיתוח תוכנה",
    subtitle:
      "מהסרט עם Copilot אל סוכנים אוטונומיים לקוד ריוויו, רפקטורינג ותחזוקת מערכת.",
    level: "mastery",
    format: "hybrid",
    durationWeeks: 12,
    totalHours: 84,
    liveSessions: 16,
    priceMin: 7800,
    priceMax: 9200,
    nextCohort: "מחזור הבא: יולי 2026",
    instructorName: nameFor("engineering-soft"),
    instructorPortraitUrl: portraitFor("engineering-soft"),
    highlights: [
      "Claude Code, Cursor ו-Aider ברמת expert",
      "ארכיטקטורת סוכנים מרובי-שלבים",
      "אינטגרציה עם pipelines קיימים",
    ],
  },
  {
    id: "c-sw-2",
    slug: "ai-prompt-engineering-dev",
    sectorSlug: "engineering-soft",
    title: "Prompt Engineering למפתחים",
    subtitle:
      "הנדסת prompts מקצועית לשילוב Ai במוצר - לא כצעצוע אלא כרכיב פרודקשן.",
    level: "foundation",
    format: "self-paced",
    durationWeeks: 6,
    totalHours: 32,
    liveSessions: 4,
    priceMin: 3400,
    priceMax: 4100,
    nextCohort: "פתוח להרשמה - התחלה גמישה",
    instructorName: nameFor("engineering-soft"),
    instructorPortraitUrl: portraitFor("engineering-soft"),
    highlights: [
      "טכניקות prompt advanced",
      "הפחתת הזיות ובדיקת מודלים",
      "evaluation ו-testing של LLMs",
    ],
  },

  {
    id: "c-data-1",
    slug: "ai-data-insights",
    sectorSlug: "data",
    title: "Ai לניתוח נתונים ו-BI",
    subtitle:
      "מעבר מדשבורדים סטטיים לדוחות שנכתבים בשפה טבעית ומודלים לחיזוי עסקי.",
    level: "advanced",
    format: "live",
    durationWeeks: 10,
    totalHours: 66,
    liveSessions: 14,
    priceMin: 6400,
    priceMax: 7600,
    nextCohort: "מחזור הבא: אוגוסט 2026",
    instructorName: nameFor("data"),
    instructorPortraitUrl: portraitFor("data"),
    highlights: [
      "בניית מודלי ניבוי עסקיים",
      "אינטגרציה עם Snowflake, BigQuery",
      "דשבורדים שמדברים בעברית",
    ],
  },

  {
    id: "c-cyber-1",
    slug: "ai-cyber-defense",
    sectorSlug: "cyber",
    title: "Ai בהגנת סייבר",
    subtitle:
      "זיהוי איומים, ניתוח לוגים וכתיבת playbooks - מהמעבדה למרכזי SOC של אמת.",
    level: "advanced",
    format: "hybrid",
    durationWeeks: 10,
    totalHours: 68,
    liveSessions: 14,
    priceMin: 6800,
    priceMax: 8200,
    nextCohort: "מחזור הבא: יולי 2026",
    instructorName: nameFor("cyber"),
    instructorPortraitUrl: portraitFor("cyber"),
    highlights: [
      "זיהוי התקפות מתקדמות",
      "אוטומציה של חקירה ותגובה",
      "עבודה מול SIEM ו-XDR",
    ],
  },
  {
    id: "c-cyber-2",
    slug: "ai-cyber-foundations",
    sectorSlug: "cyber",
    title: "יסודות Ai ל-IT ואבטחת מידע",
    subtitle:
      "קורס מבוא לאנשי IT - איך לאמץ Ai בלי להעמיס על הארגון סיכונים חדשים.",
    level: "foundation",
    format: "self-paced",
    durationWeeks: 6,
    totalHours: 30,
    liveSessions: 4,
    priceMin: 3200,
    priceMax: 3900,
    nextCohort: "פתוח להרשמה - התחלה גמישה",
    instructorName: nameFor("cyber"),
    instructorPortraitUrl: portraitFor("cyber"),
    highlights: [
      "מודלים של איום לאימוץ Ai",
      "מדיניות שימוש ארגונית",
      "פיקוח וניהול סיכונים",
    ],
  },

  {
    id: "c-devops-1",
    slug: "ai-devops-pipelines",
    sectorSlug: "devops",
    title: "Ai ב-DevOps ו-Cloud Infrastructure",
    subtitle:
      "אוטומציית pipelines, observability חכם וניהול עלויות ענן עם סוכנים.",
    level: "advanced",
    format: "hybrid",
    durationWeeks: 8,
    totalHours: 56,
    liveSessions: 12,
    priceMin: 5800,
    priceMax: 7200,
    nextCohort: "מחזור הבא: יוני 2026",
    instructorName: nameFor("devops"),
    instructorPortraitUrl: portraitFor("devops"),
    highlights: [
      "AiOps לאינצידנטים אוטומטיים",
      "אופטימיזציית FinOps עם Ai",
      "Self-healing infrastructure",
    ],
  },
];
