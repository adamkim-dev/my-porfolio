"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

type Theme = "light" | "dark" | "system"
type ThemeContextValue = {
    theme: Theme
    resolvedTheme: "light" | "dark"
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function AppThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("system")
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        const storedTheme = window.localStorage.getItem("theme") as Theme | null
        const initialTheme = storedTheme ?? "system"
        setTheme(initialTheme)
    }, [])

    useEffect(() => {
        const nextResolvedTheme =
            theme === "system"
                ? window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
                : theme

        setResolvedTheme(nextResolvedTheme)
        document.documentElement.classList.toggle("dark", nextResolvedTheme === "dark")

        if (theme === "system") {
            window.localStorage.removeItem("theme")
        } else {
            window.localStorage.setItem("theme", theme)
        }
    }, [theme])

    useEffect(() => {
        if (theme !== "system") return

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const handleChange = (event: MediaQueryListEvent) => {
            const newTheme = event.matches ? "dark" : "light"
            setResolvedTheme(newTheme)
            document.documentElement.classList.toggle("dark", newTheme === "dark")
        }

        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [theme])

    const value = useMemo(
        () => ({ theme, resolvedTheme, setTheme }),
        [theme, resolvedTheme]
    )

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useAppTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useAppTheme must be used within AppThemeProvider")
    }
    return context
}

export function Providers({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())

    return (
        <AppThemeProvider>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </AppThemeProvider>
    )
}
