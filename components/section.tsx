import type { ReactNode } from "react"

/** A ruled page section: a small label in the left column, content on the right. */
export function Section({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <section className="grid gap-x-8 gap-y-3 border-t border-border/70 py-6 md:grid-cols-[8rem_minmax(0,1fr)]">
      <h2 className="section-label md:sticky md:top-20 md:self-start md:pt-[3px]">{label}</h2>
      <div className={className}>{children}</div>
    </section>
  )
}
