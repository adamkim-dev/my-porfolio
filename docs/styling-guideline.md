# Styling Guideline

The portfolio uses Tailwind CSS with a theme-first design system and custom CSS tokens.

## Design principles

- **Minimal and modern**: Use whitespace, calm typography, and subtle borders.
- **Consistent spacing**: Apply spacing tokens to all sections and cards.
- **Accessible colors**: Use high contrast on text and interactive elements.
- **Placeholder UI**: Use polished skeletons and bordered boxes for media placeholders.

## Component styling

- Use `rounded-[2rem]` for large cards and `rounded-3xl` for inner panels.
- Use border and background combinations like `border-border bg-card/80` for premium depth.
- Keep interactions subtle with hover states and motion.

## Dark mode

- Implemented via `next-themes` with `class` attribute on the `html` element.
- Custom theme values ensure consistent light/dark color mapping.
- Use semantic colors like `bg-background`, `text-foreground`, `bg-muted`, and `border-border`.
