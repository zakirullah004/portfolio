import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CursorGlow from '../../components/Effects/CursorGlow'
import ScrollProgress from '../../components/Effects/ScrollProgress'
import Navbar from '../../components/Navbar/Navbar'
import { useLenis } from '../../hooks/useLenis'
import { pageTransition } from '../../utils/animations'

function RootLayout() {
  useLenis()

  return (
    <div className="min-h-screen bg-background text-text">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <motion.main className="min-h-screen pt-20" {...pageTransition}>
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  )
}

export default RootLayout
