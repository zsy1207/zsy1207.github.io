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

function BackToPostsLink({ label }: { label: string }) {
  return (
    <Link
      href="/blogs"
      className="focus-ring group inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-muted-foreground transition-colors duration-150 hover:text-accent-ink"
    >
      <ArrowLeft
        className="h-4 w-4 transition-transform duration-200 motion-reduce:transition-none motion-safe:[@media(hover:hover)]:group-hover:-translate-x-0.5 motion-safe:group-focus-visible:-translate-x-0.5"
        aria-hidden="true"
      />
      {label}
    </Link>
  )
}

export function BlogPostPage({ date, tags, children }: BlogPostPageProps) {
  const { language } = useLanguage()
  const backLabel = language === "en" ? "Back to all posts" : "返回所有文章"

  return (
    <div className="mx-auto max-w-[44rem]">
      <BackToPostsLink label={backLabel} />

      <article className="min-w-0 [overflow-wrap:anywhere]">
        <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm tabular-nums text-muted-foreground">
          <time dateTime={date}>{formatDate(date, language)}</time>
          {tags.map((tagId) => (
            <span key={tagId} className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="text-border">·</span>
              <span>{BLOG_TAGS[tagId]?.name[language] ?? tagId}</span>
            </span>
          ))}
        </p>
        {children}
      </article>

      <div className="mt-14 border-t border-border/75 pt-6">
        <BackToPostsLink label={backLabel} />
      </div>
    </div>
  )
}
