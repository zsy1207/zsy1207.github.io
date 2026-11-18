"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Pencil } from "lucide-react"
import type { BlogPost } from "@/content/blog-posts"
import { BLOG_TAGS as TAGS } from "@/content/blog-posts/tags"
import { filterBlogPosts } from "@/lib/content-queries"
import { formatDate } from "@/lib/format-date"
import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { FilterChip } from "@/components/ui/filter-chip"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PageHeader } from "@/components/page-header"

function getTagIcon(tagId: string) {
  if (tagId === "experience") return <BookOpen className="h-3 w-3" aria-hidden="true" />
  if (tagId === "expression") return <Pencil className="h-3 w-3" aria-hidden="true" />
  return null
}

export function BlogsPage({ posts }: { posts: Omit<BlogPost, "markdown">[] }) {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTagIds = Array.from(new Set(posts.flatMap((post) => post.tags)))
  const filteredPosts = filterBlogPosts({ posts, language, searchQuery, selectedTag })

  return (
    <>
      <PageHeader
        title={language === "en" ? "Blogs" : "博客"}
        description={language === "en" ? "Writing, notes, and practical guides." : "记录阅读、思考与实践经验。"}
      >
        <Input
          type="search"
          aria-label={language === "en" ? "Search posts" : "搜索文章"}
          aria-controls="blogs-results"
          placeholder={language === "en" ? "Search posts..." : "搜索文章..."}
          className="w-full md:w-[260px]"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </PageHeader>

      <div role="group" aria-label={language === "en" ? "Filter posts by tag" : "按标签筛选文章"} className="mb-6 flex flex-wrap gap-2">
        <FilterChip selected={selectedTag === null} onClick={() => setSelectedTag(null)}>
          {language === "en" ? "All" : "全部"}
        </FilterChip>
        {allTagIds.map((tagId) => (
          <FilterChip key={tagId} selected={selectedTag === tagId} onClick={() => setSelectedTag(tagId)}>
            {TAGS[tagId]?.name[language] ?? tagId}
          </FilterChip>
        ))}
      </div>

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {language === "en" ? `${filteredPosts.length} posts found` : `找到 ${filteredPosts.length} 篇文章`}
      </p>

      <div id="blogs-results" className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} interactive className="group overflow-hidden">
            <Link href={`/blogs/${post.slug}`} className="block p-6 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:p-7">
              <h2 className="break-words text-xl font-semibold tracking-tight">
                {post.title[language]}
              </h2>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                {post.tags.map((tagId) => (
                  <Badge key={tagId} variant="outline" className="gap-1.5">
                    {getTagIcon(tagId)}
                    {TAGS[tagId]?.name[language] ?? tagId}
                  </Badge>
                ))}
                <time dateTime={post.date} className="text-sm tabular-nums text-muted-foreground">
                  {formatDate(post.date, language)}
                </time>
              </div>

              <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                {post.excerpt[language]}
              </p>

              <div className="mt-5 inline-flex items-center text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                {language === "en" ? "Read more" : "阅读更多"}
                <span aria-hidden="true" className="ml-1.5 transition-transform duration-200 motion-reduce:transition-none motion-safe:[@media(hover:hover)]:group-hover:translate-x-1 motion-safe:group-focus-within:translate-x-1">→</span>
              </div>
            </Link>
          </Card>
        ))}

        {filteredPosts.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="py-12 text-center text-sm text-muted-foreground">
              {language === "en" ? "No posts found." : "未找到文章。"}
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}
