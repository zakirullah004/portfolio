import { BriefcaseBusiness, Sparkles } from 'lucide-react'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/animations'

const experiences = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Internship Opportunity Placeholder',
    period: 'Open to opportunities',
    details:
      'Ready to contribute to frontend, backend, and full stack tasks while learning from senior engineers in a professional environment.',
  },
  {
    role: 'Project-Based Developer',
    company: 'Personal Portfolio Lab',
    period: 'Current',
    details:
      'Building full stack projects to practice React architecture, REST API design, MongoDB modeling, responsive UI, and deployment workflows.',
  },
]

function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Practical growth through building"
          description="My current experience is centered on project work, internship readiness, and disciplined full stack practice."
        />
        <div className="mx-auto grid max-w-4xl gap-5">
          {experiences.map(({ role, company, period, details }) => (
            <motion.article
              key={role}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="group rounded-xl border border-white/10 bg-card/55 p-6 shadow-lg shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-secondary/40"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                    <BriefcaseBusiness className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">{role}</h3>
                    <p className="mt-1 text-sm font-semibold text-muted">{company}</p>
                  </div>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-secondary">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  {period}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted">{details}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Experience
