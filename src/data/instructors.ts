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

// Hero grid - 40 instructor portraits, tiled across 9×5 grid.
// Real photos placed at central positions (dist ≤ 2 from grid center col=4,row=2)
// so they appear in the high-opacity zone. Center positions: 4,12,13,14,20,21,22,23,24
export const heroGridInstructors = [
  { id: "hero-m-1",   url: p("men",    8) },
  { id: "hero-w-1",   url: p("women",  5) },
  { id: "hero-m-2",   url: p("men",   14) },
  { id: "hero-w-2",   url: p("women", 11) },
  { id: "real-sarah", url: "/images/lect/sarah-cohen.jpeg" },
  { id: "hero-new-1", url: "/images/hero-extra/hero-new-01.png" },
  { id: "hero-new-2", url: "/images/hero-extra/hero-new-02.png" },
  { id: "hero-m-4",   url: p("men",   26) },
  { id: "hero-w-4",   url: p("women", 23) },
  { id: "hero-m-5",   url: p("men",   32) },
  { id: "hero-w-5",   url: p("women", 29) },
  { id: "hero-new-3", url: "/images/hero-extra/hero-new-03.png" },
  { id: "real-esti",  url: "/images/lect/esti-tachover.jpeg" },
  { id: "real-tal",   url: "/images/lect/tal-valnstein.png" },
  { id: "real-nadav", url: "/images/lect/נדב מנור - מנהל הדרכה (1).jpg" },
  { id: "hero-new-4", url: "/images/hero-extra/hero-new-04.png" },
  { id: "hero-m-7",   url: p("men",   44) },
  { id: "hero-w-7",   url: p("women", 41) },
  { id: "hero-m-8",   url: p("men",   50) },
  { id: "hero-new-5", url: "/images/hero-extra/hero-new-05.png" },
  { id: "real-roi",   url: "/images/lect/roi-valnstein.png" },
  { id: "real-gal",   url: "/images/lect/גל גנות (1).jpg" },
  { id: "real-matan", url: "/images/lect/matan-makhluf.jpeg" },
  { id: "real-pini",  url: "/images/lect/פיני מכלוף (1) (1).jpg" },
  { id: "real-yulia", url: "/images/lect/yulia-chabia.jpeg" },
  { id: "hero-new-6", url: "/images/hero-extra/hero-new-06.png" },
  { id: "hero-new-7", url: "/images/hero-extra/hero-new-07.jpeg" },
  { id: "hero-m-10",  url: p("men",   11) },
  { id: "hero-w-10",  url: p("women",  8) },
  { id: "hero-m-11",  url: p("men",   17) },
  { id: "hero-m-12",  url: p("men",   23) },
  { id: "hero-w-11",  url: p("women", 14) },
  { id: "hero-m-13",  url: p("men",   29) },
  { id: "hero-w-12",  url: p("women", 20) },
  { id: "hero-m-14",  url: p("men",   35) },
  { id: "hero-w-13",  url: p("women", 26) },
  { id: "hero-m-15",  url: p("men",   41) },
  { id: "hero-w-14",  url: p("women", 32) },
  { id: "hero-m-16",  url: p("men",   47) },
  { id: "hero-w-15",  url: p("women", 38) },
];


// Featured champions - curated, diverse, with real micro-bio.
export const champions: Instructor[] = [
  {
    id: "c1",
    name: "עו״ד שרה צרפתי כהן",
    title: "מומחית בדיני בינה מלאכותית ומשפט",
    sector: "Ai לעריכת דין",
    experience: "יזמת ומשפיענית בתחום הבינה המלאכותית למשפטנים.",
    portraitUrl: "/images/lect/sarah-cohen.jpeg",
    portraitPosition: "center 25%",
  },
  {
    id: "c2",
    name: "ד״ר אסתר טחובר",
    title: "מנהלת תחום גידולי מערכת העיכול, אסותא רמת החייל",
    sector: "Ai לרפואה",
    experience: "מרצה מובילה בשימוש ב-AI לצוותי רפואה.",
    portraitUrl: "/images/lect/esti-tachover.jpeg",
  },
  {
    id: "c3",
    name: "רו״ח טל ולנשטיין",
    title: "בוגרת Big 4, ממייסדי קהילת Ai-Finance",
    sector: "Ai לראיית חשבון",
    experience: "מרצה מובילה בתחום ה-AI הפיננסי.",
    portraitUrl: "/images/lect/tal-valnstein.png",
  },
  {
    id: "c4",
    name: "רועי ולנשטיין",
    title: "מומחה לשילוב כלי AI בעבודה פיננסית, מייסד קהילת AI-Finance",
    sector: "Ai לראיית חשבון",
    experience: "מומחה ליישום בינה מלאכותית בתהליכים פיננסיים בארגון.",
    portraitUrl: "/images/lect/roi-valnstein.png",
  },
  {
    id: "c5",
    name: "יוליה חביה",
    title: "מייסדת Happy Homes US",
    sector: "Ai לנדל״ן",
    experience: "מרצה מובילה בשילוב טכנולוגיה ובינה מלאכותית בתחומי השקעות נדל״ן.",
    portraitUrl: "/images/lect/yulia-chabia.jpeg",
  },
  {
    id: "c6",
    name: "מתן מכלוף",
    title: "מהנדס, ניהול פרויקטי בנייה גדולים",
    sector: "Ai להנדסה אזרחית",
    experience: "עתיר ידע וניסיון בשילוב טכנולוגיה ובינה מלאכותית בפרויקטים אזרחיים.",
    portraitUrl: "/images/lect/matan-makhluf.jpeg",
  },
];
