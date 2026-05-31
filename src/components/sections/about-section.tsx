import { SectionHeading } from "@/components/sections/section-heading"
import { profile } from "@/data/profile"

export function AboutSection() {
    return (
        <section className="mt-24" id="about">
            <SectionHeading title="About me" description="Human-centered engineering with design system clarity." />
            <div className="grid gap-6 rounded-[2rem] border border-border bg-card/70 p-8 shadow-lg shadow-slate-900/5 sm:grid-cols-[1fr_320px]">
                <div className="space-y-6 text-base leading-8 text-muted-foreground">
                    <p>
                        I build polished digital products for enterprise customers, focusing on the intersection of frontend architecture,
                        design systems, and testable delivery. My work turns complex workflows into intuitive experiences.
                    </p>
                    <p>
                        I bring deep experience across React, Next.js, UI component systems, and modern testing patterns—alongside practical
                        backend integration with AWS and serverless functions.
                    </p>
                    <p>
                        My strongest impact is helping teams move faster with predictable interfaces, consistent quality, and elegant
                        execution.
                    </p>
                </div>
                <div className="rounded-[1.75rem] border border-border/60 bg-background/80 p-6 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.28em] text-secondary">Professional highlights</p>
                    <ul className="mt-6 space-y-4 text-sm leading-7 text-foreground">
                        {profile.highlights.map((item) => (
                            <li key={item} className="flex gap-3">
                                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
