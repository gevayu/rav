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
// Real instructor photos are spread throughout; randomuser IDs are kept in the
// European/Mediterranean range (< 60) to avoid East-Asian and very dark-skinned
// photos that appear in the higher-numbered randomuser.me datasets.
export const heroGridInstructors = [
  { id: "real-sarah",  url: "/images/lect/sarah-cohen.jpeg" },
  { id: "hero-m-1",   url: p("men",    8) },
  { id: "hero-w-1",   url: p("women",  5) },
  { id: "hero-m-2",   url: p("men",   14) },
  { id: "hero-w-2",   url: p("women", 11) },
  { id: "hero-m-3",   url: p("men",   20) },
  { id: "real-esti",  url: "/images/lect/esti-tachover.jpeg" },
  { id: "hero-w-3",   url: p("women", 17) },
  { id: "hero-m-4",   url: p("men",   26) },
  { id: "hero-w-4",   url: p("women", 23) },
  { id: "hero-m-5",   url: p("men",   32) },
  { id: "hero-w-5",   url: p("women", 29) },
  { id: "hero-m-6",   url: p("men",   38) },
  { id: "real-tal",   url: "/images/lect/tal-valnstein.png" },
  { id: "hero-w-6",   url: p("women", 35) },
  { id: "hero-m-7",   url: p("men",   44) },
  { id: "hero-w-7",   url: p("women", 41) },
  { id: "hero-m-8",   url: p("men",   50) },
  { id: "hero-w-8",   url: p("women", 47) },
  { id: "hero-m-9",   url: p("men",    5) },
  { id: "real-roi",   url: "/images/lect/roi-valnstein.png" },
  { id: "hero-w-9",   url: p("women",  2) },
  { id: "hero-m-10",  url: p("men",   11) },
  { id: "hero-w-10",  url: p("women",  8) },
  { id: "hero-m-11",  url: p("men",   17) },
  { id: "hero-w-11",  url: p("women", 14) },
  { id: "hero-m-12",  url: p("men",   23) },
  { id: "real-yulia", url: "/images/lect/yulia-chabia.jpeg" },
  { id: "hero-w-12",  url: p("women", 20) },
  { id: "hero-m-13",  url: p("men",   29) },
  { id: "hero-w-13",  url: p("women", 26) },
  { id: "hero-m-14",  url: p("men",   35) },
  { id: "hero-w-14",  url: p("women", 32) },
  { id: "hero-m-15",  url: p("men",   41) },
  { id: "real-matan", url: "/images/lect/matan-makhluf.jpeg" },
  { id: "hero-w-15",  url: p("women", 38) },
  { id: "hero-m-16",  url: p("men",   47) },
  { id: "hero-w-16",  url: p("women", 44) },
  { id: "hero-m-17",  url: p("men",   53) },
  { id: "hero-w-17",  url: p("women", 50) },
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
