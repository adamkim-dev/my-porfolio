import { SectionHeading } from "@/components/sections/section-heading"
import { profile } from "@/data/profile"

export function AboutSection() {
  return (
    <section className="mt-20" id="about">
      <SectionHeading title="About me" description="Human-centered engineering with design system clarity." />
      <div className="grid gap-6 sm:grid-cols-[1fr_300px]">
        <div className="rounded-3xl border border-border bg-card p-8">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I build polished digital products for enterprise customers, focusing on the intersection of frontend
              architecture, design systems, and testable delivery. My work turns complex workflows into intuitive experiences.
            </p>
            <p>
              I bring deep experience across React, Next.js, UI component systems, and modern testing patterns — alongside
              practical backend integration with AWS and serverless functions.
            </p>
            <p>
              My strongest impact is helping teams move faster with predictable interfaces, consistent quality, and elegant
              execution.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Highlights</p>
          <ul className="mt-5 space-y-4">
            {profile.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
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
