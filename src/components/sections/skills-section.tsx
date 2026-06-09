import { SectionHeading } from "@/components/sections/section-heading"
import { skillCategories } from "@/data/skills"

export function SkillsSection() {
    return (
        <section className="mt-20" id="skills">
            <SectionHeading title="Skills" description="Categories, context, and recruiter-ready proficiency." />
            <div className="grid gap-6 lg:grid-cols-2">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="rounded-3xl border border-border bg-card p-6"
                    >
                        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                            {category.title}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                        <div className="mt-5 grid gap-2 sm:grid-cols-2">
                            {category.items.map((skill) => (
                                <div key={skill.name} className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-3">
                                    <p className="text-sm font-medium text-foreground">{skill.name}</p>
                                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                        {skill.level}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
