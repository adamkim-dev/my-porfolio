# Architecture

This portfolio application is built as a production-grade Next.js App Router project with a strong separation between content, presentation, and server logic.

## Key architectural decisions

- **Next.js App Router**: Enables server-rendered metadata, route handlers, and improved layout control.
- **TypeScript**: Provides type safety across UI components, data layers, and API routes.
- **Tailwind CSS + shadcn/ui**: Delivers a scalable styling system with design tokens, utility-first styling, and reusable UI primitives.
- **Framer Motion**: Used for polished page transitions, reveal animations, and micro-interactions.
- **React Query**: Supports API fetch management for the AI assistant request flow.
- **OpenAI SDK + local RAG-style data**: Keeps AI answers grounded in portfolio content while still using OpenAI generation.
- **Dark / Light theme support**: Implemented via `next-themes` and CSS custom properties.

## Folder separation

- `src/app`: Application routes and global styles.
- `src/components`: Reusable UI sections, chat components, theme utilities, and providers.
- `src/data`: Structured portfolio content used by the landing page and AI assistant.
- `src/lib`: Shared helpers for prompt generation and AI interaction.
- `src/app/api`: Fullstack API route for the AI chat endpoint.

## Tradeoffs

- Using `shadcn/ui` accelerates designer-developer collaboration but requires a small initial setup cost.
- `React Query` is included for API flows even though the app has a single backend endpoint to maintain consistency and future scalability.
- `OpenAI` SDK is used server-side to keep API key secure, while local portfolio data constrains the model and reduces hallucination.
