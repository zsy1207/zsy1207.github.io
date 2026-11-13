"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "@/context/theme-context"
import { useAnimation } from "@/context/animation-context"
import { NAV_ITEMS } from "@/content/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

function isNavItemActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
}

export function Navigation() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const { theme } = useTheme()
  const { enabled } = useAnimation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)
  const mobileMenu = useRef<HTMLDivElement | null>(null)

  useEffect(() => { setMobileMenuOpen(false) }, [pathname])

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)")
    function closeOnDesktop() {
      if (!desktop.matches) return
      if (mobileMenu.current?.contains(document.activeElement) || document.activeElement === menuButton.current) {
        document.getElementById("main-content")?.focus({ preventScroll: true })
      }
      setMobileMenuOpen(false)
    }
    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && !event.defaultPrevented) {
        setMobileMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    function closeOutside(event: Event) {
      const target = event.target
      if (target instanceof Element && !header.current?.contains(target) && !target.closest("[data-navigation-overlay]")) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("keydown", closeOnEscape)
    document.addEventListener("pointerdown", closeOutside)
    document.addEventListener("focusin", closeOutside)
    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      document.removeEventListener("pointerdown", closeOutside)
      document.removeEventListener("focusin", closeOutside)
    }
  }, [mobileMenuOpen])

  function navigateFromMobile() {
    setMobileMenuOpen(false)
    document.getElementById("main-content")?.focus({ preventScroll: true })
  }

  return (
    <>
      <a href="#main-content" className="skip-link">{language === "en" ? "Skip to content" : "跳转到正文"}</a>
      <header ref={header} className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto grid h-16 max-w-4xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-4 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4">
          <Link href="/" className="focus-ring group flex min-h-11 min-w-0 items-center rounded-sm" aria-label={language === "en" ? "Shiyang Zhou — Home" : "周世扬 — 首页"}>
            <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center", enabled && "brand-icon-motion")}>
              <Image src="/weather-icons-59-svgrepo-com.svg" alt="Weather Icon" width={32} height={32} className={theme === "dark" ? "invert" : ""} />
            </span>
            <span className="hidden truncate whitespace-nowrap text-lg font-bold sm:inline-block">{language === "en" ? "Shiyang Zhou" : "Shiyang Zhou（周世扬）"}</span>
          </Link>
          <nav aria-label={language === "en" ? "Main navigation" : "主导航"} className="hidden min-w-0 items-center justify-center gap-4 text-sm font-medium lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isNavItemActive(pathname, item.href) ? "page" : undefined}
                className={cn("focus-ring nav-link relative flex min-h-11 shrink-0 items-center rounded-sm px-1",
                  isNavItemActive(pathname, item.href) ? "text-foreground" : "text-foreground/60 hover:text-foreground/80")}>
                {item.title[language]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-end gap-2 sm:gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <button ref={menuButton} type="button" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-md transition-colors duration-150 hover:bg-accent active:bg-accent lg:hidden"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}>
              {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
        <div id="mobile-navigation" ref={(node) => { mobileMenu.current = node; if (node) node.inert = !mobileMenuOpen }}
          data-state={mobileMenuOpen ? "open" : "closed"} aria-hidden={!mobileMenuOpen} className="mobile-navigation lg:hidden">
          <div className="min-h-0 overflow-hidden">
            <nav aria-label={language === "en" ? "Mobile navigation" : "移动导航"} className="flex flex-col gap-2 border-t bg-background p-4">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} onClick={navigateFromMobile} tabIndex={mobileMenuOpen ? undefined : -1}
                  aria-current={isNavItemActive(pathname, item.href) ? "page" : undefined}
                  className={cn("focus-ring flex min-h-11 items-center rounded-sm border-l-4 px-3 py-2 text-sm transition-colors duration-150 hover:bg-accent",
                    isNavItemActive(pathname, item.href) ? "border-primary font-bold text-foreground" : "border-transparent text-foreground/60 hover:text-foreground/80")}>
                  {item.title[language]}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}
