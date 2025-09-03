"use client"

import { Mail, Github } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "@/context/theme-context"
import React from "react"

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}

export default function HomePage() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  
  const socialLinks: SocialLink[] = [
    {
      name: "Email",
      href: "mailto:zhoushiyang1207@outlook.com",
      icon: <Mail />,
    },
    {
      name: "GitHub",
      href: "https://github.com/zsy1207",
      icon: <Github />,
    },
    {
      name: "Google Scholar",
      href: "https://scholar.google.com",
      icon: (
        <Image
          src="/google-scholar.svg"
          alt="Google Scholar"
          width={24}
          height={24}
          className={theme === "dark" ? "invert" : ""}
        />
      ),
    },
    {
      name: "ResearchGate",
      href: "https://www.researchgate.net/profile/Shiyang-Zhou",
      icon: (
        <Image 
          src="/researchgate-svgrepo-com.svg" 
          alt="ResearchGate" 
          width={24} 
          height={24} 
          className={theme === "dark" ? "invert" : ""}
        />
      ),
    },
    {
      name: "Bilibili",
      href: "https://space.bilibili.com/476997702",
      icon: (
        <Image 
          src="/bilibili-svgrepo-com.svg" 
          alt="Bilibili" 
          width={24} 
          height={24} 
          className={theme === "dark" ? "invert" : ""}
        />
      ),
    },
    {
      name: "WeChat",
      href: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=&scene=124#wechat_redirect",
      icon: (
        <Image 
          src="/wechat-4.svg" 
          alt="WeChat" 
          width={24} 
          height={24} 
          className={theme === "dark" ? "invert" : ""}
        />
      ),
    },
  ]

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-14rem)]">
      <div className="container max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-14 px-4 py-10">
        <div className="flex-shrink-0 flex justify-center mb-4 lg:mb-0">
          <Avatar className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 border-4 border-background shadow-md">
            <Image 
              src="/photo.jpg" 
              alt="Avatar" 
              width={224} 
              height={224} 
              priority
              unoptimized
            />
          </Avatar>
        </div>
        <div className="flex flex-col text-center lg:text-left max-w-xs sm:max-w-xl mx-auto lg:mx-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6">
            {language === "en" ? "Shiyang (Zephyr) Zhou" : "周世扬"}
          </h1>
          <div className="text-lg sm:text-xl text-muted-foreground mb-4 leading-relaxed max-w-prose">
            {language === "en" ? <>I am currently pursuing an M.Sc. in Meteorology at the <Link href="https://aos.fudan.edu.cn/" target="_blank" className="text-muted-foreground hover:underline">Department of Atmospheric and Oceanic Sciences (AOS)</Link>, <strong>Fudan University</strong>, advised by <strong><Link href="http://www.wenzhou-clim.com/" target="_blank" className="text-muted-foreground hover:underline">Prof. Wen Zhou</Link></strong>. My research focuses on <strong>monsoons and extreme weather</strong>. I am passionate about AI, large language models, esports, consumer tech, soccer, badminton, philosophy, and abstract art.</> : <>我目前正在<strong>复旦大学</strong><Link href="https://aos.fudan.edu.cn/" target="_blank" className="text-muted-foreground hover:underline">大气与海洋科学系</Link>攻读气象专业硕士，指导老师为<Link href="http://www.wenzhou-clim.com/" target="_blank" className="text-muted-foreground hover:underline">周文教授</Link>，研究领域为季风与极端天气气候。我也是一位开发者，对AI/大模型/电竞/数码/足球/羽毛球/哲学/抽象艺术等领域都有浓厚的兴趣。</>}
          </div>
          <div className="flex items-center justify-center lg:justify-start mt-2 space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-accent transition-colors"
              >
                {link.name === "Email" || link.name === "GitHub" ? 
                  React.cloneElement(link.icon as React.ReactElement, { className: "h-7 w-7" }) : 
                  React.cloneElement(link.icon as React.ReactElement, { 
                    width: 28, 
                    height: 28,
                    className: `h-7 w-7 ${theme === "dark" ? "invert" : ""}`
                  })
                }
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
