import type { SkillCategory } from "../../types/Skill";

interface SkillGroupCardProps {
  group: SkillCategory;
}

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  return (
    <article className="skill-group-card">
      <h3>{group.category}</h3>
      <ul>
        {group.items.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
