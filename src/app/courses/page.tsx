import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CatalogPage } from "./CatalogPage";

export const metadata: Metadata = {
  title: "קטלוג הקורסים",
  description:
    "כל קורסי ה-Ai הסקטוריאליים של המרכז הרב-תחומי להכשרות Ai - לעורכי דין, רופאים, אנשי כספים, מהנדסים, מפתחי תוכנה ועוד. סינון לפי תחום, רמה ופורמט.",
  openGraph: {
    title: "קטלוג הקורסים | המרכז הרב-תחומי להכשרות Ai",
    description:
      "קורסים שנכתבו על-ידי אנשי מקצוע פעילים - עם דוגמאות מהיומיום שלך, תיק פרויקטים אמיתי וליווי אישי.",
    locale: "he_IL",
    type: "website",
  },
};

export default function CoursesRoutePage() {
  return (
    <>
      <Header />
      <CatalogPage />
      <Footer />
    </>
  );
}
