import type { Experience } from "../../types/Experience";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="experience-card">
      <p className="experience-period">{experience.period}</p>
      <div className="experience-main">
        <h3>
          {experience.role} ·{" "}
          <a className="arrow-link" href={experience.companyUrl} target="_blank" rel="noreferrer">
            {experience.company}
            <span className="link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </h3>
        <p>{experience.summary}</p>
        <ul className="chip-list">
          {experience.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
