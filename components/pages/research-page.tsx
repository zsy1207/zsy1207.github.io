"use client"

import { SectionCard } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/context/language-context"

export function ResearchPage() {
  const { language } = useLanguage()

  return (
    <>
      <PageHeader title={language === "en" ? "Research" : "研究"} />

      <SectionCard title={language === "en" ? "Status" : "状态"} className="text-sm text-muted-foreground">
        {language === "en" ? "To be updated." : "待更新"}
      </SectionCard>
    </>
  )
}
