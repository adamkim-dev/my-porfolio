"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { ThemeToggle } from "@/components/ui/theme-toggle"

type NavItem = { label: string; href: string }

type Props = {
  lang: string
  items: NavItem[]
}

export function NavBar({ lang, items }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color] duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <nav className="flex items-center gap-5">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden font-mono text-[11px] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              <span className="text-primary">//</span> {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher currentLang={lang} />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  )
}
