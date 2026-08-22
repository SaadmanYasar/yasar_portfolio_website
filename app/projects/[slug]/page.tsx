import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Saadman Yasar`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Saadman Yasar`,
      description: project.summary,
      images: [],
    },
    twitter: {
      card: "summary",
      title: `${project.title} | Saadman Yasar`,
      description: project.summary,
      images: [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main className="detail-page">
      <header className="site-header detail-header">
        <a href="/" className="brand" aria-label="Saadman Yasar home">
          <span className="brand-mark">SY</span>
          <span>Saadman Yasar</span>
        </a>
        <a className="header-link" href="/#projects">
          ← All projects
        </a>
      </header>

      <article>
        <section className="detail-hero">
          <p className="eyebrow">
            Project {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <ul className="tag-list" aria-label="Project technologies">
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </section>

        <section className="visual-story" aria-labelledby="visual-story-title">
          <div className="visual-story-intro">
            <p className="eyebrow">Visual case study</p>
            <h2 id="visual-story-title">{project.focus}</h2>
            <p>
              The introduction above explains the project. The rest of this page
              is intentionally image-led: large figures, setup photographs,
              diagrams, and results with only the captions needed to guide the reader.
            </p>
          </div>

          {["System overview", "Experimental setup or method", "Key result", "Final demonstration"].map((title, mediaIndex) => (
            <figure className="story-figure" key={title}>
              <div className={`story-placeholder visual-${((index + mediaIndex) % 4) + 1}`}>
                <div className="visual-grid" aria-hidden="true" />
                <span>Image {String(mediaIndex + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>Project image will be added here.</p>
              </div>
              <figcaption>
                <span>Fig. {String(mediaIndex + 1).padStart(2, "0")}</span>
                <p><strong>{title}.</strong> A short caption will explain exactly what the reader should notice.</p>
              </figcaption>
            </figure>
          ))}
        </section>

        <a className="next-project" href={`/projects/${nextProject.slug}`}>
          <span>Next project</span>
          <strong>{nextProject.title}</strong>
          <span aria-hidden="true">→</span>
        </a>
      </article>
    </main>
  );
}
