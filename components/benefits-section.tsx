import DevelopmentIcon from "@/public/benefits/development.svg";
import AgencyIcon from "@/public/benefits/agency-overhead.svg";
import ProductVisionIcon from "@/public/benefits/product-vision.svg";
import ShortCyclesIcon from "@/public/benefits/short-cycles.svg";
import SparringPartnerIcon from "@/public/benefits/sparring-partner.svg";
import UxKnowledgeIcon from "@/public/benefits/ux-knowledge.svg";
import Image, { StaticImageData } from "next/image";

type Benefit = {
  title: string;
  description: string;
  image: StaticImageData;
};

const benefits: Benefit[] = [
  {
    title: "Development power",
    description: "Do you want to implement high-quality features quickly?",
    image: DevelopmentIcon,
  },
  {
    title: "Strategic sparring partner",
    description:
      "Are you looking for strategic support on the way to a market-ready prototype?",
    image: SparringPartnerIcon,
  },
  {
    title: "Product vision",
    description:
      "Do you want to align technical decisions with strategic goals and develop features that users really love?",
    image: ProductVisionIcon,
  },
  {
    title: "UX knowledge",
    description: "Do you want to make user-centered, data-driven decisions?",
    image: UxKnowledgeIcon,
  },
  {
    title: "No agency overhead",
    description:
      "Do you want efficient use of resources for features that are actually worth it? ",
    image: AgencyIcon,
  },
  {
    title: "Short cycles",
    description: "Do you want fast feedback and iterative improvements?",
    image: ShortCyclesIcon,
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <div className="container text-center flex flex-col items-center">
      <h2 className="md:text-4xl font-semibold text-2xl max-w-3xl">
        You don&apos;t just need a developer to build new features
      </h2>
      <p className="mt-5 md:text-xl text-lg max-w-3xl">
        You need a product-minded sparring partner who can turn your product
        vision into production-ready features - no matter if you want to quickly
        validate an idea or build new features on top of your core product.
      </p>
      <div className="grid grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-8 sm:gap-24 mt-16 ">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex flex-col items-center gap-2">
            <Image
              src={benefit.image}
              alt={benefit.title}
              className="object-contain w-18 h-18"
            />
            <h3 className="font-semibold text-lg">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
