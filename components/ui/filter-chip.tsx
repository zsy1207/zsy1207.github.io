"use client"

import type { ButtonHTMLAttributes } from "react"
import { badgeVariants } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface FilterChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean
}

export function FilterChip({ selected, className, ...props }: FilterChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        badgeVariants({ variant: selected ? "default" : "outline" }),
        "focus-ring cursor-pointer px-3 py-[3px] disabled:pointer-events-none disabled:opacity-50 [@media(pointer:coarse)]:min-h-11",
        !selected && "hover:border-foreground/25 hover:text-foreground",
        className,
      )}
      {...props}
    />
  )
}
