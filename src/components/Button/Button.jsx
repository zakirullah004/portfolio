import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const variants = {
  primary:
    'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 focus-visible:outline-primary',
  secondary:
    'border border-white/10 bg-card/80 text-white shadow-lg shadow-secondary/10 hover:border-secondary/60 hover:bg-card hover:shadow-secondary/20 focus-visible:outline-secondary',
  ghost: 'text-muted hover:bg-white/5 hover:text-white focus-visible:outline-primary',
}

function Button({
  as: Component = 'button',
  variant = 'primary',
  icon: Icon,
  iconPosition = 'left',
  className,
  children,
  ...props
}) {
  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="inline-flex">
      <Component
        className={cn(
          'premium-button-ripple relative isolate inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          className,
        )}
        {...props}
      >
        {Icon && iconPosition === 'left' ? <Icon className="size-4" aria-hidden="true" /> : null}
        {children}
        {Icon && iconPosition === 'right' ? <Icon className="size-4" aria-hidden="true" /> : null}
      </Component>
    </motion.div>
  )
}

export default Button
