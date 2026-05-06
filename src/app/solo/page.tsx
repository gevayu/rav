import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SoloHero } from "@/components/solo/SoloHero";
import { SoloPain } from "@/components/solo/SoloPain";
import { SoloSolution } from "@/components/solo/SoloSolution";
import { SoloDayInLife } from "@/components/solo/SoloDayInLife";
import { SoloAdvantages } from "@/components/solo/SoloAdvantages";
import { SoloPackage } from "@/components/solo/SoloPackage";
import { SoloQuote } from "@/components/solo/SoloQuote";
import { SoloPayment } from "@/components/solo/SoloPayment";
import { SoloFaq } from "@/components/solo/SoloFaq";
import { SoloCaseStudies } from "@/components/solo/SoloCaseStudies";
import { SoloLead } from "@/components/solo/SoloLead";

export const metadata: Metadata = {
  title: "הכשרת Ai לעצמאיים ופרילאנסרים",
  description:
    "הכשרות Ai סקטוריאליות לעצמאיים ופרילאנסרים - קורסים מובילים מהתחום שלך, במסלולי תשלום גמישים, עם אפשרות מענק ממשרד העבודה. ניסיון מעשי שמיתרגם להכנסה.",
  openGraph: {
    title: "הכשרת Ai לעצמאיים ופרילאנסרים | המרכז הרב-תחומי להכשרות Ai",
    description:
      "הכשרות סקטוריאליות לעצמאיים, בהובלת מומחים מהתחום שלך. מסלולי תשלום גמישים ואפשרות מענק.",
    url: "/solo",
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
