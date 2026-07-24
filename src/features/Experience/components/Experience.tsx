import { ExperienceCard } from "../../../components/cards/ExperienceCard";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { experience } from "../../../constants/experience";
import { profile } from "../../../constants/profile";
import { FadeIn } from "../../../components/ui/FadeIn";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <FadeIn>
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Recent roles"
          description="Collaborative product work across enterprise and nonprofit teams."
        />
      </FadeIn>
      <div className="section-grid">
        {experience.map((item, index) => (
          <FadeIn key={`${item.company}-${item.period}`} delay={index * 0.08}>
            <ExperienceCard experience={item} />
          </FadeIn>
        ))}
      </div>
      <a className="resume-link" href={profile.resumeUrl} target="_blank" rel="noreferrer">
        View full resume
        <span className="link-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </section>
  );
}
