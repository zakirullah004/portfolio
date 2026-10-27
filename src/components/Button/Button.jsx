import { cn } from '../../utils/cn'

const variants = {
  primary: 'border border-bone bg-bone text-ink hover:border-jade hover:bg-jade',
  secondary: 'border border-line bg-transparent text-bone hover:border-jade/60 hover:text-jade',
  ghost: 'border border-transparent text-ash hover:text-bone',
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
  const iconClass = cn('size-3.5 shrink-0', iconPosition === 'right' && 'arrow-shift')

  return (
    <Component
      className={cn(
        'group inline-flex min-h-11 items-center justify-center gap-3 rounded-[2px] px-6 py-3.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 disabled:pointer-events-none disabled:opacity-40',
        variants[variant],
        className,
      )}
      {...props}
    >
      {Icon && iconPosition === 'left' ? <Icon className={iconClass} aria-hidden="true" /> : null}
      {children}
      {Icon && iconPosition === 'right' ? <Icon className={iconClass} aria-hidden="true" /> : null}
    </Component>
  )
}

export default Button
