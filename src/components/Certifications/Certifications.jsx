import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../../data/site'
import Button from '../Button/Button'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

function Certifications() {
  return (
    <Section id="certifications">
      <Container>
        <SectionHeading eyebrow="Certifications" title="Learning milestones" />
        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((certificate) => (
            <article key={certificate.title} className="rounded-xl border border-white/10 bg-card/55 p-5 shadow-lg shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-secondary/40">
              <div className="mb-5 grid aspect-video place-items-center rounded-lg border border-white/10 bg-background/70">
                <Award className="size-12 text-primary" aria-label="Certificate image placeholder" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{certificate.date}</p>
              <h3 className="mt-2 font-heading text-xl font-bold text-white">{certificate.title}</h3>
              <p className="mt-2 text-sm text-muted">{certificate.organization}</p>
              <div className="mt-5">
                <Button as="a" href="https://example.com" target="_blank" rel="noreferrer" variant="secondary" icon={ExternalLink}>
                  View Certificate
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Certifications
