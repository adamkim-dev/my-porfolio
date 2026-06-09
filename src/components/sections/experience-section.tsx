"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger, viewportOnce } from "@/lib/animations"
import type { Dict } from "@/app/[lang]/dictionaries"
import type { Experience } from "@/data/experiences"

type Props = {
  t: Dict["experience"]
  experiences: Experience[]
}

export function ExperienceSection({ t, experiences }: Props) {
  return (
    <section id="experience" className="mt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUp} className="mb-12">
          <p className="font-mono text-xs font-medium tracking-widest text-primary">
            // {t.title}
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.subtitle}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6">
          {/* Vertical line */}
          <div className="absolute top-0 left-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const item = t.items[i] ?? {
                role: exp.role,
                description: exp.description,
                bullets: exp.bullets,
              }
              return (
                <motion.div
                  key={exp.company}
                  variants={fadeUp}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[1.625rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                  <article className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md hover:shadow-primary/5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-primary">
                          {exp.date}
                        </p>
                        <h3 className="mt-1.5 text-lg font-bold tracking-tight text-foreground">
                          {item.role}
                        </h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {exp.company}
                          <span className="mx-1.5 text-border">·</span>
                          {exp.location}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 text-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
