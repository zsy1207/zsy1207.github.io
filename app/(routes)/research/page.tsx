import type { Metadata } from "next"
import { ResearchPage } from "@/components/pages/research-page"

export const metadata: Metadata = {
  title: "Research",
  description: "Research on ocean–ice–atmosphere interactions, climate dynamics, monsoons, and extreme weather.",
}

export default function ResearchPageRoute() {
  return <ResearchPage />
}
