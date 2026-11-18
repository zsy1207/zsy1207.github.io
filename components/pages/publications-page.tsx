"use client"

import { useLanguage } from "@/context/language-context"
import { Section } from "@/components/section"
import { EmptyList } from "@/components/list-entry"
import { PageHeader } from "@/components/page-header"
import { PUBLICATION_GROUPS } from "@/content/publications"

export function PublicationsPage() {
  const { language } = useLanguage()

  return (
    <>
      <PageHeader title={language === "en" ? "Publications" : "出版物"} />

      {PUBLICATION_GROUPS.map((group, groupIndex) => {
        // Reference numbers run across year groups.
        const offset = PUBLICATION_GROUPS.slice(0, groupIndex).reduce((count, earlier) => count + earlier.publications.length, 0)
        return (
          <Section key={group.year} label={group.year}>
            <ol className="space-y-4" start={offset + 1}>
              {group.publications.map((pub, index) => (
                <li key={index} className="grid grid-cols-[2.25rem_minmax(0,1fr)] leading-[1.65] text-foreground/85 [overflow-wrap:anywhere] [&_strong]:font-semibold [&_strong]:text-foreground">
                  <span aria-hidden="true" className="tabular-nums text-muted-foreground">[{offset + index + 1}]</span>
                  <span>{pub.citation}</span>
                </li>
              ))}
            </ol>
          </Section>
        )
      })}

      {PUBLICATION_GROUPS.length === 0 && (
        <div className="border-t border-border/70">
          <EmptyList>
            {language === "en"
              ? "Publication list is being updated. Please check back later."
              : "待更新"}
          </EmptyList>
        </div>
      )}
    </>
  )
}
