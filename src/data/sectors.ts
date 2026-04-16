export type Sector = {
  slug: string;
  displayName: string;
  guideName: string;
  guideTitle: string;
  guideYears: string;
  oneLine: string;
  portraitUrl: string;
};

const p = (gender: "men" | "women", id: number) =>
  `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;

export const sectors: Sector[] = [
  {
    slug: "law",
    displayName: "עריכת דין ומשפטים",
    guideName: "עו״ד דנה ברק",
    guideTitle: "מומחית לליטיגציה מסחרית",
    guideYears: "15 שנה בפירמות בוטיק",
    oneLine: "סריקת חוזים, מחקר משפטי וטיוטות בזמן של שעה במקום יום.",
    portraitUrl: p("women", 44),
  },
  {
    slug: "accounting",
    displayName: "ראיית חשבון וכספים",
    guideName: "רו״ח אבי מזרחי",
    guideTitle: "שותף ב-Big 4",
    guideYears: "18 שנה בביקורת חברות ציבוריות",
    oneLine: "אוטומציה של סגירות חודשיות, זיהוי אנומליות ודוחות חכמים.",
    portraitUrl: p("men", 32),
  },
  {
    slug: "medicine",
    displayName: "רפואה, אחיות ופארמה",
    guideName: "ד״ר מיכל רוזן",
    guideTitle: "מומחית ברפואת משפחה",
    guideYears: "12 שנה במרפאות קופ״ח",
    oneLine: "תיעוד קליני, סיכומי ביקור ותמיכת החלטות שלא פוגעת בקשר עם המטופל.",
    portraitUrl: p("women", 68),
  },
  {
    slug: "realestate",
    displayName: "השקעות נדל״ן ותיווך",
    guideName: "יובל כהן",
    guideTitle: "סוכן יזמות וקרקעות",
    guideYears: "11 שנה בפרויקטים למגורים",
    oneLine: "מחקר שוק, אנליזת עסקאות ושיווק נכסים בזמן אמת.",
    portraitUrl: p("men", 45),
  },
  {
    slug: "engineering",
    displayName: "הנדסת בניין",
    guideName: "מהנדס יונתן אלון",
    guideTitle: "מנהל פרויקטים ב-Skyline",
    guideYears: "14 שנה בתכנון מגדלים",
    oneLine: "אופטימיזציית תכנון, ניתוח סטטי חכם וניהול שטחי עבודה.",
    portraitUrl: p("men", 11),
  },
  {
    slug: "content",
    displayName: "יצירת תוכן",
    guideName: "שיר לוי",
    guideTitle: "ראש תוכן ב-Medialab",
    guideYears: "9 שנה בעריכת וידאו וטקסט",
    oneLine: "קריאייטיב, עריכה ופוסט-פרודקשן שמכפילים פי 4 את קצב היצור.",
    portraitUrl: p("women", 22),
  },
  {
    slug: "sales",
    displayName: "מכירות ופיתוח עסקי",
    guideName: "גיל פרץ",
    guideTitle: "VP Sales בחברת SaaS",
    guideYears: "13 שנה בצוותי מכירות B2B",
    oneLine: "מחקר ליד, תסריטי שיחה דינמיים וחיזוי סגירות מדויק.",
    portraitUrl: p("men", 76),
  },
  {
    slug: "engineering-soft",
    displayName: "פיתוח תוכנה",
    guideName: "עומר נחום",
    guideTitle: "Staff Engineer ב-Wix",
    guideYears: "16 שנה בפיתוח full-stack",
    oneLine: "Code review, רפקטורינג ויצירת סוכנים שמשחררים מהתחזוקה הטכנית.",
    portraitUrl: p("men", 85),
  },
  {
    slug: "data",
    displayName: "ניהול מידע ונתונים",
    guideName: "נועה שפירא",
    guideTitle: "Head of Data ב-Fintech",
    guideYears: "10 שנה בפלטפורמות BI",
    oneLine: "מודלים של ניבוי, הגנה על נתונים ודוחות שנכתבים בשפה טבעית.",
    portraitUrl: p("women", 60),
  },
  {
    slug: "cyber",
    displayName: "IT, אבטחת מידע וסייבר",
    guideName: "איתי בן חיים",
    guideTitle: "CISO בחברת סייבר",
    guideYears: "19 שנה ב-Red Team ו-SOC",
    oneLine: "זיהוי איומים, ניתוח לוגים וכתיבת playbooks שעובדים במציאות.",
    portraitUrl: p("men", 64),
  },
  {
    slug: "devops",
    displayName: "תשתיות תוכנה ודבאופס",
    guideName: "תום שחם",
    guideTitle: "Principal DevOps Architect",
    guideYears: "12 שנה ב-cloud infrastructure",
    oneLine: "אוטומציה של pipelines, observability חכם וניהול עלויות ענן.",
    portraitUrl: p("men", 51),
  },
];
