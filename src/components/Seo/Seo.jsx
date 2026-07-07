import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../data/site'

function Seo({
  title = `${siteConfig.name} | ${siteConfig.role}`,
  description = siteConfig.description,
  image = '/favicon.svg',
  type = 'website',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

export default Seo
