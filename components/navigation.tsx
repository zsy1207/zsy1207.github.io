"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import Image from "next/image"
import { useTheme } from "@/context/theme-context"
import { useAnimation } from "@/context/animation-context"
import { Menu, X } from "lucide-react"

interface NavItem {
  title: {
    en: string
    zh: string
  }
  href: string
}

export function Navigation() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const { theme } = useTheme()
  const { enabled } = useAnimation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navItems: NavItem[] = [
    { title: { en: "Home", zh: "首页" }, href: "/" },
    { title: { en: "Resume", zh: "简历" }, href: "/resume" },
    { title: { en: "Research", zh: "研究" }, href: "/research" },
    { title: { en: "Blogs", zh: "博客" }, href: "/blog" },
    { title: { en: "Projects", zh: "项目" }, href: "/projects" },
    { title: { en: "Publications", zh: "出版物" }, href: "/publications" },
  ]

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      enabled && "transition-all duration-300 ease-out"
    )}>
      <div className="container max-w-4xl mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className={cn(
            "flex items-center gap-0 group",
            enabled && "transition-all duration-300 ease-out"
          )}>
            <div className={cn(
              "flex items-center justify-center w-10 h-10",
              enabled && "transition-transform duration-300 group-hover:rotate-12"
            )}>
              <Image 
                src="/weather-icons-59-svgrepo-com.svg" 
                alt="Weather Icon" 
                width={32} 
                height={32} 
                className={cn(
                  theme === "dark" ? "invert" : "",
                  enabled && "transition-all duration-300 ease-out"
                )}
              />
            </div>
            <span className={cn(
              "font-bold text-lg hidden sm:inline-block",
              enabled && "transition-transform duration-300 ease-out group-hover:translate-x-1"
            )}>{language === "en" ? "Shiyang Zhou" : "Shiyang Zhou（周世扬）"}</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80 py-1 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full",
                  enabled && "after:transition-all after:duration-300",
                  pathname === item.href
                    ? "text-foreground border-b-2 border-primary"
                    : "text-foreground/60"
                )}
              >
                {item.title[language]}
              </Link>
            ))}
          </nav>
        </div>
        <div className={cn(
          "flex items-center gap-4",
          enabled && "transition-all duration-300 ease-out"
        )}>
          <ThemeToggle />
          <LanguageSwitcher />
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden focus:outline-none"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden p-4 bg-background border-t">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "transition-colors hover:text-foreground/80 py-2 px-2",
                  pathname === item.href
                    ? "text-foreground font-bold border-l-4 border-primary pl-2"
                    : "text-foreground/60"
                )}
              >
                {item.title[language]}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
