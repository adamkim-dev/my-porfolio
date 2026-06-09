export type Project = {
  slug: string
  technologies: string[]
  linkHref: string
  category: "enterprise" | "platform" | "web"
}

export const projects: Project[] = [
  {
    slug: "changi-airport-smart-services",
    technologies: ["React", "Next.js", "TypeScript", "AWS Lambda", "S3", "CloudFront"],
    linkHref: "/projects/changi-airport-smart-services",
    category: "enterprise",
  },
  {
    slug: "rsupports-chat-video-platform",
    technologies: ["React", "TypeScript", "WebRTC", "Storybook", "REST API"],
    linkHref: "/projects/rsupports-chat-video-platform",
    category: "platform",
  },
  {
    slug: "omjs-ncs-registration-portal",
    technologies: ["React", "Ant Design", "TypeScript", "REST API"],
    linkHref: "/projects/omjs-ncs-registration-portal",
    category: "web",
  },
  {
    slug: "design-system-test-framework",
    technologies: ["Storybook", "MUI", "Ant Design", "Jest", "Playwright"],
    linkHref: "/projects/design-system-test-framework",
    category: "enterprise",
  },
]
