import { useEffect, useState } from 'react'

/* Tracks which top-level section owns the viewport's reading line. */
export function useActiveSection(ids, enabled = true) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (!enabled) return undefined

    let frame = 0
    let initialTimer = 0

    function compute() {
      frame = 0
      const readingLine = window.innerHeight * 0.4
      let current = ''

      for (const id of ids) {
        const element = document.getElementById(id)

        if (!element) continue

        const { top, bottom } = element.getBoundingClientRect()

        if (top <= readingLine && bottom > readingLine) current = id
      }

      setActiveId((previous) => (previous === current ? previous : current))
    }

    function schedule() {
      if (frame) return
      frame = window.requestAnimationFrame(compute)
    }

    schedule()
    initialTimer = window.setTimeout(compute, 800)

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(initialTimer)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [ids, enabled])

  return activeId
}
