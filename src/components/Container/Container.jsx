import { cn } from '../../utils/cn'

function Container({ as: Component = 'div', className, children }) {
  return (
    <Component className={cn('mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-12', className)}>
      {children}
    </Component>
  )
}

export default Container
