"use client"

import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react"
import { usePreference } from "@/lib/use-preference"

type Theme = "light" | "dark"
const THEMES: readonly Theme[] = ["light", "dark"]
function systemTheme(): Theme { return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" }
const ThemeContext = createContext<{ theme: Theme; setTheme: (theme: Theme) => void } | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { value: theme, update: setTheme, ready } = usePreference("theme", "light", THEMES, systemTheme)
  useEffect(() => {
    if (ready) document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme, ready])
  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme requires ThemeProvider")
  return context
}
