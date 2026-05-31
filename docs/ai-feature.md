# AI Feature

This portfolio includes an AI assistant powered by OpenAI and local portfolio data.

## How it works

- User questions are sent to `/api/chat`.
- The server route builds a prompt using structured portfolio data from `src/data/`.
- The OpenAI SDK generates an answer based only on the portfolio content.
- The frontend displays responses in a recruiter-friendly chat UI.

## Safety and grounding

- The prompt explicitly instructs the model to use only the provided portfolio knowledge.
- If the question is not answerable, the assistant responds with a safe fallback.
- The AI route is server-side, so the OpenAI API key stays out of the browser.

## Key files

- `src/app/api/chat/route.ts` — handles the backend chat request.
- `src/lib/ai.ts` — builds the knowledge prompt.
- `src/components/chat/ChatAssistant.tsx` — user-facing chat component.
- `src/data/` — structured portfolio content used to ground answers.
