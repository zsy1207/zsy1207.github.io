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
    <div className="flex min-h-[calc(100dvh-14rem)] items-center justify-center">
      <div className="flex flex-col items-center gap-6 pb-4 md:flex-row md:items-start md:gap-12">
        <Avatar className="h-32 w-32 ring-1 ring-border md:mt-2 md:h-44 md:w-44">
          <Image
            src="/photo.jpg"
            alt={language === "en" ? "Shiyang Zhou" : "周世扬"}
            width={224}
            height={224}
            priority
            sizes="(min-width: 768px) 176px, 128px"
          />
        </Avatar>
        <div className="max-w-[35rem] text-center md:text-left">
          <h1 className="text-balance text-[1.875rem] font-[650] leading-[1.1] tracking-display sm:text-5xl sm:leading-[1.08]">
            {language === "en" ? "Shiyang (Zephyr) Zhou" : "周世扬"}
          </h1>
          <div className="mt-3 text-base leading-[1.7] text-foreground/70 sm:mt-4 sm:text-[17px] sm:leading-7">
            {language === "en" ? <>I am currently pursuing an M.Sc. in Meteorology at the <Link href="https://aos.fudan.edu.cn/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>Department of Atmospheric and Oceanic Sciences (AOS)</Link>, <strong className={EMPHASIS}>Fudan University</strong>, advised by <strong className={EMPHASIS}><Link href="http://www.wenzhou-clim.com/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>Prof. Wen Zhou</Link></strong>. My research focuses on <strong className={EMPHASIS}>ocean-ice-atmosphere interactions, climate dynamics, monsoons, and extreme weather</strong>. I am passionate about AI, large language models, esports, consumer tech, soccer, badminton, philosophy, and abstract art.</> : <>我目前正在<strong className={EMPHASIS}>复旦大学</strong><Link href="https://aos.fudan.edu.cn/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>大气与海洋科学系</Link>攻读气象专业硕士，指导老师为<Link href="http://www.wenzhou-clim.com/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>周文教授</Link>，研究方向为<strong className={EMPHASIS}>海-冰-气相互作用、气候动力学、季风与极端天气</strong>。我也是一位开发者，对AI/大模型/电竞/数码/足球/羽毛球/哲学/抽象艺术等领域都有浓厚的兴趣。</>}
          </div>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 text-[15px] leading-6 md:mt-7 md:justify-start">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring group inline-flex items-center gap-1.5 rounded-sm py-1 text-foreground/70 transition-colors duration-150 hover:text-foreground [@media(pointer:coarse)]:min-h-10"
                >
                  <SocialIcon icon={link.icon} />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
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
