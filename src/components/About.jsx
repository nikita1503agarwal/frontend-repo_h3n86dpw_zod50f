import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_top_right,rgba(56,189,248,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-slate-300 leading-relaxed">
              I'm a creative developer focused on delightful, performant user interfaces. I blend 3D, animation, and accessibility to build engaging digital products. My toolkit includes React, Three.js/Spline, Tailwind, and thoughtful UX.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React','Spline','Three.js','Framer Motion','TypeScript','Node.js'].map((tag) => (
                <span key={tag} className="text-sm px-3 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-cyan-400/20 to-blue-500/10 border border-white/10 p-1">
              <div className="w-full h-full rounded-2xl bg-slate-900/60 backdrop-blur flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-slate-300">Available for freelance and full-time roles</p>
                  <a href="#contact" className="mt-4 inline-block px-4 py-2 rounded-md bg-white/10 text-white border border-white/10 hover:bg-white/20 transition">Get in touch</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
