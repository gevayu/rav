import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { AudienceRouter } from "@/components/home/AudienceRouter";
import { BenefitsTriad } from "@/components/home/BenefitsTriad";
import { SectorsGrid } from "@/components/home/SectorsGrid";
import { ChampionsCarousel } from "@/components/home/ChampionsCarousel";
import { CertificationShowcase } from "@/components/home/CertificationShowcase";
import { FreeContent } from "@/components/home/FreeContent";
import { LeadForm } from "@/components/home/LeadForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <SocialProofBar />
        <AudienceRouter />
        <BenefitsTriad />
        <SectorsGrid />
        <ChampionsCarousel />
        <CertificationShowcase />
        <FreeContent />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
