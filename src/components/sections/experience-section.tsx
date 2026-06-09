import { SectionHeading } from "@/components/sections/section-heading"
import { experiences } from "@/data/experiences"

export function ExperienceSection() {
    return (
        <section className="mt-20" id="experience">
            <SectionHeading title="Experience timeline" description="Deliverables, roles, and impact across major product engagements." />
            <div className="space-y-6">
                {experiences.map((experience) => (
                    <article
                        key={experience.company}
                        className="rounded-3xl border border-border bg-card p-8"
                    >
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                                    {experience.date}
                                </p>
                                <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">
                                    {experience.role}
                                </h3>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {experience.company} · {experience.location}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.slice(0, 3).map((tech) => (
                                    <span key={tech} className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{experience.description}</p>
                        <ul className="mt-5 grid gap-2.5 text-sm leading-relaxed text-foreground sm:grid-cols-2">
                            {experience.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-3">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}
