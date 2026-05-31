export type Experience = {
  company: string
  role: string
  date: string
  location: string
  description: string
  bullets: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: "Changi Airport Smart Services",
    role: "Frontend Developer / Fullstack",
    date: "Jun 2025 – Present",
    location: "Singapore",
    description:
      "Delivering airport service experiences for baggage, parking, and membership services using React and AWS serverless infrastructure.",
    bullets: [
      "Built and maintained multiple React and Next.js applications with strong UI consistency across services.",
      "Integrated APIs for baggage tracking, smart parking, and member rewards to boost operational efficiency.",
      "Implemented serverless backend functions with AWS Lambda and API Gateway for scalable business workflows.",
      "Collaborated with designers to deliver accessible, responsive user interfaces aligned with airport branding.",
      "Participated in CI/CD automation across S3, CloudFront, and deployment pipelines.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "AWS Lambda", "API Gateway", "S3", "CloudFront"],
  },
  {
    company: "RSupports Chat & Video Platform",
    role: "Frontend Developer",
    date: "Jul 2024 – May 2025",
    location: "Remote",
    description:
      "Shipped real-time chat and video collaboration features for a 3D-enabled communication platform.",
    bullets: [
      "Developed the user interface for real-time chat, video calling, and social features using React.",
      "Integrated 3D Unity environments into web flows while prioritizing responsive behaviour and performance.",
      "Collaborated closely with backend teams to synchronize real-time messaging and connection state.",
      "Implemented friend, notification, and profile interactions to maximize user engagement.",
      "Optimized cross-browser compatibility and client performance for media-heavy flows.",
    ],
    technologies: ["React", "TypeScript", "WebRTC", "Storybook", "REST API"],
  },
  {
    company: "OMJS NCS",
    role: "Frontend Developer",
    date: "Jan 2024 – Jul 2024",
    location: "Remote",
    description:
      "Delivered a multi-religion online marriage registration product that emphasizes accessibility and streamlined user journeys.",
    bullets: [
      "Developed polished web pages using React and Ant Design System patterns.",
      "Worked with designers to ensure the interface matched UI/UX expectations and business requirements.",
      "Optimized page load time and improved responsiveness across mobile and desktop.",
      "Managed data integration and API interactions to ensure reliable form submission and status tracking.",
      "Delivered ongoing maintenance and security improvements for the platform.",
    ],
    technologies: ["React", "Ant Design", "Rest API", "TypeScript"],
  },
]
