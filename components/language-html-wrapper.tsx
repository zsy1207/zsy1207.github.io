"use client"

import { useLanguage } from "@/context/language-context"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export function LanguageHtmlWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()
  
  return (
    <html lang={language} suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 