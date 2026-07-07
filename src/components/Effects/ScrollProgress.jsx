import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-primary via-secondary to-primary"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
