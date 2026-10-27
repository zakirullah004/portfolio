import { motion, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import myPic from '../../assets/myPic-web.jpg'
import myResume from '../../assets/zakirResume.pdf'
import { siteConfig } from '../../data/site'
import { easeOutExpo, fadeUp, lineReveal, staggerContainer } from '../../utils/animations'
import { scrollToId } from '../../utils/scroll'
import Button from '../Button/Button'
import Container from '../Container/Container'

function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const pointerX = useSpring(0, { stiffness: 60, damping: 22, mass: 0.5 })
  const pointerY = useSpring(0, { stiffness: 60, damping: 22, mass: 0.5 })
  const portraitX = useTransform(pointerX, [-1, 1], [-10, 10])
  const portraitY = useTransform(pointerY, [-1, 1], [-8, 8])

  function handlePointerMove(event) {
    if (prefersReducedMotion) return

    pointerX.set((event.clientX / window.innerWidth - 0.5) * 2)
    pointerY.set((event.clientY / window.innerHeight - 0.5) * 2)
  }

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 bg-ink" aria-hidden="true" />
      <div
        className="guide-grid absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-40 top-[-18%] -z-10 h-[38rem] w-[38rem] rounded-full bg-jade/[0.07] blur-[130px]"
        aria-hidden="true"
      />

      <Container className="relative flex flex-1 flex-col justify-center pb-12 pt-28 sm:pb-16 lg:pt-36">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="meta flex items-center gap-2.5 text-ash">
              <span className="relative flex size-1.5" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-jade opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-jade" />
              </span>
              {siteConfig.availability}
            </p>
            <p className="meta text-ash-dim">
              {siteConfig.role} — {siteConfig.location}
            </p>
          </motion.div>

          <div className="mt-8 grid gap-12 sm:mt-10 lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)] lg:items-start lg:gap-16">
            <div>
              <h1 className="text-bone">
                <span className="sr-only">
                  {siteConfig.name} — {siteConfig.role}
                </span>
                <span className="block overflow-hidden pb-[0.04em]" aria-hidden="true">
                  <motion.span variants={lineReveal} className="display-hero block">
                    Zakir <span className="italic">Ullah</span>
                  </motion.span>
                </span>
              </h1>

              <motion.div variants={fadeUp} className="mt-10 border-t border-line pt-8">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.24em] text-jade">
                  Full Stack / MERN
                </p>
                <p className="mt-4 max-w-xl text-[0.9375rem] leading-8 text-ash">
                  MERN Stack Developer building modern, responsive, scalable, and high-performance web
                  applications while continuously learning new technologies.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    as="button"
                    type="button"
                    onClick={() => scrollToId('projects')}
                    icon={ArrowDownRight}
                    iconPosition="right"
                    className="w-full sm:w-auto"
                  >
                    View Projects
                  </Button>
                  <Link
                    to="/#contact"
                    className="group inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-[2px] border border-line px-6 py-3.5 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:border-jade/60 hover:text-jade sm:w-auto"
                  >
                    Get in touch
                    <ArrowUpRight className="arrow-shift size-3.5" aria-hidden="true" />
                  </Link>
                </div>

                <a
                  href={myResume}
                  download
                  className="link-sweep mt-7 inline-flex w-fit items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ash transition-colors duration-300 hover:text-bone"
                >
                  <Download className="size-3.5" aria-hidden="true" />
                  Download résumé
                </a>
              </motion.div>
            </div>

            <motion.figure
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: easeOutExpo, delay: 0.35 }}
              style={prefersReducedMotion ? undefined : { x: portraitX, y: portraitY }}
              className="relative w-full max-w-[17rem] sm:max-w-[19rem] lg:ml-auto lg:max-w-[19rem]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-line bg-ink-soft">
                <img
                  src={myPic}
                  alt={`${siteConfig.name}, ${siteConfig.role}`}
                  className="portrait-grade h-full w-full object-cover object-top"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/5 to-ink/10"
                  aria-hidden="true"
                />
                <span
                  className="absolute right-3 top-3 size-2 border-r border-t border-bone/40"
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-3 left-3 size-2 border-b border-l border-bone/40"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline justify-between p-4">
                  <span className="meta text-bone/80">Portrait</span>
                  <span className="meta text-jade">{siteConfig.location}</span>
                </figcaption>
              </div>
            </motion.figure>
          </div>
        </motion.div>
      </Container>

      <div className="relative border-t border-line">
        <Container className="flex items-center justify-between gap-4 py-4">
          <button
            type="button"
            onClick={() => scrollToId('about')}
            className="group flex items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.24em] text-ash transition-colors duration-300 hover:text-bone"
          >
            <span className="relative flex h-8 w-px overflow-hidden bg-line" aria-hidden="true">
              {prefersReducedMotion ? null : (
                <motion.span
                  className="absolute inset-x-0 top-0 h-3 bg-jade"
                  animate={{ y: [-12, 32] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
            </span>
            Scroll
          </button>

          <div className="flex items-center gap-5">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-ash transition-colors duration-300 hover:text-bone"
            >
              GitHub
            </a>
            <span className="h-3 w-px bg-line" aria-hidden="true" />
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-ash transition-colors duration-300 hover:text-bone"
            >
              LinkedIn
            </a>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Hero
