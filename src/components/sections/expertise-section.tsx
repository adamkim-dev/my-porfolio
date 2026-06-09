"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger, viewportOnce } from "@/lib/animations"
import type { Dict } from "@/app/[lang]/dictionaries"

type Props = { t: Dict["expertise"] }

export function ExpertiseSection({ t }: Props) {
  return (
    <section id="expertise" className="mt-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={fadeUp} className="mb-12">
          <p className="font-mono text-xs font-medium tracking-widest text-primary">
            // {t.title}
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.subtitle}
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {t.cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Number accent */}
              <span className="font-mono text-xs font-semibold text-primary">
                0{i + 1}
              </span>

              <h3 className="text-xl font-bold tracking-tight text-foreground">
                {card.title}
              </h3>

              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>

              <div className="flex flex-wrap gap-2 border-t border-border pt-5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
