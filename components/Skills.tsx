import { capabilityGroups, toolbelt } from "../data/portfolio";

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Capabilities</p>
        <h2>What I can own across a product team.</h2>
      </div>

      <div className="capability-grid">
        {capabilityGroups.map((group) => (
          <article key={group.title} className="surface-panel capability-card">
            <h3>{group.title}</h3>
            <p className="body-copy">{group.summary}</p>
            <ul className="detail-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="surface-panel toolbelt-panel">
        <div className="toolbelt-copy">
          <p className="eyebrow">Core toolbelt</p>
          <h3>Current stack I reach for most often</h3>
        </div>
        <div className="chip-cloud">
          {toolbelt.map((item) => (
            <span key={item} className="skill-chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
