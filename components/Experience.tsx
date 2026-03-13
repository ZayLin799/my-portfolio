import { useState } from "react";
import { certifications, education, experiences } from "../data/portfolio";

const Experience = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const activeExperience = experiences[activeTabIndex];

  return (
    <section id="experience" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Career path focused on production software, not tutorial projects.</h2>
      </div>

      <div className="experience-layout">
        <div className="tabs-container surface-panel">
          <div className="tabs-sidebar">
            {experiences.map((item, index) => (
              <button
                key={`${item.company}-${item.period}`}
                className={`tab-btn ${activeTabIndex === index ? "active" : ""}`}
                onClick={() => setActiveTabIndex(index)}
              >
                {item.company}
              </button>
            ))}
          </div>
          
          <div className="tab-content">
            <article className="timeline-card">
              <div className="timeline-header">
                <div>
                  <p className="timeline-period">{activeExperience.period}</p>
                  <h3>{activeExperience.role}</h3>
                </div>
                <div className="timeline-company">
                  <strong>{activeExperience.company}</strong>
                  <span>{activeExperience.location}</span>
                </div>
              </div>
              <ul className="detail-list">
                {activeExperience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <aside className="credential-column">
          <div className="surface-panel credential-card">
            <p className="eyebrow">Education</p>
            <div className="credential-list">
              {education.map((item) => (
                <div key={item.title} className="credential-item">
                  <span>{item.year}</span>
                  <strong>{item.title}</strong>
                  <p>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel credential-card">
            <p className="eyebrow">Certifications</p>
            <div className="credential-list">
              {certifications.map((item) => (
                <div key={item.title} className="credential-item">
                  <span>{item.year}</span>
                  <strong>{item.title}</strong>
                  <p>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Experience;
