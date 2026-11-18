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
        <Button asChild variant="outline">
          <Link href="/周世扬_复旦大学_简历.pdf" download>
            <Download className="mr-2 h-4 w-4" aria-hidden="true" />
            {RESUME_COPY.download[language]}
          </Link>
        </Button>
      </PageHeader>

      <div>
        <Section label={RESUME_COPY.educationTitle[language]} className="space-y-7">
          {EDUCATION.map((entry) => <ResumeEntry key={entry.title.en} entry={entry} language={language} />)}
        </Section>

        <Section label={RESUME_COPY.researchTitle[language]} className="space-y-7">
          {RESEARCH.map((entry) => <ResumeEntry key={entry.title.en} entry={entry} language={language} />)}
        </Section>

        <Section label={RESUME_COPY.honorsTitle[language]}>
          <ul className="divide-y divide-border/60">
            {HONORS.map((honor) => (
              <li key={honor.title.en} className={`py-2.5 first:pt-0 last:pb-0 ${ROW}`}>
                <h3>{honor.title[language]}</h3>
                {honor.distinction && <p className={ASIDE}>{honor.distinction[language]}</p>}
              </li>
            ))}
          </ul>
        </Section>

        <Section label={RESUME_COPY.skillsTitle[language]}>
          <dl className="divide-y divide-border/60">
            {SKILLS.map((skill) => (
              <div key={skill.label.en} className="grid gap-x-6 gap-y-0.5 py-2.5 first:pt-0 last:pb-0 sm:grid-cols-[8rem_minmax(0,1fr)]">
                {/* The copy ends each label with a colon; the column layout makes it redundant. */}
                <dt className="text-muted-foreground">{skill.label[language].replace(/[:：]\s*$/, "")}</dt>
                <dd>{typeof skill.value === "string" ? skill.value : skill.value[language]}</dd>
              </div>
            ))}
          </dl>
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
        <div className={`mt-1 ${ROW}`}>
          <p className="text-foreground/80">{entry.subtitle[language]}</p>
          {entry.location && <p className={ASIDE}>{entry.location[language]}</p>}
        </div>
      )}
      <ul className="mt-3 list-disc space-y-1.5 pl-[1.1rem] text-[15px] leading-[1.65] text-foreground/75 marker:text-foreground/30">
        {entry.details.map((detail) => <li key={detail.en} className="pl-0.5">{detail[language]}</li>)}
      </ul>
    </div>
  )
}

// Title on the left, date or distinction on the right; stacked on small screens.
const ROW = "grid items-baseline gap-x-8 gap-y-0.5 leading-6 sm:grid-cols-[minmax(0,1fr)_auto]"
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
