import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

function CursorGlow() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const springX = useSpring(x, { stiffness: 80, damping: 24 })
  const springY = useSpring(y, { stiffness: 80, damping: 24 })

  useEffect(() => {
    function handlePointerMove(event) {
      x.set(event.clientX - 160)
      y.set(event.clientY - 160)
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [x, y])

  return (
    <motion.div
      className="pointer-events-none fixed z-[5] hidden size-80 rounded-full bg-primary/10 blur-3xl lg:block"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  )
}

export default CursorGlow
