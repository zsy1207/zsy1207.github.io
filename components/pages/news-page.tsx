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

      <div className="border-t border-border/75 pt-8">
        <ol>
          {NEWS_ITEMS.map((item, index) => {
            const isLatest = index === 0
            const isLast = index === NEWS_ITEMS.length - 1
            return (
              <li
                key={item.date}
                className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-3.5 md:grid-cols-[9rem_1.5rem_minmax(0,1fr)] md:gap-x-5"
              >
                <time
                  dateTime={item.date}
                  className="col-start-2 row-start-1 text-sm leading-5 tabular-nums text-muted-foreground md:col-start-1 md:row-start-1 md:w-36 md:shrink-0 md:pt-[0.125rem] md:text-right"
                >
                  {formatDate(item.date, language)}
                </time>

                <div
                  aria-hidden="true"
                  className="relative col-start-1 row-span-2 row-start-1 flex justify-center md:col-start-2 md:row-span-1 md:row-start-1"
                >
                  {index > 0 && (
                    <span className="absolute left-1/2 top-0 h-[0.625rem] w-px -translate-x-1/2 bg-border/80 md:h-[0.6875rem]" />
                  )}
                  {!isLast && (
                    <span className="absolute bottom-0 left-1/2 top-[0.625rem] w-px -translate-x-1/2 bg-border/80 md:top-[0.6875rem]" />
                  )}
                  <span
                    className={
                      isLatest
                        ? "relative z-[1] mt-[0.3125rem] h-2.5 w-2.5 rounded-full bg-accent-ink ring-4 ring-background md:mt-[0.375rem]"
                        : "relative z-[1] mt-[0.375rem] h-2 w-2 rounded-full bg-foreground/75 ring-4 ring-background md:mt-[0.4375rem]"
                    }
                  />
                </div>

                <div
                  className={`col-start-2 row-start-2 mt-1 md:col-start-3 md:row-start-1 md:mt-0 ${isLast ? "" : "pb-8"}`}
                >
                  <h2 className="text-base font-semibold leading-snug text-foreground">
                    {item.title[language]}
                  </h2>
                  <p className="mt-1.5 max-w-[60ch] text-base prose-leading text-foreground/75">
                    {item.content[language]}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </>
  )
}
