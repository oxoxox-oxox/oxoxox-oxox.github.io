import { projects } from '../data/projects';

export default function Projects() {
  return (
    <>
      <header className="blog-header animate-in delay-2">
        <h1 className="blog-title">Projects</h1>
        <p className="blog-subtitle">代码工程、算法探索与课余兴趣实践</p>
      </header>

      <section className="projects-grid animate-in delay-3">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card">
            <div className="project-header">
              <h2 className="project-title">{proj.title}</h2>
              <span className={`project-status ${proj.status.toLowerCase()}`}>
                {proj.status}
              </span>
            </div>
            <p className="project-desc">{proj.description}</p>
            <div className="project-footer">
              <div className="project-tags">
                {proj.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  查看仓库 →
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
