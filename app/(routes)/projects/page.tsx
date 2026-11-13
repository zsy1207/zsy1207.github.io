import type { Metadata } from "next"
import { ProjectsPage } from "@/components/pages/projects-page"

export const metadata: Metadata = {
  title: "Projects",
  description: "Open-source tools, scripts, and atmospheric science research workflows by Shiyang Zhou.",
}

export default function ProjectsRoute() {
  return <ProjectsPage />
}
