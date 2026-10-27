import { motion } from 'framer-motion'
import { fadeIn, lineReveal, staggerContainer, viewportOnce } from '../../utils/animations'
import { cn } from '../../utils/cn'

function SectionHeading({ index, eyebrow, title, description, className }) {
  return (
    <motion.header
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn('mb-14 sm:mb-20', className)}
    >
      <div className="flex items-center gap-4">
        {index ? (
          <motion.span variants={fadeIn} className="eyebrow text-jade">
            {index}
          </motion.span>
        ) : null}
        <motion.span variants={fadeIn} className="h-px w-8 bg-line sm:w-12" aria-hidden="true" />
        {eyebrow ? (
          <motion.span variants={fadeIn} className="eyebrow text-ash">
            {eyebrow}
          </motion.span>
        ) : null}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:items-end lg:gap-16">
        <h2 className="display-lg max-w-3xl text-bone">
          <span className="block overflow-hidden pb-[0.12em]">
            <motion.span variants={lineReveal} className="block text-balance">
              {title}
            </motion.span>
          </span>
        </h2>
        {description ? (
          <motion.p
            variants={fadeIn}
            className="max-w-md text-[0.9375rem] leading-7 text-ash lg:justify-self-end lg:pb-3"
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </motion.header>
  )
}

export default SectionHeading
