import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#features', label: 'Capabilities' },
    { href: '#why', label: 'Why Us' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-lg shadow-indigo-500/30"></div>
            <span className="font-[800] tracking-tight text-xl text-gray-900 dark:text-white">VelaxAI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <button onClick={onToggleTheme} className="rounded-full px-3 py-1.5 text-xs font-medium border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 transition">
              {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 transition-all">
              <Sparkles size={16} /> Request a Quote
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={classNames("md:hidden transition-all duration-300", open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none') }>
        <div className="mx-4 mb-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/50 backdrop-blur-xl p-4 space-y-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button onClick={onToggleTheme} className="flex-1 rounded-xl px-3 py-2 text-sm border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5">{theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</button>
            <a href="#contact" onClick={() => setOpen(false)} className="flex-1 text-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white px-3 py-2 text-sm font-semibold shadow-lg shadow-indigo-500/30">Quote</a>
          </div>
        </div>
      </div>
    </header>
  )
}
