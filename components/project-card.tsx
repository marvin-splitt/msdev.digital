import { ProjectExcerpt } from "@/config/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: ProjectExcerpt;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project: { title, description, timeRange, tags, ...rest },
}) => {
  return (
    <div
      {...rest}
      className="p-4 border border-black rounded-xl hover:rotate-1 transition-transform"
    >
      <p className="text-accent text-sm">{timeRange}</p>
      <h5 className="font-semibold text-2xl mt-2.5">{title}</h5>
      <p className="mt-2.5">{description}</p>
      <div className="mt-4 flex flex-row gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className={cn(
              "px-3.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-[#1363811A] text-accent-blue"
              // {
              //   "bg-[#1363811A] text-accent-blue": tag.color === "blue",
              //   "bg-[#D2572D1A] text-accent": tag.color === "orange",
              //   "bg-[#EEEEEE]": tag.color === "default",
              // }
            )}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};
