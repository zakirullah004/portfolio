import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { staggerContainer } from '../../utils/animations'
import Container from '../Container/Container'
import ProjectCard from '../ProjectCard/ProjectCard'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work and case studies"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export default Projects
