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
    <div className="grid gap-x-8 gap-y-6 pt-2 sm:pt-8 md:grid-cols-[8rem_minmax(0,1fr)]">
      <Avatar className="h-24 w-24 ring-1 ring-border md:mt-1.5 md:h-32 md:w-32">
        <Image
          src="/photo.jpg"
          alt={language === "en" ? "Shiyang Zhou" : "周世扬"}
          width={224}
          height={224}
          priority
          sizes="(min-width: 768px) 128px, 96px"
        />
      </Avatar>
      <div className="min-w-0 max-w-[40rem]">
        <h1 className="text-[2rem] font-semibold leading-tight tracking-display sm:text-[2.5rem]">
          {language === "en" ? "Shiyang (Zephyr) Zhou" : "周世扬"}
        </h1>
        <div className="mt-4 text-base leading-7 text-muted-foreground sm:text-[17px]">
          {language === "en" ? <>I am currently pursuing an M.Sc. in Meteorology at the <Link href="https://aos.fudan.edu.cn/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>Department of Atmospheric and Oceanic Sciences (AOS)</Link>, <strong className={EMPHASIS}>Fudan University</strong>, advised by <strong className={EMPHASIS}><Link href="http://www.wenzhou-clim.com/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>Prof. Wen Zhou</Link></strong>. My research focuses on <strong className={EMPHASIS}>ocean-ice-atmosphere interactions, climate dynamics, monsoons, and extreme weather</strong>. I am passionate about AI, large language models, esports, consumer tech, soccer, badminton, philosophy, and abstract art.</> : <>我目前正在<strong className={EMPHASIS}>复旦大学</strong><Link href="https://aos.fudan.edu.cn/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>大气与海洋科学系</Link>攻读气象专业硕士，指导老师为<Link href="http://www.wenzhou-clim.com/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>周文教授</Link>，研究方向为<strong className={EMPHASIS}>海-冰-气相互作用、气候动力学、季风与极端天气</strong>。我也是一位开发者，对AI/大模型/电竞/数码/足球/羽毛球/哲学/抽象艺术等领域都有浓厚的兴趣。</>}
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 border-t border-border/70 pt-4 text-sm">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group inline-flex min-h-8 items-center gap-1.5 rounded-sm text-foreground/80 decoration-foreground/30 decoration-1 underline-offset-4 transition-colors duration-150 hover:text-foreground hover:underline [@media(pointer:coarse)]:min-h-11"
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
  if (icon === "mail") return <Mail className="h-[15px] w-[15px] text-muted-foreground" strokeWidth={1.75} aria-hidden="true" />
  if (icon === "github") return <Github className="h-[15px] w-[15px] text-muted-foreground" strokeWidth={1.75} aria-hidden="true" />
  return (
    <Image
      src={BRAND_ICONS[icon]}
      alt=""
      width={15}
      height={15}
      className="h-[15px] w-[15px] opacity-55 dark:invert"
    />
  )
}

const BRAND_ICONS: Record<Exclude<SocialLink["icon"], "mail" | "github">, string> = {
  "google-scholar": "/google-scholar.svg",
  researchgate: "/researchgate-svgrepo-com.svg",
  bilibili: "/bilibili-svgrepo-com.svg",
}
