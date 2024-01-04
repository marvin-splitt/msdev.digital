import Image, { StaticImageData } from "next/image";
import AnalysisIcon from "@/public/workflow/analysis.svg";
import TargetGroupIcon from "@/public/workflow/target-group.svg";
import RoadmapIcon from "@/public/workflow/roadmap.svg";
import MvpIcon from "@/public/workflow/mvp.svg";
import ImplementationIcon from "@/public/workflow/implementation.svg";

type WorkflowStep = {
  title: string;
  description: string;
  image: StaticImageData;
};

const workflowSteps: WorkflowStep[] = [
  {
    title: "Analysis",
    description:
      "Together we identify opportunities and pain points for your product in line with your vision and the market.",
    image: AnalysisIcon,
  },
  {
    title: "Validate target group",
    description:
      "User feedback is integrated into the product strategy to ensure that the MVP is perfectly tailored to the needs of your target group.",
    image: TargetGroupIcon,
  },
  {
    title: "Build a roadmap",
    description:
      "We create a clear roadmap for your project, which serves as a transparent guide for structured implementation.",
    image: RoadmapIcon,
  },
  {
    title: "Define MVP Specs",
    description:
      "Clearly defined requirements for your MVP enable a streamlined development process for a fast market launch.",
    image: MvpIcon,
  },
  {
    title: "Implementation",
    description:
      "Through structured and iterative development cycles, we build the features that are most important to your users and thus create a product that they really love.",
    image: ImplementationIcon,
  },
];

export const WorkflowSection: React.FC = () => {
  return (
    <div className="container flex flex-col items-center">
      <h2 className="font-semibold text-2xl md:text-4xl text-center max-w-3xl">
        What a collaboration could look like
      </h2>
      <p className="max-w-3xl text-center text-lg md:text-xl mt-5">
        Each project is unique, however a typical workflow could look like
        this...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-5 mt-10 w-full">
        {workflowSteps.map((step) => (
          <div key={step.title} className="flex flex-col">
            <Image
              src={step.image}
              alt={step.title}
              className="h-16 w-fit object-contain"
            />

            <p className="font-semibold text-lg md:text-xl mt-3">
              {step.title}
            </p>

            <p className="mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
