import { projects } from "./projects";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a href="/" className="brand" aria-label="Saadman Yasar home">
          <span className="brand-mark">SY</span>
          <span>Saadman Yasar</span>
        </a>
        <nav className="header-nav" aria-label="Primary navigation">
          <a className="header-link" href="/about">About</a>
          <a className="header-link" href="#projects">
            Projects <span>{String(projects.length).padStart(2, "0")}</span>
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-text">
          <p className="eyebrow hero-specialties">
            Optics · Sensors · Perception · Embedded systems · MEMS · Intelligent sensing
          </p>
          <h1 id="hero-title">
            I build optical systems that <span className="yellow-text">think ahead.</span>
          </h1>
          <p className="hero-copy">
            I’m Saadman Yasar, an optics and photonics researcher building sensing,
            prediction, and control systems for precise optical links. This is a
            focused collection of my engineering projects.
          </p>
          <div className="hero-actions">
            <a className="hero-jump" href="#projects">
              Explore the work <span aria-hidden="true">↓</span>
            </a>
            <a className="hero-about" href="/about">About me <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div className="portrait-stage" aria-label="Portrait of Saadman Yasar">
          <div className="portrait-grid" aria-hidden="true" />
          <div className="portrait-orbit portrait-orbit--outer" aria-hidden="true" />
          <div className="portrait-orbit portrait-orbit--inner" aria-hidden="true" />
          <span className="orbit-dot orbit-dot--one" aria-hidden="true" />
          <span className="orbit-dot orbit-dot--two" aria-hidden="true" />
          <div className="portrait-frame">
            <img src="/yasar-portrait.jpeg" alt="Saadman Yasar in a mountain landscape" />
          </div>
          <div className="portrait-label portrait-label--left">
            <span>Focus</span><strong>Optics + autonomy</strong>
          </div>
          <div className="portrait-label portrait-label--right">
            <span>Based at</span><strong>UCF · CREOL</strong>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-title">Projects</h2>
          </div>
          <p>Click any card to open its dedicated project page.</p>
        </div>

        <div className="project-stack">
          {projects.map((project, index) => (
            <a
              className={`project-card ${index % 2 === 1 ? "project-card--reverse" : ""}`}
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <div className={`project-visual visual-${(index % 4) + 1}`}>
                <div className="visual-grid" aria-hidden="true" />
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="visual-orbit" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <p>{project.category}</p>
              </div>

              <article className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.stage}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <ul className="tag-list" aria-label="Project technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <span className="project-link">
                  View project <ArrowIcon />
                </span>
              </article>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <p>Saadman Yasar · Project Portfolio</p>
        <a href="#top" aria-label="Back to top">Back to top ↑</a>
      </footer>
    </main>
  );
}
