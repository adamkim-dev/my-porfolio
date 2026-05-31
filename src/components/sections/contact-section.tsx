import { SectionHeading } from "@/components/sections/section-heading"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function ContactSection() {
    return (
        <section className="mt-24" id="contact">
            <SectionHeading title="Contact" description="Let's turn your next project into a clear digital experience." />
            <div className="rounded-[2rem] border border-border bg-card/85 p-8 text-center shadow-sm">
                <p className="max-w-2xl text-base leading-8 text-muted-foreground mx-auto">
                    I am available for senior frontend and fullstack opportunities, technical leadership, and product-focused engineering roles.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href={`mailto:${profile.email}`}
                        className={cn(buttonVariants())}
                    >
                        Email {profile.email}
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(buttonVariants({ variant: "outline" }))}
                    >
                        LinkedIn profile
                    </a>
                </div>
            </div>
        </section>
    )
}
