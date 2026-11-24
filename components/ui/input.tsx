import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground shadow-[0_1px_2px_hsl(var(--foreground)/0.03)] ring-offset-background transition-[border-color,box-shadow,background-color] duration-150 ease-out motion-reduce:transition-none [@media(pointer:coarse)]:min-h-11 [@media(pointer:coarse)]:text-base file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/85 hover:border-foreground/25 focus-visible:border-accent-ink/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ink/20 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
