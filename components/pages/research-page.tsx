"use client"

import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { useLanguage } from "@/context/language-context"

export function ResearchPage() {
  const { language } = useLanguage()

  return (
    <>
      <PageHeader title={language === "en" ? "Research" : "研究"} />

      <Section label={language === "en" ? "Status" : "状态"}>
        <p className="text-base prose-leading text-muted-foreground">
          {language === "en" ? "To be updated." : "待更新"}
        </p>
      </Section>
    </>
  )
}
