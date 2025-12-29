import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal portfolio built using React and Vite.',
    tech: ['React', 'Vite', 'CSS'],
    demo: 'https://your-live-site',
    url: 'https://github.com/your-repo'
  },
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal portfolio built using React and Vite.',
    tech: ['React', 'Vite', 'CSS'],
    demo: 'https://your-live-site',
    url: 'https://github.com/your-repo'
  }
]

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const sections = document.querySelectorAll('.page')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            setActiveIndex(Number(entry.target.dataset.index))
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (i) => {
    document.querySelector(`[data-index='${i}']`)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll Dots */}
      <div className="scroll-dots">
        {[0,1,2,3,4,5].map(i => (
          <button
            key={i}
            className={`dot ${activeIndex === i ? 'active' : ''}`}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>

      <div className="scroll-container">
        <section className="page snap-section animate" data-index="0"><Header/></section>
        <section id="home" className="page snap-section animate" data-index="1"><Hero/></section>
        <section id="projects" className="page snap-section animate" data-index="2"><Projects projects={projects} /></section>
        <section id="about" className="page snap-section animate" data-index="3"><About /></section>
        <section id="contact" className="page snap-section animate" data-index="4"><Contact /></section>
        <section className="page snap-section animate" data-index="5"><Footer /></section>
      </div>
    </>
  )
}
