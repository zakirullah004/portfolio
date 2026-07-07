import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, Sparkles } from 'lucide-react'
import Button from '../Button/Button'

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-card/55 p-4 shadow-lg shadow-black/10 backdrop-blur-xl"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 transition group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-background">
        <img
          src={project.thumbnail}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="h-52 w-full object-contain p-8 opacity-80 transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="relative pt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {project.category}
          </span>
          <span className="text-xs font-semibold text-muted">{project.status}</span>
        </div>
        <h3 className="font-heading text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{project.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span key={technology} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-semibold text-muted">
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Button as="a" href={project.liveDemo} target="_blank" rel="noreferrer" variant="secondary" className="px-3" icon={ExternalLink}>
            Live
          </Button>
          <Button as="a" href={project.github} target="_blank" rel="noreferrer" variant="ghost" className="px-3" icon={GitBranch}>
            Code
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
