import type { Metadata } from "next"
import { ResumePage } from "@/components/pages/resume-page"

export const metadata: Metadata = {
  title: "Resume",
  description: "Curriculum vitae of Shiyang Zhou: education, research experience, honors, and technical skills.",
}

export default function ResumePageRoute() {
  return <ResumePage />
}
