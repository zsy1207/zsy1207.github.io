"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { BLOG_TAGS } from "@/content/blog-posts/tags"
import { useLanguage } from "@/context/language-context"
import { formatDate } from "@/lib/format-date"

interface BlogPostPageProps {
  date: string
  tags: string[]
  children: ReactNode
}

export function BlogPostPage({ date, tags, children }: BlogPostPageProps) {
  const { language } = useLanguage()

  return (
    <div className="mx-auto max-w-[44rem]">
      <Link href="/blogs" className="focus-ring group inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground">
        <ArrowLeft className="h-4 w-4 transition-transform duration-200 motion-safe:group-hover:-translate-x-0.5" aria-hidden="true" />
        {language === "en" ? "Back to all posts" : "返回所有文章"}
      </Link>

      <article className="mt-4 min-w-0 [overflow-wrap:anywhere] sm:mt-6">
        <p className="section-label flex flex-wrap gap-x-2">
          <time dateTime={date}>{formatDate(date, language)}</time>
          {tags.map((tagId) => (
            <span key={tagId}>· {BLOG_TAGS[tagId]?.name[language] ?? tagId}</span>
          ))}
        </p>
        {children}
      </article>
    </div>
  )
}
