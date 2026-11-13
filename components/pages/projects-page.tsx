"use client"

import { useState } from "react"
import { PROJECTS } from "@/content/projects"
import { filterProjects } from "@/lib/content-queries"
import { Badge } from "@/components/ui/badge"
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
          placeholder={languageKey === "en" ? "Search projects..." : "搜索项目..."}
          className="w-full md:w-[260px]"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge
          variant={selectedTag === null ? "default" : "outline"}
          className="cursor-pointer rounded-full px-3 py-1"
          onClick={() => setSelectedTag(null)}
        >
          {languageKey === "en" ? "All" : "全部"}
        </Badge>
        {allTags.map((tag) => (
          <Badge
            key={tag.en}
            variant={selectedTag === tag.en ? "default" : "outline"}
            className="cursor-pointer rounded-full px-3 py-1"
            onClick={() => setSelectedTag(tag.en)}
          >
            {tag[languageKey]}
          </Badge>
        ))}
      </div>

      <div className="space-y-4">
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
            <Card key={project.title} className="group overflow-hidden">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 text-left sm:p-8"
              >
                <CardTitle className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
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
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </a>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
