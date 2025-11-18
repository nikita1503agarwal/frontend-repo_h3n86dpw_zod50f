import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] isolate overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-cyan-300/90 text-sm font-medium tracking-widest uppercase mb-4">Portfolio • Creative Developer</p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Building playful, interactive web experiences
          </h1>
          <p className="mt-6 text-lg text-slate-200/80">
            I craft immersive interfaces with WebGL, React, and motion design. Scroll to explore selected work and experiments.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-cyan-400 text-slate-900 font-semibold shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 transition-colors">Contact</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none" />
    </section>
  )
}
