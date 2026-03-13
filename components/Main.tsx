import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiPlayFill } from "react-icons/ri";

import {
  personalProfile,
  recruiterSignals,
  recruiterStats,
} from "../data/portfolio";

const Main = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">{personalProfile.heroEyebrow}</p>
        <h1>{personalProfile.heroTitle}</h1>
        <p className="hero-summary">{personalProfile.heroSummary}</p>

        <div className="hero-actions">
          <Link href="/#projects" className="button-primary">
            View selected work
          </Link>
          <a href={personalProfile.resumeUrl} className="button-secondary">
            Download resume
          </a>
        </div>

        <div className="social-row">
          <a href={personalProfile.linkedinUrl} target="_blank" rel="noreferrer">
            <FaLinkedinIn size={18} />
            LinkedIn
          </a>
          <a href={personalProfile.githubUrl} target="_blank" rel="noreferrer">
            <FaGithub size={18} />
            GitHub
          </a>
          <Link href="/#contact">
            <AiOutlineMail size={18} />
            Contact
          </Link>
        </div>
      </div>

      <div className="hero-side">
        <div className="surface-panel spotlight-card">
          <div className="spotlight-header">
            <p className="eyebrow">Recruiter snapshot</p>
            <span className="spotlight-status">Open now</span>
          </div>

          <div className="snapshot-list">
            <div className="snapshot-row">
              <span>Location</span>
              <strong>{personalProfile.location}</strong>
            </div>
            <div className="snapshot-row">
              <span>Primary stack</span>
              <strong>Node.js, NestJS, Laravel, Next.js</strong>
            </div>
            <div className="snapshot-row">
              <span>Best fit</span>
              <strong>Product teams that need ownership across the stack</strong>
            </div>
          </div>

          <div className="spotlight-divider" />

          <ul className="signal-list">
            {recruiterSignals.map((signal) => (
              <li key={signal}>
                <RiPlayFill size={14} />
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-stat-grid">
          {recruiterStats.map((stat) => (
            <div key={stat.label} className="surface-panel stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
