export default function About() {
  return (
    <section id="about" className="bg-black text-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold">About VelaxAI</h2>
        <p className="mt-4 text-white/70 max-w-3xl mx-auto">VelaxAI is a next-generation automation agency helping businesses scale using AI. We build custom systems that eliminate repetitive work and give your team more time to grow.</p>
        <div className="mt-8 mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400" />
            <div className="text-left">
              <p className="font-semibold">Founder Team</p>
              <p className="text-sm text-white/60">Product engineers and designers with experience across SaaS, ops, and AI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
