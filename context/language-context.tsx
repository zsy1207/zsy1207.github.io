"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Language = "en" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  useEffect(() => {
    // 检测浏览器语言
    const detectBrowserLanguage = () => {
      if (typeof window !== "undefined") {
        const browserLang = navigator.language.toLowerCase()
        // 如果是中文浏览器则使用中文，否则使用英文
        if (browserLang.includes("zh")) {
          setLanguage("zh")
        } else {
          setLanguage("en")
        }
      }
    }

    detectBrowserLanguage()
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)