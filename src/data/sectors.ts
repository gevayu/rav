export type Sector = {
  slug: string;
  displayName: string;
  guideName: string;
  guideTitle: string;
  guideYears: string;
  oneLine: string;
  portraitUrl: string;
  gradient: string;
  stripImageUrl?: string;
};

export const sectors: Sector[] = [
  {
    slug: "law",
    displayName: "עריכת דין ומשפטים",
    guideName: "עו״ד דנה ברק",
    guideTitle: "מומחית לליטיגציה מסחרית",
    guideYears: "15 שנה בפירמות בוטיק",
    oneLine: "ליטיגציה, חוזים והסכמים, מחקר משפטי ועוד",
    portraitUrl: "/images/lect/Professional Portrait - 2.png",
    gradient: "from-[#1e40af] to-[#1e3a8a]",
    stripImageUrl: "/images/sectors/law.jpg",
  },
  {
    slug: "accounting",
    displayName: "ראיית חשבון וכספים",
    guideName: "רו״ח אבי מזרחי",
    guideTitle: "שותף ב-Big 4",
    guideYears: "18 שנה בביקורת חברות ציבוריות",
    oneLine: "חשבונאות ניהולית, חשבונאות פיננסית, הערכות שווי, תזרים מזומנים ועוד",
    portraitUrl: "/images/lect/Man Speaking in Professional Setting.png",
    gradient: "from-[#7c3aed] to-[#4c1d95]",
    stripImageUrl: "/images/sectors/accounting.jpg",
  },
  {
    slug: "medicine",
    displayName: "רפואה, אחיות ופארמה",
    guideName: "ד״ר מיכל רוזן",
    guideTitle: "מומחית ברפואת משפחה",
    guideYears: "12 שנה במרפאות קופ״ח",
    oneLine: "קליניקה, מחקר רפואי, העברת מידע רפואי, הדרכת מטופלים ועוד",
    portraitUrl: "/images/lect/Smiling Woman with Glasses.png",
    gradient: "from-[#0891b2] to-[#164e63]",
    stripImageUrl: "/images/sectors/medicine.jpg",
  },
  {
    slug: "realestate",
    displayName: "השקעות נדל״ן ותיווך",
    guideName: "יובל כהן",
    guideTitle: "סוכן יזמות וקרקעות",
    guideYears: "11 שנה בפרויקטים למגורים",
    oneLine: "איתור ומחקר שוק, איתור נכסים, ניהול נכסים ועוד",
    portraitUrl: "/images/lect/Man Presenting on Stage.png",
    gradient: "from-[#d97706] to-[#92400e]",
    stripImageUrl: "/images/sectors/realestate.jpg",
  },
  {
    slug: "engineering",
    displayName: "הנדסה אזרחית",
    guideName: "מהנדס יונתן אלון",
    guideTitle: "מנהל פרויקטים ב-Skyline",
    guideYears: "14 שנה בתכנון מגדלים",
    oneLine: "תהליכי אפיון, תכנון ועיצוב, ניהול פרוייקט, בקרה חכמה ועוד",
    portraitUrl: "/images/lect/Professional Presentation.png",
    gradient: "from-[#475569] to-[#1e293b]",
    stripImageUrl: "/images/sectors/engineering.jpg",
  },
  {
    slug: "content",
    displayName: "יצירת תוכן",
    guideName: "שיר לוי",
    guideTitle: "ראש תוכן ב-Medialab",
    guideYears: "9 שנה בעריכת וידאו וטקסט",
    oneLine: "יצירה, עריכה ובקרה בתכני וידאו, אודיו וטקסט, יצירתיות בעידן ה-AI ועוד",
    portraitUrl: "/images/lect/Cheerful Woman in Library.png",
    gradient: "from-[#db2777] to-[#831843]",
    stripImageUrl: "/images/sectors/content.jpg",
  },
  {
    slug: "sales",
    displayName: "מכירות ופיתוח עסקי",
    guideName: "גיל פרץ",
    guideTitle: "VP Sales בחברת SaaS",
    guideYears: "13 שנה בצוותי מכירות B2B",
    oneLine: "איתור לקוחות, ניהול לקוחות חדשים וקיימים, משא ומתן ועוד",
    portraitUrl: "/images/lect/Speaker on Stage.png",
    gradient: "from-[#ea580c] to-[#7c2d12]",
    stripImageUrl: "/images/sectors/sales.jpg",
  },
  {
    slug: "engineering-soft",
    displayName: "מקצועות הייטק",
    guideName: "עומר נחום",
    guideTitle: "Staff Engineer ב-Wix",
    guideYears: "16 שנה בפיתוח full-stack",
    oneLine: "פיתוח ותשתיות תוכנה, ניהול מידע ונתונים, אבטחת מידע וסייבר ועוד",
    portraitUrl: "/images/lect/Person in Online Meeting.png",
    gradient: "from-[#0284c7] to-[#0c4a6e]",
    stripImageUrl: "/images/sectors/engineering-soft.jpg",
  },
];
