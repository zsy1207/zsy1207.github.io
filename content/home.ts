interface SocialLink {
  name: string
  href: string
  icon: "mail" | "github" | "google-scholar" | "researchgate" | "bilibili"
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Email",
    href: "mailto:zhoushiyang1207@outlook.com",
    icon: "mail",
  },
  {
    name: "GitHub",
    href: "https://github.com/zsy1207",
    icon: "github",
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=0l54DjwAAAAJ",
    icon: "google-scholar",
  },
  {
    name: "ResearchGate",
    href: "https://www.researchgate.net/profile/Shiyang-Zhou",
    icon: "researchgate",
  },
  {
    name: "Bilibili",
    href: "https://space.bilibili.com/476997702",
    icon: "bilibili",
  },
]

