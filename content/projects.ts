import type { LocalizedText } from "@/content/types"

export interface Project {
  title: string
  href: string
  tags: LocalizedText[]
  description: LocalizedText
}

export const PROJECTS: Project[] = [
  {
    title: "FudanGraduateTeachingEvaluation",
    href: "https://github.com/zsy1207/FudanGraduateTeachingEvaluation",
    tags: [
      { en: "Userscript", zh: "油猴脚本" },
      { en: "Automation", zh: "自动化" },
      { en: "Fudan", zh: "复旦" },
    ],
    description: {
      en: 'A Tampermonkey script for Fudan graduate course evaluations. It can auto-fill "Strongly Agree" options across pending forms or complete the current evaluation form with a lightweight Chinese control panel.',
      zh: "一个面向复旦研究生评教系统的油猴脚本，可以一键遍历未评教课程并自动勾选“完全同意”后提交，也支持单独填充当前评教表单。",
    },
  },
  {
    title: "atmospheric-science-research",
    href: "https://github.com/zsy1207/atmospheric-science-research",
    tags: [
      { en: "Codex Skill", zh: "Codex 技能" },
      { en: "Research Workflow", zh: "科研工作流" },
      { en: "Atmospheric Science", zh: "大气科学" },
    ],
    description: {
      en: "A Codex skill focused on atmospheric and climate science workflows. It emphasizes project structure, strict data inspection, figure review loops, and publication-oriented research standards.",
      zh: "一个面向大气与气候科学研究流程的 Codex skill，强调项目结构、数据前置检查、图件复核迭代，以及更接近论文产出的研究规范。",
    },
  },
]
