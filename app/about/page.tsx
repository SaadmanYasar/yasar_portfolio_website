import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Saadman Yasar",
  description: "Education, research updates, patents, publications, experience, and recognition for Saadman Yasar.",
  openGraph: {
    title: "About | Saadman Yasar",
    description: "Education, research updates, patents, publications, experience, and recognition.",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "About | Saadman Yasar",
    description: "Education, research updates, patents, publications, experience, and recognition.",
    images: [],
  },
};

const sections = [
  {
    number: "01",
    label: "Profile",
    title: "Short biography",
    items: [{ title: "Biography coming soon", text: "A concise introduction, current role, research motivation, and the problems I care about will live here." }],
  },
  {
    number: "02",
    label: "Education",
    title: "Academic background",
    items: [
      { title: "Current degree", text: "Degree, institution, advisor, research focus, dates, and selected coursework." },
      { title: "Previous education", text: "Earlier degrees, institutions, distinctions, and academic milestones." },
    ],
  },
  {
    number: "03",
    label: "Updates",
    title: "News & milestones",
    items: [{ title: "Research updates", text: "Conference acceptances, demonstrations, presentations, awards, and project milestones." }],
  },
  {
    number: "04",
    label: "Patents",
    title: "Patents & inventions",
    items: [{ title: "Patent details coming later", text: "Title, inventors, filing status, application number, date, and a short non-confidential description." }],
  },
  {
    number: "05",
    label: "Publications",
    title: "Research output",
    items: [
      { title: "Journal articles", text: "Full citation, contribution summary, DOI, preprint, code, and supporting material." },
      { title: "Conference papers & presentations", text: "Proceedings, posters, talks, abstracts, and presentation links." },
    ],
  },
  {
    number: "06",
    label: "Experience",
    title: "Experience & recognition",
    items: [{ title: "Research, teaching, and awards", text: "Roles, responsibilities, laboratories, honors, professional service, and leadership." }],
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="site-header detail-header">
        <a href="/" className="brand" aria-label="Saadman Yasar home">
          <span className="brand-mark">SY</span>
          <span>Saadman Yasar</span>
        </a>
        <nav className="header-nav" aria-label="Primary navigation">
          <a className="header-link header-link--active" href="/about">About</a>
          <a className="header-link" href="/#projects">Projects</a>
        </nav>
      </header>

      <header className="about-hero">
        <div>
          <p className="eyebrow">About me</p>
          <h1>The person behind the <span className="yellow-text">systems.</span></h1>
          <p>
            This page will become the complete record of my academic path,
            research progress, intellectual property, publications, and
            professional milestones. I’ll add the details progressively.
          </p>
        </div>
        <aside className="about-facts" aria-label="At a glance">
          <div><span>Field</span><strong>Optics & Photonics</strong></div>
          <div><span>Focus</span><strong>Predictive optical systems</strong></div>
          <div><span>Status</span><strong>Details being added</strong></div>
        </aside>
      </header>

      <div className="about-sections">
        {sections.map((section) => (
          <section className="about-section" key={section.number}>
            <div className="about-section-title">
              <p>{section.number} / {section.label}</p>
              <h2>{section.title}</h2>
            </div>
            <div className="about-items">
              {section.items.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer>
        <p>Saadman Yasar · About</p>
        <a href="/">Back home →</a>
      </footer>
    </main>
  );
}
