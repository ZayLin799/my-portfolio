import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

import type { ProjectCaseStudy } from "../data/portfolio";

interface ProjectItemProps {
  project: ProjectCaseStudy;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <article className="surface-panel project-card">
      <div className="project-image-wrap">
        <Image src={project.image} alt={project.title} className="project-image" />
      </div>

      <div className="project-copy">
        <div className="project-heading">
          <p className="eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="body-copy">{project.tagline}</p>
        </div>

        <ul className="detail-list compact-list">
          {project.outcomes.slice(0, 2).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="chip-cloud compact-cloud">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="skill-chip">
              {item}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <Link href={`/${project.slug}`} className="text-link">
            Read case study
          </Link>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link">
            Visit live site
            <AiOutlineArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
