import { SectionHeading } from "@/components/sections/section-heading"
import type { Dict } from "@/app/[lang]/dictionaries"
import type { SkillCategory } from "@/data/skills"

type Props = {
  t: Dict["skills"]
  categories: SkillCategory[]
}

export function SkillsSection({ t, categories }: Props) {
  return (
    <section className="mt-20" id="skills">
      <SectionHeading title={t.title} description={t.subtitle} />
      <div className="grid gap-6 lg:grid-cols-2">
        {categories.map((category, i) => {
          const categoryDict = t.categories[i] ?? {
            title: category.title,
            description: category.description,
          }
          return (
            <div
              key={category.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                {categoryDict.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {categoryDict.description}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background px-4 py-3"
                  >
                    <p className="text-sm font-medium text-foreground">
                      {skill.name}
                    </p>
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t.levels[skill.level as keyof typeof t.levels] ??
                        skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
