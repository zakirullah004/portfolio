import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { fadeIn } from '../../utils/animations'

function Section({ id, className, children, animate = true }) {
  const Component = animate ? motion.section : 'section'
  const animationProps = animate
    ? {
        variants: fadeIn,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.24 },
      }
    : {}

  return (
    <Component
      id={id}
      className={cn('relative py-20 sm:py-24 lg:py-28', className)}
      {...animationProps}
    >
      {children}
    </Component>
  )
}

export default Section
