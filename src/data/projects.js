import heroImage from '../assets/hero.png'
import seoImg from '../assets/seo.png'
import dentalImg from '../assets/dental.png'
import realEsImg from '../assets/realEs.png'

export const projects = [
  {
    id: 1,
    slug: 'seo-rank-tracker',
    title: 'SEO Rank Tracker',
    shortDescription:
      'Created a fully seo rank tracker web. Where you can find performance of your web easily',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/zakirullah004/seo-rank-tracker',
    liveDemo: 'https://web-rank-tracker.vercel.app/',
    thumbnail: seoImg,
    screenshots: [heroImage, heroImage, heroImage],
    completionDate: '2026',
    status: 'Completed',
    featured: true,
  },
  {
    id: 2,
    slug: 'ai-powerded-dental-system',
    title: 'AI-Powerded Dental System',
    shortDescription: 'AI-Powered Dental Management System. Manage patients, appointments, prescriptions, and leverage AI for smarter diagnostics',
    category: 'Frontend',
    technologies: ["html", "css" ,'JavaScript','TypeScript'],
    github: 'https://github.com/zakirullah004/dental-management-system',
    liveDemo: 'https://apna-dental-app.netlify.app/',
    thumbnail: dentalImg,
    completionDate: '2026',
    status: 'Completed',
    featured: true,
  },
  {
    id: 3,
    slug: 'real-estate-web',
    title: 'Real Estate Web',
    shortDescription: 'Find Real Estate and book your place in the area where you want',
    category: 'Full Stack',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Postman', 'Git','prisma'],
    github: 'https://github.com/zakirullah004/real-state-web',
    liveDemo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqScQM_2Yk7-zDA9lhm4p84cLbKHQnFPE5Ny9FKsY2v7g8RYiFOu_rOvg&s=10',
    thumbnail: realEsImg,
    completionDate: '2025',
    status: 'Completed',
    featured: false,
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug) {
  const currentIndex = projects.findIndex((project) => project.slug === slug)

  if (currentIndex === -1) {
    return { previousProject: null, nextProject: null }
  }

  return {
    previousProject: projects[(currentIndex - 1 + projects.length) % projects.length],
    nextProject: projects[(currentIndex + 1) % projects.length],
  }
}
