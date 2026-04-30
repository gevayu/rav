import type { Metadata } from "next";
import { Header } from "@/components-v1/layout/Header";
import { Footer } from "@/components-v1/layout/Footer";
import { BizHero } from "@/components-v1/business/BizHero";
import { BizProblem } from "@/components-v1/business/BizProblem";
import { BizPath } from "@/components-v1/business/BizPath";
import { BizPackages } from "@/components-v1/business/BizPackages";
import { BizRoi } from "@/components-v1/business/BizRoi";
import { BizLogos } from "@/components-v1/business/BizLogos";
import { BizProcess } from "@/components-v1/business/BizProcess";
import { BizCaseStudies } from "@/components-v1/business/BizCaseStudies";
import { BizFaq } from "@/components-v1/business/BizFaq";
import { BizLead } from "@/components-v1/business/BizLead";

export const metadata: Metadata = {
  title: "לארגונים | המרכז הרב-תחומי להכשרות Ai",
  description:
    "הכשרה ארגונית מובנית סביב הסקטור שלך - מאבחון ועד דו\"ח ROI. חבילות לצוותים של 10 עד 500+ עובדים.",
  openGraph: {
    title: "לארגונים | המרכז הרב-תחומי להכשרות Ai",
    description:
      "הכשרה ארגונית מובנית סביב הסקטור שלך - מאבחון ועד דו\"ח ROI.",
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
