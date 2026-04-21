export type Sector = {
  slug: string;
  displayName: string;
  guideName: string;
  guideTitle: string;
  guideYears: string;
  oneLine: string;
  portraitUrl: string;
  gradient: string;
};

export const sectors: Sector[] = [
  {
    slug: "law",
    displayName: "עריכת דין ומשפטים",
    guideName: "עו״ד דנה ברק",
    guideTitle: "מומחית לליטיגציה מסחרית",
    guideYears: "15 שנה בפירמות בוטיק",
    oneLine: "סריקת חוזים, מחקר משפטי וטיוטות בזמן של שעה במקום יום.",
    portraitUrl: "/images/lect/Professional Portrait - 2.png",
    gradient: "from-[#1e40af] to-[#1e3a8a]",
  },
  {
    slug: "accounting",
    displayName: "ראיית חשבון וכספים",
    guideName: "רו״ח אבי מזרחי",
    guideTitle: "שותף ב-Big 4",
    guideYears: "18 שנה בביקורת חברות ציבוריות",
    oneLine: "אוטומציה של סגירות חודשיות, זיהוי אנומליות ודוחות חכמים.",
    portraitUrl: "/images/lect/Man Speaking in Professional Setting.png",
    gradient: "from-[#7c3aed] to-[#4c1d95]",
  },
  {
    slug: "medicine",
    displayName: "רפואה, אחיות ופארמה",
    guideName: "ד״ר מיכל רוזן",
    guideTitle: "מומחית ברפואת משפחה",
    guideYears: "12 שנה במרפאות קופ״ח",
    oneLine: "תיעוד קליני, סיכומי ביקור ותמיכת החלטות שלא פוגעת בקשר עם המטופל.",
    portraitUrl: "/images/lect/Smiling Woman with Glasses.png",
    gradient: "from-[#0891b2] to-[#164e63]",
  },
  {
    slug: "realestate",
    displayName: "השקעות נדל״ן ותיווך",
    guideName: "יובל כהן",
    guideTitle: "סוכן יזמות וקרקעות",
    guideYears: "11 שנה בפרויקטים למגורים",
    oneLine: "מחקר שוק, אנליזת עסקאות ושיווק נכסים בזמן אמת.",
    portraitUrl: "/images/lect/Man Presenting on Stage.png",
    gradient: "from-[#d97706] to-[#92400e]",
  },
  {
    slug: "engineering",
    displayName: "הנדסת בניין",
    guideName: "מהנדס יונתן אלון",
    guideTitle: "מנהל פרויקטים ב-Skyline",
    guideYears: "14 שנה בתכנון מגדלים",
    oneLine: "אופטימיזציית תכנון, ניתוח סטטי חכם וניהול שטחי עבודה.",
    portraitUrl: "/images/lect/Professional Presentation.png",
    gradient: "from-[#475569] to-[#1e293b]",
  },
  {
    slug: "content",
    displayName: "יצירת תוכן",
    guideName: "שיר לוי",
    guideTitle: "ראש תוכן ב-Medialab",
    guideYears: "9 שנה בעריכת וידאו וטקסט",
    oneLine: "קריאייטיב, עריכה ופוסט-פרודקשן שמכפילים פי 4 את קצב היצור.",
    portraitUrl: "/images/lect/Cheerful Woman in Library.png",
    gradient: "from-[#db2777] to-[#831843]",
  },
  {
    slug: "sales",
    displayName: "מכירות ופיתוח עסקי",
    guideName: "גיל פרץ",
    guideTitle: "VP Sales בחברת SaaS",
    guideYears: "13 שנה בצוותי מכירות B2B",
    oneLine: "מחקר ליד, תסריטי שיחה דינמיים וחיזוי סגירות מדויק.",
    portraitUrl: "/images/lect/Speaker on Stage.png",
    gradient: "from-[#ea580c] to-[#7c2d12]",
  },
  {
    slug: "engineering-soft",
    displayName: "פיתוח תוכנה",
    guideName: "עומר נחום",
    guideTitle: "Staff Engineer ב-Wix",
    guideYears: "16 שנה בפיתוח full-stack",
    oneLine: "Code review, רפקטורינג ויצירת סוכנים שמשחררים מהתחזוקה הטכנית.",
    portraitUrl: "/images/lect/Person in Online Meeting.png",
    gradient: "from-[#0284c7] to-[#0c4a6e]",
  },
  {
    slug: "data",
    displayName: "ניהול מידע ונתונים",
    guideName: "נועה שפירא",
    guideTitle: "Head of Data ב-Fintech",
    guideYears: "10 שנה בפלטפורמות BI",
    oneLine: "מודלים של ניבוי, הגנה על נתונים ודוחות שנכתבים בשפה טבעית.",
    portraitUrl: "/images/lect/Professional Portrait.png",
    gradient: "from-[#0d9488] to-[#134e4a]",
  },
  {
    slug: "cyber",
    displayName: "IT, אבטחת מידע וסייבר",
    guideName: "איתי בן חיים",
    guideTitle: "CISO בחברת סייבר",
    guideYears: "19 שנה ב-Red Team ו-SOC",
    oneLine: "זיהוי איומים, ניתוח לוגים וכתיבת playbooks שעובדים במציאות.",
    portraitUrl: "/images/lect/Speaker on Stage (1).png",
    gradient: "from-[#dc2626] to-[#7f1d1d]",
  },
  {
    slug: "devops",
    displayName: "תשתיות תוכנה ודבאופס",
    guideName: "תום שחם",
    guideTitle: "Principal DevOps Architect",
    guideYears: "12 שנה ב-cloud infrastructure",
    oneLine: "אוטומציה של pipelines, observability חכם וניהול עלויות ענן.",
    portraitUrl: "/images/lect/Man Speaking in Professional Setting.png",
    gradient: "from-[#16a34a] to-[#14532d]",
  },
];
