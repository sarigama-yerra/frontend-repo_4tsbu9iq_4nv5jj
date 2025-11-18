import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function LeadMagnet() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company') || undefined,
      phone: form.get('phone') || undefined,
      services: Array.from(e.currentTarget.querySelectorAll('input[name="services"]:checked')).map(i => i.value),
      budget: form.get('budget') || undefined,
      message: form.get('message') || undefined,
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
      setStatus({ type: 'success', message: 'Success! Check your email for the toolkit link.' })
      e.currentTarget.reset()
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    }
  }

  return (
    <section id="lead" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_0%_20%,rgba(16,185,129,0.12),transparent),radial-gradient(600px_300px_at_100%_80%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Free Social Growth Toolkit</h2>
            <p className="mt-3 text-white/70">
              Get our playbook for eye-catching content, ad-ready creative, and a website that converts. Enter your details and we’ll email the link instantly.
            </p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>• 20 hooks that stop the scroll</li>
              <li>• High-performing landing page sections</li>
              <li>• Posting cadence templates for each platform</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-sm text-white/70">Name</label>
                <input required name="name" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Alex Morgan" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-white/70">Email</label>
                <input required type="email" name="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="alex@brand.com" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-white/70">Company</label>
                <input name="company" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Brand Ltd" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-white/70">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="+44..." />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Services</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {['Web Design','Content','Paid Social','CRO'].map(s => (
                    <label key={s} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white/80">
                      <input type="checkbox" name="services" value={s} className="accent-white" /> <span>{s}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-white/70">Budget</label>
                <select name="budget" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20">
                  <option className="bg-slate-900">Undisclosed</option>
                  {['< £2k','£2k–£5k','£5k–£15k','£15k+'].map(b => <option key={b} className="bg-slate-900">{b}</option>)}
                </select>
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-white/70">Message</label>
                <input name="message" className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/40" placeholder="What are you aiming to achieve?" />
              </div>
            </div>
            <button type="submit" className="mt-5 w-full rounded-full bg-white px-5 py-3 font-semibold text-slate-900 hover:opacity-90 transition">Send me the toolkit</button>
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
