import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import "@fontsource-variable/noto-sans-sc/wght.css"
import "./globals.css"
import { THEME_INIT_SCRIPT } from "@/lib/theme-init"
import { ThemeProvider } from "@/context/theme-context"
import { LanguageProvider } from "@/context/language-context"
import { AnimationProvider } from "@/context/animation-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  adjustFontFallback: "Arial",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://zsy1207.github.io"),
  title: { default: "Shiyang (Zephyr) Zhou", template: "%s · Shiyang (Zephyr) Zhou" },
  description:
    "M.Sc. student in Meteorology at Fudan University; ocean-ice-atmosphere interactions, climate dynamics, monsoons, and extreme weather research.",
  icons: {
    icon: "/weather-icons-59-svgrepo-com.svg",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1218" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script id="theme-init" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} /></head>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <LanguageProvider>
            <AnimationProvider>
              <div className="flex min-h-screen flex-col">
                <Navigation />
                <main id="main-content" tabIndex={-1} className="site-container flex-1 py-8 outline-none sm:py-12">
                  {children}
                </main>
                <Footer />
              </div>
            </AnimationProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
