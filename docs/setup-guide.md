# Setup Guide

This guide covers project initialization, dependency installation, and local startup.

## Requirements

- Node.js 22+ (recommended 22.16+)
- npm 10+
- A Next.js compatible browser like Chrome, Safari, or Edge

## Local setup

1. Clone the repository or work in the project root.
2. Install dependencies:

```bash
npm install
```

3. Create a local environment file:

```bash
cp .env.example .env.local
```

4. Add your OpenAI API key to `.env.local`:

```env
OPENAI_API_KEY=your-api-key
```

5. Start the development server:

```bash
npm run dev
```

6. Open the app in your browser:

```
http://localhost:3000
```

## Why these commands

- `npm install` installs the full app dependencies required for Next.js, Tailwind, animations, testing, and AI.
- `npm run dev` starts the app with live reload and the App Router configuration.

## Troubleshooting

- If the app fails to compile, run `npm run lint` and `npm run typecheck` to identify syntax or type issues.
- If the AI endpoint returns a key error, confirm `OPENAI_API_KEY` exists in `.env.local`.
- If Tailwind styles do not appear, restart the dev server after editing `src/app/globals.css`.
