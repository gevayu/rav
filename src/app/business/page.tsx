import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BizHero } from "@/components/business/BizHero";
import { BizProblem } from "@/components/business/BizProblem";
import { BizPath } from "@/components/business/BizPath";
import { BizPackages } from "@/components/business/BizPackages";
import { BizRoi } from "@/components/business/BizRoi";
import { BizLogos } from "@/components/business/BizLogos";
import { BizProcess } from "@/components/business/BizProcess";
import { BizCaseStudies } from "@/components/business/BizCaseStudies";
import { BizFaq } from "@/components/business/BizFaq";
import { BizLead } from "@/components/business/BizLead";

export const metadata: Metadata = {
  title: "הכשרת Ai לארגונים",
  description:
    "תוכנית הכשרה ארגונית מובנית סביב הסקטור והתהליכים שלך - מאבחון אוטומציה דרך הטמעה מבוקרת ועד דו\"ח ROI. חבילות לצוותים של 10 עד 500+ עובדים. מכללה מפוקחת.",
  openGraph: {
    title: "הכשרת Ai לארגונים | המרכז הרב-תחומי להכשרות Ai",
    description:
      "הכשרה ארגונית מובנית סביב הסקטור שלך - מאבחון, הטמעה ודו\"ח ROI מדיד.",
    url: "/business",
    locale: "he_IL",
    type: "website",
  },
};

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <BizHero />
        <BizProblem />
        <BizPath />
        <BizPackages />
        <BizRoi />
        <BizLogos />
        <BizProcess />
        <BizCaseStudies />
        <BizFaq />
        <BizLead />
      </main>
      <Footer />
    </>
  );
}
