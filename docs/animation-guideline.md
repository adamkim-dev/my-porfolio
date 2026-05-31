# Animation Guideline

Animations should feel smooth, purposeful, and lightweight.

## Motion patterns

- Use subtle entrance transitions for sections and cards.
- Employ staggered reveals to guide attention.
- Keep hover states smooth with scale or background easing.
- Avoid overly dramatic motion that distracts from content.

## Implementation details

- Use `Framer Motion` for page and section animations.
- Use `AnimatePresence` for chat message transitions.
- Keep duration values between `0.35s` and `0.55s` for content reveals.
- Prefer `easeOut` timing for natural movement.
