# Folder Structure

This project is organized to keep content, components, and server logic separate and scalable.

```
src/
  app/
    api/chat/route.ts          # Fullstack AI endpoint
    globals.css                # Global theme and base styles
    layout.tsx                 # App layout, metadata, and providers
    page.tsx                   # Landing page composition
  components/
    chat/                     # AI assistant client component
    sections/                 # Landing page sections
    ui/                       # shadcn UI primitives and theme toggles
    providers.tsx             # React Query and theme provider
  data/
    profile.ts                # Candidate profile content
    skills.ts                 # Structured skill categories
    experiences.ts            # Work experience timeline data
    projects.ts               # Featured project content
  lib/
    ai.ts                     # AI prompt builder and portfolio knowledge

docs/
  architecture.md
  deployment.md
  folder-structure.md
  setup-guide.md
  ai-feature.md
  testing-guide.md
  styling-guideline.md
  contribution-guide.md
  browser-testing.md
  animation-guideline.md
  performance-checklist.md

.env.example
README.md
package.json
```

## Why this structure

- `data/` is intentionally separate so portfolio content can evolve independently from layout.
- `components/` contains reusable sections and the chat interaction, making the page composition clean and testable.
- `app/api/chat/route.ts` keeps AI processing server-side for security and environment variable control.
- `docs/` contains practical guides for setup, testing, deployment, and quality checks.
