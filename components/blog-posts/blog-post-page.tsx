"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"

export function BlogPostPage({ children }: { children: ReactNode }) {
  const { language } = useLanguage()

  return (
    <>
      <Button asChild variant="ghost" className="-ml-3 mb-6 gap-2 px-3 text-muted-foreground">
        <Link href="/blogs">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {language === "en" ? "Back to all posts" : "返回所有文章"}
        </Link>
      </Button>

      <article className="min-w-0 rounded-lg border bg-card px-6 py-8 text-card-foreground [overflow-wrap:anywhere] sm:px-10 sm:py-12">
        {children}
      </article>
    </>
  )
}
