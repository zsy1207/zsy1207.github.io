import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/context/theme-context"
import { LanguageProvider } from "@/context/language-context"
import { AnimationProvider } from "@/context/animation-context"
import { Navigation } from "@/components/navigation"
import { LanguageHtmlWrapper } from "@/components/language-html-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zephyr's Homepage",
  description: "My personal portfolio showcasing my work and resume",
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
    <ThemeProvider>
      <LanguageProvider>
        <LanguageHtmlWrapper>
          <AnimationProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-1 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
                {children}
              </main>
              <footer className="py-6">
                <div className="container text-center max-w-4xl mx-auto">
                  <p className="text-sm text-muted-foreground">
                    © 2025 Zephyr. All rights reserved.
                  </p>
                </div>
              </footer>
            </div>
          </AnimationProvider>
        </LanguageHtmlWrapper>
      </LanguageProvider>
    </ThemeProvider>
  )
}