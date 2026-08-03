import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    title: "Jobton",
    description:
      "A modern job platform that connects job seekers with employers through a fast, intuitive, and mobile-first experience. Built with a scalable architecture focused on usability, performance, and future growth.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB"],
      image: "https://res.cloudinary.com/a9tmreyq/image/upload/v1785625577/jobton_mccx57.png",
      github: "https://github.com/bogbogu",
      liveDemo: "https://jobton-eosin.vercel.app/",
      featured : true,
  },
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
    image:
      "https://res.cloudinary.com/a9tmreyq/image/upload/v1785047884/broad-shoulders-tribe.png_g4rzom.webp",
    github: "https://github.com/bogbogu",
    liveDemo: "https://broadshoulderstribe.org/",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    description:
      "A personal portfolio designed for discoverability, clear project storytelling, and conversion-focused contact flows.",
    technologies: ["TypeScript", "React", "Vite", "Framer Motion", "CSS"],
    image:
      "https://res.cloudinary.com/a9tmreyq/image/upload/v1785624627/portfolio_xephaz.png",
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
