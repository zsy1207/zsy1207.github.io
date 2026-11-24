"use client"

import { useLanguage } from "@/context/language-context"
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
          <section key={group.year} className="border-t border-border/75 py-8 sm:py-9">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-lg font-semibold tabular-nums tracking-tight text-foreground">{group.year}</h2>
              <span className="text-sm tabular-nums text-muted-foreground">
                {language === "en"
                  ? `${group.publications.length} ${group.publications.length === 1 ? "paper" : "papers"}`
                  : `${group.publications.length} 篇`}
              </span>
            </div>
            <ol className="mt-2 divide-y divide-border/55" start={offset + 1}>
              {group.publications.map((pub, index) => (
                <li
                  key={index}
                  className="-mx-3 grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-1 rounded-lg px-3 py-4 text-base prose-leading text-foreground/[0.82] transition-colors duration-150 [overflow-wrap:anywhere] [@media(hover:hover)]:hover:bg-secondary/50 [&_strong]:font-semibold [&_strong]:text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="pt-[0.15rem] text-sm font-medium tabular-nums text-muted-foreground"
                  >
                    [{offset + index + 1}]
                  </span>
                  <span>{pub.citation}</span>
                </li>
              ))}
            </ol>
          </section>
        )
      })}

      {PUBLICATION_GROUPS.length === 0 && (
        <div className="border-t border-border/75">
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
