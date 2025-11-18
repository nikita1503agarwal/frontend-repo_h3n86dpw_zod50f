import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful hero built with Spline and smooth scroll-driven animations.',
    tags: ['Spline', 'Framer Motion', 'Tailwind'],
  },
  {
    title: 'Data Viz Dashboard',
    description: 'Responsive dashboard with motion transitions and accessible patterns.',
    tags: ['React', 'Charts', 'A11y'],
  },
  {
    title: 'E‑commerce Micro‑Interactions',
    description: 'Cart animations, hover physics, and polished product previews.',
    tags: ['React', 'Motion', 'UX'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_bottom_left,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#contact" className="text-cyan-300 hover:text-cyan-200">Work with me →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-400/10 to-blue-500/10" />
              <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-slate-300 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
