import { SectionHeading } from "@/components/sections/section-heading"

export function DesignSystemSection() {
    return (
        <section className="mt-24" id="design-system">
            <SectionHeading title="Design system philosophy" description="Reusable UI systems that scale with product teams." />
            <div className="rounded-[2rem] border border-border bg-card/80 p-8 shadow-sm">
                <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
                    <div className="space-y-6 text-base leading-8 text-muted-foreground">
                        <p>
                            I approach design systems with an atomic mindset: clean primitives, consistent tokens, and modular patterns that are easy to reuse and evolve.
                        </p>
                        <p>
                            My experience includes building component libraries with Storybook, Ant Design, and MUI, then translating those systems into production-ready frontend code.
                        </p>
                    </div>
                    <div className="rounded-[1.75rem] border border-border/70 bg-muted p-6">
                        <p className="text-sm uppercase tracking-[0.24em] text-secondary">System focus</p>
                        <ul className="mt-6 space-y-3 text-sm leading-7 text-foreground">
                            <li>Atomic structure for reliable interface building</li>
                            <li>Design tokens for consistent visual language</li>
                            <li>Storybook collaboration between designers and engineers</li>
                            <li>Component tests, documentation, and version control</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
