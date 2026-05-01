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
    name: "עו״ד שרה צרפתי כהן",
    title: "מומחית בדיני בינה מלאכותית ומשפט",
    sector: "Ai לעריכת דין",
    experience: "מומחית בדיני בינה מלאכותית ומשפט, יזמת ומשפיענית בתחום הבינה המלאכותית למשפטנים.",
    portraitUrl: "/images/lect/sarah-cohen.jpeg",
    portraitPosition: "center 25%",
  },
  {
    id: "c2",
    name: "ד״ר אסתר טחובר",
    title: "מנהלת תחום גידולי מערכת העיכול, אסותא רמת החייל",
    sector: "Ai לרפואה",
    experience: "מנהלת תחום גידולי מערכת העיכול באסותא רמת החייל ומרצה מובילה בשימוש ב-AI לצוותי רפואה.",
    portraitUrl: "/images/lect/esti-tachover.jpeg",
  },
  {
    id: "c3",
    name: "רו״ח טל ולנשטיין",
    title: "בוגרת Big 4, ממייסדי קהילת Ai-Finance",
    sector: "Ai לראיית חשבון",
    experience: "בוגרת Big 4, מרצה מובילה בתחום וממייסדי קהילת Ai-Finance.",
    portraitUrl: "/images/lect/tal-valnstein.png",
  },
  {
    id: "c4",
    name: "רועי ולנשטיין",
    title: "מייסד מועדון ה-Ai לסטודנטים, אוניברסיטת רייכמן",
    sector: "Ai לראיית חשבון",
    experience: "מייסד מועדון ה-Ai לסטודנטים פיננסים באוניברסיטת רייכמן, מרצה טכנולוגי מוביל לצוותים פיננסיים וממייסדי קהילת Ai-Finance.",
    portraitUrl: "/images/lect/roi-valnstein.png",
  },
  {
    id: "c5",
    name: "יוליה חביה",
    title: "מייסדת Happy Homes US",
    sector: "Ai לנדל״ן",
    experience: "מייסדת חברת השקעות נדל״ן Happy Homes US ומרצה מובילה בשילוב טכנולוגיה ובינה מלאכותית בתחומי השקעות נדל״ן.",
    portraitUrl: "/images/lect/yulia-chabia.jpeg",
  },
  {
    id: "c6",
    name: "מתן מכלוף",
    title: "מהנדס, ניהול פרויקטי בנייה גדולים",
    sector: "Ai להנדסה אזרחית",
    experience: "מהנדס מנוסה בניהול פרויקטי בנייה גדולים, עתיר ידע וניסיון בשילוב טכנולוגיה ובינה מלאכותית בפרויקטים אזרחיים.",
    portraitUrl: "/images/lect/matan-makhluf.jpeg",
  },
  {
    id: "c7",
    name: "פאדי עראקי",
    title: "מרצה בכיר, אבטחת מידע ותשתיות תוכנה",
    sector: "Ai להייטק",
    experience: "מרצה בכיר בתחום אבטחת המידע ותשתיות התוכנה, מוביל טכנולוגי ומומחה בינה מלאכותית.",
    portraitUrl: "/images/lect/Speaker on Stage (1).png",
  },
  {
    id: "c8",
    name: "אלכס קוזנצוב",
    title: "מרצה בכיר, פיתוח ותשתיות תוכנה",
    sector: "Ai להייטק",
    experience: "מרצה בכיר לתחומי הפיתוח ותשתיות התוכנה, בעל ניסיון עשיר בפרויקטים טכנולוגיים והדרכות בינה מלאכותית.",
    portraitUrl: "/images/lect/Person in Online Meeting.png",
  },
];
