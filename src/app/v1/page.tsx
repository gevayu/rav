import { Header } from "@/components-v1/layout/Header";
import { Footer } from "@/components-v1/layout/Footer";
import { Hero } from "@/components-v1/home/Hero";
import { SocialProofBar } from "@/components-v1/home/SocialProofBar";
import { AudienceRouter } from "@/components-v1/home/AudienceRouter";
import { BenefitsTriad } from "@/components-v1/home/BenefitsTriad";
import { SectorsGrid } from "@/components-v1/home/SectorsGrid";
import { ChampionsCarousel } from "@/components-v1/home/ChampionsCarousel";
import { CertificationShowcase } from "@/components-v1/home/CertificationShowcase";
import { FreeContent } from "@/components-v1/home/FreeContent";
import { LeadForm } from "@/components-v1/home/LeadForm";

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
