import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">Syed Gouse</div>


        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {/* <span className="bar" />
          <span className="bar" />
          <span className="bar" /> */}
        </button>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>

      </div>
    </header>
  )
}
