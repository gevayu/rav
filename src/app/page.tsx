// עמוד בית MVP — הגרסה הפעילה לאתר. הגיבוי לגרסה המלאה ב-src/app/_backup/page-full.tsx.

import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { PartnersCarousel } from "@/components/home/PartnersCarousel";
import { BenefitsTriad } from "@/components/home/BenefitsTriad";
import { SectorsGrid } from "@/components/home/SectorsGrid";
import { ChampionsCarousel } from "@/components/home/ChampionsCarousel";
import { CertificationShowcase } from "@/components/home/CertificationShowcase";
import { CommunityStrip } from "@/components/home/CommunityStrip";
import { LeadForm } from "@/components/home/LeadForm";

export const metadata: Metadata = {
  title: {
    absolute: "המרכז הרב-תחומי להכשרות Ai | התמקצעות סקטוריאלית בבינה מלאכותית",
  },
  description:
    "השלב הבא של Ai הוא התמקצעות. הכשרות סקטוריאליות לעורכי דין, רופאים, רואי חשבון, אנשי נדל\"ן, מהנדסים ואנשי תוכנה - בהובלת מומחים מובילים בתחומם. מכללה מפוקחת.",
  openGraph: {
    title: "המרכז הרב-תחומי להכשרות Ai | התמקצעות סקטוריאלית",
    description:
      "השלב הבא של Ai הוא התמקצעות. הכשרות מקצועיות לפי תחומי עיסוק - משפט, רפואה, פיננסים, נדל\"ן, הנדסה ותוכנה.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <SocialProofBar />
        <PartnersCarousel />
        <BenefitsTriad />
        <SectorsGrid />
        <ChampionsCarousel />
        <CertificationShowcase />
        <CommunityStrip />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
