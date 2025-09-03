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
  
  const blogPosts: BlogPost[] = []

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


