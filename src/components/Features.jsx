import { motion } from 'framer-motion'
import { MessageSquare, PhoneCall, Workflow, Boxes } from 'lucide-react'

const features = [
  {
    title: 'AI Chatbots',
    desc: '24/7 lead capture & instant customer support',
    icon: MessageSquare,
  },
  {
    title: 'Voice Agents',
    desc: 'Human-like AI phone agents',
    icon: PhoneCall,
  },
  {
    title: 'Automated Workflows',
    desc: 'End-to-end business automation',
    icon: Workflow,
  },
  {
    title: 'Custom AI Solutions',
    desc: 'Tailored tools for unique operations',
    icon: Boxes,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0a0a0b] text-white py-20 sm:py-28">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),rgba(0,0,0,0))]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">What We Do</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Premium AI systems that create leverage across your business.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur hover:bg-white/10 transition overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(99,102,241,0.12), transparent 40%)'}} />
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  {<f.icon size={18} />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
