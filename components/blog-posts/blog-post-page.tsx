"use client"

import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import type { ReactNode } from "react"
import { BlogPostArticle } from "./blog-post-article"

export function BlogPostPage({ children }: { children: ReactNode }) {
  const router = useRouter()
  const { language } = useLanguage()
  const languageKey = language === "en" ? "en" : "zh"

  return (
    <BlogPostArticle
      language={languageKey}
      onBack={() => router.push("/blogs")}
    >
      {children}
    </BlogPostArticle>
  )
}
