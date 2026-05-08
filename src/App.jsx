import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const SECTIONS = ['about', 'experience', 'projects']

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar
        sections={SECTIONS}
        activeSection={activeSection}
        onNav={scrollTo}
      />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <span>© 2025 Chung-Yeh Yang</span>
      </footer>
    </div>
  )
}
