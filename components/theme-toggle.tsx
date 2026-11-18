"use client"

import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "@/context/theme-context"
import { useAnimation } from "@/context/animation-context"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { enabled } = useAnimation()
  const { language } = useLanguage()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      className="inline-flex h-11 w-12 shrink-0 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={language === "en" ? "Toggle color theme" : "切换明暗主题"}
      aria-pressed={isDark}
    >
      <span
        aria-hidden="true"
        className={cn(
          "relative block h-6 w-12 rounded-full border border-border bg-muted",
          enabled && "transition-colors duration-150 motion-reduce:transition-none"
        )}
      >
        <motion.span
          // Framer 10 reads reducedMotion at mount. Recreate only the decorative
          // thumb when the preference changes; preserve the button and its focus.
          key={enabled ? "animated" : "static"}
          initial={false}
          animate={{ x: isDark ? 0 : 20 }}
          transition={{ duration: enabled ? 0.18 : 0, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[3px] top-px flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background text-foreground/75"
        >
          {isDark ? (
            <Moon className="h-3 w-3" strokeWidth={1.75} />
          ) : (
            <Sun className="h-3 w-3" strokeWidth={1.75} />
          )}
        </motion.span>
      </span>
    </button>
  )
}
