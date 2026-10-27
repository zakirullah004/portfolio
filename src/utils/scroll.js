let lenisInstance = null

export function registerLenis(instance) {
  lenisInstance = instance
}

const HEADER_OFFSET = 80

export function scrollToId(id, offset = HEADER_OFFSET) {
  const element = document.getElementById(id)

  if (!element) return false

  if (lenisInstance) {
    /* Content above may have mounted after Lenis measured the page. */
    lenisInstance.resize()
    /* Lenis subtracts the section's own scroll-margin-top. */
    lenisInstance.scrollTo(element, { duration: 1.2, force: true })
    return true
  }

  const top = element.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  return true
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { duration: 1.2 })
    return
  }

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/* Lazy-loaded sections may not exist yet when a deep link resolves, so retry briefly. */
export function scrollToHashWhenReady(hash, { attempts = 40, interval = 80, offset } = {}) {
  const id = String(hash).replace(/^#/, '')
  let tries = 0
  let timer

  if (!id) {
    scrollToTop()
    return () => {}
  }

  const attempt = () => {
    scrollToId(id, offset)

    if (!document.getElementById(id) && tries < attempts) {
      tries += 1
      timer = window.setTimeout(attempt, interval)
    }
  }

  timer = window.setTimeout(attempt, 60)

  return () => window.clearTimeout(timer)
}

export function setScrollLocked(locked) {
  if (lenisInstance) {
    if (locked) lenisInstance.stop()
    else lenisInstance.start()
  }

  document.body.style.overflow = locked ? 'hidden' : ''
}
