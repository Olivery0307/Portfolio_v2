const SKILLS = [
  { category: 'Languages', values: 'Python · SQL · R · Rust' },
  { category: 'ML / AI', values: 'PyTorch · Agentic Workflows · Fine-Tuning' },
  { category: 'Tools', values: 'AWS · Docker · Google Cloud · Tableau · Git' },
]

export default function About() {
  return (
    <section id="about" className="section about-hero">
      <div className="about-hero__top">
        <p className="hero__eyebrow">Hi, I'm</p>
        <h1 className="hero__name">Oliver(Chung-Yeh) Yang</h1>
        <p className="hero__tagline">
          Data Science · Machine Learning · AI Foward Deployed Engineering
        </p>
      </div>

      <div className="about__grid">
        <div className="about__text">
          <p>
            I'm a Data Scientist passionate about transforming raw data into
            meaningful insights and machine learning models that solve real-world
            problems. I hold a B.S. in Data Science from Boston University and
            am pursuing an M.S. at Columbia University starting Fall 2025.
          </p>
          <p>
            My work spans NLP, computer vision, and building production AI
            systems, from fine-tuning LLMs to designing multi-agent backends
            and RAG pipelines. I enjoy the intersection where engineering
            discipline meets statistical thinking.
          </p>
          <p>
            Outside of work I cook, watch films, and occasionally ski.
          </p>

          <div className="section__divider" />

          <p className="about__skills-label">Skills</p>
          <div className="about__skills-grid">
            {SKILLS.map((s) => (
              <div key={s.category} className="about__skill-group">
                <p className="about__skill-category">{s.category}</p>
                <p className="about__skill-values">{s.values}</p>
              </div>
            ))}
          </div>

          <a
            href="/docs/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about__resume-btn"
          >
            View Resume ↗
          </a>
        </div>

        <div className="about__photo">
          <img
            src="/images/profile_picture.jpeg"
            alt="Chung-Yeh Yang"
            className="about__img"
          />
          <div className="about__img-frame" />
        </div>
      </div>
    </section>
  )
}
