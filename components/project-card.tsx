type ProjectTag = {
  name: string;
  color: "default" | "orange" | "blue";
};

type ProjectCardProps = {
  title: string;
  description: string;
  timeRange: string;
  tags: ProjectTag[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  timeRange,
  tags,
}) => {
  return (
    <div className="p-4 border border-black rounded-xl">
      <p>{timeRange}</p>
      <h5>{title}</h5>
      <p>{description}</p>
      <div>
        {tags.map((tag) => (
          <span
            key={tag.name}
            className={`px-2 py-1 mr-2 text-sm rounded-full ${
              tag.color === "default"
                ? "bg-gray-300"
                : tag.color === "orange"
                ? "bg-orange-300"
                : "bg-blue-300"
            }`}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};
