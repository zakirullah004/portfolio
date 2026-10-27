import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../../data/site'

function Seo({
  title = siteConfig.name + ' | ' + siteConfig.role,
  description = siteConfig.description,
  image,
  type = 'website',
  robots = 'index, follow',
}) {
  const { pathname } = useLocation()
  const canonical = new URL(pathname, siteConfig.url).href
  const absoluteImage = image ? new URL(image, siteConfig.url).href : null
  const person = {
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.role,
    sameAs: [siteConfig.github],
  }
  const structuredData =
    type === 'article'
      ? {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: title,
          description,
          url: canonical,
          ...(absoluteImage ? { image: absoluteImage } : {}),
          author: person,
        }
      : {
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'WebSite', name: siteConfig.name, url: siteConfig.url },
            { '@type': 'ProfilePage', name: siteConfig.name + ' Portfolio', url: canonical, mainEntity: person },
          ],
        }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:type" content={type} />
      {absoluteImage ? <meta property="og:image" content={absoluteImage} /> : null}
      <meta name="twitter:card" content={absoluteImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {absoluteImage ? <meta name="twitter:image" content={absoluteImage} /> : null}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}

export default Seo
