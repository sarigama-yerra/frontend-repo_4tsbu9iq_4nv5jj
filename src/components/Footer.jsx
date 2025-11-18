export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-white/70 text-sm">
          © {new Date().getFullYear()} Globalize.co.uk — All rights reserved.
        </div>
        <div className="text-white/60 text-sm">
          Built for speed. Made with care.
        </div>
      </div>
    </footer>
  )
}
