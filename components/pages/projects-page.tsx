"use client"

import { useState } from "react"
import { PROJECTS } from "@/content/projects"
import { filterProjects } from "@/lib/content-queries"
import { Badge } from "@/components/ui/badge"
import { FilterChip } from "@/components/ui/filter-chip"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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

  return (
    <>
      <PageHeader
        title={language === "en" ? "Projects" : "项目"}
        description={language === "en" ? "Scripts, tools, and research workflows." : "整理脚本、工具与研究工作流。"}
      >
        <Input
          type="search"
          aria-label={language === "en" ? "Search projects" : "搜索项目"}
          aria-controls="projects-results"
          placeholder={language === "en" ? "Search projects..." : "搜索项目..."}
          className="w-full md:w-[260px]"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </PageHeader>

      <div role="group" aria-label={language === "en" ? "Filter projects by tag" : "按标签筛选项目"} className="mb-6 flex flex-wrap gap-2">
        <FilterChip selected={selectedTag === null} onClick={() => setSelectedTag(null)}>
          {language === "en" ? "All" : "全部"}
        </FilterChip>
        {allTags.map((tag) => (
          <FilterChip key={tag.en} selected={selectedTag === tag.en} onClick={() => setSelectedTag(tag.en)}>
            {tag[language]}
          </FilterChip>
        ))}
      </div>

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {language === "en" ? `${filteredProjects.length} projects found` : `找到 ${filteredProjects.length} 个项目`}
      </p>

      <div id="projects-results" className="space-y-4">
        {filteredProjects.map((project) => (
          <Card key={project.title} interactive className="group overflow-hidden">
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="block p-6 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:p-7">
              <h2 className="break-words text-xl font-semibold tracking-tight">
                {project.title}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag.en} variant="outline">{tag[language]}</Badge>
                ))}
              </div>

              <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                {project.description[language]}
              </p>

              <div className="mt-5 inline-flex items-center text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                {language === "en" ? "View on GitHub" : "查看 GitHub"}
                <span aria-hidden="true" className="ml-1.5 transition-transform duration-200 motion-reduce:transition-none motion-safe:[@media(hover:hover)]:group-hover:translate-x-1 motion-safe:group-focus-within:translate-x-1">→</span>
              </div>
            </a>
          </Card>
        ))}

        {filteredProjects.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="py-12 text-center text-sm text-muted-foreground">
              {language === "en"
                ? "No projects match your current search or filter."
                : "没有符合当前搜索或标签条件的项目。"}
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}
