import { ProjectCard } from "../../../components/cards/ProjectCard";
import { SectionHeading } from "../../../components/ui/SectionHeading";
import { FadeIn } from "../../../components/ui/FadeIn";
import { useProjectsService } from "../services/useProjectsService";

export default function Projects() {
  const { featuredProjects } = useProjectsService();

  return (
    <section id="projects" className="section">
      <FadeIn>
        <SectionHeading
          eyebrow="PROJECTS"
          title="Featured Builds"
          description="A few products and platforms shipped with care for performance and usability."
        />
      </FadeIn>
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.08}>
            <ProjectCard project={project} variant="standard" />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
