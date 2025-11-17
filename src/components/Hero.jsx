import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-32 bg-gradient-to-b from-black to-[#0a0a0b] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[70rem] h-[70rem] rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-600/10 to-cyan-500/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 pointer-events-auto">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-pulse" />
            AI Automation Agency
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.02em] leading-[1.05]">
            AI Automations That Supercharge Your Business.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-white/80">
            VelaxAI builds intelligent automations, chatbots, voice agents, and AI workflows that save time, increase revenue, and scale your operations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#contact" className="group inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all">
              <span className="relative">Request a Quote</span>
              <span className="ml-2 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 group-hover:scale-125 transition-transform" />
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              See Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
