import { SectionHeading } from "@/components/sections/section-heading"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import type { Dict } from "@/app/[lang]/dictionaries"
import type { profile } from "@/data/profile"

type Props = {
  t: Dict["contact"]
  profile: typeof profile
}

export function ContactSection({ t, profile }: Props) {
  return (
    <section className="mt-20" id="contact">
      <SectionHeading title={t.title} description={t.subtitle} />
      <div className="rounded-3xl border border-border bg-card p-10 text-center">
        <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
          {t.availability}
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
            {t.linkedin}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            {t.github}
          </a>
        </div>
      </div>
    </section>
  )
}
