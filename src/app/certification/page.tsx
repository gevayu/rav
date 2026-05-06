import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CertHero } from "@/components/certification/CertHero";
import { CertTiers } from "@/components/certification/CertTiers";
import { CertMovementPath } from "@/components/certification/CertMovementPath";
import { CertValue } from "@/components/certification/CertValue";
import { CertValidity } from "@/components/certification/CertValidity";
import { CertQuotes } from "@/components/certification/CertQuotes";
import { CertOrganizations } from "@/components/certification/CertOrganizations";
import { CertFaq } from "@/components/certification/CertFaq";

export const metadata: Metadata = {
  title: "מדרג ההסמכה Ai01 / Ai03 / Ai05",
  description:
    "שלוש דרגות מדרג ההסמכה ממכללה מפוקחת - Ai01 יסוד, Ai03 התמחות מקצועית, Ai05 יישום ארגוני. תעודות שמסמנות יכולות אמיתיות בשוק העבודה, עם תוכנית חידוש שנתית.",
  openGraph: {
    title: "מדרג ההסמכה | המרכז הרב-תחומי להכשרות Ai",
    description:
      "שלוש דרגות מדרג ההסמכה - Ai01, Ai03, Ai05. תעודות ממכללה מפוקחת עם תוכנית חידוש שנתית.",
    url: "/certification",
    locale: "he_IL",
    type: "website",
  },
};

export default function CertificationPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <CertHero />
        <CertTiers />
        <CertMovementPath />
        <CertValue />
        <CertValidity />
        <CertQuotes />
        <CertOrganizations />
        <CertFaq />
      </main>
      <Footer />
    </>
  );
}
