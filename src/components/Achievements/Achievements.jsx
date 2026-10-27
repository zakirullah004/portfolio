import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Award, Code2, Rocket } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { projects } from '../../data/projects'
import { certifications } from '../../data/site'
import { technologies } from '../../data/skills'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

const stats = [
  { label: 'Projects built', value: projects.length, icon: Rocket },
  { label: 'Technologies in use', value: technologies.length, icon: Code2 },
  { label: 'Certifications', value: certifications.length, icon: Award },
]

function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useMotionValue(0)
  const spring = useSpring(count, { stiffness: 80, damping: 22 })
  const rounded = useTransform(spring, (latest) => Math.round(latest))

  useEffect(() => {
    if (inView) count.set(value)
  }, [count, inView, value])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

function Achievements() {
  return (
    <Section id="achievements">
      <Container>
        <SectionHeading
          index="08"
          eyebrow="By the numbers"
          title={
            <>
              Progress measured in <em className="italic">practice</em>
            </>
          }
          description="A quiet tally of the work, tools, and learning behind this portfolio."
        />

        <motion.dl
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-px border border-line bg-line sm:grid-cols-3"
        >
          {stats.map(({ label, value, icon: Icon }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="group bg-ink p-6 transition-colors duration-500 hover:bg-ink-soft sm:p-8"
            >
              <Icon className="size-4 text-jade/70" aria-hidden="true" />
              <div className="mt-8 flex flex-col-reverse gap-3">
                <dt className="meta text-ash-dim">{label}</dt>
                <dd className="display-xl text-bone">
                  <Counter value={value} />
                </dd>
              </div>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </Section>
  )
}

export default Achievements
