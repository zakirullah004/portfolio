import { motion } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

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
          index="04"
          eyebrow="Experience"
          title={
            <>
              Practical growth through <em className="italic">building</em>
            </>
          }
          description="My current experience is centered on project work, internship readiness, and disciplined full stack practice."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="border-t border-line"
        >
          {experiences.map(({ role, company, period, details }) => (
            <motion.li
              key={role}
              variants={fadeUp}
              className="group grid gap-5 border-b border-line py-8 sm:py-10 lg:grid-cols-[11rem_minmax(0,1fr)_auto] lg:gap-10"
            >
              <p className="meta text-ash-dim">{period}</p>

              <div>
                <h3 className="display-md text-bone transition-colors duration-300 group-hover:text-jade">
                  {role}
                </h3>
                <p className="mt-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-jade/80">
                  {company}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-ash">{details}</p>
              </div>

              <BriefcaseBusiness
                className="hidden size-4 text-ash-dim transition-colors duration-300 group-hover:text-jade lg:block"
                aria-hidden="true"
              />
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}

export default Experience
