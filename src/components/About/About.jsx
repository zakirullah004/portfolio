import { motion } from 'framer-motion'
import { GraduationCap, Rocket, Target, Wrench } from 'lucide-react'
import myPic from '../../assets/myPic.jpg'
import { siteConfig } from '../../data/site'
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
            <div className="relative mx-auto max-w-sm">
              <div
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/60 shadow-premium backdrop-blur-xl">
                <img
                  src={myPic}
                  alt={`${siteConfig.name}, ${siteConfig.role}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover object-top"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl border border-white/10 bg-background/70 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-xl">
                  <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                    <Rocket className="size-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-heading text-sm font-bold text-white">{siteConfig.name}</p>
                    <p className="truncate text-xs text-muted">{siteConfig.role}</p>
                  </div>
                </div>
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
