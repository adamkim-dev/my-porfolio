import Link from "next/link"
import { SectionHeading } from "@/components/sections/section-heading"
import { projects } from "@/data/projects"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ProjectsSection() {
    return (
        <section className="mt-20" id="projects">
            <SectionHeading title="Featured projects" description="Premium case studies with design, delivery, and engineering quality." />
            <div className="grid gap-6 xl:grid-cols-2">
                {projects.map((project) => (
                    <div
                        key={project.slug}
                        className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
                    >
                        {/* Project thumbnail placeholder */}
                        <div className="flex h-44 items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                            <div className="flex flex-col items-center gap-2 text-muted-foreground">
                                <div className="h-16 w-16 rounded-2xl border border-border bg-card" />
                                <p className="text-xs uppercase tracking-widest text-muted-foreground/60">Preview</p>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col p-6 sm:p-8">
                            <h3 className="text-xl font-bold tracking-tight text-foreground">{project.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                            <ul className="mt-5 space-y-2.5">
                                {project.highlights.map((item) => (
                                    <li key={item} className="flex gap-3 text-sm text-foreground">
                                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-5 mt-6">
                                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{project.status}</span>
                                <Link
                                    href={project.linkHref}
                                    className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "font-medium")}
                                >
                                    {project.linkLabel}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
