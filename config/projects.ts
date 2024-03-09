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
  // {
  //   title: "Lazy.so",
  //   timeRange: "Mar. 2024 - Present",
  //   description:
  //     "I joined Lazy's core team as a freelance product engineer to help them increase the development velocity....",
  //   tags: [
  //     { name: "Freelance", color: "default" },
  //     { name: "Startup", color: "default" },
  //     { name: "Product Engineering", color: "default" },
  //     { name: "Web App", color: "default" },
  //     { name: "Desktop", color: "default" },
  //     { name: "Performance Improvement", color: "default" },
  //     { name: "Artificial Intelligence", color: "default" },
  //   ],
  // },
  {
    title: "Keeep.app",
    timeRange: "Nov. 2023 - Present",
    description:
      "Development of a CRM SaaS, designed specifically for freelancers and small agencies. Complete development of prototype and MVP, including roadmap planning & user interviews.",
    tags: [
      { name: "Personal", color: "default" },
      { name: "MVP Development", color: "default" },
      { name: "User Research", color: "default" },
      { name: "Web App", color: "default" },
      { name: "Product Engineering", color: "default" },
      { name: "SaaS", color: "default" },
    ],
  },
  {
    title: "Digitalsocial.id",
    timeRange: "Jun. 2023 - Present",
    description:
      "Development lead for an identity & reputation management platform in the web3 space. Guided the startup from pivot to launching the MVP for 1000+ early alpha users.",
    tags: [
      { name: "Freelance", color: "default" },
      { name: "Startup", color: "default" },
      { name: "MVP Development", color: "default" },
      { name: "Prototyping", color: "default" },
      { name: "User Research", color: "default" },
      { name: "Product Engineering", color: "default" },
      { name: "Web App", color: "default" },
      { name: "Web3", color: "default" },
    ],
  },
  {
    title: "Yello",
    timeRange: "May 2023 - Okt. 2023",
    description:
      "Design and implement a gamification module inside the existing Frontify environment to playfully communicate the Yello brand and its aspects.",
    tags: [
      { name: "Freelance", color: "default" },
      { name: "Prototyping", color: "default" },
      { name: "Gamification", color: "default" },
      { name: "Product Engineering", color: "default" },
      { name: "Web App", color: "default" },
      { name: "Frontify", color: "default" },
    ],
  },
  {
    title: "Weindomaine",
    timeRange: "Okt. 2021 - Sep. 2022",
    description:
      "Together with a small team, I worked on the complete relaunch of the webshop leading to a signifanct increase in performance and user experience which also resulted in a higher conversion rate.",
    tags: [
      { name: "Freelance", color: "default" },
      { name: "Relaunch", color: "default" },
      { name: "Webshop", color: "default" },
      { name: "Product Engineering", color: "default" },
      { name: "Web App", color: "default" },
      { name: "Headless Commerce", color: "default" },
    ],
  },
];
