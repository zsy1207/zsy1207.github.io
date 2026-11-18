import type { Language } from "@/content/types"

// Content dates are calendar days (YYYY-MM-DD). Format them in UTC so the
// visitor's time zone cannot shift the day.
export function formatDate(date: string, language: Language) {
  return new Date(date).toLocaleDateString(language === "en" ? "en-US" : "zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}
