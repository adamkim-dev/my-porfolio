export function SectionHeading({
    title,
    description,
}: {
    title: string
    description: string
}) {
    return (
        <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">{title}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {description}
            </h2>
        </div>
    )
}
