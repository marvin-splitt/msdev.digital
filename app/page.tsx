import { LogoSection } from "@/components/logo-section";
import { HeroSection } from "@/components/hero-section";
import { BenefitsSection } from "@/components/benefits-section";
import { AboutSection } from "@/components/about-section";
import { QuoteSection } from "@/components/quote-section";
import { ServiceSection } from "@/components/service-section";
import { WorkflowSection } from "@/components/workflow-section";
import { UspSection } from "@/components/usp-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <BenefitsSection />
      <AboutSection />
      <QuoteSection />
      <ServiceSection />
      <WorkflowSection />
      <UspSection />
      {/* <div className="flex flex-row justify-center gap-6 mt-8 items-center">
        <Link href="https://www.linkedin.com/in/marvin-splitt/">
          <Image src={LinkedIn} height={24} width={24} alt="LinkedIn" />
        </Link>
        <Link href="https://twitter.com/marvinsplitt">
          <Image src={Twitter} height={24} width={24} alt="Twitter" />
        </Link>
        <Link href="https://github.com/marvin-splitt">
          <Image src={GitHub} height={24} width={24} alt="GitHub" />
        </Link>
      </div> */}
    </>
  );
}
