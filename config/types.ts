type ProjectTag = {
  name: string;
  color: "default" | "orange" | "blue";
};

export type ProjectExcerpt = {
  title: string;
  description: string;
  timeRange: string;
  tags: ProjectTag[];
};
