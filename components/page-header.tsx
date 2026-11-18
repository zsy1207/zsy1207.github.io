import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-5">
      <div className="min-w-0">
        <h1 className="text-[2rem] font-[650] leading-[1.1] tracking-display sm:text-[2.5rem]">{title}</h1>
        {description && <p className="mt-2.5 text-base text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  )
}
