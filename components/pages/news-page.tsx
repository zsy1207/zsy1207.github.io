"use client"

import { useLanguage } from "@/context/language-context"
import { NEWS_ITEMS } from "@/content/academic"

export function NewsPage() {
  const { language } = useLanguage()

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight mb-8">
        {language === "en" ? "Timeline" : "时间线"}
      </h1>
      
      <div className="relative ml-4">
        {/* 垂直时间线 */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
        
        <div className="space-y-12">
          {NEWS_ITEMS.map((item, index) => (
            <div key={index} className="relative pl-8">
              {/* 时间点圆点 */}
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2" />
              
              <div className="text-sm text-muted-foreground mb-2">
                {new Date(item.date).toLocaleDateString(language === "en" ? "en-US" : "zh-CN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{item.title[language]}</h3>
              <p className="text-muted-foreground">{item.content[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}