"use client"

import { useState } from "react"
import { BookOpen, Pencil } from "lucide-react"
import type { BlogPost } from "@/content/blog-posts"
import { BLOG_TAGS as TAGS } from "@/content/blog-posts/tags"
import { filterBlogPosts } from "@/lib/content-queries"
import { formatDate } from "@/lib/format-date"
import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { FilterChip } from "@/components/ui/filter-chip"
import { SearchInput } from "@/components/ui/search-input"
import { EmptyList, ListEntry } from "@/components/list-entry"
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
        <SearchInput
          aria-label={language === "en" ? "Search posts" : "搜索文章"}
          aria-controls="blogs-results"
          placeholder={language === "en" ? "Search posts..." : "搜索文章..."}
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

      <div id="blogs-results" className="border-t border-border/70">
        <ul>
          {filteredPosts.map((post) => (
            <ListEntry
              key={post.id}
              href={`/blogs/${post.slug}`}
              title={post.title[language]}
              summary={post.excerpt[language]}
              action={language === "en" ? "Read more" : "阅读更多"}
              meta={
                <>
                  <time dateTime={post.date} className="text-sm tabular-nums text-muted-foreground">
                    {formatDate(post.date, language)}
                  </time>
                  {post.tags.map((tagId) => (
                    <Badge key={tagId} variant="outline" className="gap-1.5">
                      {getTagIcon(tagId)}
                      {TAGS[tagId]?.name[language] ?? tagId}
                    </Badge>
                  ))}
                </>
              }
            />
          ))}
        </ul>

        {filteredPosts.length === 0 && (
          <EmptyList>{language === "en" ? "No posts found." : "未找到文章。"}</EmptyList>
        )}
      </div>
    </>
  )
}
