import { profile } from "../../../constants/profile";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { FadeIn } from "../../../components/ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="section">
      <FadeIn>
        <div>
          <SectionHeading
            eyebrow="ABOUT"
            title="Designing interfaces people trust"
            description={profile.shortBio}
          />
          <div className="stack-text">
            {profile.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
