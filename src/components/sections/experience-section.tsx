import { SectionHeading } from "@/components/sections/section-heading"
import { experiences } from "@/data/experiences"

export function ExperienceSection() {
    return (
        <section className="mt-24" id="experience">
            <SectionHeading title="Experience timeline" description="Deliverables, roles, and impact across major product engagements." />
            <div className="space-y-8">
                {experiences.map((experience) => (
                    <article
                        key={experience.company}
                        className="rounded-[2rem] border border-border bg-card/85 p-8 shadow-sm"
                    >
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">
                                    {experience.date}
                                </p>
                                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                                    {experience.role}
                                </h3>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {experience.company} · {experience.location}
                                </p>
                            </div>
                            <span className="rounded-full border border-border/70 bg-muted px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                                {experience.technologies.slice(0, 3).join(" • ")}
                            </span>
                        </div>
                        <p className="mt-6 text-base leading-8 text-muted-foreground">{experience.description}</p>
                        <ul className="mt-6 grid gap-3 text-sm leading-7 text-foreground sm:grid-cols-2">
                            {experience.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-3">
                                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
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
