import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navigationLinks, sectionIds } from '../../data/navigation'
import { siteConfig } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { cn } from '../../utils/cn'
import { scrollToHashWhenReady, setScrollLocked } from '../../utils/scroll'
import Container from '../Container/Container'
import { GithubIcon, LinkedinIcon } from '../Icons/BrandIcons'

const socialLinks = [
  { label: 'GitHub', href: siteConfig.github, icon: GithubIcon },
  { label: 'LinkedIn', href: siteConfig.linkedin, icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail },
]

function Navbar() {
  /* Store the path the menu was opened on so it closes itself after navigation. */
  const [openPath, setOpenPath] = useState(null)
  const hasScrolled = useScrollPosition(16)
  const location = useLocation()
  const navigate = useNavigate()
  const isOpen = openPath === location.pathname
  const activeSection = useActiveSection(sectionIds, location.pathname === '/' && !isOpen)

  useEffect(() => {
    if (!location.hash) return undefined

    return scrollToHashWhenReady(location.hash)
  }, [location.hash, location.pathname])

  useEffect(() => {
    setScrollLocked(isOpen)

    if (!isOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpenPath(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => () => setScrollLocked(false), [])

  function handleNavClick(event, path) {
    event.preventDefault()
    setOpenPath(null)

    const hash = path.split('#')[1]

    if (location.pathname === '/' && location.hash === `#${hash}`) {
      scrollToHashWhenReady(hash)
      return
    }

    navigate(path)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500',
        isOpen
          ? 'border-line bg-ink'
          : hasScrolled
            ? 'border-line bg-ink/80 backdrop-blur-xl'
            : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Link
          to="/"
          onClick={() => setOpenPath(null)}
          className="group inline-flex items-baseline gap-2.5"
          aria-label="Zakir Ullah — homepage"
        >
          <span
            className="mb-1 size-1.5 shrink-0 rounded-full bg-jade transition-colors duration-500 group-hover:bg-bone"
            aria-hidden="true"
          />
          <span className="whitespace-nowrap font-display text-[1.4rem] leading-none text-bone">
            {siteConfig.name}
          </span>
          <span className="meta hidden whitespace-nowrap text-ash-dim lg:inline">/ Full Stack</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Primary">
          {navigationLinks.map((link, index) => {
            const isActive =
              location.pathname === '/' && activeSection === link.path.split('#')[1]

            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(event) => handleNavClick(event, link.path)}
                data-active={isActive}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'link-sweep py-1 font-mono text-[0.6875rem] uppercase tracking-[0.18em] transition-colors duration-300',
                  isActive ? 'text-bone' : 'text-ash hover:text-bone',
                )}
              >
                <span className="mr-1.5 hidden text-[0.5625rem] text-jade/70 lg:inline">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            onClick={(event) => handleNavClick(event, '/#contact')}
            className="group hidden items-center gap-2 whitespace-nowrap font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-bone lg:inline-flex"
          >
            Let&rsquo;s talk
            <ArrowUpRight
              className="size-3.5 text-jade transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpenPath(isOpen ? null : location.pathname)}
            className="grid size-10 place-items-center rounded-[2px] border border-line text-bone transition-colors duration-300 hover:border-jade/60 hover:text-jade md:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto border-t border-line bg-ink md:hidden"
            aria-label="Mobile"
          >
            <Container className="flex min-h-full flex-col justify-between py-10">
              <div>
                {navigationLinks.map((link, index) => (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(event) => handleNavClick(event, link.path)}
                    className="group flex items-baseline justify-between gap-4 border-b border-line py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="meta text-jade/70">{String(index + 1).padStart(2, '0')}</span>
                      <span className="display-md text-bone transition-colors duration-300 group-hover:text-jade">
                        {link.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-4 text-ash transition-colors group-hover:text-jade"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>

              <div className="mt-12">
                <p className="meta flex items-center gap-2.5 text-ash">
                  <span className="size-1.5 rounded-full bg-jade" aria-hidden="true" />
                  {siteConfig.availability}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="grid size-10 place-items-center rounded-[2px] border border-line text-ash transition-colors duration-300 hover:border-jade/50 hover:text-jade"
                      aria-label={label}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
