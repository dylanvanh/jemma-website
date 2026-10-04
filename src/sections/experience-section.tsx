import { experienceConfig } from "@/config/experience-config";

export function ExperienceSection() {
  const experience = [...(experienceConfig.experienceItems ?? [])].reverse();
  return (
    <section
      id="experience"
      className="site-shell experience-section"
      aria-labelledby="experience-title"
    >
      <div className="experience-intro">
        <p className="eyebrow">The path so far</p>
        <h2 id="experience-title">
          A different
          <br />
          way of seeing.
        </h2>
        <p>
          From photography to interiors, my work starts with observation and
          takes shape through craft.
        </p>
      </div>
      <ol className="experience-list">
        {experience.map((item) => (
          <li key={`${item.title}-${item.period}`}>
            <p className="experience-period">
              {item.period.replaceAll("-", "—")}
            </p>
            <div>
              <h3>{item.title}</h3>
              <p>
                {item.description} · {item.jobType}
              </p>
            </div>
            <span className="experience-type">{item.employmentType}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
