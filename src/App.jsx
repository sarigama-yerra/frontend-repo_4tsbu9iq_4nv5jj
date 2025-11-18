import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import LeadMagnet from './components/LeadMagnet'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(800px_400px_at_20%_0%,rgba(56,189,248,0.08),transparent),radial-gradient(800px_400px_at_80%_40%,rgba(168,85,247,0.08),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <LeadMagnet />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
