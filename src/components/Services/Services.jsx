import { motion } from 'framer-motion'
import { Blocks, Code2, Layers3, MonitorSmartphone, ServerCog } from 'lucide-react'
import { fadeIn, staggerContainer } from '../../utils/animations'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

const services = [
  { title: 'Frontend Development', icon: Code2, text: 'Responsive React interfaces with reusable components and clean visual hierarchy.' },
  { title: 'Backend Development', icon: ServerCog, text: 'Express and Node.js foundations for reliable data-driven applications.' },
  { title: 'REST APIs', icon: Blocks, text: 'Readable endpoint structures, controller organization, and API-first workflows.' },
  { title: 'Full Stack Applications', icon: Layers3, text: 'End-to-end MERN applications designed for scalability and maintainability.' },
  { title: 'Responsive UI', icon: MonitorSmartphone, text: 'Interfaces that adapt gracefully across desktop, tablet, and mobile screens.' },
]

function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading eyebrow="Services" title="What I can build" />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {services.map(({ title, icon: Icon, text }) => (
            <motion.article key={title} variants={fadeIn} className="rounded-xl border border-white/10 bg-card/55 p-5 shadow-lg shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/10">
              <Icon className="mb-5 size-7 text-primary" aria-hidden="true" />
              <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export default Services
