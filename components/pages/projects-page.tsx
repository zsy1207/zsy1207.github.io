"use client"

import { useState } from "react"
import { PROJECTS } from "@/content/projects"
import { filterProjects } from "@/lib/content-queries"
import { FilterChip } from "@/components/ui/filter-chip"
import { SearchInput } from "@/components/ui/search-input"
import { EmptyList, ListEntry } from "@/components/list-entry"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/context/language-context"

export function ProjectsPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const allTags = Array.from(
    new Map(PROJECTS.flatMap((project) => project.tags).map((tag) => [tag.en, tag])).values(),
  )

  const filteredProjects = filterProjects({ projects: PROJECTS, language, searchQuery, selectedTag })
  const countLabel = language === "en"
    ? `${filteredProjects.length} ${filteredProjects.length === 1 ? "project" : "projects"}`
    : `${filteredProjects.length} 个项目`

  return (
    <>
      <PageHeader
        title={language === "en" ? "Projects" : "项目"}
        description={language === "en" ? "Scripts, tools, and research workflows." : "整理脚本、工具与研究工作流。"}
      >
        <SearchInput
          aria-label={language === "en" ? "Search projects" : "搜索项目"}
          aria-controls="projects-results"
          placeholder={language === "en" ? "Search projects..." : "搜索项目..."}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </PageHeader>

      <div
        role="group"
        aria-label={language === "en" ? "Filter projects by tag" : "按标签筛选项目"}
        className="mb-0 flex flex-wrap items-center gap-x-4 gap-y-0 border-b border-border/75 pb-0 sm:gap-x-5 sm:gap-y-1"
      >
        <FilterChip selected={selectedTag === null} onClick={() => setSelectedTag(null)}>
          {language === "en" ? "All" : "全部"}
        </FilterChip>
        {allTags.map((tag) => (
          <FilterChip key={tag.en} selected={selectedTag === tag.en} onClick={() => setSelectedTag(tag.en)}>
            {tag[language]}
          </FilterChip>
        ))}
        <span aria-hidden="true" className="ml-auto hidden text-sm tabular-nums text-muted-foreground sm:inline">
          {countLabel}
        </span>
      </div>

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {language === "en"
          ? `${filteredProjects.length} ${filteredProjects.length === 1 ? "project" : "projects"} found`
          : `找到 ${filteredProjects.length} 个项目`}
      </p>

      <div id="projects-results">
        <ul>
          {filteredProjects.map((project) => (
            <ListEntry
              key={project.title}
              href={project.href}
              external
              title={project.title}
              summary={project.description[language]}
              action={language === "en" ? "View on GitHub" : "查看 GitHub"}
              meta={project.tags.map((tag, index) => (
                <span key={tag.en} className="inline-flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true" className="text-muted-foreground/50">·</span>}
                  <span>{tag[language]}</span>
                </span>
              ))}
            />
          ))}
        </ul>

        {filteredProjects.length === 0 && (
          <EmptyList>
            {language === "en"
              ? "No projects match your current search or filter."
              : "没有符合当前搜索或标签条件的项目。"}
          </EmptyList>
        )}
      </div>
    </>
  )
}
