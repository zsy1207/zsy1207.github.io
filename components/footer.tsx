"use client"

import { usePathname } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import { SOCIAL_LINKS } from "@/content/home"

export function Footer() {
  const { language } = useLanguage()
  const pathname = usePathname()

  return (
    <footer className="border-t border-border/70">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-6 text-sm text-muted-foreground">
        <p suppressHydrationWarning>
          © {new Date().getFullYear()} {language === "en" ? "Shiyang (Zephyr) Zhou" : "周世扬"}
        </p>
        {/* The home page already shows these links next to the introduction. */}
        {pathname !== "/" && (
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.name}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-sm transition-colors duration-150 hover:text-foreground">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  )
}
