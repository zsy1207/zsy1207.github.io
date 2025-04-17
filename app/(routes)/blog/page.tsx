"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, BookText, School, Film, Pencil, GraduationCap, DollarSign, Landmark, Globe } from "lucide-react"
import { HesseUnderTheWheelPost } from "@/components/blog-posts/hesse-under-the-wheel"
import { PyramidPrinciplePost } from "@/components/blog-posts/pyramid-principle"
import { TrumpArtOfDealPost } from "@/components/blog-posts/trump-art-of-deal"

interface Tag {
  id: string
  name: {
    en: string
    zh: string
  }
}

interface BlogPost {
  id: string
  slug?: string; // Add slug for URL routing
  title: {
    en: string
    zh: string
  }
  date: string
  tags: string[] // tag ids
  excerpt: {
    en: string
    zh: string
  }
  content: {
    en: string
    zh: string
  }
}

export default function BlogPage() {
  const { language } = useLanguage()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedPostSlug, setSelectedPostSlug] = useState<string | null>(null)
  
  // Define tags with translations
  const tags: Record<string, Tag> = {
    "philosophy": {
      id: "philosophy",
      name: {
        en: "Philosophy",
        zh: "哲学"
      }
    },
    "education": {
      id: "education",
      name: {
        en: "Education",
        zh: "教育"
      }
    },
    "reading": {
      id: "reading",
      name: {
        en: "Reading",
        zh: "阅读"
      }
    },
    "film": {
      id: "film",
      name: {
        en: "Film",
        zh: "电影"
      }
    },
    "shanghai": {
      id: "shanghai",
      name: {
        en: "Shanghai",
        zh: "上海"
      }
    },
    "culture": {
      id: "culture",
      name: {
        en: "Chinese Cinema",
        zh: "中国电影"
      }
    },
    "critique": {
      id: "critique",
      name: {
        en: "Social Critique",
        zh: "社会评论"
      }
    },
    "exam": {
      id: "exam",
      name: {
        en: "Graduate Exam",
        zh: "考研"
      }
    },
    "experience": {
      id: "experience",
      name: {
        en: "Experience",
        zh: "经验"
      }
    },
    "politics": {
      id: "politics",
      name: {
        en: "Politics",
        zh: "政治"
      }
    },
    "economics": {
      id: "economics",
      name: {
        en: "Economics",
        zh: "经济"
      }
    },
    "usa": {
      id: "usa",
      name: {
        en: "USA",
        zh: "美国"
      }
    },
    "expression": {
      id: "expression",
      name: {
        en: "Expression",
        zh: "表达"
      }
    }
  }
  
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      slug: "hesse-under-the-wheel",
      title: {
        en: "Hesse's \"Under the Wheel\": Literary Deconstruction and Philosophical Reflections",
        zh: "赫尔曼·黑塞《在轮下》的文学解构与哲学省思"
      },
      date: "2025-03-01",
      tags: ["philosophy", "education", "reading"],
      excerpt: {
        en: "Through literary deconstruction and philosophical analysis, this article explores how Hesse's \"Under the Wheel\" reveals the constraints and dehumanization of modern educational systems.",
        zh: "通过文学解构与哲学分析，探讨黑塞的《在轮下》如何揭示现代教育体制的困境与人性异化。"
      },
      content: {
        en: "Hesse's \"Under the Wheel\" set against the backdrop of early 20th century German education system, through the tragic life of young Hans Giebenrath, reveals the conflicts between industrial civilization and traditional education, as well as the alienation of human nature. As one of Hesse's earliest autobiographical works, the novel demonstrates the author's naturalist writing style and touches on the struggle of seven aspects of human existence in the modern regulatory system.\n\nThis article analyzes the text structure, social criticism, and existential philosophy from three dimensions, combining Hesse's Eastern philosophical thinking and German Romantic traditions to explore the profound critique of modern educational systems. The novel exposes the harsh realities of an educational system that values conformity over individual growth, and shows how institutional pressure can crush the human spirit.\n\nThrough the character of Hans, Hesse presents a powerful critique of educational practices that sacrifice the well-being of students for the sake of academic achievement and societal expectations. The novel remains remarkably relevant today, as many modern educational systems continue to struggle with similar tensions between standardization and the nurturing of individual talents and creativity.",
        zh: "赫尔曼·黑塞的《在轮下》以20世纪初德国教育体制为背景，通过少年汉斯·吉本拉特的悲剧性命运，揭示了工业文明与宗教传统双重压迫下的人性异化。作为黑塞早期自传性最强的作品，小说以自然主义笔触描绘了个体在现代性规训中的挣扎。\n\n本文从文本结构、社会批判、存在主义哲学三个维度展开分析，结合黑塞的东方哲学思想与德国浪漫主义传统，探讨该作品对现代教育体制的终极叩问。《在轮下》以20世纪初德国教育体制为背景，通过少年汉斯·吉本拉特的悲剧性命运，揭示了工业文明与宗教传统双重压迫下的人性异化。\n\n作为黑塞早期自传性最强的作品，小说以自然主义笔触描绘了个体在现代性规训中的挣扎。本文从文本结构、社会批判、存在主义哲学三个维度展开分析，结合黑塞的东方哲学思想与德国浪漫主义传统，探讨该作品对现代教育体制的终极叩问。黑塞通过汉斯的角色，对牺牲学生福祉以换取学术成就和社会期望的教育实践提出了有力批判。尽管这部小说创作于一个多世纪前，但它对当今许多现代教育系统仍然具有惊人的相关性，因为这些系统仍在标准化与培养个人才能和创造力之间存在类似的张力。"
      }
    },
    {
      id: "2",
      slug: "suzhou-river",
      title: {
        en: "Artistic Analysis, Social Interpretation, and Contemporary Significance of the Film \"Suzhou River\"",
        zh: "电影《苏州河》的艺术赏析、社会解读与现实意义"
      },
      date: "2025-03-15",
      tags: ["film", "philosophy", "shanghai"],
      excerpt: {
        en: "An in-depth analysis of Lou Ye's \"Suzhou River\", exploring its innovative narrative techniques, social reflections of 1990s Shanghai, and the film's enduring significance in Chinese cinema.",
        zh: "深入分析娄烨的《苏州河》，探讨其创新叙事手法、对90年代上海的社会反思，以及该片在中国电影中的持久意义。"
      },
      content: {
        en: "\"Suzhou River\" (1999/2000), directed by Lou Ye, is considered one of his representative works and a landmark of China's Sixth Generation cinema. The film won the Tiger Award at the Rotterdam International Film Festival but was banned in mainland China for being submitted to festivals without going through censorship review. Set in modern Shanghai, the film interweaves two seemingly parallel love stories, creating a complex and captivating urban landscape.\n\nThis article offers an in-depth analysis of the film's artistic techniques, social reflections, contemporary significance, and character symbolism. The film's innovative narrative structure, with its unreliable narrator and visual style characterized by handheld cinematography, creates a dreamlike sense that questions the nature of truth and memory. The film also serves as a mirror of social transformation in 1990s Shanghai, capturing marginal spaces and individuals on the edge of modernization.\n\nThe symbolic significance of the four core characters and the multiple meanings of the Suzhou River itself provide rich layers of interpretation, while the film's themes of love, identity, and obsession transcend specific cultural boundaries. As a representative work of the Sixth Generation directors, \"Suzhou River\" continues to inspire reflection on urban life, interpersonal relationships, and the nature of image narrative.",
        zh: "《苏州河》（1999/2000），导演娄烨的代表作，也被视为中国第六代电影的标志之一。该片获鹿特丹国际电影节金虎奖，却因未经审查赴展在中国大陆遭禁映。影片以现代上海为背景，交织两条貌似平行的爱情线索，勾画出一幅复杂而引人入胜的都市图景。\n\n本文将对这部影片的艺术手法、社会镜像、现实意义及人物象征意义进行深入分析。影片创新的叙事结构，以不可靠的叙述者和手持摄影的视觉风格，营造出质疑真相与记忆本质的迷幻感。电影也作为90年代上海社会转型的镜子，捕捉了边缘空间和现代化边缘的个体。\n\n四位核心角色的象征意义和苏州河本身的多重含义提供了丰富的解读层次，而影片关于爱情、身份和痴迷的主题超越了特定的文化界限。作为第六代导演的代表作，《苏州河》持续激发人们对都市生活、人际关系及影像叙事本质的思考。"
      }
    },
    {
      id: "3",
      slug: "pyramid-principle",
      title: {
        en: "The Pyramid Principle: Crafting Clear Communication in the Information Age",
        zh: "金字塔原理：信息时代的清晰沟通之道"
      },
      date: "2025-04-17",
      tags: ["reading", "expression"],
      excerpt: {
        en: "An exploration of Barbara Minto's Pyramid Principle and how this structured approach to communication can enhance clarity and impact in professional and academic contexts.",
        zh: "探索芭芭拉·明托的金字塔原理，以及这种结构化的沟通方法如何在专业和学术环境中提高表达的清晰度和影响力。"
      },
      content: {
        en: "The Pyramid Principle, developed by Barbara Minto at McKinsey & Company in the 1970s, offers a powerful framework for organizing thoughts and presenting information effectively. This article explores the core concepts, application methods, and benefits of this structured communication approach.\n\nAt its heart, the Pyramid Principle advocates starting with the conclusion or key message, then supporting it with hierarchically organized arguments and evidence. This top-down approach contrasts with traditional bottom-up communication, respecting the audience's cognitive limitations and time constraints.\n\nThe article examines the pyramid structure (key message, supporting arguments, and evidence), logical grouping methods, and practical applications across various contexts including business presentations, reports, emails, and academic writing. While acknowledging implementation challenges such as resistance to conclusion-first approaches and the difficulty of identifying the true key message, the analysis demonstrates how mastering this principle can transform communication effectiveness.\n\nIn an age of information overload, the ability to present ideas with pyramid-like clarity represents an invaluable skill that enhances comprehension, retention, and ultimately, persuasive impact across professional and academic domains.",
        zh: "金字塔原理由芭芭拉·明托于20世纪70年代在麦肯锡公司工作期间开发，为有效组织思想和呈现信息提供了强大的框架。本文探讨了这种结构化沟通方法的核心概念、应用方法和益处。\n\n金字塔原理的核心是主张先提出结论或关键信息，然后以层级结构组织的论点和证据来支持它。这种自上而下的方法与传统的自下而上沟通形成对比，尊重受众的认知限制和时间约束。\n\n文章考察了金字塔结构（关键信息、支持论点和证据）、逻辑分组方法，以及在商业演示、报告、电子邮件和学术写作等各种环境中的实际应用。虽然承认实施挑战，如对结论优先方法的抵抗和识别真正关键信息的困难，但分析表明，掌握这一原则如何可以改变沟通效果。\n\n在信息过载的时代，以金字塔般清晰地呈现想法的能力是一项宝贵的技能，可以增强理解、记忆，并最终在专业和学术领域产生说服力影响。"
      }
    },
    {
      id: "4",
      slug: "trump-art-of-deal",
      title: {
        en: "Trump's \"The Art of the Deal\": Analysis of Negotiation Principles and Their Implications",
        zh: "特朗普《交易的艺术》谈判原则与运用分析"
      },
      date: "April 8, 2025",
      tags: ["politics", "economics", "reading"],
      excerpt: {
        en: "An in-depth analysis of Donald Trump's negotiation principles from \"The Art of the Deal\" and their application to international relations and trade conflicts in 2025's complex geopolitical landscape.",
        zh: "深入分析唐纳德·特朗普《交易的艺术》中的谈判原则，及其在2025年复杂地缘政治格局下对国际关系和贸易冲突的应用。"
      },
      content: {
        en: "This article examines Donald Trump's negotiation framework detailed in \"The Art of the Deal\" and applies these principles to the geopolitical challenges of 2025. With ongoing US-China trade tensions and global economic recession as backdrop, the analysis explores how principles like \"Think Big,\" \"Protect the Downside,\" and \"Maximize Your Options\" continue to influence international strategic decision-making.\n\nThe article systematically examines key negotiation strategies and their application to contemporary issues including supply chain diversification, tariff dynamics, technology competition, diplomatic alliances, financial markets, and multinational corporate strategy. Each section reveals how Trump's assertive yet pragmatic approach to negotiation provides a framework for understanding the complex interplay between national interests and global interdependence.\n\nUltimately, the analysis suggests that successful international actors in 2025 must combine firmness in defending core interests with pragmatic recognition of mutual dependencies. The most enduring insight may be that sustainable international agreements aren't zero-sum victories but arrangements where all parties perceive value—a lesson particularly relevant in today's fractured global landscape.",
        zh: "本文解析了唐纳德·特朗普在《交易的艺术》中详述的谈判框架，并将这些原则应用于2025年的地缘政治挑战。以持续的中美贸易紧张局势和全球经济衰退为背景，分析探讨了\"志存高远\"、\"守住底线\"和\"留有余地\"等原则如何继续影响国际战略决策。\n\n文章系统地考察了关键谈判策略及其在当代问题中的应用，包括供应链多元化、关税动态、技术竞争、外交联盟、金融市场和跨国企业战略。每个部分揭示了特朗普既强硬又务实的谈判方法如何为理解国家利益与全球相互依存之间的复杂相互作用提供框架。\n\n最终，分析表明，2025年成功的国际行为体必须将坚定捍卫核心利益与务实认识相互依赖结合起来。最持久的见解可能是，可持续的国际协议不是零和胜利，而是所有各方都能感知价值的安排——这一教训在当今分裂的全球格局中尤为相关。"
      }
    }
  ]

  // Get all unique tag IDs
  const allTagIds = Array.from(new Set(blogPosts.flatMap(post => post.tags)))
  
  // Filter posts based on search query and selected tag
  const filteredPosts = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date descending
    .filter(post => {
      const matchesSearch = post.title[language].toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt[language].toLowerCase().includes(searchQuery.toLowerCase())
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true
      return matchesSearch && matchesTag
    })

  // Helper function to get tag name in current language
  const getTagName = (tagId: string) => {
    return tags[tagId]?.name[language] || tagId
  }

  // Helper function to get tag icon
  const getTagIcon = (tagId: string) => {
    switch(tagId) {
      case 'reading':
        return <BookOpen className="h-3 w-3 mr-1" />;
      case 'philosophy':
        return <BookText className="h-3 w-3 mr-1" />;
      case 'education':
        return <School className="h-3 w-3 mr-1" />;
      case 'film':
        return <Film className="h-3 w-3 mr-1" />;
      case 'shanghai':
        return <School className="h-3 w-3 mr-1" />;
      case 'critique':
        return <Pencil className="h-3 w-3 mr-1" />;
      case 'exam':
        return <GraduationCap className="h-3 w-3 mr-1" />;
      case 'experience':
        return <BookOpen className="h-3 w-3 mr-1" />;
      case 'politics':
        return <Landmark className="h-3 w-3 mr-1" />;
      case 'economics':
        return <DollarSign className="h-3 w-3 mr-1" />;
      case 'usa':
        return <Globe className="h-3 w-3 mr-1" />;
      case 'expression':
        return <Pencil className="h-3 w-3 mr-1" />;
      default:
        return null;
    }
  }

  // Handle blog post click - navigate to dedicated page
  const handlePostClick = (post: BlogPost) => {
    if (post.slug) {
      router.push(`/blog/${post.slug}`)
    }
  }
  
  // If a post is selected and we're not in a dynamic route, display it inline
  if (selectedPostSlug) {
    const post = blogPosts.find(p => p.slug === selectedPostSlug)
    
    if (post && post.slug === "hesse-under-the-wheel") {
      return <HesseUnderTheWheelPost />
    }
    
    if (post && post.slug === "pyramid-principle") {
      return <PyramidPrinciplePost />
    }
    
    if (post && post.slug === "trump-art-of-deal") {
      return <TrumpArtOfDealPost />
    }
    
    // If post not found or not implemented, go back to list
    setSelectedPostSlug(null)
  }

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          {language === "en" ? "Blogs" : "博客"}
        </h1>
        
        <div className="flex gap-4">
          <Input
            type="search"
            placeholder={language === "en" ? "Search posts..." : "搜索文章..."}
            className="w-[200px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <Badge 
            variant={selectedTag === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedTag(null)}
          >
            {language === "en" ? "All" : "全部"}
          </Badge>
          {allTagIds.map(tagId => (
            <Badge 
              key={tagId}
              variant={selectedTag === tagId ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedTag(tagId)}
            >
              {getTagName(tagId)}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        {filteredPosts.map((post, index) => (
          <div 
            key={post.id} 
            className="border border-border rounded-lg p-6 cursor-pointer hover:bg-accent/5 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
            onClick={() => handlePostClick(post)}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <h2 className="text-xl font-bold mb-3">{post.title[language]}</h2>
            <div className="flex gap-2 mb-3">
              {post.tags.map((tagId) => (
                <Badge 
                  key={tagId} 
                  variant="outline" 
                  className="bg-muted py-1 px-3 transition-transform duration-200 hover:scale-110"
                >
                  <span className="flex items-center gap-1.5">
                    {getTagIcon(tagId)}
                    {getTagName(tagId)}
                  </span>
                </Badge>
              ))}
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              {new Date(post.date).toLocaleDateString(language === "en" ? "en-US" : "zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </div>
            <p className="text-muted-foreground mb-4">{post.excerpt[language]}</p>
            <Button 
              variant="link" 
              className="p-0 h-auto text-foreground/60 hover:text-foreground group"
            >
              <span className="inline-flex items-center">
                {language === "en" ? "Read more" : "阅读更多"} 
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Button>
          </div>
        ))}
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {language === "en" ? "No posts found." : "未找到文章。"}
            </p>
          </div>
        )}
      </div>
    </>
  )
}