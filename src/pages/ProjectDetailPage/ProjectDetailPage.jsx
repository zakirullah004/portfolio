import { ArrowLeft, ArrowRight, CheckCircle2, Code2, ExternalLink, GitBranch, Lightbulb, TriangleAlert } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import Seo from '../../components/Seo/Seo'
import Section from '../../components/Section/Section'
import { getAdjacentProjects, getProjectBySlug } from '../../data/projects'

function DetailBlock({ title, icon: Icon, children }) {
  return (
    <section className="rounded-xl border border-white/10 bg-card/55 p-6 shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-3">
        <Icon className="size-5 text-primary" aria-hidden="true" />
        <h2 className="font-heading text-2xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </section>
  )
}

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  const { previousProject, nextProject } = getAdjacentProjects(slug)

  return (
    <>
      <Seo
        title={`${project.title} | Zakir Ullah`}
        description={project.shortDescription}
        image={project.thumbnail}
        type="article"
      />
      <Section className="pt-12" animate={false}>
        <Container>
          <Button as={Link} to="/#projects" variant="ghost" icon={ArrowLeft}>
            Back to Projects
          </Button>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-card/55 shadow-premium backdrop-blur-xl">
            <div className="grid min-h-[24rem] items-center gap-8 p-6 lg:grid-cols-[1fr_0.9fr] lg:p-10">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  {project.category} / {project.status}
                </p>
                <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                  {project.fullDescription}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button as="a" href={project.liveDemo} target="_blank" rel="noreferrer" icon={ExternalLink}>
                    Live Demo
                  </Button>
                  <Button as="a" href={project.github} target="_blank" rel="noreferrer" variant="secondary" icon={GitBranch}>
                    GitHub
                  </Button>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-background/70 p-6">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} banner`}
                  loading="lazy"
                  className="mx-auto h-72 w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_20rem]">
            <div className="grid gap-6">
              <DetailBlock title="Features" icon={CheckCircle2}>
                <ul className="grid gap-3 text-sm leading-7 text-muted sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </DetailBlock>

              <DetailBlock title="Technology Stack" icon={Code2}>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm font-semibold text-white">
                      {technology}
                    </span>
                  ))}
                </div>
              </DetailBlock>

              <DetailBlock title="Challenges" icon={TriangleAlert}>
                <p className="text-sm leading-7 text-muted">{project.challenges}</p>
              </DetailBlock>

              <DetailBlock title="What I Learned" icon={Lightbulb}>
                <p className="text-sm leading-7 text-muted">{project.whatILearned}</p>
              </DetailBlock>

              <DetailBlock title="Gallery" icon={ExternalLink}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={`${project.slug}-${index}`} className="rounded-lg border border-white/10 bg-background/70 p-5">
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        loading="lazy"
                        className="h-44 w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </DetailBlock>
            </div>

            <aside className="h-fit rounded-xl border border-white/10 bg-card/70 p-5 shadow-lg shadow-black/10 backdrop-blur-xl lg:sticky lg:top-28">
              <h2 className="font-heading text-xl font-bold text-white">Project Summary</h2>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="text-muted">Completion</dt>
                  <dd className="mt-1 font-semibold text-white">{project.completionDate}</dd>
                </div>
                <div>
                  <dt className="text-muted">Status</dt>
                  <dd className="mt-1 font-semibold text-white">{project.status}</dd>
                </div>
                <div>
                  <dt className="text-muted">Category</dt>
                  <dd className="mt-1 font-semibold text-white">{project.category}</dd>
                </div>
              </dl>
              <div className="mt-6 grid gap-3">
                <Button as="a" href={project.liveDemo} target="_blank" rel="noreferrer" icon={ExternalLink}>
                  Open Live Demo
                </Button>
                <Button as="a" href={project.github} target="_blank" rel="noreferrer" variant="secondary" icon={Github}>
                  View Source
                </Button>
              </div>
            </aside>
          </div>

          <nav className="mt-10 grid gap-4 sm:grid-cols-2" aria-label="Project navigation">
            {previousProject ? (
              <Link to={`/project/${previousProject.slug}`} className="rounded-xl border border-white/10 bg-card/55 p-5 transition hover:-translate-y-1 hover:border-primary/40">
                <span className="flex items-center gap-2 text-sm text-muted">
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Previous Project
                </span>
                <strong className="mt-2 block font-heading text-lg text-white">{previousProject.title}</strong>
              </Link>
            ) : null}
            {nextProject ? (
              <Link to={`/project/${nextProject.slug}`} className="rounded-xl border border-white/10 bg-card/55 p-5 text-right transition hover:-translate-y-1 hover:border-secondary/40">
                <span className="flex items-center justify-end gap-2 text-sm text-muted">
                  Next Project
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
                <strong className="mt-2 block font-heading text-lg text-white">{nextProject.title}</strong>
              </Link>
            ) : null}
          </nav>
        </Container>
      </Section>
    </>
  )
}

export default ProjectDetailPage
