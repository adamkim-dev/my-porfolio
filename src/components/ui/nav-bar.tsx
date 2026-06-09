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
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Logo */}
        <a href={`/${lang}#home`} className="font-mono text-sm font-bold tracking-tight text-primary no-underline hover:no-underline">
          KimVanHa.<span className="animate-pulse">_</span>
        </a>

        {/* Nav items */}
        <nav className="hidden items-center gap-6 sm:flex">
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center gap-0.5 no-underline hover:no-underline"
            >
              <span className="font-mono text-[9px] font-medium tracking-widest text-muted-foreground/50 transition-colors group-hover:text-primary/60">
                0{i + 1}
              </span>
              <span className="font-mono text-[11px] font-medium tracking-wide text-muted-foreground transition-colors group-hover:text-foreground">
                <span className="text-primary">//</span> {item.label}
              </span>
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
