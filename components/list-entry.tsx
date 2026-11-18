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
  const content = (
    <>
      <h2 className="break-words font-display text-2xl font-medium tracking-tight decoration-foreground/30 decoration-1 underline-offset-[6px] group-hover:underline sm:text-[1.75rem]">
        {title}
      </h2>
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">{meta}</div>
      <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{summary}</p>
      <div className="mt-5 inline-flex items-center text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
        {action}
        <span aria-hidden="true" className="ml-1.5 transition-transform duration-200 motion-reduce:transition-none motion-safe:[@media(hover:hover)]:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1">→</span>
      </div>
    </>
  )
  const className = "focus-ring group block rounded-sm py-8"

  return (
    <li className="border-b border-border/70">
      {external
        ? <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
        : <Link href={href} className={className}>{content}</Link>}
    </li>
  )
}

export function EmptyList({ children }: { children: ReactNode }) {
  return <p className="border-b border-border/70 py-16 text-center text-sm text-muted-foreground">{children}</p>
}
