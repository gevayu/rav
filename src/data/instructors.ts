export type Instructor = {
  id: string;
  name: string;
  title: string;
  sector: string;
  experience: string;
  portraitUrl: string;
  portraitPosition?: string;
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
    sector: "Ai לעריכת דין",
    experience: "15 שנות ליטיגציה במשרדי בוטיק בתל אביב",
    portraitUrl: "/images/lect/Professional Portrait - 2.png",
    portraitPosition: "center 25%",
  },
  {
    id: "c2",
    name: "ד״ר מיכל רוזן",
    title: "רופאה, מומחית ברפואת משפחה",
    sector: "Ai לרפואה",
    experience: "12 שנה בתיעוד קליני וקבלת החלטות",
    portraitUrl: "/images/lect/Smiling Woman with Glasses.png",
  },
  {
    id: "c3",
    name: "רו״ח אבי מזרחי",
    title: "שותף ב-Big 4",
    sector: "Ai לראיית חשבון",
    experience: "18 שנה בביקורת חברות ציבוריות",
    portraitUrl: "/images/lect/Man Speaking in Professional Setting.png",
  },
  {
    id: "c4",
    name: "עומר נחום",
    title: "Staff Engineer ב-Wix",
    sector: "Ai לפיתוח תוכנה",
    experience: "16 שנה בפיתוח full-stack ובניית סוכנים",
    portraitUrl: "/images/lect/Person in Online Meeting.png",
  },
  {
    id: "c5",
    name: "נועה שפירא",
    title: "Head of Data, חברת Fintech",
    sector: "Ai לניהול נתונים",
    experience: "10 שנה בפלטפורמות BI ומודלים חכמים",
    portraitUrl: "/images/lect/Professional Portrait.png",
  },
  {
    id: "c6",
    name: "איתי בן חיים",
    title: "CISO, חברת סייבר מובילה",
    sector: "Ai לסייבר ו-IT",
    experience: "19 שנה ב-Red Team ומרכזי SOC",
    portraitUrl: "/images/lect/Speaker on Stage (1).png",
  },
  {
    id: "c7",
    name: "יובל כהן",
    title: "יועץ יזמות נדל״ן",
    sector: "Ai לנדל״ן",
    experience: "11 שנה בליווי פרויקטים למגורים ותעסוקה",
    portraitUrl: "/images/lect/Man Presenting on Stage.png",
  },
];
