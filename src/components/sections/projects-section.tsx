"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { fadeUp, stagger, viewportOnce } from "@/lib/animations"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"
import type { Dict } from "@/app/[lang]/dictionaries"

type Props = {
  t: Dict["projects"]
  lang: string
}

export function ProjectsSection({ t, lang }: Props) {
  const [active, setActive] = useState("all")

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active)

  const countFor = (key: string) =>
    key === "all" ? projects.length : projects.filter((p) => p.category === key).length

  return (
    <section id="work" className="mt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Two-column header: heading left, description right */}
        <motion.div variants={fadeUp} className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="font-mono text-xs font-medium tracking-widest text-primary">
              // {t.title}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              My<br />Work
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm leading-relaxed text-muted-foreground">
              {t.subtitle}
            </p>
            {/* Text-link filter — tamalsen.dev style */}
            <div className="flex flex-wrap items-center gap-1 font-mono text-xs text-muted-foreground">
              <span className="mr-1 text-muted-foreground/50">Filter by</span>
              {t.filters.map((f, i) => (
                <span key={f.key} className="flex items-center gap-1">
                  <button
                    onClick={() => setActive(f.key)}
                    className={cn(
                      "transition-colors hover:text-primary",
                      active === f.key ? "font-bold text-primary" : "",
                    )}
                  >
                    {f.label}
                    <sup className="ml-0.5 text-[9px] text-primary/70">
                      {String(countFor(f.key)).padStart(2, "0")}
                    </sup>
                  </button>
                  {i < t.filters.length - 1 && <span className="text-muted-foreground/30">/</span>}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid gap-5 xl:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const item = t.items[projects.indexOf(project)]
              if (!item) return null
              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[border-color] hover:border-primary/30"
                >
                  {/* Gradient thumbnail */}
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary/10 via-card to-secondary/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/30">
                        {t.preview_label}
                      </p>
                    </div>
                    <span className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-widest text-primary/40">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-4">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-primary">
                        {item.status}
                      </span>
                      <Link
                        href={`/${lang}${project.linkHref}`}
                        className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary no-underline hover:no-underline"
                      >
                        {item.link_label} →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  )
}
