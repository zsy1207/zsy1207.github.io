"use client"

import { Mail, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { Avatar } from "@/components/ui/avatar"
import { SOCIAL_LINKS, type SocialLink } from "@/content/home"

const BIO_LINK = "interactive-link focus-ring rounded-sm"
const EMPHASIS = "font-medium text-foreground"

export function HomePage() {
  const { language } = useLanguage()

  return (
    <div className="flex min-h-[calc(100dvh-10rem)] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 py-6 sm:gap-10 lg:flex-row lg:gap-14">
        <Avatar className="h-40 w-40 ring-1 ring-border sm:h-44 sm:w-44 lg:h-52 lg:w-52">
          <Image
            src="/photo.jpg"
            alt={language === "en" ? "Shiyang Zhou" : "周世扬"}
            width={224}
            height={224}
            priority
            sizes="(min-width: 1024px) 208px, (min-width: 640px) 176px, 160px"
          />
        </Avatar>
        <div className="flex max-w-xl flex-col text-center lg:text-left">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {language === "en" ? "Shiyang (Zephyr) Zhou" : "周世扬"}
          </h1>
          <div className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {language === "en" ? <>I am currently pursuing an M.Sc. in Meteorology at the <Link href="https://aos.fudan.edu.cn/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>Department of Atmospheric and Oceanic Sciences (AOS)</Link>, <strong className={EMPHASIS}>Fudan University</strong>, advised by <strong className={EMPHASIS}><Link href="http://www.wenzhou-clim.com/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>Prof. Wen Zhou</Link></strong>. My research focuses on <strong className={EMPHASIS}>ocean-ice-atmosphere interactions, climate dynamics, monsoons, and extreme weather</strong>. I am passionate about AI, large language models, esports, consumer tech, soccer, badminton, philosophy, and abstract art.</> : <>我目前正在<strong className={EMPHASIS}>复旦大学</strong><Link href="https://aos.fudan.edu.cn/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>大气与海洋科学系</Link>攻读气象专业硕士，指导老师为<Link href="http://www.wenzhou-clim.com/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>周文教授</Link>，研究方向为<strong className={EMPHASIS}>海-冰-气相互作用、气候动力学、季风与极端天气</strong>。我也是一位开发者，对AI/大模型/电竞/数码/足球/羽毛球/哲学/抽象艺术等领域都有浓厚的兴趣。</>}
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                title={link.name}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-150 hover:border-foreground/25 hover:text-foreground"
              >
                <SocialIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  if (icon === "mail") return <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
  if (icon === "github") return <Github className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
  return (
    <Image
      src={BRAND_ICONS[icon]}
      alt=""
      width={20}
      height={20}
      className="h-5 w-5 opacity-60 transition-opacity duration-150 group-hover:opacity-100 dark:invert"
    />
  )
}

const BRAND_ICONS: Record<Exclude<SocialLink["icon"], "mail" | "github">, string> = {
  "google-scholar": "/google-scholar.svg",
  researchgate: "/researchgate-svgrepo-com.svg",
  bilibili: "/bilibili-svgrepo-com.svg",
}
