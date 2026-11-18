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
      <h2 className="break-words text-lg font-semibold leading-snug tracking-tight decoration-foreground/30 decoration-1 underline-offset-4 group-hover:underline sm:text-xl">
        {title}
      </h2>
      <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">{meta}</div>
      <p className="mt-2 max-w-[44rem] text-[15px] leading-[1.6] text-foreground/70">{summary}</p>
      <div className="mt-2.5 inline-flex items-center text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
        {action}
        <span aria-hidden="true" className="ml-1.5 transition-transform duration-200 motion-reduce:transition-none motion-safe:[@media(hover:hover)]:group-hover:translate-x-1 motion-safe:group-focus-visible:translate-x-1">→</span>
      </div>
    </>
  )
  const className = "focus-ring group block rounded-sm py-5"

  return (
    <li className="border-b border-border/70">
      {external
        ? <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>
        : <Link href={href} className={className}>{content}</Link>}
    </li>
  )
}

export function EmptyList({ children }: { children: ReactNode }) {
  return <p className="border-b border-border/70 py-10 text-center text-[15px] text-muted-foreground">{children}</p>
}
