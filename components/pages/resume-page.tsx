"use client"

import { Download } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { RESUME_COPY } from "@/content/academic"

export function ResumePage() {
  const { language } = useLanguage()

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          {RESUME_COPY.title[language]}
        </h1>
        <Button asChild variant="outline">
          <Link href="/周世扬_复旦大学_简历.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            {RESUME_COPY.download[language]}
          </Link>
        </Button>
      </div>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>{RESUME_COPY.educationTitle[language]}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold">
                {RESUME_COPY.fudanInstitution[language]}
              </h3>
              <p className="text-sm text-right">
                {RESUME_COPY.fudanPeriod[language]}
              </p>
            </div>
            <div className="flex justify-between items-start mt-1">
              <p>
                {RESUME_COPY.fudanDegree[language]
                }
              </p>
              <p className="text-sm text-right">
                {RESUME_COPY.fudanLocation[language]}
              </p>
            </div>
            <div className="mt-2 space-y-1"> {/* Added space-y-1 for consistent spacing */}
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {RESUME_COPY.fudanAdvisor[language]}
                </div>
              </div>
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {RESUME_COPY.fudanResearchDirection[language]}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold">
                {RESUME_COPY.nuistInstitution[language]}
              </h3>
              <p className="text-sm text-right">
                {RESUME_COPY.nuistPeriod[language]}
              </p>
            </div>
            <div className="flex justify-between items-start mt-1">
              <p>
                {RESUME_COPY.nuistDegree[language]
                }
              </p>
              <p className="text-sm text-right">
                {RESUME_COPY.nuistLocation[language]}
              </p>
            </div>
            <div className="mt-2 space-y-1"> {/* Added space-y-1 for consistent spacing */}
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {RESUME_COPY.nuistGpa[language]}
                </div>
              </div>
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {RESUME_COPY.nuistCourses[language]
                  }
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>{RESUME_COPY.researchTitle[language]}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold" style={{maxWidth: '75%'}}>
                {RESUME_COPY.pacificTitle[language]
                }
              </h3>
              <p className="text-sm text-right">
                {RESUME_COPY.pacificPeriod[language]}
              </p>
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {RESUME_COPY.pacificDescription[language]
                  }
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold" style={{maxWidth: '75%'}}>
                {RESUME_COPY.greeningTitle[language]
                }
              </h3>
              <p className="text-sm text-right">
                {RESUME_COPY.greeningPeriod[language]}
              </p>
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {RESUME_COPY.greeningDescription[language]
                  }
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Honors & Skills sections remain the same as they don't use the bullet point structure */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>{RESUME_COPY.honorsTitle[language]}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {RESUME_COPY.icmTitle[language]
              }
            </h3>
            <p className="text-sm text-right">
              {RESUME_COPY.icmDistinction[language]}
            </p>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {RESUME_COPY.changwangTitle[language]
              }
            </h3>
            <p className="text-sm text-right">
              {RESUME_COPY.changwangDistinction[language]}
            </p>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {RESUME_COPY.modelingTitle[language]
              }
            </h3>
            <p className="text-sm text-right">
              {RESUME_COPY.modelingDistinction[language]}
            </p>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {RESUME_COPY.iscatTitle[language]
              }
            </h3>
            <p className="text-sm text-right">
              {RESUME_COPY.iscatDistinction[language]}
            </p>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {RESUME_COPY.knowledgeTitle[language]
              }
            </h3>
            <p className="text-sm text-right">
              {RESUME_COPY.knowledgeDistinction[language]}
            </p>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {RESUME_COPY.internetTitle[language]
              }
            </h3>
            <p className="text-sm text-right">
              {RESUME_COPY.internetDistinction[language]}
            </p>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {RESUME_COPY.innovationTitle[language]
              }
            </h3>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold flex flex-wrap" style={{width: '100%'}}>
              {RESUME_COPY.nuistHonors[language]
              }
            </h3>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {RESUME_COPY.graduateTitle[language]}
            </h3>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {RESUME_COPY.meteorologyTitle[language]}
            </h3>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{RESUME_COPY.skillsTitle[language]}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start">
            <div className="w-full">
              <span className="font-semibold">
                {RESUME_COPY.programmingLabel[language]}
              </span>
              <span>
                Python, NCL, MATLAB, Fortran
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-full">
              <span className="font-semibold">
                {RESUME_COPY.modelsLabel[language]}
              </span>
              <span>
                CESM, WRF, CAMS-CSM, NeuralGCM
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-full">
              <span className="font-semibold">
                {RESUME_COPY.certificatesLabel[language]}
              </span>
              <span>
                {RESUME_COPY.certificates[language]
                }
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-full">
              <span className="font-semibold">
                {RESUME_COPY.softwareLabel[language]}
              </span>
              <span>
                MICAPS, PUP, ChatGPT, Cursor, Obsidian, Zotero, Office, Photoshop, CapCut
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-full">
              <span className="font-semibold">
                {RESUME_COPY.hobbiesLabel[language]}
              </span>
              <span>
                {RESUME_COPY.hobbies[language]
                }
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}



