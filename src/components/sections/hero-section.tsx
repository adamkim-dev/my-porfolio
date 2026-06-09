"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { profile } from "@/data/profile"
import { fadeUp, stagger, viewportOnce } from "@/lib/animations"
import type { Dict } from "@/app/[lang]/dictionaries"

type Props = {
  t: Dict["hero"]
  profile: Dict["profile"]
  lang: string
}

export function HeroSection({ t, profile: p }: Props) {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-3.5rem)] flex-col justify-center pt-14">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[500px] -translate-y-1/2 rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
      >
        {/* Left */}
        <div className="flex flex-1 flex-col gap-8">
          <motion.p variants={fadeUp} className="font-mono text-xs font-medium tracking-widest text-primary">
            // home
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-3">
            <h1 className="text-6xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              {p.name}
            </h1>
            <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
              Senior Fullstack Developer
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {p.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <Link href="#contact" className={cn(buttonVariants({ size: "lg" }))}>
              {t.cta_contact}
            </Link>
            <Link
              href="#work"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              {t.cta_projects}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-10 border-t border-border pt-8"
          >
            {t.stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold tracking-tight text-foreground">{value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          variants={fadeUp}
          className="flex shrink-0 justify-center sm:justify-end"
        >
          <div className="relative h-56 w-56 overflow-hidden rounded-3xl border border-border shadow-xl sm:h-72 sm:w-72">
            <Image
              src={profile.avatar}
              alt={p.name}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
