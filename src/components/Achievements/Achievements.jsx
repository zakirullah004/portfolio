import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Award, Code2, GitBranch, Rocket, Timer } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

const stats = [
  { label: 'Projects Completed', value: 8, icon: Rocket },
  { label: 'Technologies', value: 14, icon: Code2 },
  { label: 'Certificates', value: 3, icon: Award },
  { label: 'GitHub Contributions', value: 120, icon: GitBranch },
  { label: 'Years Learning', value: 2, icon: Timer },
]

function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useMotionValue(0)
  const spring = useSpring(count, { stiffness: 90, damping: 20 })
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
        <SectionHeading eyebrow="Achievements" title="Progress measured in practice" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(({ label, value, icon: Icon }) => (
            <article key={label} className="rounded-xl border border-white/10 bg-card/55 p-5 text-center shadow-lg shadow-black/10 backdrop-blur-xl">
              <Icon className="mx-auto mb-4 size-7 text-secondary" aria-hidden="true" />
              <p className="font-heading text-4xl font-bold text-white">
                <Counter value={value} />+
              </p>
              <p className="mt-2 text-sm text-muted">{label}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Achievements
