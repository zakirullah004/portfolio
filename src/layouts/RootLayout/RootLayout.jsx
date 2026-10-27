import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CursorGlow from '../../components/Effects/CursorGlow'
import ScrollProgress from '../../components/Effects/ScrollProgress'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { useLenis } from '../../hooks/useLenis'
import { pageTransition } from '../../utils/animations'
import { scrollToTop } from '../../utils/scroll'

function RootLayout() {
  const { pathname, hash } = useLocation()

  useLenis()

  useEffect(() => {
    if (hash) return
    scrollToTop()
  }, [pathname, hash])

  return (
    <div className="relative min-h-screen bg-ink text-bone">
      <a
        href="#main"
        className="sr-only z-[90] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:bg-bone focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-ink"
      >
        Skip to content
      </a>

      <div className="grain-overlay pointer-events-none fixed inset-0 z-[45]" aria-hidden="true" />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <motion.main id="main" key={pathname} {...pageTransition} className="relative">
        <Outlet />
      </motion.main>

      <Footer />
    </div>
  )
}

export default RootLayout
