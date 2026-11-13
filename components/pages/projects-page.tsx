"use client"

import { useState } from "react"
import { PROJECTS } from "@/content/projects"
import { filterProjects } from "@/lib/content-queries"
import { Badge } from "@/components/ui/badge"
import { FilterChip } from "@/components/ui/filter-chip"
import { Card, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/context/language-context"

interface ProjectTag {
  en: string
  zh: string
}

export function ProjectsPage() {
  const { language: languageKey } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const allTags: ProjectTag[] = Array.from(
    new Map(
      PROJECTS.flatMap((project) => project.tags).map((tag) => [tag.en, tag]),
    ).values(),
  )

  const filteredProjects = filterProjects({
    projects: PROJECTS,
    language: languageKey,
    searchQuery,
    selectedTag,
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {languageKey === "en" ? "Projects" : "项目"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {languageKey === "en"
              ? "Scripts, tools, and research workflows."
              : "整理脚本、工具与研究工作流。"}
          </p>
        </div>

        <Input
          type="search"
          aria-label={languageKey === "en" ? "Search projects" : "搜索项目"}
          aria-controls="projects-results"
          placeholder={languageKey === "en" ? "Search projects..." : "搜索项目..."}
          className="w-full md:w-[260px]"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

      <div role="group" aria-label={languageKey === "en" ? "Filter projects by tag" : "按标签筛选项目"} className="flex flex-wrap gap-2">
        <FilterChip
          selected={selectedTag === null}
          onClick={() => setSelectedTag(null)}
        >
          {languageKey === "en" ? "All" : "全部"}
        </FilterChip>
        {allTags.map((tag) => (
          <FilterChip
            key={tag.en}
            selected={selectedTag === tag.en}
            onClick={() => setSelectedTag(tag.en)}
          >
            {tag[languageKey]}
          </FilterChip>
        ))}
      </div>

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {languageKey === "en" ? `${filteredProjects.length} projects found` : `找到 ${filteredProjects.length} 个项目`}
      </p>

      <div id="projects-results" className="space-y-4">
        {filteredProjects.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="p-8 text-center text-sm text-muted-foreground">
              {languageKey === "en"
                ? "No projects match your current search or filter."
                : "没有符合当前搜索或标签条件的项目。"}
            </CardContent>
          </Card>
        ) : (
          filteredProjects.map((project) => (
            <Card key={project.title} interactive className="group overflow-hidden">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:p-8"
              >
                <CardTitle className="break-words text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                  {project.title}
                </CardTitle>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag.en} variant="outline" className="rounded-full bg-background/80 px-3 py-1">
                      {tag[languageKey]}
                    </Badge>
                  ))}
                </div>

                <CardContent className="mt-4 max-w-3xl p-0 text-sm leading-7 text-muted-foreground sm:text-base">
                  {project.description[languageKey]}
                </CardContent>

                <div className="mt-6 inline-flex items-center text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                  {languageKey === "en" ? "View on GitHub" : "查看 GitHub"}
                  <span aria-hidden="true" className="ml-2 transition-transform duration-200 motion-reduce:transition-none motion-safe:[@media(hover:hover)]:group-hover:translate-x-1 motion-safe:group-focus-within:translate-x-1">→</span>
                </div>
              </a>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
