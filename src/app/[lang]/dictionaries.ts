import { locales, defaultLocale, type Locale } from "@/lib/i18n"

export { locales, defaultLocale, type Locale }

const dictionaries: Record<Locale, () => Promise<Dict>> = {
  en: () =>
    import("./dictionaries/en.json").then((m) => m.default as Dict),
  vi: () =>
    import("./dictionaries/vi.json").then((m) => m.default as Dict),
}

export const hasLocale = (locale: string): locale is Locale =>
  locales.includes(locale as Locale)

export const getDictionary = async (locale: Locale): Promise<Dict> =>
  dictionaries[locale]()

export type Dict = typeof import("./dictionaries/en.json")
