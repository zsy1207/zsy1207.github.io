"use client"

import { Download } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ResumePage() {
  const { language } = useLanguage()

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          {language === "en" ? "Resume" : "简历"}
        </h1>
        <Button asChild variant="outline">
          <Link href="/周世扬_复旦大学_简历.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            {language === "en" ? "Download PDF" : "下载 PDF"}
          </Link>
        </Button>
      </div>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>{language === "en" ? "Education" : "教育经历"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold">
                {language === "en" ? "Fudan University" : "复旦大学"}
              </h3>
              <p className="text-sm text-right">
                {language === "en" ? "Sep 2025 - " : "2025年09月 - "}
              </p>
            </div>
            <div className="flex justify-between items-start mt-1">
              <p>
                {language === "en"
                  ? "M.Sc. in Meteorology, Department of Atmospheric and Oceanic Sciences"
                  : "气象专业硕士，大气与海洋科学系"
                }
              </p>
              <p className="text-sm text-right">
                {language === "en" ? "Shanghai, China" : "上海"}
              </p>
            </div>
            <div className="mt-2 space-y-1"> {/* Added space-y-1 for consistent spacing */}
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {language === "en" ? "Advisor: Prof. Wen Zhou" : "指导老师：周文教授"}
                </div>
              </div>
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {language === "en" ? "Research Direction: Ocean-Ice-Atmosphere Interactions, Climate Dynamics, Monsoons, and Extreme Weather" : "研究方向：海-冰-气相互作用、气候动力学、季风与极端天气"}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold">
                {language === "en" ? "Nanjing University of Information Science & Technology" : "南京信息工程大学"}
              </h3>
              <p className="text-sm text-right">
                {language === "en" ? "Sep 2019 - Jun 2023" : "2019年09月 - 2023年06月"}
              </p>
            </div>
            <div className="flex justify-between items-start mt-1">
              <p>
                {language === "en"
                  ? "B.Sc. in Atmospheric Sciences, College of Atmospheric Sciences"
                  : "理学学士（大气科学），大气科学学院"
                }
              </p>
              <p className="text-sm text-right">
                {language === "en" ? "Nanjing, China" : "江苏南京"}
              </p>
            </div>
            <div className="mt-2 space-y-1"> {/* Added space-y-1 for consistent spacing */}
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {language === "en" ? "GPA: 3.88 (88.8/100)" : "GPA：3.88（88.8/100）"}
                </div>
              </div>
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {language === "en"
                    ? "Main Courses: Synoptic Meteorology Principles and Methods, Dynamic Meteorology, Atmospheric Physics, Modern Climatology, Radar and Satellite Meteorology, Mesoscale Meteorology."
                    : "主要课程：天气学原理和方法、动力气象学、大气物理学、现代气候学、雷达与卫星气象学、中尺度气象学。"
                  }
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <CardTitle>{language === "en" ? "Research Experience" : "研究经历"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold" style={{maxWidth: '75%'}}>
                {language === "en"
                  ? "Teleconnection Between Northwest Pacific Convection and North American Temperature During Seasonal Transitions"
                  : "季节转换期西北太平洋对流-北美气温遥相关"
                }
              </h3>
              <p className="text-sm text-right">
                {language === "en" ? "May 2026 - Jun 2028" : "2026年05月 - 2028年06月"}
              </p>
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {language === "en"
                    ? "Focuses on the teleconnection between convective anomalies over the Northwest Pacific and North American temperature variations during seasonal transitions, revealing tropical-midlatitude climate linkage features; applies MCA, composite analysis, and regression analysis to investigate circulation propagation pathways and physical mechanisms through which Northwest Pacific convection affects North American temperatures, identifying a climate dynamics pathway that differs from traditional views."
                    : "聚焦季节转换期西北太平洋对流异常与北美气温变化之间的遥相关关系，揭示热带—中高纬气候联动特征；通过MCA、合成分析、回归分析等方法，探讨西北太平洋对流影响北美气温的环流传播路径与物理机制，发现了不同于传统观点的气候动力路径。"
                  }
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold" style={{maxWidth: '75%'}}>
                {language === "en"
                  ? "Process and Mechanism of the Impact of Greening in the Indian Region on Northern Hemisphere Summer Climate"
                  : "印度地区绿化对北半球夏季气候的影响过程和机理"
                }
              </h3>
              <p className="text-sm text-right">
                {language === "en" ? "Mar 2021 - Jun 2023" : "2021年03月 - 2023年06月"}
              </p>
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {language === "en"
                    ? "Based on NASA GIMMS LAI data, quantifies global vegetation change characteristics over the past three decades; uses the CAM-CLM coupled model to conduct vegetation increase and control experiments, evaluating the impacts of Indian vegetation change on temperature and precipitation; reveals the mechanisms by which Indian vegetation change affects climate from the perspectives of circulation adjustment and local thermal exchange."
                    : "基于 NASA GIMMS LAI 数据，量化近三十年全球植被变化特征；利用 CAM-CLM 耦合模式开展植被增加与控制实验，评估印度植被变化对气温和降水的影响；从环流调整与局地热力交换两方面，揭示印度植被变化影响气候的机制。"
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
          <CardTitle>{language === "en" ? "Honors & Awards" : "荣誉获奖"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {language === "en"
                ? "International Interdisciplinary Contest In Modeling"
                : "美国大学生数学建模竞赛"
              }
            </h3>
            <p className="text-sm text-right">
              {language === "en" ? "Honorable Mention" : "二等奖"}
            </p>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {language === "en"
                ? "\"Changwang Cup\" Meteorology Talent Competition Preliminary Round"
                : "\"长望杯\"气象达人赛初赛"
              }
            </h3>
            <p className="text-sm text-right">
              {language === "en" ? "Third Prize" : "三等奖"}
            </p>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {language === "en"
                ? "National Mathematical Contest in Modeling (Jiangsu)"
                : "全国大学生数学建模竞赛江苏赛区"
              }
            </h3>
            <p className="text-sm text-right">
              {language === "en" ? "Third Prize" : "三等奖"}
            </p>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {language === "en"
                ? "\"ISCAT Cup\" Jiangsu Provincial Translation Competition"
                : "\"ISCAT杯\"江苏省翻译大赛"
              }
            </h3>
            <p className="text-sm text-right">
              {language === "en" ? "Second Prize" : "二等奖"}
            </p>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {language === "en"
                ? "Jiangsu University Student Knowledge Competition"
                : "江苏省大学生知识竞赛(理工科组)"
              }
            </h3>
            <p className="text-sm text-right">
              {language === "en" ? "Second Prize" : "优秀奖"}
            </p>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {language === "en"
                ? "NUIST \"Internet+\" Competition"
                : "南京信息工程大学\"互联网+\"大赛"
              }
            </h3>
            <p className="text-sm text-right">
              {language === "en" ? "Silver Award" : "银奖"}
            </p>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {language === "en"
                ? "Longshan Academy \"Tech Innovation Star\" Award"
                : "龙山书院\"科创之星\""
              }
            </h3>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold flex flex-wrap" style={{width: '100%'}}>
              {language === "en"
                ? "NUIST First-Class Scholarship, Three-Good Student, Outstanding Student Leader"
                : "校一等奖学金、校三好学生、校优秀学生干部"
              }
            </h3>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {language === "en" ? "NUIST Outstanding Graduate" : "校优秀毕业生"}
            </h3>
          </div>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold">
              {language === "en" ? "\"Meteorology Elite\" Scholarship" : "\"气象菁英\"奖学金"}
            </h3>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{language === "en" ? "Skills" : "技能"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start">
            <div className="w-full">
              <span className="font-semibold">
                {language === "en" ? "Programming: " : "编程："}
              </span>
              <span>
                Python, NCL, MATLAB, Fortran
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-full">
              <span className="font-semibold">
                {language === "en" ? "Models: " : "模型："}
              </span>
              <span>
                CESM, WRF, CAMS-CSM, NeuralGCM
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-full">
              <span className="font-semibold">
                {language === "en" ? "Certificates: " : "证书："}
              </span>
              <span>
                {language === "en"
                  ? "Computer Level 2, CET-6, Driver's License"
                  : "计算机二级, CET-6, 驾驶证"
                }
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-full">
              <span className="font-semibold">
                {language === "en" ? "Software: " : "软件："}
              </span>
              <span>
                MICAPS, PUP, ChatGPT, Cursor, Obsidian, Zotero, Office, Photoshop, CapCut
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-full">
              <span className="font-semibold">
                {language === "en" ? "Hobbies: " : "兴趣爱好："}
              </span>
              <span>
                {language === "en"
                  ? "Badminton, Cooking, Video Editing"
                  : "羽毛球, 烹饪, 视频剪辑"
                }
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}



