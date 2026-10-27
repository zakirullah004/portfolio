export const easeOutExpo = [0.16, 1, 0.3, 1]

export const viewportOnce = { once: true, amount: 0.2 }

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.5, ease: easeOutExpo },
}

export const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
}

/* Masked line reveal: pair with an overflow-hidden wrapper. */
export const lineReveal = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 1.1, ease: easeOutExpo },
  },
}

export const imageReveal = {
  hidden: { clipPath: 'inset(0 0 100% 0)', scale: 1.08 },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    scale: 1,
    transition: { duration: 1.2, ease: easeOutExpo },
  },
}
