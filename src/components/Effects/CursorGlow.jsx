import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

function supportsCursorGlow() {
  return (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function CursorGlow() {
  const [enabled] = useState(supportsCursorGlow)
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const springX = useSpring(x, { stiffness: 60, damping: 26 })
  const springY = useSpring(y, { stiffness: 60, damping: 26 })

  useEffect(() => {
    if (!enabled) return undefined

    function handlePointerMove(event) {
      x.set(event.clientX - 260)
      y.set(event.clientY - 260)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden size-[32.5rem] rounded-full bg-jade/[0.055] blur-3xl lg:block"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  )
}

export default CursorGlow
