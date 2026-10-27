import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../../data/site'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

function Certifications() {
  return (
    <Section id="certifications">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Certifications"
          title={
            <>
              Learning <em className="italic">milestones</em>
            </>
          }
          description="Short, focused programs that reinforced the fundamentals behind the projects on this page."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-px border border-line bg-line md:grid-cols-3"
        >
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              variants={fadeUp}
              className="group flex flex-col bg-ink p-6 transition-colors duration-500 hover:bg-ink-soft sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <Award
                  className="size-5 text-jade/70 transition-colors duration-300 group-hover:text-jade"
                  aria-hidden="true"
                />
                <span className="meta text-ash-dim">{String(index + 1).padStart(2, '0')}</span>
              </div>

              <p className="meta mt-10 text-ash-dim">{certificate.date}</p>
              <h3 className="display-md mt-2 text-bone">{certificate.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ash">{certificate.organization}</p>

              <p className="meta mt-auto pt-8 text-ash-dim">Credential</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export default Certifications
