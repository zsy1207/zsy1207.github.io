"use client"

import { useLanguage } from "@/context/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { PUBLICATION_GROUPS } from "@/content/publications"

export function PublicationsPage() {
  const { language } = useLanguage()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">
        {language === "en" ? "Publications" : "出版物"}
      </h1>

      {PUBLICATION_GROUPS.length > 0 ? (
        <div className="space-y-4">
          {PUBLICATION_GROUPS.map((group) => (
            <Card key={group.year}>
              <CardContent className="pt-6">
                <div className="mb-4 text-xl font-semibold tracking-tight">
                  {group.year}
                </div>
                <div className="space-y-4">
                  {group.publications.map((pub, index) => (
                    <p key={index} className="leading-7 text-foreground">
                      {pub.citation}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-10 text-center text-muted-foreground">
            {language === "en"
              ? "Publication list is being updated. Please check back later."
              : "待更新"}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
