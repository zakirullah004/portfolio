import { Braces, Code2, Database, GitBranch, Palette, Server, Wrench } from 'lucide-react'

export const skillGroups = [
  {
    category: 'Frontend',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js'],
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['MongoDB'],
  },
  {
    category: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
  },
]

export const skillIcons = {
  JavaScript: Braces,
  Git: GitBranch,
  Figma: Palette,
}

export const technologies = [...new Set(skillGroups.flatMap((group) => group.skills))]
