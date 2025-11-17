import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setStatus('Thanks — we will reach out shortly!')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative bg-[#0a0a0b] text-white py-20 sm:py-28">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),rgba(0,0,0,0))]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold">Tell us about your project</h2>
            <p className="mt-3 text-white/70">We’ll design a tailored automation plan aligned with your goals.</p>
            {status && <p className="mt-4 text-emerald-300">{status}</p>}
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={submit} className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/70">Name</label>
                  <input required className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="jane@company.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-white/70">Business</label>
                  <input className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Company name" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-white/70">Message</label>
                  <textarea rows="4" className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="What would you like to build?" />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:shadow-lg transition">Request a Quote</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
