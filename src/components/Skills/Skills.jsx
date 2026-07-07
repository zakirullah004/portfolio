import { motion } from 'framer-motion'
import { Braces, Code2, Database, GitBranch, Palette, Server, Wrench } from 'lucide-react'
import { fadeIn, staggerContainer } from '../../utils/animations'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

const skillGroups = [
  { category: 'Frontend', icon: Code2, skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', icon: Server, skills: ['Node.js', 'Express.js'] },
  { category: 'Database', icon: Database, skills: ['MongoDB'] },
  { category: 'Tools', icon: Wrench, skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'] },
]

const skillIcons = {
  JavaScript: Braces,
  Git: GitBranch,
  Figma: Palette,
}

function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A focused modern stack"
          description="Tools and technologies I use to design, build, debug, and deliver polished web applications."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 lg:grid-cols-4"
        >
          {skillGroups.map(({ category, icon: GroupIcon, skills }) => (
            <motion.article
              key={category}
              variants={fadeIn}
              className="rounded-xl border border-white/10 bg-card/55 p-5 shadow-lg shadow-black/10 backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-lg bg-secondary/10 text-secondary">
                  <GroupIcon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-bold text-white">{category}</h3>
              </div>
              <div className="grid gap-3">
                {skills.map((skill, index) => {
                  const Icon = skillIcons[skill] || GroupIcon
                  return (
                    <motion.div
                      key={skill}
                      className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 transition hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10"
                      animate={{ y: [-2, 3, -2] }}
                      transition={{ duration: 4 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Icon className="size-4 text-primary transition group-hover:scale-110" aria-hidden="true" />
                      <span className="text-sm font-semibold text-white">{skill}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export default Skills
