import * as React from "react"
import { Search } from "lucide-react"
import { Input, type InputProps } from "@/components/ui/input"

export function SearchInput(props: Omit<InputProps, "type">) {
  return (
    <div className="relative w-full md:w-[260px]">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <Input type="search" className="pl-9" {...props} />
    </div>
  )
}
