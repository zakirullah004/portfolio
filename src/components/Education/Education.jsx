import { motion } from 'framer-motion'
import { Award, BookOpen, GraduationCap, School } from 'lucide-react'
import { fadeIn } from '../../utils/animations'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

const educationItems = [
  { title: 'Matric', meta: 'Academic foundation', icon: School, text: 'Built core academic discipline, communication habits, and problem-solving confidence.' },
  { title: 'Intermediate', meta: 'Pre-university growth', icon: BookOpen, text: 'Strengthened analytical thinking while preparing for software engineering studies.' },
  { title: 'BS Software Engineering', meta: 'Current focus', icon: GraduationCap, text: 'Studying software design, programming fundamentals, web engineering, and practical MERN development.' },
  { title: 'Certifications', meta: 'Continuous learning', icon: Award, text: 'Expanding skills through focused courses, project practice, and modern developer workflows.' },
]

function Timeline({ items }) {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-transparent sm:left-1/2" />
      <div className="grid gap-8">
        {items.map(({ title, meta, icon: Icon, text }, index) => (
          <motion.article
            key={title}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`relative pl-16 sm:w-1/2 sm:pl-0 ${index % 2 === 0 ? 'sm:pr-10' : 'sm:ml-auto sm:pl-10'}`}
          >
            <div className="absolute left-0 top-4 grid size-10 place-items-center rounded-full border border-primary/40 bg-background text-primary shadow-lg shadow-primary/20 sm:left-auto sm:right-[-1.25rem]">
              <Icon className="size-5" aria-hidden="true" />
            </div>
            {index % 2 !== 0 ? (
              <div className="absolute top-4 hidden size-10 place-items-center rounded-full border border-secondary/40 bg-background text-secondary shadow-lg shadow-secondary/20 sm:left-[-1.25rem] sm:grid">
                <Icon className="size-5" aria-hidden="true" />
              </div>
            ) : null}
            <div className="rounded-xl border border-white/10 bg-card/55 p-5 shadow-lg shadow-black/10 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{meta}</p>
              <h3 className="mt-2 font-heading text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionHeading eyebrow="Education" title="A learning path with momentum" />
        <Timeline items={educationItems} />
      </Container>
    </Section>
  )
}

export default Education
