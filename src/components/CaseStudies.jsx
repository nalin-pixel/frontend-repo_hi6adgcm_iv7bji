import { motion } from 'framer-motion'

const cases = [
  {
    title: 'DTC Brand — AI Concierge',
    impact: 'Generated 37% more leads',
    quote: 'Our chatbot qualified leads automatically and booked demos while we slept. Game changer.',
    author: 'CMO, Consumer Goods'
  },
  {
    title: 'B2B SaaS — Support Automation',
    impact: 'Saved 12 hours/week for support',
    quote: 'VelaxAI automated tier-1 tickets and built a knowledge assistant. NPS went up, costs went down.',
    author: 'Head of Support, SaaS'
  }
]

export default function CaseStudies() {
  return (
    <section id="work" className="bg-[#0a0a0b] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold">Results & Case Studies</h2>
          <p className="mt-3 text-white/70">A snapshot of the impact we deliver.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {cases.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <span className="inline-flex items-center rounded-full bg-white text-black text-xs font-semibold px-3 py-1">{c.impact}</span>
              </div>
              <p className="mt-4 text-white/80 italic">“{c.quote}”</p>
              <p className="mt-2 text-sm text-white/60">— {c.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
