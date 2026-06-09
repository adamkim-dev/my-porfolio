import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projects } from "@/data/projects"
import { SectionHeading } from "@/components/sections/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) return {}
    return {
        title: `${project.title} — Adam Kim`,
        description: project.summary,
    }
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) notFound()

    return (
        <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
            <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary">Project detail</p>
                    <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                        {project.title}
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
                        {project.summary}
                    </p>
                </div>
                <Link
                    href="/#projects"
                    className={cn(buttonVariants({ variant: "outline" }), "shrink-0 text-sm font-medium")}
                >
                    Back to portfolio
                </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
                <section className="rounded-[2rem] border border-border bg-card/90 p-8 shadow-sm">
                    <div className="mb-8 overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
                        <div className="relative h-[320px]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.14),_transparent_30%)]" />
                            <div className="relative flex h-full items-center justify-center">
                                <div className="rounded-[1.75rem] border border-border/80 bg-background/80 p-8 text-center shadow-inner">
                                    <p className="text-sm uppercase tracking-[0.28em] text-secondary">Project imagery</p>
                                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                                        Imagery placeholder for the project detail overview.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {project.details.map((detail) => (
                            <p key={detail} className="text-sm leading-7 text-muted-foreground">
                                {detail}
                            </p>
                        ))}
                    </div>
                </section>

                <aside className="space-y-6">
                    <div className="rounded-[2rem] border border-border bg-card/90 p-8 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Status</p>
                        <p className="mt-3 text-xl font-semibold text-foreground">{project.status}</p>
                    </div>

                    <div className="rounded-[2rem] border border-border bg-card/90 p-8 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Technologies</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs text-muted-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-border bg-card/90 p-8 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Highlights</p>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground">
                            {project.highlights.map((highlight) => (
                                <li key={highlight} className="flex gap-3">
                                    <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {project.linkHref && !project.linkHref.startsWith("/projects") && (
                        <a
                            href={project.linkHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "default" }), "w-full justify-center text-sm font-medium")}
                        >
                            {project.linkLabel}
                        </a>
                    )}
                </aside>
            </div>
        </main>
    )
}
