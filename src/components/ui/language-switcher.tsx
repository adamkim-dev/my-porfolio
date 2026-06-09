"use client"

import { usePathname, useRouter } from "next/navigation"
import { locales, type Locale } from "@/lib/i18n"

const labels: Record<Locale, string> = {
  en: "EN",
  vi: "VI",
}

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname()
  const router = useRouter()

  function switchLocale(locale: Locale) {
    const segments = pathname.split("/")
    segments[1] = locale
    router.push(segments.join("/"))
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-muted p-1">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest transition-colors ${
            currentLang === locale
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={`Switch to ${locale.toUpperCase()}`}
        >
          {labels[locale]}
        </button>
      ))}
    </div>
  )
}
