import type { Metadata } from "next"
import { NewsPage } from "@/components/pages/news-page"

export const metadata: Metadata = {
  title: "Timeline",
  description: "Academic and personal milestones of Shiyang Zhou.",
}

export default function NewsPageRoute() {
  return <NewsPage />
}
