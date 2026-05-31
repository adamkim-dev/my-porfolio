import { SectionHeading } from "@/components/sections/section-heading"

const qualityItems = [
    "Unit testing with Jest and React Testing Library",
    "Component validation with Storybook and reusable patterns",
    "Browser-level flow coverage with Playwright",
    "CI/CD readiness for faster, safer deployments",
    "Accessibility-first UI delivery and semantic markup",
]

export function QualitySection() {
    return (
        <section className="mt-24" id="quality">
            <SectionHeading title="Testing & engineering quality" description="Delivery practices for stable, scalable product work." />
            <div className="grid gap-6 rounded-[2rem] border border-border bg-card/80 p-8 shadow-sm lg:grid-cols-[1fr_320px]">
                <div className="space-y-6 text-base leading-8 text-muted-foreground">
                    <p>
                        Engineering quality is a first-class concern. I combine test automation, CI/CD, and accessible interfaces so features ship with confidence.
                    </p>
                    <p>
                        The products I build are structured to support both fast iteration and predictable maintenance, making them strong candidates for recruiter review and production stability.
                    </p>
                </div>
                <div className="space-y-4 rounded-[1.75rem] border border-border/70 bg-muted p-6">
                    {qualityItems.map((item) => (
                        <div key={item} className="rounded-3xl border border-border/80 bg-background/90 px-4 py-4 text-sm leading-7 text-foreground">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
