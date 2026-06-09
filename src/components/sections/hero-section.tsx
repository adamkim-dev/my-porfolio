import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { profile } from "@/data/profile"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-12 sm:px-12 sm:py-16">
      {/* Subtle gradient accent top-left */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-12 right-0 h-48 w-96 rounded-full bg-secondary/8 blur-3xl" />

      <div className="relative flex flex-col gap-10">
        {/* Top row: label + theme toggle */}
        <div className="flex items-start justify-between">
          <span className="inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
            Senior Developer
          </span>
          <ThemeToggle />
        </div>

        {/* Name + bio */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#contact" className={cn(buttonVariants({ size: "lg" }))}>
            Contact Me
          </Link>
          <Link href="#projects" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            Featured Projects
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 border-t border-border pt-8">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "10+", label: "Products Shipped" },
            { value: "3", label: "Industries" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-foreground">{value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
