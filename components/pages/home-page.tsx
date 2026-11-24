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
    <div className="flex min-h-[calc(100dvh-15rem)] items-center justify-center py-4">
      <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-14">
        <Avatar className="h-36 w-36 ring-1 ring-border/90 ring-offset-4 ring-offset-background shadow-[0_14px_36px_-14px_hsl(var(--foreground)/0.16)] sm:h-44 sm:w-44 md:h-52 md:w-52">
          <Image
            src="/photo.jpg"
            alt={language === "en" ? "Shiyang Zhou" : "周世扬"}
            width={224}
            height={224}
            priority
            sizes="(min-width: 768px) 208px, (min-width: 640px) 176px, 144px"
            className="h-full w-full object-cover dark:brightness-[0.94] dark:contrast-[1.02]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full dark:shadow-[inset_0_0_24px_rgb(0_0_0/0.24)]"
          />
        </Avatar>
        <div className="w-full max-w-[36rem]">
          <h1 className="text-center text-balance text-[2.125rem] font-semibold leading-[1.08] tracking-display text-foreground sm:text-[3rem] md:text-left">
            {language === "en" ? "Shiyang (Zephyr) Zhou" : "周世扬"}
          </h1>
          <p className="mt-5 text-left text-base prose-leading text-foreground/[0.78]">
            {language === "en" ? <>I am currently pursuing an M.Sc. in Meteorology at the <Link href="https://aos.fudan.edu.cn/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>Department of Atmospheric and Oceanic Sciences (AOS)</Link>, <strong className={EMPHASIS}>Fudan University</strong>, advised by <strong className={EMPHASIS}><Link href="http://www.wenzhou-clim.com/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>Prof. Wen Zhou</Link></strong>. My research focuses on <strong className={EMPHASIS}>ocean-ice-atmosphere interactions, climate dynamics, monsoons, and extreme weather</strong>. I am passionate about AI, large language models, esports, consumer tech, soccer, badminton, philosophy, and abstract art.</> : <>我目前正在<strong className={EMPHASIS}>复旦大学</strong><Link href="https://aos.fudan.edu.cn/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>大气与海洋科学系</Link>攻读气象专业硕士，指导老师为<strong className={EMPHASIS}><Link href="http://www.wenzhou-clim.com/" target="_blank" rel="noopener noreferrer" className={BIO_LINK}>周文教授</Link></strong>，研究方向为<strong className={EMPHASIS}>海-冰-气相互作用、气候动力学、季风与极端天气</strong>。我也是一位开发者，对AI/大模型/电竞/数码/足球/羽毛球/哲学/抽象艺术等领域都有浓厚的兴趣。</>}
          </p>
          <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-border/70 pt-5 text-sm font-medium md:justify-start">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring group inline-flex min-h-9 items-center gap-2 rounded-sm text-muted-foreground transition-colors duration-150 hover:text-accent-ink [@media(pointer:coarse)]:min-h-11"
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
  if (icon === "mail") return <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
  if (icon === "github") return <Github className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
  return (
    <Image
      src={BRAND_ICONS[icon]}
      alt=""
      width={16}
      height={16}
      className="h-4 w-4 shrink-0 opacity-65 transition-opacity duration-150 group-hover:opacity-100 dark:invert"
    />
  )
}

const BRAND_ICONS: Record<Exclude<SocialLink["icon"], "mail" | "github">, string> = {
  "google-scholar": "/google-scholar.svg",
  researchgate: "/researchgate-svgrepo-com.svg",
  bilibili: "/bilibili-svgrepo-com.svg",
}
