import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { THEME_INIT_SCRIPT } from "@/lib/theme-init"
import { ThemeProvider } from "@/context/theme-context"
import { LanguageProvider } from "@/context/language-context"
import { AnimationProvider } from "@/context/animation-context"
import { Navigation } from "@/components/navigation"

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  adjustFontFallback: "Arial",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://zsy1207.github.io"),
  title: "Shiyang (Zephyr) Zhou",
  description:
    "M.Sc. student in Meteorology at Fudan University; ocean-ice-atmosphere interactions, climate dynamics, monsoons, and extreme weather research.",
  icons: {
    icon: "/weather-icons-59-svgrepo-com.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script id="theme-init" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} /></head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <AnimationProvider>
              <div className="flex flex-col min-h-screen">
                <Navigation />
                <main id="main-content" tabIndex={-1} className="outline-none flex-1 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
                  {children}
                </main>
              </div>
            </AnimationProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
