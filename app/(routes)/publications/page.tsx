"use client"

import { useLanguage } from "@/context/language-context"
import { ReactNode } from "react"

interface Publication {
  title: string;
  authors: ReactNode;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  link?: string;
}

export default function PublicationsPage() {
  const { language } = useLanguage()
  
  const publications: Publication[] = [
    {
      title: "Sequential tropical cyclones and intraseasonal waves drive the record-breaking circulation-convection decoupling of the 2023 south China sea summer monsoon onset",
      authors: (
        <>
          Wang, X., <strong>Zhou, S.</strong>, & Zhou, W.
        </>
      ),
      journal: "Atmospheric Research",
      year: 2026,
      pages: "108949",
      doi: "10.1016/j.atmosres.2026.108949",
      link: "https://doi.org/10.1016/j.atmosres.2026.108949",
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
            <div key={index} className="border-l-4 border-primary pl-6 py-2">
              {language === "en" ? (
                // AGU Citation Format for English
                <>
                  <p className="text-muted-foreground mb-3">
                    {pub.authors}, ({pub.year}), {pub.title}, <span className="italic">{pub.journal}</span>, {pub.volume && pub.volume}{pub.pages && `, ${pub.pages}`}{pub.doi && `, doi:${pub.doi}`}.
                  </p>
                  {pub.link && (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mb-3 inline-block"
                    >
                      [PDF]
                    </a>
                  )}
                </>
              ) : (
                // Chinese National Standard Format
                <>
                  <p className="text-muted-foreground mb-3">
                    {pub.authors}. {pub.title}[J]. {pub.journal}, {pub.year}{pub.volume && `, ${pub.volume}`}{pub.pages && `: ${pub.pages}`}.
                  </p>
                  {pub.link && (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mb-3 inline-block"
                    >
                      [PDF]
                    </a>
                  )}
                </>
              )}
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
