import Link from "next/link"
import { SectionHeading } from "@/components/sections/section-heading"
import { projects } from "@/data/projects"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Dict } from "@/app/[lang]/dictionaries"

type Props = {
  t: Dict["projects"]
  lang: string
}

export function ProjectsSection({ t, lang }: Props) {
  return (
    <section className="mt-20" id="projects">
      <SectionHeading title={t.title} description={t.subtitle} />
      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project, i) => {
          const item = t.items[i]
          if (!item) return null
          return (
            <div
              key={project.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <div className="h-16 w-16 rounded-2xl border border-border bg-card" />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground/60">
                    {t.preview_label}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm text-foreground">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 mt-auto flex items-center justify-between gap-3 border-t border-border pt-5">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {item.status}
                  </span>
                  <Link
                    href={`/${lang}${project.linkHref}`}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "font-medium",
                    )}
                  >
                    {item.link_label}
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
