"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"

export default function ResearchPage() {
  const { language } = useLanguage()

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">
        {language === "en" ? "Research" : "研究"}
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>
            {language === "en" ? "Status" : "状态"}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          {language === "en" ? "To be updated." : "待更新"}
        </CardContent>
      </Card>
    </div>
  )
}
