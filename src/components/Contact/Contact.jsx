import { ArrowUpRight, Download, Send } from 'lucide-react'
import { useState } from 'react'
import myResume from '../../assets/zakirResume.pdf'
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

function ContactField({ label, name, value, onChange, error, type = 'text', multiline = false }) {
  const Component = multiline ? 'textarea' : 'input'
  const fieldId = `contact-${name}`
  const errorId = `${fieldId}-error`

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="meta text-ash-dim">
        {label}
      </label>
      <Component
        id={fieldId}
        name={name}
        type={multiline ? undefined : type}
        value={value}
        onChange={onChange}
        rows={multiline ? 4 : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="w-full resize-none border-b border-line bg-transparent py-3 text-sm text-bone outline-none transition-colors duration-300 focus:border-jade"
      />
      {error ? (
        <p id={errorId} className="text-xs text-red-300">
          {error}
        </p>
      ) : null}
    </div>
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
    if (form.message.trim().length < 10)
      nextErrors.message = 'Message should be at least 10 characters.'

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
          index="09"
          eyebrow="Contact"
          title={
            <>
              Let&rsquo;s build <em className="italic">something useful</em>
            </>
          }
          description="Reach out for internships, collaboration, project feedback, or full stack development opportunities."
        />

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="meta text-ash-dim">Direct email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-sweep mt-4 inline-block text-2xl text-bone transition-colors duration-300 hover:text-jade sm:text-3xl"
            >
              {siteConfig.email}
            </a>

            <dl className="mt-12 border-t border-line">
              <div className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                <dt className="meta text-ash-dim">Location</dt>
                <dd className="text-sm text-bone-dim">{siteConfig.location}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                <dt className="meta text-ash-dim">Availability</dt>
                <dd className="flex items-center gap-2 text-sm text-bone-dim">
                  <span className="size-1.5 rounded-full bg-jade" aria-hidden="true" />
                  {siteConfig.availability}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                <dt className="meta text-ash-dim">Résumé</dt>
                <dd>
                  <a
                    href={myResume}
                    download
                    className="group inline-flex items-center gap-2 text-sm text-bone-dim transition-colors duration-300 hover:text-jade"
                  >
                    Download PDF
                    <Download className="size-3.5" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="link-sweep mt-8 inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ash transition-colors duration-300 hover:text-bone"
            >
              GitHub profile
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>

          <form onSubmit={handleSubmit} noValidate className="grid gap-7">
            <div className="grid gap-7 sm:grid-cols-2">
              <ContactField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />
              <ContactField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <ContactField
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              error={errors.subject}
            />

            <ContactField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              multiline
            />

            <div>
              <Button type="submit" icon={Send}>
                Send Message
              </Button>
            </div>

            <p aria-live="polite" className="min-h-5 text-sm text-jade">
              {status}
            </p>
          </form>
        </div>
      </Container>
    </Section>
  )
}

export default Contact
