import type { Dict } from "@/app/[lang]/dictionaries"

export function FooterSection({ t }: { t: Dict["footer"] }) {
  return (
    <footer className="mt-20 border-t border-border py-8">
      <div className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
        <p className="font-mono">{t.left}</p>
        <p>{t.right}</p>
      </div>
    </footer>
  )
}
