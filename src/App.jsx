import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyUs from './components/WhyUs'
import CaseStudies from './components/CaseStudies'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  useEffect(() => {
    const move = (e) => {
      document.querySelectorAll('.group').forEach((el) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        el.style.setProperty('--x', x + 'px')
        el.style.setProperty('--y', y + 'px')
      })
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} theme={theme} />
      <main>
        <Hero />
        <Features />
        <WhyUs />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
