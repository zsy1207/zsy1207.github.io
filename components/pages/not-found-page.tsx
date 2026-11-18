"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function NotFoundPage() {
  const { language } = useLanguage()

  return (
    <div className="flex min-h-[calc(100dvh-13rem)] flex-col items-center justify-center text-center">
      <p className="section-label">404</p>
      <h1 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-display sm:text-[2rem]">
        {language === "en" ? "Page not found" : "页面不存在"}
      </h1>
      <p className="mt-3 text-[15px] text-muted-foreground">
        {language === "en" ? "The page you are looking for does not exist or has moved." : "你访问的页面不存在，或已被移动。"}
      </p>
      <Button asChild variant="outline" size="sm" className="mt-6">
        <Link href="/">{language === "en" ? "Back to home" : "返回首页"}</Link>
      </Button>
    </div>
  )
}
