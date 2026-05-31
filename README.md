# Adam Kim Portfolio

A production-grade personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and a grounded AI assistant.

## Overview

This application is designed to showcase:

- Professional summary and personal brand
- Structured technical skill categories
- Experience timeline with real project highlights
- Featured project cards and polished placeholders
- Design system mindset and engineering quality
- AI assistant for recruiter-friendly questions
- Dark/light theme support and responsive design

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui primitives
- Framer Motion
- next-themes
- React Query
- OpenAI SDK
- Vitest + React Testing Library
- Playwright
- ESLint + Prettier
- Husky + lint-staged

## Setup

Install dependencies and start the dev server:

```bash
npm install
cp .env.example .env.local
# add OPENAI_API_KEY to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — run production server
- `npm run lint` — run ESLint checks
- `npm run format` — format code with Prettier
- `npm run test` — run Vitest suite
- `npm run typecheck` — run TypeScript checks

## AI Feature

The AI assistant is built using a local portfolio knowledge prompt and the OpenAI SDK.

- `src/data/` contains structured resume content.
- `src/lib/ai.ts` builds the grounded prompt.
- `src/app/api/chat/route.ts` handles secure server-side requests.
- `src/components/chat/ChatAssistant.tsx` provides the user-facing chat experience.

## Deployment

This application is optimized for deployment on Vercel.

1. Connect the Git repository to Vercel.
2. Set `OPENAI_API_KEY` in environment variables.
3. Deploy using the default build settings.

## Documentation

See the `docs/` directory for detailed architecture, setup, AI feature, testing, styling, animation, browser testing, deployment, and performance guides.

## Screenshots

Add screenshots below once the application is running.

- Homepage hero and summary
- Skills and experience sections
- AI assistant chat interface
- Dark mode and responsive view
