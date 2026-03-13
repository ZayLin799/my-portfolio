import ProjectItem from "./ProjectItem";
import { projects } from "../data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2>Case studies that show product thinking, not just screenshots.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectItem key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
