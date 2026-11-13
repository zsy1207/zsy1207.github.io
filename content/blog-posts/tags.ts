import type { LocalizedText } from "@/content/types"

interface BlogTag {
  id: string
  name: LocalizedText
}

export const BLOG_TAGS: Record<string, BlogTag> = {
  experience: {
    id: "experience",
    name: {
      en: "Experience",
      zh: "经验",
    },
  },
  expression: {
    id: "expression",
    name: {
      en: "Expression",
      zh: "表达",
    },
  },
}
