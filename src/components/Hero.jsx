import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Award-winning web & socials
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Design that globalizes your brand
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/80">
            We craft conversion-first websites and social content that scale across markets. Modern. Playful. Engineered to perform.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#lead" className="pointer-events-auto rounded-full bg-white px-5 py-3 text-slate-900 font-semibold hover:opacity-90 transition">Get the free growth toolkit</a>
            <a href="#contact" className="pointer-events-auto rounded-full border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10 transition">Book a discovery call</a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 text-white/70 sm:grid-cols-4">
            {[
              ['150+','brands scaled'],
              ['4.9/5','client rating'],
              ['12M+','social reach'],
              ['<2s','page speeds'],
            ].map(([k,v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-xl font-semibold text-white">{k}</div>
                <div className="text-xs">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
