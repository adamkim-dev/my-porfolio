import { SectionHeading } from "@/components/sections/section-heading"
import type { Dict } from "@/app/[lang]/dictionaries"

export function QualitySection({ t }: { t: Dict["quality"] }) {
  return (
    <section className="mt-24" id="quality">
      <SectionHeading title={t.title} description={t.subtitle} />
      <div className="grid gap-6 rounded-[2rem] border border-border bg-card/80 p-8 shadow-sm lg:grid-cols-[1fr_320px]">
        <div className="space-y-6 text-base leading-8 text-muted-foreground">
          {t.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="space-y-4 rounded-[1.75rem] border border-border/70 bg-muted p-6">
          {t.items.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-border/80 bg-background/90 px-4 py-4 text-sm leading-7 text-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
