"use client"

import { Moon, SunMedium } from "lucide-react"
import { useAppTheme } from "@/components/providers"

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useAppTheme()
    const isDark = theme === "dark" || resolvedTheme === "dark"

    return (
        <button
            type="button"
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-foreground transition hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            {isDark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
    )
}
