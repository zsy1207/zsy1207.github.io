import type { ReactNode } from "react"

/** A ruled page section: a quiet label in the left column, content on the right. */
export function Section({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <section className="grid gap-x-8 gap-y-4 border-t border-border/70 py-8 md:grid-cols-[8.5rem_minmax(0,1fr)]">
      <h2 className="text-[15px] font-medium leading-6 text-muted-foreground md:sticky md:top-20 md:self-start">{label}</h2>
      <div className={className}>{children}</div>
    </section>
  )
}
