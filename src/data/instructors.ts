export type Instructor = {
  id: string;
  name: string;
  title: string;
  sector: string;
  experience: string;
  portraitUrl: string;
};

const p = (gender: "men" | "women", id: number) =>
  `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;

// Hero grid - 40 instructor portraits, tiled and layered.
export const heroGridInstructors = [
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `hero-m-${i}`,
    url: p("men", (i * 3 + 5) % 99 || 1),
  })),
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `hero-w-${i}`,
    url: p("women", (i * 3 + 2) % 99 || 1),
  })),
];

// Featured champions - curated, diverse, with real micro-bio.
export const champions: Instructor[] = [
  {
    id: "c1",
    name: "עו״ד דנה ברק",
    title: "מומחית לליטיגציה מסחרית",
    sector: "AI לעריכת דין",
    experience: "15 שנות ליטיגציה במשרדי בוטיק בתל אביב",
    portraitUrl: p("women", 44),
  },
  {
    id: "c2",
    name: "ד״ר מיכל רוזן",
    title: "רופאה, מומחית ברפואת משפחה",
    sector: "AI לרפואה",
    experience: "12 שנה בתיעוד קליני וקבלת החלטות",
    portraitUrl: p("women", 68),
  },
  {
    id: "c3",
    name: "רו״ח אבי מזרחי",
    title: "שותף ב-Big 4",
    sector: "AI לראיית חשבון",
    experience: "18 שנה בביקורת חברות ציבוריות",
    portraitUrl: p("men", 32),
  },
  {
    id: "c4",
    name: "עומר נחום",
    title: "Staff Engineer ב-Wix",
    sector: "AI לפיתוח תוכנה",
    experience: "16 שנה בפיתוח full-stack ובניית סוכנים",
    portraitUrl: p("men", 85),
  },
  {
    id: "c5",
    name: "נועה שפירא",
    title: "Head of Data, חברת Fintech",
    sector: "AI לניהול נתונים",
    experience: "10 שנה בפלטפורמות BI ומודלים חכמים",
    portraitUrl: p("women", 60),
  },
  {
    id: "c6",
    name: "איתי בן חיים",
    title: "CISO, חברת סייבר מובילה",
    sector: "AI לסייבר ו-IT",
    experience: "19 שנה ב-Red Team ומרכזי SOC",
    portraitUrl: p("men", 64),
  },
  {
    id: "c7",
    name: "יובל כהן",
    title: "יועץ יזמות נדל״ן",
    sector: "AI לנדל״ן",
    experience: "11 שנה בליווי פרויקטים למגורים ותעסוקה",
    portraitUrl: p("men", 45),
  },
];
