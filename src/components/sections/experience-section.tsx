import { SectionHeading } from "@/components/sections/section-heading"
import type { Dict } from "@/app/[lang]/dictionaries"
import type { Experience } from "@/data/experiences"

type Props = {
  t: Dict["experience"]
  experiences: Experience[]
}

export function ExperienceSection({ t, experiences }: Props) {
  return (
    <section className="mt-20" id="experience">
      <SectionHeading title={t.title} description={t.subtitle} />
      <div className="space-y-6">
        {experiences.map((experience, i) => {
          const item = t.items[i] ?? {
            role: experience.role,
            description: experience.description,
            bullets: experience.bullets,
          }
          return (
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
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {experience.company} · {experience.location}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <ul className="mt-5 grid gap-2.5 text-sm leading-relaxed text-foreground sm:grid-cols-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
