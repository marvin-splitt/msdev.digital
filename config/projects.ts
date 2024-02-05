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

export const projects: ProjectExcerpt[] = [
  {
    title: "Keeep.app",
    timeRange: "2023 - Present",
    description:
      "With Keeep.app we want to build a CRM SaaS focused on helping Freelancers create an maintain relationships with their peers.",
    tags: [
      { name: "Personal", color: "orange" },
      { name: "MVP Development", color: "default" },
      { name: "User Research", color: "default" },
    ],
  },
];
