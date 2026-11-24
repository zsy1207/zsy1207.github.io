"use client"

import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "@/context/theme-context"
import { useAnimation } from "@/context/animation-context"

export const SWITCH_BUTTON = "group inline-flex h-11 shrink-0 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
export const SWITCH_TRACK = "relative block h-7 rounded-full border border-border/90 bg-secondary/90 shadow-[inset_0_1px_2px_hsl(var(--foreground)/0.05)] transition-colors duration-150 group-hover:border-foreground/25 dark:border-border dark:bg-secondary/90 dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.3)]"
export const SWITCH_THUMB = "absolute left-[2px] top-[2px] h-[22px] rounded-full bg-card ring-1 ring-foreground/[0.08] shadow-[0_1px_3px_hsl(var(--foreground)/0.12)] dark:bg-accent dark:ring-foreground/15 dark:shadow-[0_1px_3px_rgb(0_0_0/0.4)]"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { enabled } = useAnimation()
  const { language } = useLanguage()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      className={SWITCH_BUTTON}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={language === "en" ? "Toggle color theme" : "切换明暗主题"}
      aria-pressed={isDark}
    >
      <span aria-hidden="true" className={`${SWITCH_TRACK} w-[52px]`}>
        <motion.span
          // Framer 10 reads reducedMotion at mount. Recreate only the decorative
          // thumb when the preference changes; preserve the button and its focus.
          key={enabled ? "animated" : "static"}
          initial={false}
          animate={{ x: isDark ? 0 : 24 }}
          transition={{ duration: enabled ? 0.18 : 0, ease: [0.22, 1, 0.36, 1] }}
          className={`${SWITCH_THUMB} flex w-[22px] items-center justify-center text-foreground`}
        >
          {isDark ? (
            <Moon className="h-3.5 w-3.5" strokeWidth={1.75} />
          ) : (
            <Sun className="h-3.5 w-3.5" strokeWidth={1.75} />
          )}
        </motion.span>
      </span>
    </button>
  )
}
