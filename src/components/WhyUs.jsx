import { motion } from 'framer-motion'
import { Gauge, Timer, Paintbrush, Cpu } from 'lucide-react'

const points = [
  { icon: Gauge, title: 'Faster operations', desc: 'Unlock more revenue with streamlined systems' },
  { icon: Timer, title: 'Reduce manual work', desc: 'Save hours every week with automation' },
  { icon: Paintbrush, title: 'Beautiful UI/UX', desc: 'Delightfully designed interfaces for your teams and customers' },
  { icon: Cpu, title: 'Top-tier models', desc: 'OpenAI, Groq, Google, Anthropic — best tool for the job' },
]

export default function WhyUs() {
  return (
    <section id="why" className="bg-black text-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold">Why Choose VelaxAI</h2>
            <p className="mt-3 text-white/70">We combine cutting-edge AI with thoughtful product design to build systems that actually move the needle.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {points.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    {<p.icon size={18} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-white/70 mt-1">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
