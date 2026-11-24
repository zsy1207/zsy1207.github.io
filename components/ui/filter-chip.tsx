"use client"

import type { ButtonHTMLAttributes } from "react"
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
        "focus-ring relative inline-flex cursor-pointer items-center whitespace-nowrap rounded-sm px-1 py-2 text-sm transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 [@media(pointer:coarse)]:min-h-11",
        selected
          ? "font-medium text-foreground after:absolute after:inset-x-0 after:bottom-2 after:h-[2px] after:rounded-full after:bg-accent-ink sm:after:bottom-0"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
      {...props}
    />
  )
}
