const LINKS = [
  { label: 'Email', value: 'cy2816@columbia.edu', href: 'mailto:cy2816@columbia.edu' },
  { label: 'LinkedIn', value: 'linkedin.com/in/olivery0307', href: 'https://www.linkedin.com/in/olivery0307/' },
  { label: 'GitHub', value: 'github.com/Olivery0307', href: 'https://github.com/Olivery0307' },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section__header">
        <span className="section__label">Contact</span>
        <h2 className="section__title">Let's connect.</h2>
      </div>

      <div className="contact__grid">
        <div className="contact__info">
          <p>
            If you'd like to discuss data science, machine learning, or any
            interesting problems in AI — feel free to reach out. I'm always
            open to new opportunities and conversations.
          </p>
          <p style={{ fontSize: '0.83rem', color: 'var(--ink-muted)' }}>
            Based in New York, NY
          </p>
        </div>

        <div className="contact__links">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact__link"
            >
              <div>
                <p className="contact__link-label">{l.label}</p>
                <p className="contact__link-value">{l.value}</p>
              </div>
              <span className="contact__arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
