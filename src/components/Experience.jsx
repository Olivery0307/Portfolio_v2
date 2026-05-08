const EDUCATION = [
  {
    school: 'Columbia University',
    degree: 'M.S. in Data Science',
    period: 'Sep 2025 – Dec 2026',
    logo: '/images/Columbia_logo.jpeg',
    url: 'https://datascience.columbia.edu/',
    detail: 'GPA: 4.0',
    coursework: 'Agentic AI, Computer Systems, Exploratory Data Analysis, Computer Vision, Operational Logistics, Poisson Process',
  },
  {
    school: 'Boston University',
    degree: 'B.S. in Data Science, Minor in Business Administration',
    period: 'Sep 2020 – Dec 2024',
    logo: '/images/BU_logo.png',
    url: 'https://www.bu.edu/cds-faculty/',
    detail: 'GPA: 3.78, Magna Cum Laude',
    coursework: 'Bayesian Statistics, Database Design, Data Structures & Algorithms, Deep Learning, Hypothesis Testing, Linear Algebra, Machine Learning, Multivariable Calculus,'
  },
]

const WORK = [
  {
    company: 'Pal AI',
    role: 'AI/ML Intern',
    period: 'Sep 2025 – May 2026',
    logo: '/images/palai_logo.png',
    url: '#',
    bullets: [
      'Designed a data pipeline to standardize and augment 100+ essay/feedback pairs, fine-tuning the model with the OpenAI API.',
      'Implemented RAG pipeline with parallel vector search across 4 embedding sources using pgvector.',
      'Built multi-agent backend with tool-calling LLM loop, dispatching 6 Supabase tools for real-time student data retrieval.',
    ],
  },
  {
    company: 'BU Spark!',
    role: 'Data Science Technical Project Manager',
    period: 'Sep 2024 – Dec 2024',
    logo: '/images/bu_spark_logo.jpeg',
    url: 'https://www.bu.edu/spark/',
    bullets: [
      'Managed six data analysis and visualization projects, coordinating with clients and facilitating student communication.',
      'Provided technical leadership on data visualization projects leveraging Python, Tableau, and Google BigQuery.',
    ],
  },
  {
    company: 'Questrom School of Business',
    role: 'Research Assistant, Applied AI in Business',
    period: 'Aug 2023 – Jan 2025',
    logo: '/images/bu_questrom_logo.jpeg',
    url: 'https://www.leedokyun.com/bitlab.html',
    bullets: [
      'Collaborated with 5+ industry researchers to design and implement four AI solutions for business challenges.',
      'Analyzed over 50,000 user queries to measure the impact of query characteristics on RAG generation.',
      'Engineered a pipeline using LLMs to label artwork genres from unsupervised clusters via zero-shot topic modeling.',
    ],
  },
  {
    company: 'GIGA RESET',
    role: 'Data Science Summer Intern',
    period: 'Jun 2024 – Aug 2024',
    logo: '/images/giga_reset_logo.png',
    url: 'https://www.reset.build',
    bullets: [
      'Designed a data processing pipeline for the RESET Air project with Python, reducing manual workload by 80%.',
      'Automated creation of scorecards by importing Python libraries, optimizing slide generation and data visualization.',
    ],
  },
  {
    company: 'Deloitte Taiwan',
    role: 'Summer Audit Intern',
    period: 'Jun 2022 – Aug 2022',
    logo: '/images/deloitte_logo.jpeg',
    url: 'https://www2.deloitte.com/tw/en.html',
    bullets: [
      'Reviewed and analyzed clients\' financial data in Deloitte\'s EMS system following audit checklist.',
      'Drafted clients\' Q2 financial statements in Mandarin and English with Microsoft Word and Excel.',
    ],
  },
]

function ExpItem({ item }) {
  return (
    <div className="exp__item">
      <div className="exp__meta">
        <p className="exp__period">{item.period}</p>
        {item.detail && (
          <p style={{ fontSize: '0.75rem', color: 'var(--ink-muted)', marginTop: 8, lineHeight: 1.6 }}>{item.detail}</p>
        )}
      </div>
      <div>
        <div className="exp__header">
          {item.logo && (
            <img src={item.logo} alt={item.company || item.school} className="exp__logo" />
          )}
          <p className="exp__company">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.company || item.school}
            </a>
          </p>
        </div>
        <p className="exp__role">{item.role || item.degree}</p>
        {item.bullets && (
          <ul className="exp__bullets">
            {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
        {item.coursework && (
          <div className="exp__coursework">
            <p className="exp__coursework-label">Relevant Coursework</p>
            <p className="exp__coursework-list">{item.coursework}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__header">
        <span className="section__label">Experience</span>
        <h2 className="section__title">Education &<br />Work History.</h2>
        <p className="section__desc">
          From academic research to industry internships — here's where I've been.
        </p>
      </div>

      <p style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 24 }}>Education</p>
      <div className="exp__list">
        {EDUCATION.map((e, i) => <ExpItem key={i} item={e} />)}
      </div>

      <div style={{ marginTop: 64 }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 24 }}>Work</p>
        <div className="exp__list">
          {WORK.map((e, i) => <ExpItem key={i} item={e} />)}
        </div>
      </div>
    </section>
  )
}
