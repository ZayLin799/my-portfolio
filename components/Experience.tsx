import { KeyboardEvent, useRef, useState } from "react";
import { certifications, education, experiences } from "../data/portfolio";

const Experience = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeExperience = experiences[activeTabIndex];

  // Arrow keys, Home and End move between tabs, per the WAI-ARIA tabs pattern.
  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = experiences.length - 1;
    const next =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? activeTabIndex === last ? 0 : activeTabIndex + 1
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? activeTabIndex === 0 ? last : activeTabIndex - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;

    if (next === null) return;
    event.preventDefault();
    setActiveTabIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="experience" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Career path across production web, mobile, and platform systems.</h2>
      </div>

      <div className="experience-layout">
        <div className="tabs-container surface-panel">
          <div className="tabs-sidebar" role="tablist" aria-label="Employers">
            {experiences.map((item, index) => (
              <button
                key={`${item.company}-${item.period}`}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`experience-tab-${index}`}
                aria-selected={activeTabIndex === index}
                aria-controls="experience-panel"
                tabIndex={activeTabIndex === index ? 0 : -1}
                className={`tab-btn ${activeTabIndex === index ? "active" : ""}`}
                onClick={() => setActiveTabIndex(index)}
                onKeyDown={onTabKeyDown}
              >
                {item.company}
              </button>
            ))}
          </div>
          
          <div
            className="tab-content"
            role="tabpanel"
            id="experience-panel"
            aria-labelledby={`experience-tab-${activeTabIndex}`}
            tabIndex={0}
          >
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
