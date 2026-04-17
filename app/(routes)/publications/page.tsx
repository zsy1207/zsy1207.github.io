"use client"

import { useLanguage } from "@/context/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { ReactNode } from "react"

interface Publication {
  citation: ReactNode
}

interface PublicationYearGroup {
  year: string
  publications: Publication[]
}

export default function PublicationsPage() {
  const { language } = useLanguage()

  const publicationGroups: PublicationYearGroup[] = [
    {
      year: "2026",
      publications: [
        {
          citation: (
            <>
              Wang, X., <strong>Zhou, S.</strong>, &amp; Zhou, W. (2026). Sequential tropical cyclones and intraseasonal waves drive the
              record-breaking circulation-convection decoupling of the 2023 south China sea summer monsoon onset. Atmospheric
              Research, 108949.{" "}
              <a
                href="https://doi.org/10.1016/j.atmosres.2026.108949"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.1016/j.atmosres.2026.108949
              </a>
            </>
          ),
        },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">
        {language === "en" ? "Publications" : "出版物"}
      </h1>

      {publicationGroups.length > 0 ? (
        <div className="space-y-4">
          {publicationGroups.map((group) => (
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
