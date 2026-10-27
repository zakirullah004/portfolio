import { motion } from 'framer-motion'
import { GraduationCap, Rocket, Target, Wrench } from 'lucide-react'
import myPic from '../../assets/myPic-web.jpg'
import { siteConfig } from '../../data/site'
import { fadeUp, imageReveal, staggerContainer, viewportOnce } from '../../utils/animations'
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

const facts = [
  { label: 'Based in', value: siteConfig.location },
  { label: 'Now studying', value: 'BS Software Engineering' },
  { label: 'Primary focus', value: 'MERN stack development' },
]

function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              Engineering thoughtful <em className="italic">web experiences</em>
            </>
          }
          description="I combine software engineering fundamentals with a strong eye for UI detail, motion, and user experience."
        />

        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="h-fit lg:sticky lg:top-28"
          >
            <motion.figure variants={imageReveal} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-line bg-ink-soft">
                <img
                  src={myPic}
                  alt={`${siteConfig.name}, ${siteConfig.role}`}
                  loading="lazy"
                  className="portrait-grade h-full w-full object-cover object-top"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-4 p-5">
                  <span className="meta text-bone/85">{siteConfig.name}</span>
                  <span className="meta text-jade">{siteConfig.location}</span>
                </figcaption>
              </div>
            </motion.figure>

            <motion.dl variants={fadeUp} className="mt-8 grid gap-0 border-t border-line">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
                >
                  <dt className="meta text-ash-dim">{fact.label}</dt>
                  <dd className="text-right text-sm text-bone-dim">{fact.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="display-md max-w-2xl text-balance text-bone-dim"
            >
              I&rsquo;m Zakir Ullah — a MERN stack developer and software engineering student who cares
              about how an interface feels as much as how it works.
            </motion.p>

            <motion.ol
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-12 border-t border-line"
            >
              {aboutCards.map(({ icon: Icon, title, text }, index) => (
                <motion.li
                  key={title}
                  variants={fadeUp}
                  className="group grid gap-5 border-b border-line py-8 sm:grid-cols-[2.5rem_13rem_minmax(0,1fr)] sm:items-start sm:gap-8"
                >
                  <span className="meta text-ash-dim">{String(index + 1).padStart(2, '0')}</span>

                  <div>
                    <Icon
                      className="size-4 text-jade transition-transform duration-500 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    <h3 className="mt-3 font-display text-[1.75rem] leading-tight text-bone transition-colors duration-300 group-hover:text-jade">
                      {title}
                    </h3>
                  </div>

                  <p className="max-w-md text-sm leading-7 text-ash">{text}</p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default About
