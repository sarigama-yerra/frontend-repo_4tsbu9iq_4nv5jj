import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message')
    }
    setStatus({ type: 'loading', message: 'Sending...' })
    try {
      const res = await fetch(`${BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus({ type: 'success', message: 'Thanks! We will get back shortly.' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s build something global</h2>
            <p className="mt-3 text-white/70">Tell us about your brand and goals. We’ll come back with ideas and a plan.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-white/80 text-sm">
              {['UK-based','Fast turnarounds','CRO included','Platform-native'].map(p => (
                <div key={p} className="rounded-xl border border-white/10 bg-white/5 p-4">{p}</div>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input required name="name" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Alex Morgan" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="alex@brand.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Message</label>
                <textarea required name="message" rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="What do you need help with?" />
              </div>
            </div>
            <button type="submit" className="mt-5 w-full rounded-full bg-white px-5 py-3 font-semibold text-slate-900 hover:opacity-90 transition">Send message</button>
            {status && (
              <p className={`${status.type === 'success' ? 'text-emerald-400' : status.type === 'error' ? 'text-rose-400' : 'text-white/70'} mt-3 text-sm`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
