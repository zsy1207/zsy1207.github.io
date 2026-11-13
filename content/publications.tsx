import type { ReactNode } from "react"

interface Publication {
  citation: ReactNode
}

interface PublicationYearGroup {
  year: string
  publications: Publication[]
}

export const PUBLICATION_GROUPS: PublicationYearGroup[] = [
    {
      year: "2026",
      publications: [
        {
          citation: (
            <>
              Xiao, M., Yu, M., <strong>Zhou, S.</strong>, Zhu, J., Zhang, J., Chen, H., &amp; Chen, C. (2026). Climate responses to
              vegetation greening in China and India and their combined effects. Advances in Atmospheric Sciences.{" "}
              <a
                href="https://doi.org/10.1007/s00376-026-6125-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.1007/s00376-026-6125-2
              </a>
            </>
          ),
        },
        {
          citation: (
            <>
              Wang, X., <strong>Zhou, S.</strong>, &amp; Zhou, W. (2026). Sequential tropical cyclones and intraseasonal waves drive the
              record-breaking circulation-convection decoupling of the 2023 south China sea summer monsoon onset. Atmospheric
              Research, 108949.{" "}
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
        {
          citation: (
            <>
              Xiao, M., Yu, M., &amp; <strong>Zhou, S.</strong> (2026). Seasonal Differences in the Local and Teleconnected Climate
              Responses to Vegetation Greening in China and India. Atmosphere, 17(5), 486.{" "}
              <a
                href="https://doi.org/10.3390/atmos17050486"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://doi.org/10.3390/atmos17050486
              </a>
            </>
          ),
        },
      ],
    },
  ]
