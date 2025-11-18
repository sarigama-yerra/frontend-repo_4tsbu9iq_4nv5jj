import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-500 shadow-lg" />
            <span className="font-semibold tracking-tight text-white">Globalize</span>
            <span className="hidden text-sm text-white/60 sm:inline">.co.uk</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#lead" className="hover:text-white transition">Free Toolkit</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#contact" className="rounded-full bg-white text-slate-900 px-4 py-2 font-medium hover:opacity-90 transition">Get a Quote</a>
          </nav>
          <button className="md:hidden text-white/90" onClick={() => setOpen(v => !v)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 md:hidden">
            <div className="flex flex-col gap-3 text-white/80 text-sm">
              <a onClick={() => setOpen(false)} href="#services">Services</a>
              <a onClick={() => setOpen(false)} href="#work">Work</a>
              <a onClick={() => setOpen(false)} href="#lead">Free Toolkit</a>
              <a onClick={() => setOpen(false)} href="#contact">Contact</a>
              <a onClick={() => setOpen(false)} href="#contact" className="rounded-full bg-white text-slate-900 px-4 py-2 font-medium text-center">Get a Quote</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
