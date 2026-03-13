import Image from "next/image";

import { personalProfile } from "../data/portfolio";

const About = () => {
  const yearsOfExperience = Math.floor(
    (new Date().getTime() - new Date(2020, 5).getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <section id="about" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Built for teams that need execution, ownership, and calm delivery.</h2>
      </div>

      <div className="about-grid">
        <article 
          className="surface-panel about-copy"
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem", height: "100%" }}
        >
          <p className="lead-copy">
            {personalProfile.aboutSummary}
          </p>
          <p className="body-copy">
            Over the last {yearsOfExperience}+ years, I have worked on systems for
            investment products, national-scale data collection, healthcare
            operations, e-commerce, and service businesses. That range matters
            because it taught me how to adapt quickly without lowering quality.
          </p>
          <p className="body-copy">
            I am comfortable taking a feature from planning to production:
            shaping the interface, building the API layer, handling data
            concerns, and supporting deployment and monitoring after release.
          </p>

          <div style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid rgba(22, 33, 27, 0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--accent)" }}>WANT TO DIG DEEPER?</span>
              </div>
              <div className="contact-links" style={{ display: "flex", gap: "1.25rem" }}>
                <a href={personalProfile.githubUrl} target="_blank" rel="noreferrer" className="text-link">
                  Open GitHub
                </a>
                <a href={personalProfile.resumeUrl} className="text-link">
                  View PDF Resume
                </a>
              </div>
            </div>
          </div>
        </article>

        <aside className="surface-panel profile-card">
          <div className="profile-image-wrap">
            <Image
              src={personalProfile.aboutImage}
              alt={personalProfile.name}
              className="profile-image"
            />
          </div>
          <div className="profile-copy">
            <h3>{personalProfile.name}</h3>
            <p>{personalProfile.title}</p>
          </div>
          <div className="snapshot-list">
            <div className="snapshot-row">
              <span>Current base</span>
              <strong>Thailand (open to work anywhere)</strong>
            </div>
            <div className="snapshot-row">
              <span>Preferred work</span>
              <strong>All full-time roles</strong>
            </div>
            <div className="snapshot-row">
              <span>Focus areas</span>
              <strong>Modernization, product delivery, platform reliability</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
