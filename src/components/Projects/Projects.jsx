import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { staggerContainer, viewportOnce } from '../../utils/animations'
import Container from '../Container/Container'
import ProjectCard from '../ProjectCard/ProjectCard'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

function Projects() {
  const [featuredProject, ...otherProjects] = projects

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Projects"
          title={
            <>
              Selected work & <em className="italic">case studies</em>
            </>
          }
          description="A selection of work spanning full stack platforms and focused frontend systems."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {featuredProject ? (
            <ProjectCard
              project={featuredProject}
              index={0}
              total={projects.length}
              featured
              className="lg:col-span-2"
            />
          ) : null}

          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 1}
              total={projects.length}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export default Projects
