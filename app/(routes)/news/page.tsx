"use client"

import { useLanguage } from "@/context/language-context"

interface NewsItem {
  date: string
  title: {
    en: string
    zh: string
  }
  content: {
    en: string
    zh: string
  }
}

export default function NewsPage() {
  const { language } = useLanguage()
  
  const newsItems: NewsItem[] = [
    {
      date: "2025-09-01",
      title: {
        en: "Started Master's program in Meteorology at Fudan University",
        zh: "进入复旦大学攻读气象专业硕士"
      },
      content: {
        en: "Started the Master's program in Meteorology at Fudan University.",
        zh: "进入复旦大学攻读气象专业硕士。"
      }
    },
    {
      date: "2025-06-30",
      title: {
        en: "Resigned from Jinan Tianyu Agricultural Technology Co., Ltd.",
        zh: "从济南天昱农业科技有限公司离职"
      },
      content: {
        en: "Resigned from Jinan Tianyu Agricultural Technology Co., Ltd.",
        zh: "从济南天昱农业科技有限公司离职。"
      }
    },
    {
      date: "2025-03-26",
      title: {
        en: "Admitted to Master's Program at Fudan University",
        zh: "被复旦大学气象专业硕士录取"
      },
      content: {
        en: "Admitted to the Master's program in Meteorology at Fudan University with a preliminary exam score of 394 (ranked 1st) and a re-examination score of 89.59 (ranked 1st).",
        zh: "以初试394（排名第一）和复试89.59（排名第一）被录取为复旦大学气象专业硕士。"
      }
    },
    {
      date: "2023-10-09",
      title: {
        en: "Joined Jinan Tianyu Agricultural Technology Co., Ltd.",
        zh: "进入济南天昱农业科技有限公司"
      },
      content: {
        en: "Joined Jinan Tianyu Agricultural Technology Co., Ltd. as a Technical Management Trainee.",
        zh: "进入济南天昱农业科技有限公司，担任技术管培生。"
      }
    },
    {
      date: "2023-06-19",
      title: {
        en: "Graduated from NUIST",
        zh: "从南京信息工程大学毕业"
      },
      content: {
        en: "Graduated from Nanjing University of Information Science & Technology (NUIST) with a Bachelor of Science degree in Atmospheric Sciences.",
        zh: "从南京信息工程大学毕业，获得大气科学理学学士学位。"
      }
    },
    {
      date: "2021-08-30",
      title: {
        en: "Selected Meteorology Specialization",
        zh: "分流进入南京信息工程大学大气科学学院"
      },
      content: {
        en: "Selected specialization in Meteorology within the College of Atmospheric Sciences, Nanjing University of Information Science & Technology (NUIST).",
        zh: "分流进入南京信息工程大学大气科学学院，方向为气象学。"
      }
    },
    {
      date: "2019-09-04",
      title: {
        en: "Enrolled at NUIST",
        zh: "进入南京信息工程大学龙山书院"
      },
      content: {
        en: "Enrolled in Longshan College, Nanjing University of Information Science & Technology (NUIST), pursuing a Bachelor's degree in Atmospheric Sciences.",
        zh: "进入南京信息工程大学龙山书院，攻读大气科学专业本科。"
      }
    },
    {
      date: "2019-06-25",
      title: {
        en: "Graduated from High School and Admitted to NUIST",
        zh: "从山东省五莲县第一中学毕业并被南京信息工程大学录取"
      },
      content: {
        en: "Graduated from Wulian No. 1 High School, Shandong Province with a college entrance exam score of 601 points. Admitted to the Atmospheric Sciences program at Nanjing University of Information Science & Technology (NUIST).",
        zh: "从山东省五莲县第一中学毕业，高考成绩为601分，被南京信息工程大学大气科学专业录取。"
      }
    },
    {
      date: "2000-12-07",
      title: {
        en: "Born in Wulian County, Rizhao City",
        zh: "出生于山东省日照市五莲县"
      },
      content: {
        en: "Born in Wulian County, Rizhao City, Shandong Province, China.",
        zh: "出生于山东省日照市五莲县。"
      }
    }
  ]

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight mb-8">
        {language === "en" ? "Timeline" : "时间线"}
      </h1>
      
      <div className="relative ml-4">
        {/* 垂直时间线 */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
        
        <div className="space-y-12">
          {newsItems.map((item, index) => (
            <div key={index} className="relative pl-8">
              {/* 时间点圆点 */}
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2" />
              
              <div className="text-sm text-muted-foreground mb-2">
                {new Date(item.date).toLocaleDateString(language === "en" ? "en-US" : "zh-CN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{item.title[language]}</h3>
              <p className="text-muted-foreground">{item.content[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}