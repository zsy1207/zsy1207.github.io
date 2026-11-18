"use client"

import { useLanguage } from "@/context/language-context"
import { Card, CardContent, SectionCard } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { PUBLICATION_GROUPS } from "@/content/publications"

export function PublicationsPage() {
  const { language } = useLanguage()

  return (
    <>
      <PageHeader title={language === "en" ? "Publications" : "出版物"} />

      {PUBLICATION_GROUPS.length > 0 ? (
        <div className="space-y-4">
          {PUBLICATION_GROUPS.map((group) => (
            <SectionCard key={group.year} title={group.year}>
              <ul className="space-y-4">
                {group.publications.map((pub, index) => (
                  <li key={index} className="text-[15px] leading-7 text-foreground/80 [overflow-wrap:anywhere]">
                    {pub.citation}
                  </li>
                ))}
              </ul>
            </SectionCard>
          ))}
        </div>
      ) : (
        <Card className="border-dashed">
          <CardContent className="py-12 text-center text-sm text-muted-foreground">
            {language === "en"
              ? "Publication list is being updated. Please check back later."
              : "待更新"}
          </CardContent>
        </Card>
      )}
    </>
  )
}
