"use client"

import { motion } from "framer-motion"

/** Thin progress bar that sweeps left → right when the section enters the viewport. */
export function MotorBar() {
    return (
        <div className="mb-10 h-[2px] w-full overflow-hidden rounded-full bg-border/40">
            <motion.div
                className="h-full bg-gradient-to-r from-primary via-primary/70 to-transparent"
                style={{ transformOrigin: "left center" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.04, 0.6, 0.2, 1] }}
            />
        </div>
    )
}
