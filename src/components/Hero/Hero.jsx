import { motion, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { Code2, Download, Mail, Network, Sparkles } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import myPic from '../../assets/myPic.jpg'
import myResume from '../../assets/zakirResume.pdf'
import { fadeIn, staggerContainer } from '../../utils/animations'
import Button from '../Button/Button'
import Container from '../Container/Container'

const titles = [
  'Full Stack Developer',
  'React Developer',
  'Node.js Developer',
  'Software Engineering Student',
]

const techBadges = [
  { label: 'React', className: 'left-0 top-[15%] sm:-left-4' },
  { label: 'Next.js', className: 'right-0 top-[9%] sm:-right-4' },
  { label: 'Node.js', className: 'left-[7%] bottom-[24%]' },
  { label: 'Express', className: 'right-[6%] bottom-[25%]' },
  { label: 'MongoDB', className: 'left-[30%] -bottom-1' },
  { label: 'Tailwind', className: 'right-[24%] -bottom-6' },
  { label: 'JavaScript', className: 'left-[26%] -top-3' },
  { label: 'Git', className: 'right-[36%] top-[31%]' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: Code2 },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Network },
  { label: 'Email', href: 'mailto:hello@example.com', icon: Mail },
]

const particles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 84)}%`,
  top: `${12 + ((index * 23) % 72)}%`,
  delay: index * 0.35,
  size: index % 3 === 0 ? 'size-1.5' : 'size-1',
}))

function useTypingCycle(words) {
  const [wordIndex, setWordIndex] = useState(0)
  const [characterCount, setCharacterCount] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const isWordComplete = characterCount === currentWord.length
    const isWordEmpty = characterCount === 0
    const delay = isWordComplete && !isDeleting ? 1300 : isDeleting ? 42 : 78

    const timeoutId = window.setTimeout(() => {
      if (isWordComplete && !isDeleting) {
        setIsDeleting(true)
        return
      }

      if (isWordEmpty && isDeleting) {
        setIsDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
        return
      }

      setCharacterCount((count) => count + (isDeleting ? -1 : 1))
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [characterCount, isDeleting, wordIndex, words])

  return words[wordIndex].slice(0, characterCount)
}

function Hero() {
  const typedTitle = useTypingCycle(titles)
  const navigate = useNavigate()
  const prefersReducedMotion = useReducedMotion()
  const mouseX = useSpring(0, { stiffness: 70, damping: 24, mass: 0.4 })
  const mouseY = useSpring(0, { stiffness: 70, damping: 24, mass: 0.4 })
  const profileX = useTransform(mouseX, [-1, 1], [-16, 16])
  const profileY = useTransform(mouseY, [-1, 1], [-12, 12])
  const badgeX = useTransform(mouseX, [-1, 1], [10, -10])
  const badgeY = useTransform(mouseY, [-1, 1], [8, -8])

  function handleMouseMove(event) {
    if (prefersReducedMotion) return

    const { innerWidth, innerHeight } = window
    mouseX.set((event.clientX / innerWidth - 0.5) * 2)
    mouseY.set((event.clientY / innerHeight - 0.5) * 2)
  }

  function handleViewProjects() {
    const projectsSection = document.getElementById('projects')

    if (projectsSection) {
      const offset = 96
      const top = projectsSection.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
      return
    }

    navigate('/#projects')
  }

  return (
    <section
      className="relative -mt-20 flex min-h-[100svh] items-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 -z-20 bg-background" aria-hidden="true" />
      <motion.div
        className="absolute inset-0 -z-10 opacity-80"
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? {}
            : {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage:
            'linear-gradient(115deg, rgba(16, 185, 129, 0.22), transparent 28%, rgba(45, 212, 191, 0.18), transparent 62%, rgba(163, 230, 53, 0.12))',
          backgroundSize: '220% 220%',
        }}
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_28%,rgba(16,185,129,0.24),transparent_26rem),radial-gradient(circle_at_78%_34%,rgba(45,212,191,0.2),transparent_25rem),radial-gradient(circle_at_52%_88%,rgba(163,230,53,0.1),transparent_24rem)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20"
        aria-hidden="true"
      />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className={`absolute rounded-full bg-white/35 ${particle.size}`}
          style={{ left: particle.left, top: particle.top }}
          aria-hidden="true"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  opacity: [0.15, 0.75, 0.15],
                  y: [-10, 14, -10],
                  scale: [1, 1.4, 1],
                }
          }
          transition={{ duration: 5.5, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left"
        >
          <motion.div
            variants={fadeIn}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/10 backdrop-blur-md lg:mx-0"
          >
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            <span>👋 Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I'm Zakir Ullah
          </motion.h1>

          <motion.div
            variants={fadeIn}
            className="mt-4 min-h-[4.6rem] font-heading text-3xl font-extrabold leading-tight sm:min-h-[5.8rem] sm:text-5xl lg:text-6xl"
          >
            <span className="animated-gradient-text bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
            <span className="mt-2 block text-xl font-bold text-muted sm:text-2xl lg:text-3xl">
              {typedTitle}
              <span className="ml-1 inline-block h-7 w-0.5 translate-y-1 bg-primary sm:h-8" aria-hidden="true" />
            </span>
          </motion.div>

          <motion.p
            variants={fadeIn}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg lg:mx-0"
          >
            I build modern, responsive, scalable, and high-performance web applications using the MERN stack while continuously learning new technologies.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button as="button" onClick={handleViewProjects} icon={Code2} className="w-full sm:w-auto">
              View Projects
            </Button>
            <Button
              as="a"
              href={myResume}
              download
              variant="secondary"
              icon={Download}
              className="w-full sm:w-auto"
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
            aria-label="Social links"
          >
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="group relative grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-muted shadow-lg shadow-black/10 backdrop-blur-md transition hover:-translate-y-1 hover:border-primary/50 hover:text-white hover:shadow-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label={label}
              >
                <Icon className="size-5 transition group-hover:scale-110" aria-hidden="true" />
                <span className="pointer-events-none absolute -top-10 rounded-md border border-white/10 bg-card px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-xl transition group-hover:-translate-y-1 group-hover:opacity-100 group-focus-visible:-translate-y-1 group-focus-visible:opacity-100">
                  {label}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative mx-auto flex min-h-[28rem] w-full max-w-[34rem] items-center justify-center sm:min-h-[34rem]"
          style={{ x: profileX, y: profileY }}
        >
          <motion.div
            className="absolute h-[78%] w-[78%] rounded-full border border-primary/20 bg-primary/5 blur-3xl"
            animate={prefersReducedMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <motion.div
            className="relative grid aspect-square w-[72%] max-w-[23rem] place-items-center rounded-full border border-white/10 bg-card/70 p-4 shadow-premium backdrop-blur-xl"
            animate={prefersReducedMotion ? {} : { y: [-8, 10, -8] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-[2px] opacity-80" aria-hidden="true">
              <div className="h-full w-full rounded-full bg-card" />
            </div>
            <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full border border-white/10 bg-background">
              <img
                src={myPic}
                alt="Abstract developer profile placeholder"
                loading="lazy"
                className="absolute h-52 w-52 object-contain opacity-45 sm:h-64 sm:w-64"
              />
              <span className="relative font-heading text-5xl font-extrabold text-white drop-shadow-2xl sm:text-7xl">
                <img src={myPic} alt="" />
              </span>
            </div>
          </motion.div>

          <motion.div style={{ x: badgeX, y: badgeY }} className="absolute inset-0 pointer-events-none">
            <style>{`
              :root {
                --orbit-radius: 9rem;
              }
              @media (min-width: 640px) {
                :root {
                  --orbit-radius: 12.5rem;
                }
              }
              @media (min-width: 1024px) {
                :root {
                  --orbit-radius: 14.5rem;
                }
              }
            `}</style>
            
            <motion.div
              className="absolute inset-0"
              animate={prefersReducedMotion ? {} : { rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            >
              {techBadges.map((badge, index) => {
                const angle = index * (360 / techBadges.length)
                return (
                  <div
                    key={badge.label}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * var(--orbit-radius)))`,
                    }}
                  >
                    <motion.span
                      className="pointer-events-auto block rounded-full border border-white/10 bg-card/80 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/10 hover:shadow-primary/20 sm:px-4 sm:text-sm whitespace-nowrap cursor-default"
                      initial={{ rotate: -angle }}
                      animate={prefersReducedMotion ? {} : { rotate: [-angle, -angle - 360] }}
                      transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                    >
                      {badge.label}
                    </motion.span>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted sm:flex"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <span>Scroll</span>
        <span className="h-8 w-5 rounded-full border border-white/20 p-1">
          <span className="block h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
      </motion.div>
    </section>
  )
}

export default Hero
