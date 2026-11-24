"use client"

import { useState } from "react"
import type { BlogPost } from "@/content/blog-posts"
import { BLOG_TAGS as TAGS } from "@/content/blog-posts/tags"
import { filterBlogPosts } from "@/lib/content-queries"
import { formatDate } from "@/lib/format-date"
import { useLanguage } from "@/context/language-context"
import { FilterChip } from "@/components/ui/filter-chip"
import { SearchInput } from "@/components/ui/search-input"
import { EmptyList, ListEntry } from "@/components/list-entry"
import { PageHeader } from "@/components/page-header"

export function BlogsPage({ posts }: { posts: Omit<BlogPost, "markdown">[] }) {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTagIds = Array.from(new Set(posts.flatMap((post) => post.tags)))
  const filteredPosts = filterBlogPosts({ posts, language, searchQuery, selectedTag })
  const countLabel = language === "en"
    ? `${filteredPosts.length} ${filteredPosts.length === 1 ? "post" : "posts"}`
    : `${filteredPosts.length} 篇文章`

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

      <div
        role="group"
        aria-label={language === "en" ? "Filter posts by tag" : "按标签筛选文章"}
        className="mb-0 flex flex-wrap items-center gap-x-4 gap-y-0 border-b border-border/75 pb-0 sm:gap-x-5 sm:gap-y-1"
      >
        <FilterChip selected={selectedTag === null} onClick={() => setSelectedTag(null)}>
          {language === "en" ? "All" : "全部"}
        </FilterChip>
        {allTagIds.map((tagId) => (
          <FilterChip key={tagId} selected={selectedTag === tagId} onClick={() => setSelectedTag(tagId)}>
            {TAGS[tagId]?.name[language] ?? tagId}
          </FilterChip>
        ))}
        <span aria-hidden="true" className="ml-auto hidden text-sm tabular-nums text-muted-foreground sm:inline">
          {countLabel}
        </span>
      </div>

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {language === "en"
          ? `${filteredPosts.length} ${filteredPosts.length === 1 ? "post" : "posts"} found`
          : `找到 ${filteredPosts.length} 篇文章`}
      </p>

      <div id="blogs-results">
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
                  <time dateTime={post.date} className="tabular-nums">
                    {formatDate(post.date, language)}
                  </time>
                  {post.tags.map((tagId) => (
                    <span key={tagId} className="inline-flex items-center gap-2">
                      <span aria-hidden="true" className="text-muted-foreground/50">·</span>
                      <span>{TAGS[tagId]?.name[language] ?? tagId}</span>
                    </span>
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
