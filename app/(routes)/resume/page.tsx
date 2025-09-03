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
                  {language === "en" ? "Research Direction: Monsoons and Extreme Weather" : "研究方向：季风与极端天气气候"}
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
                  ? "Process and Mechanism of the Impact of Greening in the Indian Region on Northern Hemisphere Summer Climate"
                  : "印度地区绿化对北半球夏季气候的影响过程和机理"
                }
              </h3>
              <p className="text-sm text-right">
                {language === "en" ? "Mar 2021 - Jun 2023" : "2021年03月 - 2023年06月"}
              </p>
            </div>
            <div className="flex justify-between items-start mt-1">
              <p>
                {language === "en"
                  ? "Project Lead"
                  : "项目负责人"
                }
              </p>
            </div>
            <div className="mt-2 space-y-1"> {/* Added space-y-1 for consistent spacing */}
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {language === "en"
                    ? "Quantitatively analyzed the dynamic changes in global vegetation over the past three decades using NASA's GIMMS LAI (Leaf Area Index) dataset."
                    : "基于NASA的GIMMS LAI（叶面积指数）数据集，量化分析了近三十年全球植被动态变化。"
                  }
                </div>
              </div>
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {language === "en"
                    ? "Utilized the CAM-CLM coupled model for numerical simulation experiments; designed and implemented vegetation increase experiments and control experiments, the comparative analysis of which revealed the significant impact of vegetation changes in the Indian region on local and regional temperature and precipitation distribution."
                    : "利用CAM-CLM耦合模式进行数值模拟实验，设计并实施了植被增加实验与控制实验，对比分析结果揭示了印度地区植被变化对局地以及区域气温与降水分布的显著影响。"
                  }
                </div>
              </div>
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {language === "en"
                    ? "Thoroughly analyzed the impact mechanism of vegetation changes in the Indian region on climate, systematically elucidating the impact process and mechanism from the perspectives of atmospheric circulation adjustments and local thermal exchange."
                    : "深入剖析了印度地区植被变化对气候的影响机制，从环流调整和局地热力交换两个方面，系统阐释了其影响过程与作用机理。"
                  }
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold">
                {language === "en"
                  ? "Seamless Prediction of the South China Sea Summer Monsoon Onset"
                  : "南海夏季风爆发的无缝隙预报研究"
                }
              </h3>
              <p className="text-sm text-right">
                {language === "en" ? "Jan 2022 - Jan 2023" : "2022年01月 - 2023年01月"}
              </p>
            </div>
            <div className="flex justify-between items-start mt-1">
              <p>
                {language === "en"
                  ? "Main Participant"
                  : "主要参与者"
                }
              </p>
            </div>
            <div className="mt-2 space-y-1"> {/* Added space-y-1 for consistent spacing */}
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {language === "en"
                    ? "Project funded by the National Undergraduate Innovation and Entrepreneurship Training Program."
                    : "受国家级大学生创新创业训练计划项目资助。"
                  }
                </div>
              </div>
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {language === "en"
                    ? "Primarily responsible for the configuration, execution, and partial data processing and visualization for CAMS-CSM numerical model experiments."
                    : "主要负责CAMS-CSM数值模式实验的配置、运行和部分的数据处理以及绘图。"
                  }
                </div>
              </div>
              {/* --- Applied items-baseline here --- */}
              <div className="flex items-baseline">
                <div className="mr-2">•</div>
                <div className="text-sm">
                  {language === "en"
                    ? "The project investigated the influence of different CAMS-CSM model configurations on the predictive skill for the South China Sea summer monsoon onset, providing insights for potential model improvements based on the assessment results."
                    : "项目探究了CAMS-CSM模式不同配置下对于预测南海夏季风能力的影响，并根据评估的结果为模式改进提供思路。"
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



