import { SkillGroupCard } from "../../../components/cards/SkillGroupCard";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { skills } from "../../../constants/skills";
import { FadeIn } from "../../../components/ui/FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <FadeIn>
        <SectionHeading
          eyebrow="SKILLS"
          title="Technical toolkit"
          description="Grouped by area to show range and depth across the stack."
        />
      </FadeIn>
      <div className="skills-grid">
        {skills.map((group, index) => (
          <FadeIn key={group.category} delay={index * 0.06}>
            <SkillGroupCard group={group} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
