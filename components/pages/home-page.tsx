"use client"

import { Mail, Github } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { Avatar } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/context/theme-context"

import { SOCIAL_LINKS } from "@/content/home"

export function HomePage() {
  const { language } = useLanguage()
  const { theme } = useTheme()

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-14rem)]">
      <div className="container max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-14 px-4 py-10">
        <div className="flex-shrink-0 flex justify-center mb-4 lg:mb-0">
          <Avatar className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 border-4 border-background shadow-md">
            <Image 
              src="/photo.jpg" 
              alt={language === "en" ? "Shiyang Zhou" : "周世扬"}
              width={224} 
              height={224} 
              priority
              sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 160px"
            />
          </Avatar>
        </div>
        <div className="flex flex-col text-center lg:text-left max-w-xs sm:max-w-xl mx-auto lg:mx-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
            {language === "en" ? "Shiyang (Zephyr) Zhou" : "周世扬"}
          </h1>
          <div className="text-lg sm:text-xl text-muted-foreground mb-4 leading-relaxed max-w-prose">
            {language === "en" ? <>I am currently pursuing an M.Sc. in Meteorology at the <Link href="https://aos.fudan.edu.cn/" target="_blank" rel="noopener noreferrer" className="interactive-link focus-ring rounded-sm text-muted-foreground hover:underline">Department of Atmospheric and Oceanic Sciences (AOS)</Link>, <strong>Fudan University</strong>, advised by <strong><Link href="http://www.wenzhou-clim.com/" target="_blank" rel="noopener noreferrer" className="interactive-link focus-ring rounded-sm text-muted-foreground hover:underline">Prof. Wen Zhou</Link></strong>. My research focuses on <strong>ocean-ice-atmosphere interactions, climate dynamics, monsoons, and extreme weather</strong>. I am passionate about AI, large language models, esports, consumer tech, soccer, badminton, philosophy, and abstract art.</> : <>我目前正在<strong>复旦大学</strong><Link href="https://aos.fudan.edu.cn/" target="_blank" rel="noopener noreferrer" className="interactive-link focus-ring rounded-sm text-muted-foreground hover:underline">大气与海洋科学系</Link>攻读气象专业硕士，指导老师为<Link href="http://www.wenzhou-clim.com/" target="_blank" rel="noopener noreferrer" className="interactive-link focus-ring rounded-sm text-muted-foreground hover:underline">周文教授</Link>，研究方向为<strong>海-冰-气相互作用、气候动力学、季风与极端天气</strong>。我也是一位开发者，对AI/大模型/电竞/数码/足球/羽毛球/哲学/抽象艺术等领域都有浓厚的兴趣。</>}
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-3 min-[360px]:gap-x-2 sm:gap-x-6 lg:justify-start">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-full border border-border p-2 transition-colors duration-150 hover:border-foreground/30 hover:bg-accent focus-visible:bg-accent"
              >
                {link.icon === "mail" && <Mail className="h-7 w-7" />}
                {link.icon === "github" && <Github className="h-7 w-7" />}
                {link.icon === "google-scholar" && (
                  <Image
                    src="/google-scholar.svg"
                    alt="Google Scholar"
                    width={28}
                    height={28}
                    sizes="28px"
                    className={`h-7 w-7 ${theme === "dark" ? "invert" : ""}`}
                  />
                )}
                {link.icon === "researchgate" && (
                  <Image
                    src="/researchgate-svgrepo-com.svg"
                    alt="ResearchGate"
                    width={28}
                    height={28}
                    sizes="28px"
                    className={`h-7 w-7 ${theme === "dark" ? "invert" : ""}`}
                  />
                )}
                {link.icon === "bilibili" && (
                  <Image
                    src="/bilibili-svgrepo-com.svg"
                    alt="Bilibili"
                    width={28}
                    height={28}
                    sizes="28px"
                    className={`h-7 w-7 ${theme === "dark" ? "invert" : ""}`}
                  />
                )}
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
