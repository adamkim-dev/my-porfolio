import Link from "next/link"
import { SectionHeading } from "@/components/sections/section-heading"
import { projects } from "@/data/projects"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ProjectsSection() {
    return (
        <section className="mt-24" id="projects">
            <SectionHeading title="Featured projects" description="Premium case studies with design, delivery, and engineering quality." />
            <div className="grid gap-6 xl:grid-cols-2">
                {projects.map((project) => (
                    <div
                        key={project.slug}
                        className="group overflow-hidden rounded-[2rem] border border-border bg-card/90 shadow-sm"
                    >
                        <div className="relative overflow-hidden p-6 sm:p-8">
                            <div className="mb-6 h-[220px] overflow-hidden rounded-[1.75rem] border border-border/70 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.15),_transparent_35%)]" />
                                <div className="relative flex h-full flex-col items-center justify-center gap-4 p-6 text-center text-muted-foreground">
                                    <div className="h-24 w-24 rounded-[1.5rem] border border-border/70 bg-background/80 shadow-inner" />
                                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-secondary">Project preview</p>
                                    <p className="max-w-xs text-xs leading-6">Imagery placeholder for the project hero card.</p>
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold tracking-tight text-foreground">{project.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>
                            <div className="mt-5 space-y-3 text-sm text-foreground">
                                {project.highlights.map((item) => (
                                    <p key={item} className="flex gap-3">
                                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                                        {item}
                                    </p>
                                ))}
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs text-muted-foreground">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-3 border-t border-border/70 bg-muted/80 px-6 py-4">
                            <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{project.status}</span>
                            <Link
                                href={project.linkHref}
                                className={cn(buttonVariants({ variant: "ghost" }), "text-sm font-medium")}
                            >
                                {project.linkLabel}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
