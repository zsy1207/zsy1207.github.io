"use client"

import { useLanguage } from "@/context/language-context"
import { useAnimation } from "@/context/animation-context"
import { SWITCH_BUTTON, SWITCH_THUMB, SWITCH_TRACK } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

/** Two-option switch that matches the theme toggle: one click changes language. */
export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const { enabled } = useAnimation()
  const isEnglish = language === "en"

  return (
    <button
      type="button"
      className={SWITCH_BUTTON}
      onClick={() => setLanguage(isEnglish ? "zh" : "en")}
      aria-label={isEnglish ? "Switch to Chinese" : "切换到英文"}
    >
      <span aria-hidden="true" className={`${SWITCH_TRACK} grid w-[76px] grid-cols-2 items-center text-[13px] font-medium leading-none tracking-normal`}>
        <span
          className={cn(
            SWITCH_THUMB,
            "w-[35px]",
            enabled && "transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
            !isEnglish && "translate-x-[35px]",
          )}
        />
        <span className={cn("relative text-center transition-colors duration-150", isEnglish ? "text-foreground" : "text-muted-foreground")}>EN</span>
        <span className={cn("relative text-center transition-colors duration-150", isEnglish ? "text-muted-foreground" : "text-foreground")}>中文</span>
      </span>
    </button>
  )
}
