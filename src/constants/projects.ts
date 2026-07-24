import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    title: "Broad Shoulders Tribe",
    description:
      "Responsive nonprofit website focused on social impact storytelling, accessibility, and performance.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MSSQL",
      "Cloudinary",
    ],
    image: "/assets/images/broad-shoulders-tribe.png.webp",
    github: "https://github.com/bogbogu",
    liveDemo: "https://broadshoulderstribe.org/",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    description:
      "A personal portfolio designed for discoverability, clear project storytelling, and conversion-focused contact flows.",
    technologies: ["TypeScript", "React", "Vite", "Framer Motion", "CSS"],
    image: "/assets/images/broad-shoulders-tribe.png.webp",
    github: "https://github.com/bogbogu/portfolio",
    liveDemo: "https://bogbogu.github.io/portfolio/",
    featured: true,
  },
  {
    title: "Maintenance Landing Experience",
    description:
      "A lightweight maintenance and countdown page with clear status communication and branded social updates.",
    technologies: ["HTML", "CSS", "JavaScript", "Accessibility"],
    image: "/assets/images/broad-shoulders-tribe.png.webp",
    github: "https://github.com/bogbogu",
    liveDemo: "https://bogbogu.github.io/portfolio/legacy-static/page.html",
    featured: false,
  },
];
