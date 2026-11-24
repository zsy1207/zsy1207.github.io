"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function NotFoundPage() {
  const { language } = useLanguage()

  return (
    <div className="flex min-h-[calc(100dvh-15rem)] flex-col items-center justify-center py-8 text-center">
      <p
        aria-hidden="true"
        className="select-none text-5xl font-semibold tabular-nums tracking-display text-muted-foreground/35"
      >
        404
      </p>
      <h1 className="mt-4 text-balance text-[1.875rem] font-semibold leading-[1.12] tracking-display text-foreground sm:text-[2.25rem]">
        {language === "en" ? "Page not found" : "页面不存在"}
      </h1>
      <p className="mt-3 max-w-[30rem] text-base prose-leading text-muted-foreground">
        {language === "en"
          ? "The page you are looking for does not exist or has moved."
          : "你访问的页面不存在，或已被移动。"}
      </p>
      <Button
        asChild
        variant="outline"
        size="sm"
        className="group mt-8 gap-2 rounded-lg px-4 text-sm font-medium"
      >
        <Link href="/">
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-150 motion-safe:group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          {language === "en" ? "Back to home" : "返回首页"}
        </Link>
      </Button>
    </div>
  )
}
