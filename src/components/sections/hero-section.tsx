"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import type { Dict } from "@/app/[lang]/dictionaries"

type Props = {
  t: Dict["hero"]
  profile: Dict["profile"]
  lang: string
}

export function HeroSection({ t, profile: p }: Props) {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center pt-16 text-center">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col items-center gap-6"
      >
        {/* Giant name — scales to fill viewport */}
        <motion.h1
          variants={fadeUp}
          className="w-full font-sans text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-none tracking-tighter text-foreground"
        >
          {p.name}
        </motion.h1>

        {/* Monospace subtitle */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-[clamp(0.6rem,1.5vw,1rem)] font-medium uppercase tracking-[0.25em] text-muted-foreground"
        >
          {p.summary.split(".")[0]}.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-8 font-mono text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90 no-underline hover:no-underline"
          >
            {t.cta_contact}
          </Link>
          <Link
            href="#work"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-8 font-mono text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary no-underline hover:no-underline"
          >
            {t.cta_projects}
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-12 border-t border-border pt-8"
        >
          {t.stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <p className="font-sans text-4xl font-black tracking-tight text-foreground">{value}</p>
              <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 pt-1.5"
        >
          <div className="h-2 w-0.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
