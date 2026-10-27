import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed left-0 top-0 z-[80] h-px w-full origin-left bg-jade"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

export default ScrollProgress
