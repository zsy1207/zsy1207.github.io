import type { Metadata } from "next"
import { PublicationsPage } from "@/components/pages/publications-page"

export const metadata: Metadata = {
  title: "Publications",
  description: "Academic publications by Shiyang Zhou on climate dynamics, monsoons, and vegetation–climate interactions.",
}

export default function PublicationsPageRoute() {
  return <PublicationsPage />
}
