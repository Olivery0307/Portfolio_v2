export default function Navbar({ sections, activeSection, onNav }) {
  return (
    <nav className="navbar">
      <span className="navbar__brand">
        <span>&gt;_</span> oliver.yang
      </span>
      <div className="navbar__links">
        {sections.map((id) => (
          <button
            key={id}
            className={`navbar__btn${activeSection === id ? ' navbar__btn--active' : ''}`}
            onClick={() => onNav(id)}
          >
            {id}
          </button>
        ))}
        <button className="navbar__contact-btn" onClick={() => window.location.href = 'mailto:cy2816@columbia.edu'}>
          contact_me()
        </button>
      </div>
    </nav>
  )
}
