export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400" />
          <span className="font-[800] tracking-tight">VelaxAI</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white">Capabilities</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="text-xs text-white/50">© {new Date().getFullYear()} VelaxAI. All rights reserved.</div>
      </div>
    </footer>
  )
}
