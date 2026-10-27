export const navigationLinks = [
  {
    label: 'Home',
    path: '/#home',
  },
  {
    label: 'About',
    path: '/#about',
  },
  {
    label: 'Skills',
    path: '/#skills',
  },
  {
    label: 'Projects',
    path: '/#projects',
  },
  {
    label: 'Contact',
    path: '/#contact',
  },
]

export const sectionIds = navigationLinks.map((link) => link.path.split('#')[1])
