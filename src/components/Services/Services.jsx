import { motion } from 'framer-motion'
import { Blocks, Code2, Layers3, MonitorSmartphone, ServerCog } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

const services = [
  {
    title: 'Frontend Development',
    icon: Code2,
    text: 'Responsive React interfaces with reusable components and clean visual hierarchy.',
  },
  {
    title: 'Backend Development',
    icon: ServerCog,
    text: 'Express and Node.js foundations for reliable data-driven applications.',
  },
  {
    title: 'REST APIs',
    icon: Blocks,
    text: 'Readable endpoint structures, controller organization, and API-first workflows.',
  },
  {
    title: 'Full Stack Applications',
    icon: Layers3,
    text: 'End-to-end MERN applications designed for scalability and maintainability.',
  },
  {
    title: 'Responsive UI',
    icon: MonitorSmartphone,
    text: 'Interfaces that adapt gracefully across desktop, tablet, and mobile screens.',
  },
]

function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          index="07"
          eyebrow="Services"
          title={
            <>
              What I can <em className="italic">build</em>
            </>
          }
          description="The areas I work across today, from interface detail to the API behind it."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-x-16 md:grid-cols-2"
        >
          {services.map(({ title, icon: Icon, text }, index) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="group flex gap-5 border-t border-line py-7"
            >
              <span className="meta pt-1.5 text-jade/70">{String(index + 1).padStart(2, '0')}</span>

              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-light tracking-tight text-bone transition-colors duration-300 group-hover:text-jade">
                  {title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-7 text-ash">{text}</p>
              </div>

              <Icon
                className="mt-1 size-4 shrink-0 text-ash-dim transition-colors duration-300 group-hover:text-jade"
                aria-hidden="true"
              />
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </Section>
  )
}

export default Services
