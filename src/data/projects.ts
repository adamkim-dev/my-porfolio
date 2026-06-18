export type Project = {
  slug: string
  technologies: string[]
  linkHref: string
  category: "enterprise" | "platform" | "web"
}

export const projects: Project[] = [
  {
    slug: "changi-airport-smart-services",
    technologies: ["React", "Next.js", "TypeScript", "AWS Lambda", "S3", "CloudFront", "API Gateway"],
    linkHref: "/projects/changi-airport-smart-services",
    category: "enterprise",
  },
  {
    slug: "rsupports-chat-video-platform",
    technologies: ["React", "TypeScript", "WebRTC", "Storybook", "REST API", "3D Unity"],
    linkHref: "/projects/rsupports-chat-video-platform",
    category: "platform",
  },
  {
    slug: "omjs-ncs-registration-portal",
    technologies: ["React", "Material UI", "TypeScript", "REST API"],
    linkHref: "/projects/omjs-ncs-registration-portal",
    category: "web",
  },
  {
    slug: "evhub",
    technologies: ["React", "TypeScript", "Material UI", "REST API", "Jest"],
    linkHref: "/projects/evhub",
    category: "web",
  },
  {
    slug: "corsair",
    technologies: ["Next.js", "TypeScript", "GraphQL", "Apollo Client", "TailwindCSS", "Shopify", "Algolia"],
    linkHref: "/projects/corsair",
    category: "enterprise",
  },
  {
    slug: "taffi",
    technologies: ["React", "Next.js", "Material UI", "GraphQL"],
    linkHref: "/projects/taffi",
    category: "web",
  },
  {
    slug: "ngv-creative-index",
    technologies: ["React", "Next.js", "TailwindCSS", "AWS"],
    linkHref: "/projects/ngv-creative-index",
    category: "web",
  },
  {
    slug: "orderbuddy-web-app",
    technologies: ["React", "Next.js", "TailwindCSS", "Stripe API"],
    linkHref: "/projects/orderbuddy-web-app",
    category: "web",
  },
  {
    slug: "graphene",
    technologies: ["React", "TypeScript", "Sass", "REST API"],
    linkHref: "/projects/graphene",
    category: "enterprise",
  },
]
