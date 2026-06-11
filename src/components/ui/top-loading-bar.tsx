"use client"

import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function TopLoadingBar() {
    const pathname = usePathname()
    const [animKey, setAnimKey] = useState(0)

    useEffect(() => {
        setAnimKey((k) => k + 1)
    }, [pathname])

    return (
        <div
            className="pointer-events-none fixed top-0 right-0 left-0 z-[9999] h-[3px] overflow-hidden"
            aria-hidden="true"
        >
            {/* The bar + shimmer share an opacity-fading wrapper */}
            <motion.div
                key={animKey}
                className="absolute inset-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: 0.78, ease: "easeOut" }}
            >
                {/* Motor bar — fast initial burst, eases to full width */}
                <motion.div
                    className="absolute inset-0 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [0, 0.45, 0.72, 0.88, 1] }}
                    transition={{
                        duration: 0.78,
                        times: [0, 0.22, 0.48, 0.68, 1],
                        ease: "easeOut",
                    }}
                    style={{
                        transformOrigin: "left center",
                        boxShadow: "0 0 8px var(--primary), 0 0 20px var(--primary)",
                    }}
                />
                {/* Shimmer glare sweeping from left to right */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "120%" }}
                    transition={{ duration: 0.6, delay: 0.08, ease: "easeInOut" }}
                />
            </motion.div>
        </div>
    )
}
