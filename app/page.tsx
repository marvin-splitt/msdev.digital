import { LogoSection } from "@/components/logo-section";
import { HeroSection } from "@/components/hero-section";
import { BenefitsSection } from "@/components/benefits-section";
import { AboutSection } from "@/components/about-section";
import { QuoteSection } from "@/components/quote-section";
import { ServiceSection } from "@/components/service-section";
import { WorkflowSection } from "@/components/workflow-section";
import { UspSection } from "@/components/usp-section";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { ProjectSection } from "@/components/project-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <BenefitsSection />
      <AboutSection />
      <QuoteSection />
      <ServiceSection />
      <ProjectSection />
      <WorkflowSection />
      <UspSection />
      <FaqSection />
      <CtaSection />
      <LogoSection />
    </>
  );
}
