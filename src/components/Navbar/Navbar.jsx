import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { navigationLinks } from '../../data/navigation'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import myPic from '../../assets/myPic.jpg'  
import { cn } from '../../utils/cn'
import Container from '../Container/Container'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const hasScrolled = useScrollPosition(8)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (hash) => {
    const cleanHash = hash.replace(/^#/, '')

    if (!cleanHash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const target = document.getElementById(cleanHash)

    if (!target) return

    const offset = 96
    const top = target.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({ top, behavior: 'smooth' })
  }

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => scrollToSection(location.hash))
    }
  }, [location.hash, location.pathname])

  const handleNavClick = (event, link) => {
    if (link.path.startsWith('/#')) {
      event.preventDefault()

      if (location.pathname === '/' && location.hash === `#${link.path.split('#')[1]}`) {
        scrollToSection(link.path.split('#')[1])
      } else {
        navigate(link.path)
      }
    }

    setIsOpen(false)
  }

  const linkClassName = ({ isActive }) =>
    cn(
      'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
      isActive ? 'text-white' : 'text-muted hover:text-white',
    )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition duration-300',
        hasScrolled
          ? 'border-white/10 bg-background/78 shadow-premium backdrop-blur-xl'
          : 'border-transparent bg-background/35 backdrop-blur-md',
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <NavLink
          to="/"
          className="group inline-flex items-center gap-3"
          onClick={() => setIsOpen(false)}
          aria-label="Go to homepage"
        >
          <span className="flex size-11 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-primary to-secondary p-[2px] shadow-lg shadow-primary/20">
            <img
              src={myPic}
              alt="Zakir Ullah"
              className="h-full w-full rounded-full object-cover"
            />
          </span>
          <span className="hidden font-heading text-sm font-bold tracking-wide text-white sm:block">
            MERN Developer
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={(event) => handleNavClick(event, link)}
              className={linkClassName}
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative z-10">{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/10 bg-background/95 px-5 py-4 shadow-premium backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={(event) => handleNavClick(event, link)}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-4 py-3 text-sm font-semibold transition',
                      isActive ? 'bg-white/10 text-white' : 'text-muted hover:bg-white/5 hover:text-white',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
