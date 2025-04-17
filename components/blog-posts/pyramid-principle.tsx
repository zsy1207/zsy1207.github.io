"use client"

import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Pencil } from "lucide-react"

export function PyramidPrinciplePost() {
  const { language } = useLanguage()
  
  // Tag definitions with icons
  const tags = [
    { id: "reading", en: "Reading", zh: "阅读", icon: <BookOpen className="h-4 w-4" /> },
    { id: "expression", en: "Expression", zh: "表达", icon: <Pencil className="h-4 w-4" /> }
  ]
  
  return (
    <div className="max-w-4xl mx-auto">
      <Button 
        variant="ghost" 
        asChild
        className="mb-6"
      >
        <Link href="/blog">
          ← {language === "en" ? "Back to all posts" : "返回所有文章"}
        </Link>
      </Button>
      
      <article className="prose dark:prose-invert max-w-none leading-relaxed">
        {language === "en" ? (
          <>
            <h1 className="text-4xl font-bold tracking-tight text-center mb-4">
              The Pyramid Principle Summary
            </h1>
            
            <div className="flex justify-center mt-2 mb-4">
              <time className="text-muted-foreground text-center">
                April 17, 2025
              </time>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {tags.map(tag => (
                <Badge key={tag.id} variant="outline" className="bg-muted py-1 px-3">
                  <span className="flex items-center gap-1.5">
                    {tag.icon}
                    <span>Reading</span>
                    <span>Expression</span>
                  </span>
                </Badge>
              ))}
            </div>
            
            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mb-8"></div>

            <h2 className="text-2xl font-bold mt-6 mb-6">1. Introduction to the Pyramid Principle</h2>
            <p className="leading-relaxed text-base">
              Barbara Minto developed the Pyramid Principle at McKinsey in the 1970s, first published in 1985 and now a foundational method for executive communication. It guides business professionals on structuring complex reports and presentations through a top-down hierarchy: main assertion at the apex, supported by key arguments and data to meet varied audience needs.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">2. Core Structure Principles</h2>
            <p className="leading-relaxed text-base">
              The Pyramid Principle advocates deductive reasoning: begin with the assertion (conclusion/recommendation), followed by three key supporting arguments, and then detailed evidence. This clear hierarchy ensures concise and persuasive communication. The structure is:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Level 1: Assertion (main conclusion/recommendation)</li>
              <li>Level 2: Supporting arguments (key reasons, typically three)</li>
              <li>Level 3: Supporting data (specific evidence and analysis)</li>
            </ul>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">3. Thinking vs. Communicating</h2>
            <p className="leading-relaxed text-base">
              Minto distinguishes between bottom-up thinking (analysis from details to insight) and top-down communication (presentation from insight to details), ensuring both rigor and clarity.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">4. Grouping and MECE Principle</h2>
            <p className="leading-relaxed text-base">
              At every level, ideas must be grouped in a MECE manner (Mutually Exclusive, Collectively Exhaustive) and ordered logically, ensuring clarity, no overlap, and full coverage.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">5. Applications</h2>
            <p className="leading-relaxed text-base">
              Widely used in reports, executive briefs, presentations, and emails, the Pyramid Principle helps convey core messages quickly and provides deeper detail layers for audiences as needed.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion</h2>
            <p className="leading-relaxed text-base">
              With its clear hierarchy, the Pyramid Principle meets the need for rapid insight and provides a path to deeper analysis, making it an indispensable skill in modern business communication.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold tracking-tight text-center mb-4">
              《金字塔原理》总结
            </h1>
            
            <div className="flex justify-center mt-2 mb-4">
              <time className="text-muted-foreground text-center">
                2025年4月17日
              </time>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {tags.map(tag => (
                <Badge key={tag.id} variant="outline" className="bg-muted py-1 px-3">
                  <span className="flex items-center gap-1.5">
                    {tag.icon}
                    <span>阅读</span>
                    <span>表达</span>
                  </span>
                </Badge>
              ))}
            </div>
            
            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mb-8"></div>
            
            <h2 className="text-2xl font-bold mt-6 mb-6">1. 金字塔原理导论</h2>
            <p className="leading-relaxed text-base">
              芭芭拉·明托于20世纪70年代在麦肯锡公司工作期间开发了金字塔原理，该原理首次发表于1985年，并成为高管沟通领域的基础方法。其核心是指导商业专业人士如何以清晰、结构严谨的方式撰写复杂报告和演示。该原理通过自上而下的层级结构，将中心论点置于顶端，支撑性论点和数据依次排列，以满足不同层次听众的关注点。
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-6">2. 金字塔结构核心原则</h2>
            <p className="leading-relaxed text-base">
              金字塔原理倡导演绎推理，从顶层论断（结论/建议）开始，然后依次给出3个关键支撑点和详细数据，以确保信息传递简洁而有说服力。结构如下：
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>第一层级：论断（主要结论/建议）</li>
              <li>第二层级：支撑性论点（关键原因，通常3点）</li>
              <li>第三层级：支撑性数据（具体证据和分析）</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-6">3. 思考与沟通模式</h2>
            <p className="leading-relaxed text-base">
              明托区分了自下而上的思考过程与自上而下的沟通过程：分析时从细节出发，而在沟通时则自顶而下呈现摘要，再用细节支撑，确保逻辑和清晰兼备。
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-6">4. 信息组织与分组原则</h2>
            <p className="leading-relaxed text-base">
              在任意层级，分组思想要遵循 MECE 原则（相互独立且完全穷尽），并按逻辑顺序排列，以保证论点清晰、无重复且全面。
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-6">5. 应用场景</h2>
            <p className="leading-relaxed text-base">
              金字塔原理广泛应用于报告撰写、商业演示、高管简报和电子邮件等场合，帮助发送者在时间有限的情况下快速传递核心信息，并为不同深度需求的听众提供分层细节。
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-6">结论</h2>
            <p className="leading-relaxed text-base">
              金字塔原理以其清晰的层级结构，既满足了快速获取要点的需求，也提供了深入分析的路径，是现代商务沟通中不可或缺的技巧。
            </p>
          </>
        )}
      </article>
    </div>
  )
}

export default PyramidPrinciplePost 