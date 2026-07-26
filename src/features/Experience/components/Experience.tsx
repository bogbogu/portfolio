import { ExperienceCard } from "../../../components/cards/ExperienceCard";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { experience } from "../../../constants/experience";
import { profile } from "../../../constants/profile";
import { FadeIn } from "../../../components/ui/FadeIn";

export default function ExperienceSection() {
  const keystoneExperience = experience.find(
    (item) => item.company === "Keystone Bank",
  );
  void keystoneExperience;

  const homepageExperience = experience.filter(
    (item) => item.company !== "Keystone Bank",
  );

  return (
    <section id="experience" className="section">
      <FadeIn>
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Recent roles"
          description="Collaborative product work across enterprise and nonprofit teams."
        />
      </FadeIn>
      
        {keystoneExperience ? (
          <FadeIn delay={homepageExperience.length * 0.08}>
            <ExperienceCard experience={keystoneExperience} />
          </FadeIn>
        ) : null}
       
      <div className="section-grid">
        {homepageExperience.map((item, index) => (
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
