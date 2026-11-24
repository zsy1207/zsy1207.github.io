import type { ReactNode } from "react"

/** A ruled page section: a quiet label in the left column, content on the right. */
export function Section({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <section className="grid gap-x-8 gap-y-3 border-t border-border/75 py-8 sm:py-9 md:grid-cols-[10rem_minmax(0,1fr)]">
      <h2 className="text-sm font-medium leading-[1.7] text-muted-foreground md:sticky md:top-24 md:self-start">{label}</h2>
      <div className={className}>{children}</div>
    </section>
  )
}
