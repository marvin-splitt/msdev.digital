import { projects } from "@/config/projects";
import { ProjectCard } from "./project-card";
import { SectionWrapper } from "./section-wrapper";

export const ProjectSection: React.FC = () => {
  return (
    <SectionWrapper title="Recent projects">
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
