import { motion } from 'framer-motion'
import { GraduationCap, Rocket, Target, Wrench } from 'lucide-react'
import heroPlaceholder from '../../assets/hero.png'
import { fadeIn, staggerContainer } from '../../utils/animations'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

const aboutCards = [
  {
    icon: GraduationCap,
    title: 'My Journey',
    text: 'I am growing as a software engineering student with a strong focus on practical MERN stack projects and modern frontend craft.',
  },
  {
    icon: Wrench,
    title: 'Web Development',
    text: 'I enjoy building responsive interfaces, clean APIs, reusable components, and systems that feel fast, polished, and maintainable.',
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    text: 'I keep improving through project-based learning, experimenting with modern tools, and studying production-quality React patterns.',
  },
  {
    icon: Target,
    title: 'Career Goals',
    text: 'My goal is to become a reliable full stack engineer who ships valuable products and contributes confidently to professional teams.',
  },
]

function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          eyebrow="About me"
          title="Engineering thoughtful web experiences"
          description="I combine software engineering fundamentals with a strong eye for UI detail, motion, and user experience."
        />
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="relative mx-auto aspect-square max-w-sm rounded-[2rem] border border-white/10 bg-card/60 p-8 shadow-premium backdrop-blur-xl">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-secondary/25" />
              <div className="relative grid h-full place-items-center rounded-[1.5rem] border border-white/10 bg-background/70">
                <img
                  src={heroPlaceholder}
                  alt="Developer workspace illustration placeholder"
                  loading="lazy"
                  className="h-56 w-56 object-contain opacity-70"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {aboutCards.map(({ icon: Icon, title, text }) => (
              <motion.article
                key={title}
                variants={fadeIn}
                className="group rounded-xl border border-white/10 bg-card/55 p-5 shadow-lg shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/10"
              >
                <div className="mb-4 grid size-11 place-items-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default About
