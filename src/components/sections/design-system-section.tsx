import { SectionHeading } from "@/components/sections/section-heading"
import type { Dict } from "@/app/[lang]/dictionaries"

export function DesignSystemSection({ t }: { t: Dict["design_system"] }) {
  return (
    <section className="mt-24" id="design-system">
      <SectionHeading title={t.title} description={t.subtitle} />
      <div className="rounded-[2rem] border border-border bg-card/80 p-8 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            {t.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="rounded-[1.75rem] border border-border/70 bg-muted p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-secondary">
              {t.focus_label}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-foreground">
              {t.focus_items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
