import { motion } from 'framer-motion'
import { Globe, Sparkles, Rocket, LineChart } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Design & Build',
    desc: 'Conversion-first, blazing-fast websites built on modern stacks.'
  },
  {
    icon: Sparkles,
    title: 'Content & Socials',
    desc: 'Playful, on-brand content calendars that grow your reach.'
  },
  {
    icon: Rocket,
    title: 'Launch & CRO',
    desc: 'From go-live to growth. A/B testing, heatmaps, and analytics.'
  },
  {
    icon: LineChart,
    title: 'Paid Social',
    desc: 'Creative that converts. Campaigns engineered to scale.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_20%,rgba(168,85,247,0.12),transparent),radial-gradient(600px_300px_at_90%_60%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Where design meets growth</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">A full-funnel creative partner for ambitious brands.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-sky-500 text-white shadow-lg">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
