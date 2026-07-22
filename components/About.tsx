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
        <article className="surface-panel about-copy">
          <p className="lead-copy">
            {personalProfile.aboutSummary}
          </p>
          <p className="body-copy">
            Over the last {yearsOfExperience}+ years, I have worked across
            fintech, streaming, healthcare, government, automotive, education,
            and media systems. That breadth taught me how to adapt quickly,
            contribute in regulated environments, and deliver without lowering
            quality.
          </p>
          <p className="body-copy">
            I take features from planning to production: shaping the interface,
            building the API layer, handling data concerns, integrating payments
            or third-party services, and supporting deployment and monitoring
            after release.
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
              <strong>{personalProfile.location}</strong>
            </div>
            <div className="snapshot-row">
              <span>Preferred work</span>
              <strong>Full-time, contract, and freelance product work</strong>
            </div>
            <div className="snapshot-row">
              <span>Focus areas</span>
              <strong>Secure backends, scalable design, clean architecture</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
