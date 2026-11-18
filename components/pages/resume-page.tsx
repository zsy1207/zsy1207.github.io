"use client"

import { Download } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { RESUME_COPY, type LocalizedText } from "@/content/academic"
import type { Language } from "@/content/types"

export function ResumePage() {
  const { language } = useLanguage()

  return (
    <>
      <PageHeader title={RESUME_COPY.title[language]}>
        <Button asChild variant="outline" size="sm">
          <Link href="/周世扬_复旦大学_简历.pdf" download>
            <Download className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
            {RESUME_COPY.download[language]}
          </Link>
        </Button>
      </PageHeader>

      <div>
        <Section label={RESUME_COPY.educationTitle[language]} className="space-y-5">
          {EDUCATION.map((entry) => <ResumeEntry key={entry.title.en} entry={entry} language={language} />)}
        </Section>

        <Section label={RESUME_COPY.researchTitle[language]} className="space-y-5">
          {RESEARCH.map((entry) => <ResumeEntry key={entry.title.en} entry={entry} language={language} />)}
        </Section>

        <Section label={RESUME_COPY.honorsTitle[language]}>
          <ul className="space-y-1.5 text-[15px]">
            {HONORS.map((honor) => (
              <li key={honor.title.en} className={ROW}>
                <h3 className="font-medium">{honor.title[language]}</h3>
                {honor.distinction && <p className={ASIDE}>{honor.distinction[language]}</p>}
              </li>
            ))}
          </ul>
        </Section>

        <Section label={RESUME_COPY.skillsTitle[language]}>
          <ul className="space-y-1.5 text-[15px]">
            {SKILLS.map((skill) => (
              <li key={skill.label.en}>
                <span className="font-medium">{skill.label[language]}</span>
                <span className="text-foreground/80">{typeof skill.value === "string" ? skill.value : skill.value[language]}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </>
  )
}

function ResumeEntry({ entry, language }: { entry: ResumeEntryData; language: Language }) {
  return (
    <div>
      <div className={ROW}>
        <h3 className="font-semibold">{entry.title[language]}</h3>
        <p className={ASIDE}>{entry.period[language]}</p>
      </div>
      {entry.subtitle && (
        <div className={`mt-0.5 text-[15px] ${ROW}`}>
          <p>{entry.subtitle[language]}</p>
          {entry.location && <p className={ASIDE}>{entry.location[language]}</p>}
        </div>
      )}
      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-6 text-foreground/80 marker:text-foreground/30">
        {entry.details.map((detail) => <li key={detail.en} className="pl-1">{detail[language]}</li>)}
      </ul>
    </div>
  )
}

// Title on the left, date or distinction on the right; stacked on small screens.
const ROW = "grid items-baseline gap-x-8 gap-y-0.5 sm:grid-cols-[minmax(0,1fr)_auto]"
const ASIDE = "text-sm tabular-nums text-muted-foreground sm:text-right"

interface ResumeEntryData {
  title: LocalizedText
  period: LocalizedText
  subtitle?: LocalizedText
  location?: LocalizedText
  details: LocalizedText[]
}

const EDUCATION: ResumeEntryData[] = [
  {
    title: RESUME_COPY.fudanInstitution,
    period: RESUME_COPY.fudanPeriod,
    subtitle: RESUME_COPY.fudanDegree,
    location: RESUME_COPY.fudanLocation,
    details: [RESUME_COPY.fudanAdvisor, RESUME_COPY.fudanResearchDirection],
  },
  {
    title: RESUME_COPY.nuistInstitution,
    period: RESUME_COPY.nuistPeriod,
    subtitle: RESUME_COPY.nuistDegree,
    location: RESUME_COPY.nuistLocation,
    details: [RESUME_COPY.nuistGpa, RESUME_COPY.nuistCourses],
  },
]

const RESEARCH: ResumeEntryData[] = [
  {
    title: RESUME_COPY.pacificTitle,
    period: RESUME_COPY.pacificPeriod,
    details: [RESUME_COPY.pacificDescription],
  },
  {
    title: RESUME_COPY.greeningTitle,
    period: RESUME_COPY.greeningPeriod,
    details: [RESUME_COPY.greeningDescription],
  },
]

const HONORS: { title: LocalizedText; distinction?: LocalizedText }[] = [
  { title: RESUME_COPY.icmTitle, distinction: RESUME_COPY.icmDistinction },
  { title: RESUME_COPY.changwangTitle, distinction: RESUME_COPY.changwangDistinction },
  { title: RESUME_COPY.modelingTitle, distinction: RESUME_COPY.modelingDistinction },
  { title: RESUME_COPY.iscatTitle, distinction: RESUME_COPY.iscatDistinction },
  { title: RESUME_COPY.knowledgeTitle, distinction: RESUME_COPY.knowledgeDistinction },
  { title: RESUME_COPY.internetTitle, distinction: RESUME_COPY.internetDistinction },
  { title: RESUME_COPY.innovationTitle },
  { title: RESUME_COPY.nuistHonors },
  { title: RESUME_COPY.graduateTitle },
  { title: RESUME_COPY.meteorologyTitle },
]

const SKILLS: { label: LocalizedText; value: LocalizedText | string }[] = [
  { label: RESUME_COPY.programmingLabel, value: "Python, NCL, MATLAB, Fortran" },
  { label: RESUME_COPY.modelsLabel, value: "CESM, WRF, CAMS-CSM, NeuralGCM" },
  { label: RESUME_COPY.certificatesLabel, value: RESUME_COPY.certificates },
  { label: RESUME_COPY.softwareLabel, value: "MICAPS, PUP, ChatGPT, Cursor, Obsidian, Zotero, Office, Photoshop, CapCut" },
  { label: RESUME_COPY.hobbiesLabel, value: RESUME_COPY.hobbies },
]
