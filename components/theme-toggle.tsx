"use client"

import type { KeyboardEvent } from "react"
import { useLanguage } from "@/context/language-context"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/context/theme-context"
import { useAnimation } from "@/context/animation-context"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { enabled } = useAnimation()
  const isDark = theme === "dark"
  const { language } = useLanguage()
  const label = language === "en" ? "Toggle color theme" : "切换明暗主题"
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setTheme(isDark ? "light" : "dark")
    }
  }

  // Use standard styling if animations are disabled
  if (!enabled) {
    return (
      <div
        className={cn(
          "flex w-12 h-6 p-1 rounded-full cursor-pointer",
          isDark
            ? "bg-zinc-800 border border-zinc-700"
            : "bg-white border border-zinc-200"
        )}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={label}
        aria-pressed={isDark}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <div className="flex justify-between items-center w-full">
          <div
            className={cn(
              "flex justify-center items-center w-5 h-5 rounded-full",
              isDark
                ? "transform translate-x-0 bg-zinc-700"
                : "transform translate-x-5 bg-gray-200"
            )}
          >
            {isDark ? (
              <Moon
                className="w-4 h-4 text-white"
                strokeWidth={1.5}
              />
            ) : (
              <Sun
                className="w-4 h-4 text-gray-700"
                strokeWidth={1.5}
              />
            )}
          </div>
          <div
            className={cn(
              "flex justify-center items-center w-5 h-5 rounded-full",
              isDark
                ? "bg-transparent"
                : "transform -translate-x-5"
            )}
          >
            {isDark ? (
              <Sun
                className="w-4 h-4 text-gray-400"
                strokeWidth={1.5}
              />
            ) : (
              <Moon
                className="w-4 h-4 text-black"
                strokeWidth={1.5}
              />
            )}
          </div>
        </div>
      </div>
    )
  }

  // Enhanced Apple-style animation version with improved positioning
  return (
    <motion.div
      className={cn(
        "flex w-12 h-6 p-1 rounded-full cursor-pointer",
        isDark
          ? "bg-zinc-800 border border-zinc-700"
          : "bg-white border border-zinc-200"
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      aria-pressed={isDark}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <div className="flex justify-between items-center w-full relative">
        {/* Moving circle with active icon */}
        <motion.div
          className={cn(
            "absolute flex justify-center items-center w-5 h-5 rounded-full",
            isDark
              ? "bg-zinc-700"
              : "bg-gray-200"
          )}
          animate={{
            x: isDark ? 0 : 20,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 25,
              ease: [0.25, 0.1, 0.25, 1.0]
            }
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 30 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              {isDark ? (
                <Moon
                  className="w-4 h-4 text-white"
                  strokeWidth={1.5}
                />
              ) : (
                <Sun
                  className="w-4 h-4 text-gray-700"
                  strokeWidth={1.5}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Invisible placeholders to maintain layout */}
        <div className="w-5 h-5" />
        <div className="w-5 h-5" />
      </div>
    </motion.div>
  )
}
