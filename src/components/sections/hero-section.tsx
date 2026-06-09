import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { profile } from "@/data/profile"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import type { Dict } from "@/app/[lang]/dictionaries"

type Props = {
  t: Dict["hero"]
  profile: Dict["profile"]
  lang: string
}

export function HeroSection({ t, profile: p, lang }: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-12 sm:px-12 sm:py-16">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-12 right-0 h-48 w-96 rounded-full bg-secondary/8 blur-3xl" />

      <div className="relative flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        {/* Left: content */}
        <div className="flex flex-1 flex-col gap-10">
          {/* Top row: badge + controls */}
          <div className="flex items-start justify-between gap-4">
            <span className="inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
              {t.badge}
            </span>
            <div className="flex items-center gap-2">
              <LanguageSwitcher currentLang={lang} />
              <ThemeToggle />
            </div>
          </div>

          {/* Name + bio */}
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              {p.name}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {p.summary}
            </p>
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#contact" className={cn(buttonVariants({ size: "lg" }))}>
              {t.cta_contact}
            </Link>
            <Link
              href="#projects"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              {t.cta_projects}
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 border-t border-border pt-8">
            {t.stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-foreground">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: avatar */}
        <div className="flex shrink-0 justify-center sm:justify-end">
          <div className="relative h-52 w-52 overflow-hidden rounded-3xl border border-border shadow-lg sm:h-64 sm:w-64">
            <Image
              src={profile.avatar}
              alt={p.name}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
