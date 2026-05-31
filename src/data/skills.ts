export type SkillCategory = {
  title: string
  description: string
  items: Array<{ name: string; level: string; tag?: string }>
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & UI",
    description:
      "Designing rich web interfaces and reusable component systems for modern products.",
    items: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "MUI / Ant Design", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Advanced" },
    ],
  },
  {
    title: "Backend & Cloud",
    description: "Connecting frontend applications to clean APIs and serverless infrastructure.",
    items: [
      { name: "Node.js / Express", level: "Intermediate" },
      { name: "AWS Lambda", level: "Intermediate" },
      { name: "S3 & CloudFront", level: "Intermediate" },
      { name: "API Design", level: "Intermediate" },
    ],
  },
  {
    title: "Testing & Quality",
    description: "Ensuring product reliability with automated regression coverage and E2E flows.",
    items: [
      { name: "Jest", level: "Advanced" },
      { name: "React Testing Library", level: "Advanced" },
      { name: "Playwright", level: "Intermediate" },
      { name: "Cypress", level: "Intermediate" },
    ],
  },
  {
    title: "Design System Mindset",
    description: "Creating scalable UI systems with atomic structure and shared design language.",
    items: [
      { name: "Storybook", level: "Intermediate" },
      { name: "Component Architecture", level: "Advanced" },
      { name: "Accessibility", level: "Intermediate" },
      { name: "Responsive Design", level: "Advanced" },
    ],
  },
]
