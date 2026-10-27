import { lazy, Suspense } from 'react'
import Hero from '../../components/Hero/Hero'
import Seo from '../../components/Seo/Seo'

const About = lazy(() => import('../../components/About/About'))
const Skills = lazy(() => import('../../components/Skills/Skills'))
const Education = lazy(() => import('../../components/Education/Education'))
const Experience = lazy(() => import('../../components/Experience/Experience'))
const Projects = lazy(() => import('../../components/Projects/Projects'))
const Certifications = lazy(() => import('../../components/Certifications/Certifications'))
const Services = lazy(() => import('../../components/Services/Services'))
const Achievements = lazy(() => import('../../components/Achievements/Achievements'))
const Contact = lazy(() => import('../../components/Contact/Contact'))

function SectionFallback() {
  return (
    <div className="mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 lg:px-12" aria-hidden="true">
      <div className="h-px w-full bg-line" />
      <div className="mt-14 h-40 w-full animate-pulse bg-panel/40" />
    </div>
  )
}

function HomePage() {
  return (
    <>
      <Seo />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Services />
        <Achievements />
        <Contact />
      </Suspense>
    </>
  )
}

export default HomePage
