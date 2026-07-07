import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/animations'
import { cn } from '../../utils/cn'

function SectionHeading({ eyebrow, title, description, align = 'center', className }) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={cn(
        'mx-auto mb-12 max-w-3xl',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        <span className="animated-gradient-text bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p> : null}
    </motion.div>
  )
}

export default SectionHeading
