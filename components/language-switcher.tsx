"use client"

import { useLanguage } from "@/context/language-context"
import { useAnimation } from "@/context/animation-context"
import { cn } from "@/lib/utils"

/** Two-option switch that matches the theme toggle: one click changes language. */
export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const { enabled } = useAnimation()
  const isEnglish = language === "en"

  return (
    <button
      type="button"
      className="inline-flex h-11 shrink-0 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onClick={() => setLanguage(isEnglish ? "zh" : "en")}
      aria-label={isEnglish ? "Switch to Chinese" : "切换到英文"}
    >
      <span aria-hidden="true" className="relative grid h-6 w-16 grid-cols-2 items-center rounded-full border border-border bg-muted text-[11px] font-medium leading-none">
        <span
          className={cn(
            "absolute left-px top-px h-5 w-[30px] rounded-full border border-border bg-background",
            enabled && "transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
            !isEnglish && "translate-x-[30px]",
          )}
        />
        <span className={cn("relative text-center", isEnglish ? "text-foreground" : "text-muted-foreground")}>EN</span>
        <span className={cn("relative text-center", isEnglish ? "text-muted-foreground" : "text-foreground")}>中</span>
      </span>
    </button>
  )
}
