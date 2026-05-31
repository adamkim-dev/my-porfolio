import { SectionHeading } from "@/components/sections/section-heading"
import { skillCategories } from "@/data/skills"

export function SkillsSection() {
    return (
        <section className="mt-24" id="skills">
            <SectionHeading title="Skills" description="Categories, context, and recruiter-ready proficiency." />
            <div className="grid gap-6 lg:grid-cols-2">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="rounded-[2rem] border border-border bg-card/80 p-6 shadow-sm"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                            {category.title}
                        </p>
                        <p className="mt-3 text-base leading-7 text-muted-foreground">{category.description}</p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {category.items.map((skill) => (
                                <div key={skill.name} className="rounded-3xl border border-border/70 bg-background/80 p-4">
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="font-medium text-foreground">{skill.name}</p>
                                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                                            {skill.level}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
