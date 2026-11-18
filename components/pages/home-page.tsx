"use client"

import { Mail, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { Avatar } from "@/components/ui/avatar"
import { SOCIAL_LINKS, type SocialLink } from "@/content/home"

const BIO_LINK = "focus-ring rounded-sm underline decoration-foreground/25 decoration-1 underline-offset-[0.2em] transition-colors duration-150 hover:text-foreground hover:decoration-foreground"
const EMPHASIS = "font-medium text-foreground"

export function HomePage() {
  const { language } = useLanguage()

  return (
    <div className="flex min-h-[calc(100dvh-14rem)] items-center">
      <div className="w-full max-w-[47rem] pb-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 ring-1 ring-border sm:h-16 sm:w-16">
            <Image
              src="/photo.jpg"
              alt=""
              width={128}
              height={128}
              priority
              sizes="64px"
            />
          </Avatar>
          <div>
            <h1 className="text-lg font-semibold leading-tight tracking-tight sm:text-xl">
              {language === "en" ? "Shiyang (Zephyr) Zhou" : "周世扬"}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground" lang={language === "en" ? "zh-CN" : "en"}>
              {language === "en" ? "周世扬" : "Shiyang (Zephyr) Zhou"}
            </p>
          </div>
        </div>

        {/* The introduction is the page's headline: key phrases in full color, the rest quieter. */}
        <div className="mt-8 text-[1.375rem] font-medium leading-[1.45] tracking-tight text-foreground/50 sm:mt-10 sm:text-[1.75rem] sm:leading-[1.4]">
          {language === "en" ? <>I am currently pursuing an M.Sc. in Meteorology at the <Link href="https://aos.fudan.edu.cn/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>Department of Atmospheric and Oceanic Sciences (AOS)</Link>, <strong className={EMPHASIS}>Fudan University</strong>, advised by <strong className={EMPHASIS}><Link href="http://www.wenzhou-clim.com/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>Prof. Wen Zhou</Link></strong>. My research focuses on <strong className={EMPHASIS}>ocean-ice-atmosphere interactions, climate dynamics, monsoons, and extreme weather</strong>. I am passionate about AI, large language models, esports, consumer tech, soccer, badminton, philosophy, and abstract art.</> : <>我目前正在<strong className={EMPHASIS}>复旦大学</strong><Link href="https://aos.fudan.edu.cn/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>大气与海洋科学系</Link>攻读气象专业硕士，指导老师为<Link href="http://www.wenzhou-clim.com/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>周文教授</Link>，研究方向为<strong className={EMPHASIS}>海-冰-气相互作用、气候动力学、季风与极端天气</strong>。我也是一位开发者，对AI/大模型/电竞/数码/足球/羽毛球/哲学/抽象艺术等领域都有浓厚的兴趣。</>}
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-1 text-[15px] sm:mt-10">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group inline-flex min-h-9 items-center gap-2 rounded-sm text-foreground/70 transition-colors duration-150 hover:text-foreground [@media(pointer:coarse)]:min-h-11"
              >
                <SocialIcon icon={link.icon} />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  if (icon === "mail") return <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
  if (icon === "github") return <Github className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
  return (
    <Image
      src={BRAND_ICONS[icon]}
      alt=""
      width={16}
      height={16}
      className="h-4 w-4 opacity-70 transition-opacity duration-150 group-hover:opacity-100 dark:invert"
    />
  )
}

const BRAND_ICONS: Record<Exclude<SocialLink["icon"], "mail" | "github">, string> = {
  "google-scholar": "/google-scholar.svg",
  researchgate: "/researchgate-svgrepo-com.svg",
  bilibili: "/bilibili-svgrepo-com.svg",
}
