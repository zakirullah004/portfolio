import { Mail, MapPin, Send, UserRound } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '../../data/site'
import Button from '../Button/Button'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function ContactInput({ label, name, value, onChange, error, type = 'text', multiline = false }) {
  const Component = multiline ? 'textarea' : 'input'

  return (
    <label className="group relative block">
      <Component
        name={name}
        type={multiline ? undefined : type}
        value={value}
        onChange={onChange}
        placeholder=" "
        rows={multiline ? 5 : undefined}
        className="peer w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 pb-3 pt-6 text-sm text-white outline-none transition placeholder:text-transparent focus:border-primary focus:shadow-lg focus:shadow-primary/10"
        aria-invalid={Boolean(error)}
      />
      <span className="pointer-events-none absolute left-4 top-2 text-xs font-semibold text-muted transition peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
        {label}
      </span>
      {error ? <span className="mt-2 block text-xs font-semibold text-red-300">{error}</span> : null}
    </label>
  )
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    setErrors((current) => ({ ...current, [event.target.name]: '' }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.'
    if (!form.subject.trim()) nextErrors.subject = 'Please enter a subject.'
    if (form.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters.'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setStatus('Thanks. Your message is ready to be connected to a backend or form service.')
      setForm(initialForm)
    }
  }

  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something useful"
          description="Reach out for internships, collaboration, project feedback, or full stack development opportunities."
        />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-xl border border-white/10 bg-card/55 p-6 shadow-lg shadow-black/10 backdrop-blur-xl">
            <h3 className="font-heading text-2xl font-bold text-white">Contact details</h3>
            <div className="mt-6 grid gap-4">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 rounded-lg border border-white/10 p-4 text-muted transition hover:border-primary/40 hover:text-white">
                <Mail className="size-5 text-primary" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-3 rounded-lg border border-white/10 p-4 text-muted">
                <MapPin className="size-5 text-secondary" aria-hidden="true" />
                {siteConfig.location}
              </p>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-white/10 p-4 text-muted transition hover:border-primary/40 hover:text-white">
                <UserRound className="size-5 text-primary" aria-hidden="true" />
                GitHub profile
              </a>
            </div>
          </aside>
          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-card/55 p-5 shadow-lg shadow-black/10 backdrop-blur-xl sm:p-6" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactInput label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
              <ContactInput label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
              <div className="sm:col-span-2">
                <ContactInput label="Subject" name="subject" value={form.subject} onChange={handleChange} error={errors.subject} />
              </div>
              <div className="sm:col-span-2">
                <ContactInput label="Message" name="message" value={form.message} onChange={handleChange} error={errors.message} multiline />
              </div>
            </div>
            {status ? <p className="mt-4 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-white">{status}</p> : null}
            <div className="mt-6">
              <Button type="submit" icon={Send}>
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  )
}

export default Contact
