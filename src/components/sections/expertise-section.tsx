"use client"

import { Monitor, Cpu, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUp, stagger, viewportOnce } from "@/lib/animations"
import type { Dict } from "@/app/[lang]/dictionaries"

type Props = { t: Dict["expertise"] }

const ICONS = [Monitor, Cpu, ShieldCheck]

const GRADIENT_CLASSES = [
  "from-primary to-cyan-300",
  "from-orange-400 to-amber-300",
  "from-violet-400 to-pink-400",
]

export function ExpertiseSection({ t }: Props) {
  return (
    <section id="expertise" className="mt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Centered heading */}
        <motion.div variants={fadeUp} className="mb-16 text-center">
          <p className="font-mono text-xs font-medium tracking-widest text-primary">
            // {t.title}
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t.subtitle}
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {t.cards.map((card, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-border bg-card p-7 transition-shadow hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                {/* Gradient title */}
                <h3 className={`bg-gradient-to-r ${GRADIENT_CLASSES[i]} bg-clip-text text-2xl font-black tracking-tight text-transparent`}>
                  {card.title}
                </h3>

                {/* Code-style description block */}
                <div className="flex flex-col gap-1 font-mono text-xs">
                  <span className="text-muted-foreground/40">&lt;h3&gt;</span>
                  <p className="px-3 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <span className="text-muted-foreground/40">&lt;/h3&gt;</span>
                </div>

                {/* Tech tags */}
                <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-[10px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle number watermark */}
                <span className="pointer-events-none absolute bottom-4 right-6 font-mono text-6xl font-black text-muted/30 select-none">
                  0{i + 1}
                </span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
