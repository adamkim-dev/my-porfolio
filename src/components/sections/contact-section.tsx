"use client"

import { motion } from "framer-motion"
import { Mail, ExternalLink } from "lucide-react"
import { fadeUp, stagger, viewportOnce } from "@/lib/animations"
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
    <section id="contact" className="mt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="rounded-2xl border border-border bg-card p-10 text-center sm:p-16"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs font-medium tracking-widest text-primary"
        >
          // {t.title}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          {t.subtitle}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground"
        >
          {t.availability}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={`mailto:${profile.email}`}
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
          >
            <ExternalLink className="h-4 w-4" />
            {t.linkedin}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
          >
            <ExternalLink className="h-4 w-4" />
            {t.github}
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
