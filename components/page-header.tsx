import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
      <div className="min-w-0">
        <h1 className="text-[1.875rem] font-semibold leading-[1.12] tracking-display text-foreground sm:text-[2.25rem]">{title}</h1>
        {description && <p className="mt-2 max-w-[42rem] text-base prose-leading text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  )
}
