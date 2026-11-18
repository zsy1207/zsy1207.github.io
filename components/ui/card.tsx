"use client"

import * as React from "react"
import { useAnimation } from "@/context/animation-context"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, interactive = false, ...props }, ref) => {
  const { enabled } = useAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground",
        interactive && "hover:border-foreground/25 focus-within:border-foreground/40",
        interactive && enabled && "transition-colors duration-200 ease-out motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
))
CardContent.displayName = "CardContent"

/** A titled card; the title is the page's second-level heading. */
function SectionCard({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <Card>
      <section className="p-6">
        <h2 className="text-lg font-semibold leading-none tracking-tight">{title}</h2>
        <div className={cn("mt-5", className)}>{children}</div>
      </section>
    </Card>
  )
}

export { Card, CardContent, SectionCard }
