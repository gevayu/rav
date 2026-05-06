import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CatalogPage } from "./CatalogPage";

export const metadata: Metadata = {
  title: "קטלוג הקורסים",
  description:
    "כל קורסי ה-Ai הסקטוריאליים של המרכז הרב-תחומי להכשרות Ai - לעורכי דין, רופאים, רואי חשבון, אנשי נדל\"ן, מהנדסים ומפתחי תוכנה. סינון לפי תחום מקצועי, דרגת הסמכה ופורמט הקורס.",
  openGraph: {
    title: "קטלוג הקורסים | המרכז הרב-תחומי להכשרות Ai",
    description:
      "קורסים שנכתבו ומועברים על-ידי אנשי מקצוע פעילים - עם דוגמאות מהיומיום שלך, תיק פרויקטים אמיתי וליווי אישי.",
    url: "/courses",
    locale: "he_IL",
    type: "website",
  },
};

export default function CoursesRoutePage() {
  return (
    <>
      <Header forceDark />
      <CatalogPage />
      <Footer />
    </>
  );
}
