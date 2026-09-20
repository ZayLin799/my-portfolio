import Image from "next/image";

import { personalProfile } from "../data/portfolio";

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Built for teams that need execution, ownership, and calm delivery.</h2>
      </div>

      <div className="about-grid">
        <article className="surface-panel about-copy">
          <p className="lead-copy">
            {personalProfile.aboutSummary}
          </p>
          <p className="body-copy">
            Over the last 5+ years, I have delivered business
            applications across Myanmar, Singapore, and Thailand for fintech,
            automotive, healthcare, government, and telecom teams.
          </p>
          <p className="body-copy">
            I take features from planning to production: shaping the interface,
            building secure APIs, handling data concerns, integrating local and
            international payments or third-party services, and supporting
            deployment, monitoring, and troubleshooting after release.
          </p>

          <div className="about-cta">
            <div className="about-cta-inner">
              <div className="about-cta-label">
                <span>WANT TO DIG DEEPER?</span>
              </div>
              <div className="contact-links about-links">
                <a href={personalProfile.githubUrl} target="_blank" rel="noreferrer" className="text-link">
                  Open GitHub
                </a>
                <a
                  href={personalProfile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
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
              <span>Work preference</span>
              <strong>Remote and international teams</strong>
            </div>
            <div className="snapshot-row">
              <span>Preferred work</span>
              <strong>Full-time, contract, and freelance product work</strong>
            </div>
            <div className="snapshot-row">
              <span>Focus areas</span>
              <strong>Full-cycle delivery, secure APIs, production reliability</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
