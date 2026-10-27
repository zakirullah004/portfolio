import { cn } from '../../utils/cn'

function Section({ id, className, children, divider = true }) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-20 py-24 sm:py-32 lg:py-40',
        divider && 'border-t border-line',
        className,
      )}
    >
      {children}
    </section>
  )
}

export default Section
