import type { LocalizedText } from "@/content/types"
export type { LocalizedText } from "@/content/types"

export interface BlogPost {
  id: string
  slug: string
  title: LocalizedText
  date: string
  tags: string[]
  excerpt: LocalizedText
  markdown: string
}
