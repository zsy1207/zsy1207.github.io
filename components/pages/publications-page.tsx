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

      {PUBLICATION_GROUPS.map((group) => (
        <Section key={group.year} label={group.year}>
          <ol className="space-y-6">
            {group.publications.map((pub, index) => (
              <li key={index} className="text-[15px] leading-7 text-foreground/80 [overflow-wrap:anywhere] [&_strong]:font-semibold [&_strong]:text-foreground">
                {pub.citation}
              </li>
            ))}
          </ol>
        </Section>
      ))}

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
