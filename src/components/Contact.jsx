import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_top_left,rgba(14,165,233,0.15),transparent)]" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Let’s build something amazing
        </motion.h2>
        <p className="text-slate-300 mb-8">
          Interested in collaborating or have a role in mind? I’m open to exciting opportunities and creative challenges.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:hello@example.com" className="px-5 py-3 rounded-lg bg-cyan-400 text-slate-900 font-semibold shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-shadow">Email Me</a>
          <a href="/Resume.pdf" className="px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 transition-colors">View Resume</a>
        </div>
      </div>
    </section>
  )
}
