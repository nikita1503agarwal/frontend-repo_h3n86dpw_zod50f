import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-slate-200 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="font-semibold tracking-tight text-white group-hover:text-cyan-100">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-center gap-4 text-slate-200">
              <a className="hover:text-white" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a className="hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a className="hover:text-white" href="mailto:hello@example.com" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </nav>

          <button
            className="md:hidden text-slate-200 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="px-6 py-4 space-y-4">
            <NavLink href="#about" onClick={close}>About</NavLink>
            <div />
            <NavLink href="#projects" onClick={close}>Projects</NavLink>
            <div />
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
