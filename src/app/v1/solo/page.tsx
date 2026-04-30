import type { Metadata } from "next";
import { Header } from "@/components-v1/layout/Header";
import { Footer } from "@/components-v1/layout/Footer";
import { SoloHero } from "@/components-v1/solo/SoloHero";
import { SoloPain } from "@/components-v1/solo/SoloPain";
import { SoloSolution } from "@/components-v1/solo/SoloSolution";
import { SoloDayInLife } from "@/components-v1/solo/SoloDayInLife";
import { SoloAdvantages } from "@/components-v1/solo/SoloAdvantages";
import { SoloPackage } from "@/components-v1/solo/SoloPackage";
import { SoloQuote } from "@/components-v1/solo/SoloQuote";
import { SoloPayment } from "@/components-v1/solo/SoloPayment";
import { SoloFaq } from "@/components-v1/solo/SoloFaq";
import { SoloCaseStudies } from "@/components-v1/solo/SoloCaseStudies";
import { SoloLead } from "@/components-v1/solo/SoloLead";

export const metadata: Metadata = {
  title: "לעצמאיים ופרילאנסרים | המרכז הרב-תחומי להכשרות Ai",
  description:
    "הכשרות Ai סקטוריאליות לעצמאיים - קורסים שמועברים על ידי אנשי מקצוע מהתחום שלך, במסלולי תשלום גמישים.",
  openGraph: {
    title: "לעצמאיים ופרילאנסרים | המרכז הרב-תחומי להכשרות Ai",
    description:
      "הכשרות Ai סקטוריאליות לעצמאיים - קורסים שמועברים על ידי אנשי מקצוע מהתחום שלך.",
    locale: "he_IL",
    type: "website",
  },
};

export default function SoloPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <SoloHero />
        <SoloPain />
        <SoloSolution />
        <SoloDayInLife />
        <SoloAdvantages />
        <SoloPackage />
        <SoloQuote />
        <SoloPayment />
        <SoloFaq />
        <SoloCaseStudies />
        <SoloLead />
      </main>
      <Footer />
    </>
  );
}
