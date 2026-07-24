import { projects } from "../../../constants/projects";

export function useProjectsService() {
  const featuredProjects = projects.filter((project) => project.featured);

  return {
    featuredProjects,
    allProjects: projects,
  };
}
