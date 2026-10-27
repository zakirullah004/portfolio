import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, GitBranch } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp } from '../../utils/animations'
import { cn } from '../../utils/cn'

function ProjectMedia({ project }) {
  if (!project.thumbnail) {
    return (
      <div className="grid h-full w-full place-items-center bg-panel">
        <span className="display-md text-ash-dim" aria-hidden="true">
          {project.title.slice(0, 1)}
        </span>
      </div>
    )
  }

  return (
    <img
      src={project.thumbnail}
      alt={`${project.title} project preview`}
      loading="lazy"
      className="media-grade h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
    />
  )
}

function ProjectCard({ project, index = 0, total = 1, featured = false, className }) {
  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        'group relative flex flex-col border border-line bg-ink-soft/50 transition-colors duration-500 hover:border-bone/20',
        featured && 'lg:grid lg:grid-cols-[1.15fr_0.85fr]',
        className,
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-ink',
          featured ? 'aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[24rem]' : 'aspect-[16/10]',
        )}
      >
        <ProjectMedia project={project} />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
          <span className="meta rounded-full border border-bone/15 bg-ink/55 px-3 py-1 text-bone/80 backdrop-blur-sm">
            {project.category}
          </span>
          <span className="meta text-bone/70">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className={cn('flex flex-1 flex-col p-6 sm:p-8', featured && 'lg:justify-between lg:p-10')}>
        <div>
          <p className="meta text-ash-dim">
            {project.completionDate} — {project.status}
          </p>

          <h3
            className={cn(
              'display-md mt-3 text-bone transition-colors duration-300 group-hover:text-jade',
              featured && 'lg:text-[2.6rem]',
            )}
          >
            <Link to={`/project/${project.slug}`} className="after:absolute after:inset-0">
              {project.title}
            </Link>
          </h3>

          <p className="mt-4 max-w-md text-sm leading-7 text-ash">{project.shortDescription}</p>

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ash-dim"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <span className="inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-bone">
            View case study
            <ArrowUpRight
              className="size-3.5 text-jade transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>

          <div className="relative z-10 flex items-center gap-4">
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ash transition-colors duration-300 hover:text-jade"
              >
                <ExternalLink className="size-3.5" aria-hidden="true" />
                Live
              </a>
            ) : null}

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ash transition-colors duration-300 hover:text-jade"
              >
                <GitBranch className="size-3.5" aria-hidden="true" />
                Code
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
