import { motion } from 'framer-motion'
import { skillGroups, skillIcons } from '../../data/skills'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title={
            <>
              A focused <em className="italic">modern stack</em>
            </>
          }
          description="Tools and technologies I use to design, build, debug, and deliver polished web applications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-4"
        >
          {skillGroups.map(({ category, icon: GroupIcon, skills }, groupIndex) => (
            <motion.article
              key={category}
              variants={fadeUp}
              className="group/cell bg-ink p-6 transition-colors duration-500 hover:bg-ink-soft sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="meta text-ash-dim">{String(groupIndex + 1).padStart(2, '0')}</span>
                <GroupIcon className="size-4 text-jade/60" aria-hidden="true" />
              </div>

              <h3 className="display-md mt-8 text-bone">{category}</h3>

              <ul className="mt-6">
                {skills.map((skill) => {
                  const Icon = skillIcons[skill] || GroupIcon

                  return (
                    <li
                      key={skill}
                      className="group flex items-center gap-3 border-t border-line py-3 transition-colors duration-300"
                    >
                      <Icon
                        className="size-3 shrink-0 text-ash-dim transition-colors duration-300 group-hover:text-jade"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-bone-dim transition-colors duration-300 group-hover:text-bone">
                        {skill}
                      </span>
                      <span
                        className="ml-auto h-px w-0 bg-jade/50 transition-all duration-500 group-hover:w-5"
                        aria-hidden="true"
                      />
                    </li>
                  )
                })}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export default Skills
