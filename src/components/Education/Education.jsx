import { motion } from 'framer-motion'
import { Award, BookOpen, GraduationCap, School } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

const educationItems = [
  {
    title: 'Matric',
    meta: 'Academic foundation',
    icon: School,
    text: 'Built core academic discipline, communication habits, and problem-solving confidence.',
  },
  {
    title: 'Intermediate',
    meta: 'Pre-university growth',
    icon: BookOpen,
    text: 'Strengthened analytical thinking while preparing for software engineering studies.',
  },
  {
    title: 'BS Software Engineering',
    meta: 'Current focus',
    icon: GraduationCap,
    text: 'Studying software design, programming fundamentals, web engineering, and practical MERN development.',
  },
  {
    title: 'Certifications',
    meta: 'Continuous learning',
    icon: Award,
    text: 'Expanding skills through focused courses, project practice, and modern developer workflows.',
  },
]

function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Education"
          title={
            <>
              A learning path with <em className="italic">momentum</em>
            </>
          }
          description="A steady progression from academic fundamentals to practical, project-driven software engineering."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {educationItems.map(({ title, meta, icon: Icon, text }, index) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="group bg-ink p-6 transition-colors duration-500 hover:bg-ink-soft sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="meta text-ash-dim">{String(index + 1).padStart(2, '0')}</span>
                <Icon
                  className="size-4 text-jade/60 transition-colors duration-300 group-hover:text-jade"
                  aria-hidden="true"
                />
              </div>

              <p className="meta mt-8 text-ash-dim">{meta}</p>
              <h3 className="display-md mt-2 text-bone">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ash">{text}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}

export default Education
