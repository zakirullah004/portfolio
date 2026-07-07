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
  return <div className="mx-auto h-40 max-w-7xl animate-pulse rounded-xl bg-card/30" aria-hidden="true" />
}

function HomePage() {
  return (
    <>
      <Seo />
      <div id="home">
        <Hero />
      </div>
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
