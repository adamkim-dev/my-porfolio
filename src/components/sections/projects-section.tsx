"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { fadeUp, stagger, scaleIn, viewportOnce } from "@/lib/animations"
import { projects } from "@/data/projects"
import { buttonVariants } from "@/components/ui/button"
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

  return (
    <section id="work" className="mt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="mb-10">
          <p className="font-mono text-xs font-medium tracking-widest text-primary">
            // {t.title}
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.subtitle}
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div variants={fadeUp} className="mb-8 flex flex-wrap gap-2">
          {t.filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200",
                active === f.key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border bg-muted text-muted-foreground hover:text-foreground",
              )}
            >
              {f.label}
              {f.key === "all" && (
                <span className="ml-1.5 opacity-60">{projects.length}</span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid gap-5 xl:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const item = t.items[projects.indexOf(project)]
              if (!item) return null
              return (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
                >
                  {/* Thumbnail */}
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-primary/8 via-background to-secondary/8">
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-12 w-12 rounded-xl border border-border bg-card/80" />
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
                        {t.preview_label}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <span className="mt-0.5 shrink-0 rounded-full border border-border bg-muted px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground"
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
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "sm" }),
                          "h-7 px-3 text-xs font-medium",
                        )}
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
