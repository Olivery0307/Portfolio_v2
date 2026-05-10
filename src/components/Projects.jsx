import { useState } from 'react'

const PROJECTS = [
  // Page 1 — flagship
  {
    title: 'Deepfake Detection with Explainable AI',
    tags: ['Python', 'PyTorch', 'Deep Learning', 'XAI'],
    img: '/images/deepfake_xai.png',
    desc: 'A production-ready deepfake detection system combining ResNet, EfficientNet, and Vision Transformer with Grad-CAM and Attention Rollout for model interpretability, plus Gemini API integration for forensic reporting.',
    github: 'https://github.com/Olivery0307/XAI-in-Deepfake-images-recognition',
    paper: '/docs/deepfake_xai_report.pdf',
  },
  {
    title: 'Intelliview: AI-Powered Interview Coaching',
    tags: ['Python', 'RAG', 'LLM', 'FastAPI'],
    img: '/images/intelliview.png',
    desc: 'An AI interview coaching system combining LLM-powered question generation, RAG-based resume analysis, and multimodal evaluation with fine-tuned embeddings achieving 69% Hit@10 retrieval accuracy.',
    github: 'https://github.com/EdChang716/Intelliview-AML_project',
    paper: '/docs/Intelliview_report.pdf',
  },
  {
    title: 'YouBike Station Status Prediction',
    tags: ['Python', 'AWS', 'Docker', 'MLOps'],
    img: '/images/youbike_prediction.jpeg',
    desc: 'An end-to-end ML project that fetches data from YouBike API, builds a prediction model on bike station status in Taipei, containerizes it on Docker, and deploys on AWS to optimize truck distribution routes.',
    github: 'https://github.com/Olivery0307/YouBike_Status_Prediction',
    demo: 'https://olivery0307.github.io/YouBike_Status_Prediction/',
  },
  {
    title: 'Columbia Night Shuttle Simulation',
    tags: ['Python', 'SimPy', 'Operations Research'],
    img: '/images/cu_shuttle_simulation.png',
    desc: 'A simulation project evaluating operational policies for the Columbia University Night Shuttle service, comparing Door-to-Door vs Corner-to-Corner vs a proposed Hybrid Policy for efficiency and safety.',
    github: 'https://github.com/Olivery0307/CU-Night-Shuttle-Hybrid-Simulation',
  },
  // Page 2
  {
    title: 'VQA Verification with DNN Fusion Model',
    tags: ['Python', 'PyTorch', 'Deep Learning'],
    img: '/images/vqa.jpeg',
    desc: 'A project combining image and textual features to train a deep neural network fusion model on the VQA dataset for verifying image-question-answer matches.',
    github: 'https://github.com/Olivery0307/Fusion_Model_for_VQA_verification',
  },
  {
    title: 'Artwork Topic-Modeling with MLLM',
    tags: ['Python', 'OpenAI API', 'Clustering', 'MLLM'],
    img: '/images/artwork.jpeg',
    desc: 'A research project combining topic modeling with LLMs and multi-modal LLMs to analyze artworks and capture trends across unsupervised clusters.',
    github: 'https://github.com/Olivery0307/Artwork_Topic_Modeling',
  },
  {
    title: 'Psychologist Chatbot with LLM',
    tags: ['Python', 'LLM', 'Prompt Engineering'],
    img: '/images/psychologist.jpeg',
    desc: 'Implementing various LLM techniques — Chain of Thought, Tree of Thoughts, and CAMEL — to build chatbots for psychological analysis and Big Five personality trait identification.',
    github: 'https://github.com/Olivery0307/Psychologist-Chatbot-with-LLM',
  },
  {
    title: 'Reset Air — Air Quality Analysis',
    tags: ['Python', 'Pandas', 'Seaborn', 'Data Analysis'],
    img: '/images/air_quality.jpeg',
    desc: 'An internship project automating the process of cleansing, analyzing, visualizing, and reporting monitored air quality data utilizing multiple Python libraries.',
    github: 'https://github.com/Olivery0307/Reset_Air',
  },
  // Page 3
  {
    title: 'Reset Embodied — Scorecard Automation',
    tags: ['Python', 'Pandas', 'python-pptx', 'Data Reporting'],
    img: '/images/reset_embodied.jpeg',
    desc: 'An internship project that automates the scorecard generation process, streamlining presentation of Reset Embodied data using the python-pptx package.',
    github: 'https://github.com/Olivery0307/Reset_Embodied',
  },
  {
    title: 'Doubled-Up Homelessness Visualization',
    tags: ['SQL', 'Tableau', 'Google BigQuery'],
    img: '/images/homelessness.jpeg',
    desc: 'Analyzing people who share housing due to economic hardship using SQL queries and interactive Tableau dashboards to surface trends in doubled-up homelessness.',
    github: 'https://github.com/Olivery0307/Double_up_homelessness',
  },
  {
    title: 'COVID-19 Analysis with Azure and Power BI',
    tags: ['SQL', 'Power BI', 'Microsoft Azure'],
    img: '/images/Covid.jpeg',
    desc: 'A group project analyzing COVID-19 trends including cases, deaths, and recovery changes by date and country with comprehensive data engineering tasks.',
    github: 'https://github.com/Olivery0307/Covid-Data-Project',
  },
  {
    title: 'Ski Ticket Price Analysis',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
    img: '/images/Ski Resort.jpeg',
    desc: 'A comprehensive group project analyzing factors impacting European ski resort ticket prices, providing advice for tourists and pricing strategies for resorts.',
    github: 'https://drive.google.com/drive/folders/1nor9xZl85bnwGqzyjHz3Fmmy9uDbtnEM?usp=sharing',
  },
]

const PER_PAGE = 4

export default function Projects() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(PROJECTS.length / PER_PAGE)
  const visible = PROJECTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  const goTo = (p) => {
    setPage(p)
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="projects" className="section section--wide">
      <div className="section__header">
        <span className="section__label">Projects</span>
        <h2 className="section__title">Selected Work.</h2>
        <p className="section__desc">
          A collection of projects across machine learning, simulation, and applied AI.
        </p>
      </div>

      <div className="projects__grid">
        {visible.map((p, i) => (
          <div key={page * PER_PAGE + i} className="project__card">
            <div className="project__img-wrap">
              <img src={p.img} alt={p.title} className="project__img" />
            </div>
            <div className="project__tags">
              {p.tags.map((t) => (
                <span key={t} className="project__tag">{t}</span>
              ))}
            </div>
            <h3 className="project__title">{p.title}</h3>
            <p className="project__desc">{p.desc}</p>
            <div className="project__links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project__link">
                  GitHub ↗
                </a>
              )}
              {p.paper && (
                <a href={p.paper} target="_blank" rel="noopener noreferrer" className="project__link">
                  Paper ↗
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project__link">
                  Demo ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="projects__pagination">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`pagination__btn${page === i ? ' pagination__btn--active' : ''}`}
            onClick={() => goTo(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  )
}
