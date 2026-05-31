# Testing Guide

This project includes examples for unit, integration, and end-to-end testing.

## Unit tests

- Run unit tests with:

```bash
npm run test
```

- The codebase uses Vitest and React Testing Library for component testing.
- Tests live in `src/components` or `src/__tests__` as the app evolves.

## Integration testing

- Integration tests can exercise component interactions in rendered pages.
- Use `vitest` with DOM environment and the `@testing-library/react` utilities.

## End-to-end testing

- Playwright is installed for browser validation.
- Run the Playwright test runner with:

```bash
npx playwright test
```

- Recommended flows:
  - Load the landing page and verify key sections render.
  - Use the AI chat form to submit a prompt and confirm a response appears.

## Suggested scripts

- `npm run test` — runs the unit and integration suite.
- `npx playwright test` — runs cross-browser E2E scenarios.
- `npm run lint` — validates code quality.
- `npm run typecheck` — validates TypeScript types.
