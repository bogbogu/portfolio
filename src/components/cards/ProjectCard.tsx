import { motion } from "framer-motion";
import type { Project } from "../../types/Project";

interface ProjectCardProps {
  project: Project;
  variant?: "feature" | "standard";
}

export function ProjectCard({ project, variant = "standard" }: ProjectCardProps) {
  return (
    <motion.article
      className={`project-card project-card--${variant}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        width={360}
        height={220}
      />
      <div className="project-content">
        <h3>
          <a className="arrow-link" href={project.liveDemo} target="_blank" rel="noreferrer">
            {project.title}
            <span className="link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </h3>
        <p>{project.description}</p>
        <ul className="chip-list">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <a className="arrow-link" href={project.github} target="_blank" rel="noreferrer">
            GitHub
            <span className="link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <a className="arrow-link" href={project.liveDemo} target="_blank" rel="noreferrer">
            Live Demo
            <span className="link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
