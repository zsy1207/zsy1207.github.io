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
  {
    title: "PlaSiC",
    href: "https://github.com/sunmoumou1/PlaSiC",
    tags: [
      { en: "Contributor", zh: "贡献者" },
      { en: "Climate Model", zh: "气候模式" },
      { en: "C", zh: "C 语言" },
    ],
    description: {
      en: "Planet Simulator in C: a fully coupled general circulation model in about 20,000 lines of C11, written to be understood, with a 400+ page textbook, CMIP-style experiments and a desktop interface.",
      zh: "Planet Simulator in C：用约两万行 C11 写成、以易读为目标的全耦合大气环流模式，配有 400 多页教程、CMIP 风格试验和桌面图形界面。",
    },
  },
  {
    title: "t3code-tray-patch",
    href: "https://github.com/zsy1207/t3code-tray-patch",
    tags: [
      { en: "Patch", zh: "补丁" },
      { en: "Windows", zh: "Windows" },
      { en: "Desktop App", zh: "桌面应用" },
    ],
    description: {
      en: "An unofficial patch for the T3 Code desktop app on Windows that adds close-to-tray and launch-at-login, with both switches in Settings → General and bilingual labels.",
      zh: "Windows 版 T3 Code 桌面应用的非官方补丁，加入关闭窗口时最小化到托盘和开机自启，开关位于设置 → 通用，界面支持中英文。",
    },
  },
  {
    title: "cpa-plugin-key-billing",
    href: "https://github.com/haowang02/cpa-plugin-key-billing",
    tags: [
      { en: "Contributor", zh: "贡献者" },
      { en: "Plugin", zh: "插件" },
      { en: "Go", zh: "Go" },
    ],
    description: {
      en: "A CLIProxyAPI plugin for billing downstream API keys. It sets spending, token, request and concurrency limits per key, supports USD and CNY pricing, routes models to upstream credentials, and offers a management page.",
      zh: "CLIProxyAPI 下游 API Key 计费与额度插件，可按 Key 限制金额、Token、请求次数和并发，支持美元与人民币定价、模型路由规则和管理页面。",
    },
  },
]
