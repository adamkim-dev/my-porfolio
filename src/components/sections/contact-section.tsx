import { SectionHeading } from "@/components/sections/section-heading"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function ContactSection() {
    return (
        <section className="mt-20" id="contact">
            <SectionHeading title="Contact" description="Let's turn your next project into a clear digital experience." />
            <div className="rounded-3xl border border-border bg-card p-10 text-center">
                <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
                    I am available for senior frontend and fullstack opportunities, technical leadership, and product-focused engineering roles.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href={`mailto:${profile.email}`}
                        className={cn(buttonVariants({ size: "lg" }))}
                    >
                        {profile.email}
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                    >
                        LinkedIn
                    </a>
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}
