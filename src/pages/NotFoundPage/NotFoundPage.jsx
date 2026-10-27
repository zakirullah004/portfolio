import { Link } from 'react-router-dom'
import Seo from '../../components/Seo/Seo'

function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found | Zakir Ullah"
        description="The page you requested could not be found."
        robots="noindex, follow"
      />
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-5 py-24 sm:px-8">
        <p className="meta text-jade">404 / Not found</p>
        <h1 className="display-xl mt-5 text-bone">This page could not be found.</h1>
        <Link className="mt-8 w-fit text-jade underline underline-offset-4" to="/">
          Return to the portfolio homepage
        </Link>
      </section>
    </>
  )
}

export default NotFoundPage
