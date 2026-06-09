import type { Dict } from "@/app/[lang]/dictionaries"

export function FooterSection({ t }: { t: Dict["footer"] }) {
  return (
    <footer className="mt-20 border-t border-border py-10 text-sm text-muted-foreground">
      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <p>{t.left}</p>
        <p>{t.right}</p>
      </div>
    </footer>
  )
}
