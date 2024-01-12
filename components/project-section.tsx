import { ProjectExcerpt } from "@/config/types";
import { ProjectCard } from "./project-card";
import { SectionWrapper } from "./section-wrapper";

const sampleProject: ProjectExcerpt = {
  title: "Name des Projektes",
  description: "Dieses Projekt ist in Zusammenarbeit mit XY entstanden.",
  timeRange: "Januar 2023 - Heute",
  tags: [
    { name: "React", color: "blue" },
    { name: "Next.js", color: "default" },
    { name: "Tailwind CSS", color: "orange" },
  ],
};

export const ProjectSection: React.FC = () => {
  return (
    <SectionWrapper className="!pt-0">
      <ProjectCard project={sampleProject} />
    </SectionWrapper>
  );
};
