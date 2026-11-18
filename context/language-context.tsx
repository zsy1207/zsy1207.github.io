"use client"

import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react"
import { usePreference } from "@/lib/use-preference"

import type { Language } from "@/content/types"
export type { Language } from "@/content/types"
const LANGUAGES: readonly Language[] = ["en", "zh"]
interface LanguageContextType { language: Language; setLanguage: (language: Language) => void }
const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { value: language, update: setLanguage } = usePreference("language", "en", LANGUAGES)
  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage])
  // Browsers pick CJK glyphs and hyphenation from the document language.
  useEffect(() => { document.documentElement.lang = language === "zh" ? "zh-CN" : "en" }, [language])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage requires LanguageProvider")
  return context
}
