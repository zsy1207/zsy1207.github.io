"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label={language === "en" ? "Select language" : "选择语言"}
          variant="outline"
          size="sm"
          className="min-w-14"
        >
          <span lang={language === "en" ? "en" : "zh-CN"}>{language === "en" ? "EN" : "中文"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-navigation-overlay>
        <DropdownMenuItem onSelect={() => setLanguage("en")} lang="en">
          English
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setLanguage("zh")} lang="zh-CN">
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
