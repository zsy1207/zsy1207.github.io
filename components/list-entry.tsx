import type { ReactNode } from "react"
import Link from "next/link"

interface ListEntryProps {
  href: string
  external?: boolean
  title: string
  meta: ReactNode
  summary: string
  action: string
}

/** One row of a ruled list (a post or a project); the whole row is the link. */
export function ListEntry({ href, external = false, title, meta, summary, action }: ListEntryProps) {
  const arrowClassName = external
    ? "transition-transform duration-200 motion-reduce:transition-none motion-safe:[@media(hover:hover)]:group-hover:-translate-y-0.5 motion-safe:[@media(hover:hover)]:group-hover:translate-x-0.5 motion-safe:group-focus-visible:-translate-y-0.5 motion-safe:group-focus-visible:translate-x-0.5"
    : "transition-transform duration-200 motion-reduce:transition-none motion-safe:[@media(hover:hover)]:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1"

  const content = (
    <>
      <h2 className="break-words text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors duration-150 group-hover:text-accent-ink">
        {title}
      </h2>
      <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
        {meta}
      </div>
      <p className="mt-3 max-w-[62ch] text-base prose-leading text-foreground/75">{summary}</p>
      <div className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors duration-150 group-hover:text-accent-ink">
        {action}
        <span aria-hidden="true" className={arrowClassName}>
          {external ? "↗" : "→"}
        </span>
      </div>
    </>
  )
  const className =
    "focus-ring group -mx-3 block rounded-xl px-3 py-6 transition-colors duration-200 hover:bg-secondary/50 sm:py-7"

  return (
    <li className="border-b border-border/75">
      {external
        ? <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
        : <Link href={href} className={className}>{content}</Link>}
    </li>
  )
}

export function EmptyList({ children }: { children: ReactNode }) {
  return (
    <p className="border-b border-border/75 py-14 text-center text-base text-muted-foreground">
      {children}
    </p>
  )
}
