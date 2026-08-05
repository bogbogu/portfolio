import type { SkillCategory } from "../types/Skill";

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "C#", "PHP", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Vue 3",
      "Vite",
      "Framer Motion",
      "Razor",
      "jQuery",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "ASP.NET MVC",
      "Laravel",
      "REST APIs",
      "MSSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions (CI/CD)",
      "Figma",
      "Cloudinary",
      "VS Code",
    ],
  },
];
