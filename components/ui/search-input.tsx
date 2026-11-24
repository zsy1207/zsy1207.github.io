import * as React from "react"
import { Search } from "lucide-react"
import { Input, type InputProps } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function SearchInput({ className, ...props }: Omit<InputProps, "type">) {
  return (
    <div className="group relative w-full md:w-72">
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors duration-150 group-focus-within:text-accent-ink"
        aria-hidden="true"
      />
      <Input type="search" className={cn("pl-9", className)} {...props} />
    </div>
  )
}
