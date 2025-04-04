"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen, BookText, School, Film, Pencil } from "lucide-react"
import { HesseUnderTheWheelPost } from "@/components/blog-posts/hesse-under-the-wheel"

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
    }
  }
  
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      slug: "hesse-under-the-wheel", // Add slug for the dedicated page
      title: {
        en: "Hesse's \"Under the Wheel\": Literary Deconstruction and Philosophical Reflections",
        zh: "赫尔曼·黑塞《在轮下》的文学解构与哲学省思"
      },
      date: "2025-05-01", // Updated to match the post component
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
      date: "2025-05-15",
      tags: ["film", "philosophy", "shanghai"],
      excerpt: {
        en: "An in-depth analysis of Lou Ye's \"Suzhou River\", exploring its innovative narrative techniques, social reflections of 1990s Shanghai, and the film's enduring significance in Chinese cinema.",
        zh: "深入分析娄烨的《苏州河》，探讨其创新叙事手法、对90年代上海的社会反思，以及该片在中国电影中的持久意义。"
      },
      content: {
        en: "\"Suzhou River\" (1999/2000), directed by Lou Ye, is considered one of his representative works and a landmark of China's Sixth Generation cinema. The film won the Tiger Award at the Rotterdam International Film Festival but was banned in mainland China for being submitted to festivals without going through censorship review. Set in modern Shanghai, the film interweaves two seemingly parallel love stories, creating a complex and captivating urban landscape.\n\nThis article offers an in-depth analysis of the film's artistic techniques, social reflections, contemporary significance, and character symbolism. The film's innovative narrative structure, with its unreliable narrator and visual style characterized by handheld cinematography, creates a dreamlike sense that questions the nature of truth and memory. The film also serves as a mirror of social transformation in 1990s Shanghai, capturing marginal spaces and individuals on the edge of modernization.\n\nThe symbolic significance of the four core characters and the multiple meanings of the Suzhou River itself provide rich layers of interpretation, while the film's themes of love, identity, and obsession transcend specific cultural boundaries. As a representative work of the Sixth Generation directors, \"Suzhou River\" continues to inspire reflection on urban life, interpersonal relationships, and the nature of image narrative.",
        zh: "《苏州河》（1999/2000），导演娄烨的代表作，也被视为中国第六代电影的标志之一。该片获鹿特丹国际电影节金虎奖，却因未经审查赴展在中国大陆遭禁映。影片以现代上海为背景，交织两条貌似平行的爱情线索，勾画出一幅复杂而引人入胜的都市图景。\n\n本文将对这部影片的艺术手法、社会镜像、现实意义及人物象征意义进行深入分析。影片创新的叙事结构，以不可靠的叙述者和手持摄影的视觉风格，营造出质疑真相与记忆本质的迷幻感。电影也作为90年代上海社会转型的镜子，捕捉了边缘空间和现代化边缘的个体。\n\n四位核心角色的象征意义和苏州河本身的多重含义提供了丰富的解读层次，而影片关于爱情、身份和痴迷的主题超越了特定的文化界限。作为第六代导演的代表作，《苏州河》持续激发人们对都市生活、人际关系及影像叙事本质的思考。"
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