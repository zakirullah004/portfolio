import { Code2, Mail, Network } from 'lucide-react'
import Container from '../Container/Container'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: Code2 },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Network },
  { label: 'Email', href: 'mailto:hello@example.com', icon: Mail },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card/25 py-8">
      <Container className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted">
          Copyright {new Date().getFullYear()} MERN Stack Developer. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="grid size-10 place-items-center rounded-lg border border-white/10 text-muted transition hover:border-primary/50 hover:bg-white/5 hover:text-white"
              aria-label={label}
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
