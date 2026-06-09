import { SectionHeading } from "@/components/sections/section-heading"
import type { Dict } from "@/app/[lang]/dictionaries"

type Props = {
  t: Dict["about"]
  highlights: Dict["profile"]["highlights"]
}

export function AboutSection({ t, highlights }: Props) {
  return (
    <section className="mt-20" id="about">
      <SectionHeading title={t.title} description={t.subtitle} />
      <div className="grid gap-6 sm:grid-cols-[1fr_300px]">
        <div className="rounded-3xl border border-border bg-card p-8">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {t.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            {t.highlights_label}
          </p>
          <ul className="mt-5 space-y-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-foreground"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
