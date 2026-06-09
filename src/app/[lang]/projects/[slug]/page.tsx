import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getDictionary, hasLocale, locales } from "@/app/[lang]/dictionaries"
import { projects } from "@/data/projects"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    projects.map((project) => ({ lang, slug: project.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang)
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  if (projectIndex === -1) return {}
  const projectDict = dict.projects.items[projectIndex]
  return {
    title: `${projectDict?.title ?? slug} — Kim Van Ha`,
    description: projectDict?.summary ?? "",
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang)
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  if (projectIndex === -1) notFound()

  const project = projects[projectIndex]
  const projectDict = dict.projects.items[projectIndex]
  const t = dict.project_detail

  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-12">
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
            // {t.label}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {projectDict.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {projectDict.summary}
          </p>
        </div>
        <Link
          href={`/${lang}/#work`}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "shrink-0 text-sm font-medium",
          )}
        >
          ← {t.back}
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Details */}
        <section className="rounded-2xl border border-border bg-card p-8">
          <div className="mb-8 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8">
            <div className="flex h-72 items-center justify-center">
              <div className="rounded-2xl border border-border/70 bg-background/80 p-8 text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  {t.imagery_label}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {t.imagery_placeholder}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {projectDict.details.map((detail) => (
              <p key={detail} className="text-sm leading-7 text-muted-foreground">
                {detail}
              </p>
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="space-y-5">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {t.status_label}
            </p>
            <p className="mt-3 text-lg font-bold text-foreground">{projectDict.status}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {t.technologies_label}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {t.highlights_label}
            </p>
            <ul className="mt-4 space-y-3">
              {projectDict.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2.5 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  )
}
