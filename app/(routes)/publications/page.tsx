"use client"

import { useLanguage } from "@/context/language-context"
import { ReactNode } from "react"

interface Publication {
  citation: ReactNode;
}

export default function PublicationsPage() {
  const { language } = useLanguage()
  
  const publications: Publication[] = [
    {
      citation: (
        <>
          Wang, X., <strong>Zhou, S.</strong>, &amp; Zhou, W. (2026). Sequential tropical cyclones and intraseasonal waves drive the record-breaking circulation-convection decoupling of the 2023 south China sea summer monsoon onset. Atmospheric Research, 108949.{" "}
          <a
            href="https://doi.org/10.1016/j.atmosres.2026.108949"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            https://doi.org/10.1016/j.atmosres.2026.108949
          </a>
        </>
      ),
    },
  ]

  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold tracking-tight mb-8">
        {language === "en" ? "Publications" : "出版物"}
      </h1>
      
      {publications.length > 0 ? (
        <div className="space-y-10">
          {publications.map((pub, index) => (
            <div key={index} className="py-2">
              <p className="text-foreground">{pub.citation}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-10 text-center text-muted-foreground">
          {language === "en" ? 
            "Publication list is being updated. Please check back later." : 
            "待更新"}
        </div>
      )}
    </div>
  )
} 
