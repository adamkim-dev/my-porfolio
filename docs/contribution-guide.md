# Contribution Guide

This guide helps maintain the portfolio with clear workflows.

## Project conventions

- Use `src/data/` for portfolio content and avoid hard-coded text in components.
- Keep section components focused and reusable.
- Use `src/lib/` for shared helpers such as AI prompt generation.
- Keep API logic inside `src/app/api/`.

## Local workflow

- Install dependencies:

```bash
npm install
```

- Run development server:

```bash
npm run dev
```

- Run the linter and format code before committing:

```bash
npm run lint
npm run format
```

## Git hooks

- `husky` is configured to install Git hooks on `npm install`.
- `lint-staged` formats and lints staged files before commit.

## Best practices

- Keep copy recruiter-friendly and concise.
- Use structured data in `src/data/` when adding new content.
- Keep UI motion subtle and performance-friendly.
