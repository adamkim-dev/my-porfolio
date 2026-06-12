"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Lottie = dynamic(
    () => import("lottie-react").then((m) => m.default),
    { ssr: false }
)

export function PageLoader() {
    const [phase, setPhase] = useState<"visible" | "fading" | "done">("visible")
    const [animationData, setAnimationData] = useState<object | null>(null)

    useEffect(() => {
        fetch("/loading-lotte.json")
            .then((r) => r.json())
            .then(setAnimationData)
    }, [])

    useEffect(() => {
        const fadeTimer = setTimeout(() => setPhase("fading"), 2000)
        const doneTimer = setTimeout(() => setPhase("done"), 2600)
        return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer) }
    }, [])

    if (phase === "done") return null

    return (
        <div
            aria-hidden="true"
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--background)",
                opacity: phase === "fading" ? 0 : 1,
                transition: "opacity 600ms ease-out",
                pointerEvents: phase === "fading" ? "none" : "all",
            }}
        >
            {animationData && (
                <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                    style={{ width: 260, height: 260 }}
                />
            )}
        </div>
    )
}
