export interface Project {
  title: string
  description: string
  tech: string[]
  live?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "SPA built with React, Tailwind, and React Router.",
    tech: ["React", "TypeScript", "Tailwind"],
    live: "#",
    repo: "#",
  }
]
