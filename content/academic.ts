import type { LocalizedText } from "@/content/types"
export type { LocalizedText } from "@/content/types"

export interface NewsItem {
  date: string
  title: LocalizedText
  content: LocalizedText
}

export const RESUME_COPY = {
  title: {
    en: "Resume",
    zh: "简历",
  },
  download: {
    en: "Download PDF",
    zh: "下载 PDF",
  },
  educationTitle: {
    en: "Education",
    zh: "教育经历",
  },
  fudanInstitution: {
    en: "Fudan University",
    zh: "复旦大学",
  },
  fudanPeriod: {
    en: "Sep 2025 - ",
    zh: "2025年09月 - ",
  },
  fudanDegree: {
    en: "M.Sc. in Meteorology, Department of Atmospheric and Oceanic Sciences",
    zh: "气象专业硕士，大气与海洋科学系",
  },
  fudanLocation: {
    en: "Shanghai, China",
    zh: "上海",
  },
  fudanAdvisor: {
    en: "Advisor: Prof. Wen Zhou",
    zh: "指导老师：周文教授",
  },
  fudanResearchDirection: {
    en: "Research Direction: Ocean-Ice-Atmosphere Interactions, Climate Dynamics, Monsoons, and Extreme Weather",
    zh: "研究方向：海-冰-气相互作用、气候动力学、季风与极端天气",
  },
  nuistInstitution: {
    en: "Nanjing University of Information Science & Technology",
    zh: "南京信息工程大学",
  },
  nuistPeriod: {
    en: "Sep 2019 - Jun 2023",
    zh: "2019年09月 - 2023年06月",
  },
  nuistDegree: {
    en: "B.Sc. in Atmospheric Sciences, College of Atmospheric Sciences",
    zh: "理学学士（大气科学），大气科学学院",
  },
  nuistLocation: {
    en: "Nanjing, China",
    zh: "江苏南京",
  },
  nuistGpa: {
    en: "GPA: 3.88 (88.8/100)",
    zh: "GPA：3.88（88.8/100）",
  },
  nuistCourses: {
    en: "Main Courses: Synoptic Meteorology Principles and Methods, Dynamic Meteorology, Atmospheric Physics, Modern Climatology, Radar and Satellite Meteorology, Mesoscale Meteorology.",
    zh: "主要课程：天气学原理和方法、动力气象学、大气物理学、现代气候学、雷达与卫星气象学、中尺度气象学。",
  },
  researchTitle: {
    en: "Research Experience",
    zh: "研究经历",
  },
  pacificTitle: {
    en: "Teleconnection Between Northwest Pacific Convection and North American Temperature During Seasonal Transitions",
    zh: "季节转换期西北太平洋对流-北美气温遥相关",
  },
  pacificPeriod: {
    en: "May 2026 - Jun 2028",
    zh: "2026年05月 - 2028年06月",
  },
  pacificDescription: {
    en: "Focuses on the teleconnection between convective anomalies over the Northwest Pacific and North American temperature variations during seasonal transitions, revealing tropical-midlatitude climate linkage features; applies MCA, composite analysis, and regression analysis to investigate circulation propagation pathways and physical mechanisms through which Northwest Pacific convection affects North American temperatures, identifying a climate dynamics pathway that differs from traditional views.",
    zh: "聚焦季节转换期西北太平洋对流异常与北美气温变化之间的遥相关关系，揭示热带—中高纬气候联动特征；通过MCA、合成分析、回归分析等方法，探讨西北太平洋对流影响北美气温的环流传播路径与物理机制，发现了不同于传统观点的气候动力路径。",
  },
  greeningTitle: {
    en: "Process and Mechanism of the Impact of Greening in the Indian Region on Northern Hemisphere Summer Climate",
    zh: "印度地区绿化对北半球夏季气候的影响过程和机理",
  },
  greeningPeriod: {
    en: "Mar 2021 - Jun 2023",
    zh: "2021年03月 - 2023年06月",
  },
  greeningDescription: {
    en: "Based on NASA GIMMS LAI data, quantifies global vegetation change characteristics over the past three decades; uses the CAM-CLM coupled model to conduct vegetation increase and control experiments, evaluating the impacts of Indian vegetation change on temperature and precipitation; reveals the mechanisms by which Indian vegetation change affects climate from the perspectives of circulation adjustment and local thermal exchange.",
    zh: "基于 NASA GIMMS LAI 数据，量化近三十年全球植被变化特征；利用 CAM-CLM 耦合模式开展植被增加与控制实验，评估印度植被变化对气温和降水的影响；从环流调整与局地热力交换两方面，揭示印度植被变化影响气候的机制。",
  },
  honorsTitle: {
    en: "Honors & Awards",
    zh: "荣誉获奖",
  },
  icmTitle: {
    en: "International Interdisciplinary Contest In Modeling",
    zh: "美国大学生数学建模竞赛",
  },
  icmDistinction: {
    en: "Honorable Mention",
    zh: "二等奖",
  },
  changwangTitle: {
    en: "\"Changwang Cup\" Meteorology Talent Competition Preliminary Round",
    zh: "\"长望杯\"气象达人赛初赛",
  },
  changwangDistinction: {
    en: "Third Prize",
    zh: "三等奖",
  },
  modelingTitle: {
    en: "National Mathematical Contest in Modeling (Jiangsu)",
    zh: "全国大学生数学建模竞赛江苏赛区",
  },
  modelingDistinction: {
    en: "Third Prize",
    zh: "三等奖",
  },
  iscatTitle: {
    en: "\"ISCAT Cup\" Jiangsu Provincial Translation Competition",
    zh: "\"ISCAT杯\"江苏省翻译大赛",
  },
  iscatDistinction: {
    en: "Second Prize",
    zh: "二等奖",
  },
  knowledgeTitle: {
    en: "Jiangsu University Student Knowledge Competition",
    zh: "江苏省大学生知识竞赛(理工科组)",
  },
  knowledgeDistinction: {
    en: "Second Prize",
    zh: "优秀奖",
  },
  internetTitle: {
    en: "NUIST \"Internet+\" Competition",
    zh: "南京信息工程大学\"互联网+\"大赛",
  },
  internetDistinction: {
    en: "Silver Award",
    zh: "银奖",
  },
  innovationTitle: {
    en: "Longshan Academy \"Tech Innovation Star\" Award",
    zh: "龙山书院\"科创之星\"",
  },
  nuistHonors: {
    en: "NUIST First-Class Scholarship, Three-Good Student, Outstanding Student Leader",
    zh: "校一等奖学金、校三好学生、校优秀学生干部",
  },
  graduateTitle: {
    en: "NUIST Outstanding Graduate",
    zh: "校优秀毕业生",
  },
  meteorologyTitle: {
    en: "\"Meteorology Elite\" Scholarship",
    zh: "\"气象菁英\"奖学金",
  },
  skillsTitle: {
    en: "Skills",
    zh: "技能",
  },
  programmingLabel: {
    en: "Programming: ",
    zh: "编程：",
  },
  modelsLabel: {
    en: "Models: ",
    zh: "模型：",
  },
  certificatesLabel: {
    en: "Certificates: ",
    zh: "证书：",
  },
  certificates: {
    en: "Computer Level 2, CET-6, Driver's License",
    zh: "计算机二级, CET-6, 驾驶证",
  },
  softwareLabel: {
    en: "Software: ",
    zh: "软件：",
  },
  hobbiesLabel: {
    en: "Hobbies: ",
    zh: "兴趣爱好：",
  },
  hobbies: {
    en: "Badminton, Cooking, Video Editing",
    zh: "羽毛球, 烹饪, 视频剪辑",
  },
} satisfies Record<string, LocalizedText>

export const NEWS_ITEMS: readonly NewsItem[] = [
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
