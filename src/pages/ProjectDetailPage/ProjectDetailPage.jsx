import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  FileText,
  GitBranch,
  Lightbulb,
  TriangleAlert,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import Seo from '../../components/Seo/Seo'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import { getAdjacentProjects, getProjectBySlug } from '../../data/projects'

function DetailBlock({ label, icon: Icon, children }) {
  return (
    <section className="border-t border-line py-10 first:border-t-0 first:pt-0">
      <div className="flex items-center gap-3">
        <Icon className="size-4 text-jade/70" aria-hidden="true" />
        <h2 className="meta text-ash">{label}</h2>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  )
}

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <NotFoundPage />
  }

  const { previousProject, nextProject } = getAdjacentProjects(slug)
  const description = project.fullDescription || project.shortDescription
  const features = Array.isArray(project.features) ? project.features : []
  const screenshots = Array.isArray(project.screenshots) ? [...new Set(project.screenshots)] : []

  return (
    <>
      <Seo
        title={`${project.title} | Zakir Ullah`}
        description={project.shortDescription}
        image={project.thumbnail}
        type="article"
      />

      <article className="pt-28 pb-24 sm:pt-32 sm:pb-32">
        <Container>
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ash transition-colors duration-300 hover:text-bone"
          >
            <ArrowLeft
              className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to projects
          </Link>

          <header className="mt-10 border-b border-line pb-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="meta text-jade">
                {project.category} / {project.status}
              </p>
              <p className="meta text-ash-dim">{project.completionDate}</p>
            </div>

            <h1 className="display-xl mt-6 max-w-4xl text-balance text-bone">{project.title}</h1>

            <p className="mt-6 max-w-2xl text-[0.9375rem] leading-8 text-ash">{description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveDemo ? (
                <Button
                  as="a"
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  icon={ExternalLink}
                  iconPosition="right"
                >
                  Live demo
                </Button>
              ) : null}
              {project.github ? (
                <Button
                  as="a"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  icon={GitBranch}
                >
                  Source
                </Button>
              ) : null}
            </div>
          </header>

          {project.thumbnail ? (
            <div className="relative mt-10 overflow-hidden rounded-[2px] border border-line bg-ink-soft">
              <img
                src={project.thumbnail}
                alt={`${project.title} preview`}
                className="media-grade h-auto w-full"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent"
                aria-hidden="true"
              />
            </div>
          ) : null}

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
            <div>
              <DetailBlock label="Overview" icon={FileText}>
                <p className="max-w-2xl text-sm leading-8 text-ash">{description}</p>
              </DetailBlock>

              <DetailBlock label="Technology stack" icon={Code2}>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-bone-dim"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </DetailBlock>

              {features.length ? (
                <DetailBlock label="Features" icon={CheckCircle2}>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-7 text-ash">
                        <CheckCircle2
                          className="mt-1.5 size-3.5 shrink-0 text-jade/70"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </DetailBlock>
              ) : null}

              {project.challenges ? (
                <DetailBlock label="Challenges" icon={TriangleAlert}>
                  <p className="max-w-2xl text-sm leading-8 text-ash">{project.challenges}</p>
                </DetailBlock>
              ) : null}

              {project.whatILearned ? (
                <DetailBlock label="What I learned" icon={Lightbulb}>
                  <p className="max-w-2xl text-sm leading-8 text-ash">{project.whatILearned}</p>
                </DetailBlock>
              ) : null}

              {screenshots.length > 1 ? (
                <DetailBlock label="Gallery" icon={ExternalLink}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {screenshots.map((screenshot, index) => (
                      <div
                        key={`${project.slug}-${index}`}
                        className="overflow-hidden rounded-[2px] border border-line bg-ink-soft"
                      >
                        <img
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          loading="lazy"
                          className="media-grade h-52 w-full object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                </DetailBlock>
              ) : null}
            </div>

            <aside className="h-fit border border-line bg-ink-soft/60 p-6 lg:sticky lg:top-28">
              <h2 className="meta text-ash">Project summary</h2>
              <dl className="mt-5 border-t border-line">
                <div className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                  <dt className="meta text-ash-dim">Completion</dt>
                  <dd className="text-sm text-bone-dim">{project.completionDate}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                  <dt className="meta text-ash-dim">Status</dt>
                  <dd className="text-sm text-bone-dim">{project.status}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                  <dt className="meta text-ash-dim">Category</dt>
                  <dd className="text-sm text-bone-dim">{project.category}</dd>
                </div>
              </dl>

            </aside>
          </div>

          <nav className="mt-16 grid gap-4 border-t border-line pt-10 sm:grid-cols-2" aria-label="Project navigation">
            {previousProject ? (
              <Link
                to={`/project/${previousProject.slug}`}
                className="group border border-line p-6 transition-colors duration-300 hover:border-bone/25"
              >
                <span className="meta flex items-center gap-2 text-ash-dim">
                  <ArrowLeft
                    className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                  Previous project
                </span>
                <p className="display-md mt-4 text-bone transition-colors duration-300 group-hover:text-jade">
                  {previousProject.title}
                </p>
              </Link>
            ) : null}

            {nextProject ? (
              <Link
                to={`/project/${nextProject.slug}`}
                className="group border border-line p-6 transition-colors duration-300 hover:border-bone/25 sm:text-right"
              >
                <span className="meta flex items-center gap-2 text-ash-dim sm:justify-end">
                  Next project
                  <ArrowRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
                <p className="display-md mt-4 text-bone transition-colors duration-300 group-hover:text-jade">
                  {nextProject.title}
                </p>
              </Link>
            ) : null}
          </nav>
        </Container>
      </article>
    </>
  )
}

export default ProjectDetailPage
