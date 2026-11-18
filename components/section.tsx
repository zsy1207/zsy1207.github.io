import type { ReactNode } from "react"

/** A ruled page section: a small label in the left column, content on the right. */
export function Section({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <section className="grid gap-x-10 gap-y-5 border-t border-border/70 py-9 md:grid-cols-[9.5rem_minmax(0,1fr)]">
      <h2 className="section-label md:sticky md:top-24 md:self-start md:pt-1">{label}</h2>
      <div className={className}>{children}</div>
    </section>
  )
}
