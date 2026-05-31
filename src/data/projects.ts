export type Project = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  highlights: string[];
  technologies: string[];
  status: string;
  linkLabel: string;
  linkHref: string;
};

export const projects: Project[] = [
  {
    slug: "changi-airport-smart-services",
    title: "Changi Airport Smart Services",
    summary:
      "A premium airport services suite that modernizes baggage handling, parking, and membership workflows for travelers and operations teams.",
    details: [
      "Led the frontend architecture for an airport operations suite that spans traveler-facing web apps and internal dashboards.",
      "Delivered responsive experiences with role-based navigation, real-time updates, and mobile-friendly boarding workflows.",
      "Optimized performance with serverless APIs and CDN delivery for fast loading across airport terminals.",
    ],
    highlights: [
      "Delivered consistent interfaces across multiple web applications using React and Next.js.",
      "Designed service-driven experiences for travelers with airport membership and rewards features.",
      "Built serverless backend support using AWS Lambda and CloudFront to minimize latency.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "AWS Lambda",
      "S3",
      "CloudFront",
    ],
    status: "Live in production",
    linkLabel: "Platform details",
    linkHref: "/projects/changi-airport-smart-services",
  },
  {
    slug: "rsupports-chat-video-platform",
    title: "RSupports Chat & Video Platform",
    summary:
      "A real-time communication platform integrating chat, video calls, and immersive 3D interfaces for collaborative virtual meetings.",
    details: [
      "Built immersive communication flows with chat, video, and interactive controls for modern team collaboration.",
      "Ensured accessibility and low-latency streaming for remote participants across devices.",
      "Coordinated cross-team integration of messaging, signaling, and 3D experience modules.",
    ],
    highlights: [
      "Implemented chat and video UI flows with performance and accessibility in mind.",
      "Integrated 3D Unity content into a React web experience.",
      "Collaborated on real-time synchronization with backend messaging services.",
    ],
    technologies: ["React", "TypeScript", "WebRTC", "Storybook", "REST API"],
    status: "In development",
    linkLabel: "Project overview",
    linkHref: "/projects/rsupports-chat-video-platform",
  },
  {
    slug: "omjs-ncs-registration-portal",
    title: "OMJS NCS Registration Portal",
    summary:
      "A multi-faith marriage registration and event management product designed to simplify booking and user onboarding.",
    details: [
      "Developed a user-centric booking experience with guided forms and progress tracking.",
      "Delivered accessible layouts for multi-device support and clear event status updates.",
      "Built integrations for registration workflows, payment validation, and backend status checks.",
    ],
    highlights: [
      "Built a responsive user journey using Ant Design and React.",
      "Delivered cross-platform compatibility and accessible interface improvements.",
      "Supported backend integration for status tracking and event workflows.",
    ],
    technologies: ["React", "Ant Design", "TypeScript", "REST API"],
    status: "Delivered",
    linkLabel: "Case study",
    linkHref: "/projects/omjs-ncs-registration-portal",
  },
  {
    slug: "design-system-test-framework",
    title: "Design System & Test Framework",
    summary:
      "A reusable UI and testing foundation built for enterprise teams, combining atomic design principles with automated component validation.",
    details: [
      "Created a shared component library with Storybook docs, design tokens, and reusable patterns.",
      "Built a testing foundation that connects UI components with Jest, Playwright, and accessibility checks.",
      "Enabled design and engineering teams to ship consistent interfaces faster with strong documentation.",
    ],
    highlights: [
      "Established a shared component library powered by Storybook and design tokens.",
      "Improved collaboration between designers and developers through clear interface patterns.",
      "Enabled faster delivery with reusable UI building blocks and clear test coverage.",
    ],
    technologies: ["Storybook", "MUI", "Ant Design", "Jest", "Playwright"],
    status: "Ongoing",
    linkLabel: "Read the design philosophy",
    linkHref: "/projects/design-system-test-framework",
  },
];
