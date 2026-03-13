import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import type { ProjectCaseStudy } from "../data/portfolio";

interface CaseStudyPageProps {
  project: ProjectCaseStudy;
}

const CaseStudyPage = ({ project }: CaseStudyPageProps) => {
  return (
    <main className="case-study-shell">
      <section className="case-study-hero">
        <div className="case-study-hero-copy">
          <p className="eyebrow">{project.heroLabel}</p>
          <h1>{project.title}</h1>
          <p className="case-study-tagline">{project.tagline}</p>
          <div className="case-study-meta-grid">
            <div className="info-tile">
              <span>Role</span>
              <strong>{project.role}</strong>
            </div>
            <div className="info-tile">
              <span>Engagement</span>
              <strong>{project.engagement}</strong>
            </div>
            <div className="info-tile">
              <span>Company</span>
              <strong>{project.company}</strong>
            </div>
            <a
              className="info-tile info-link"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>Live site</span>
              <strong>
                Visit project <AiOutlineArrowRight size={16} />
              </strong>
            </a>
          </div>
        </div>

        <div className="case-study-visual">
          <div className="case-study-image-frame">
            <Image
              src={project.image}
              alt={project.title}
              priority
              className="case-study-image"
            />
          </div>
        </div>
      </section>

      <section className="case-study-body">
        <div className="case-study-main">
          <article className="surface-panel">
            <p className="eyebrow">Project overview</p>
            <h2>What the product needed</h2>
            <p className="body-copy">{project.summary}</p>
          </article>

          <article className="surface-panel">
            <p className="eyebrow">Outcomes</p>
            <h2>Why this work matters</h2>
            <ul className="detail-list">
              {project.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="surface-panel">
            <p className="eyebrow">Responsibilities</p>
            <h2>What I handled</h2>
            <ul className="detail-list">
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <aside className="case-study-side">
          <div className="surface-panel sticky-panel">
            <p className="eyebrow">Stack</p>
            <h3>Technology used</h3>
            <div className="chip-cloud">
              {project.stack.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <div className="back-link-wrap" style={{ paddingBottom: "5rem" }}>
        <Link href="/#projects" className="back-link">
          <AiOutlineArrowLeft size={18} />
          Back to selected work
        </Link>
      </div>
    </main>
  );
};

export default CaseStudyPage;
