"use client"

import type { ReactNode } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlogPostArticle({
  children,
  language,
  onBack,
}: {
  children: ReactNode
  language: "en" | "zh"
  onBack: () => void
}) {
  return (
    <div className="mx-auto max-w-5xl">
      <Button variant="ghost" className="mb-6 gap-2 px-2" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" />
        {language === "en" ? "Back to all posts" : "返回所有文章"}
      </Button>

      <article className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="px-6 py-8 sm:px-10 sm:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              {children}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
