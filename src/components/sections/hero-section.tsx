import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { profile } from "@/data/profile"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function HeroSection() {
    return (
        <section className="relative overflow-hidden rounded-[2rem] border border-border bg-card/80 p-8 shadow-[0_35px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-12">
            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
            <div className="relative flex flex-col gap-8">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.28em] text-secondary">
                            Senior Developer
                        </p>
                        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                            {profile.name}
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                            {profile.summary}
                        </p>
                    </div>
                    <ThemeToggle />
                </div>

                <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="grid gap-3 sm:grid-cols-2">
                        <Link
                            href="#contact"
                            className={cn(buttonVariants())}
                        >
                            Contact Me
                        </Link>
                        <Link
                            href="#projects"
                            className={cn(buttonVariants({ variant: "outline" }))}
                        >
                            Featured Projects
                        </Link>
                    </div>
                    <div className="flex items-center justify-center rounded-3xl border border-dashed border-border/60 bg-muted p-8 text-center text-sm text-muted-foreground">
                        <div>
                            <div className="mb-2 h-24 w-24 rounded-full border border-border/80 bg-background/80" />
                            <p className="text-sm font-medium">Avatar Placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
