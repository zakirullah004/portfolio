import { ArrowUpRight, ArrowUp, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/site'
import { scrollToTop } from '../../utils/scroll'
import Container from '../Container/Container'
import { GithubIcon, LinkedinIcon } from '../Icons/BrandIcons'

const socialLinks = [
  { label: 'GitHub', href: siteConfig.github, icon: GithubIcon },
  { label: 'LinkedIn', href: siteConfig.linkedin, icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-soft">
      <Container>
        <div className="flex flex-col gap-10 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="meta flex items-center gap-2.5 text-ash">
              <span className="size-1.5 rounded-full bg-jade" aria-hidden="true" />
              {siteConfig.availability}
            </p>
            <Link
              to="/#contact"
              className="group mt-6 inline-flex items-baseline gap-4 text-bone transition-colors duration-300 hover:text-jade"
            >
              <span className="display-lg">Let&rsquo;s build something</span>
              <ArrowUpRight
                className="size-6 shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <nav aria-label="Social" className="flex flex-col gap-3 md:items-end">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="link-sweep w-fit font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ash transition-colors duration-300 hover:text-bone"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta text-ash-dim">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="meta hidden text-ash-dim sm:block">
            {siteConfig.role} — {siteConfig.location}
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex w-fit items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ash transition-colors duration-300 hover:text-bone"
          >
            Back to top
            <ArrowUp
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
