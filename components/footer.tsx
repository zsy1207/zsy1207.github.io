"use client"

import { usePathname } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import { SOCIAL_LINKS } from "@/content/home"

export function Footer() {
  const { language } = useLanguage()
  const pathname = usePathname()

  return (
    <footer className="border-t border-border/75">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-7 text-sm text-muted-foreground">
        <p suppressHydrationWarning>
          © {new Date().getFullYear()} {language === "en" ? "Shiyang (Zephyr) Zhou" : "周世扬"}
        </p>
        {/* The home page already shows social links next to the introduction. */}
        {pathname === "/" ? (
          <p className="text-muted-foreground/85">
            {language === "en" ? "Fudan University · Shanghai" : "复旦大学 · 上海"}
          </p>
        ) : (
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-sm underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-150 hover:text-accent-ink hover:decoration-accent-ink/60"
                >
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
