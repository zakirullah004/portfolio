import Lenis from 'lenis'
import { useEffect } from 'react'
import { registerLenis } from '../utils/scroll'

export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return undefined

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.1,
    })

    registerLenis(lenis)

    let frameId

    function raf(time) {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      registerLenis(null)
      lenis.destroy()
    }
  }, [])
}
