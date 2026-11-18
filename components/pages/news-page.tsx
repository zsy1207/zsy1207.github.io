"use client"

import { useLanguage } from "@/context/language-context"
import { PageHeader } from "@/components/page-header"
import { NEWS_ITEMS } from "@/content/academic"
import { formatDate } from "@/lib/format-date"

export function NewsPage() {
  const { language } = useLanguage()

  return (
    <>
      <PageHeader title={language === "en" ? "Timeline" : "时间线"} />

      <ol className="relative ml-1.5 space-y-10 border-l border-border">
        {NEWS_ITEMS.map((item) => (
          <li key={item.date} className="relative pl-7">
            <span aria-hidden="true" className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-foreground ring-4 ring-background" />
            <time dateTime={item.date} className="block text-sm tabular-nums text-muted-foreground">
              {formatDate(item.date, language)}
            </time>
            <h2 className="mt-1.5 font-semibold">{item.title[language]}</h2>
            <p className="mt-1.5 text-[15px] leading-7 text-muted-foreground">{item.content[language]}</p>
          </li>
        ))}
      </ol>
    </>
  )
}
