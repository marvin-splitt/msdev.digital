import { ProjectExcerpt } from "@/config/types";

type ProjectCardProps = {
  project: ProjectExcerpt;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project: { title, description, timeRange, tags },
}) => {
  return (
    <div className="p-4 border border-black rounded-xl">
      <p>{timeRange}</p>
      <h5 className="font-semibold text-2xl mt-2.5">{title}</h5>
      <p className="text-lg mt-2.5">{description}</p>
      <div className="mt-4 flex flex-row gap-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className={`px-3.5 py-1 rounded-full font-semibold ${
              tag.color === "default"
                ? "bg-[#EEEEEE]"
                : tag.color === "orange"
                ? "bg-[#D2572D1A] text-accent"
                : "bg-[#1363811A] text-accent-blue"
            }`}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};
