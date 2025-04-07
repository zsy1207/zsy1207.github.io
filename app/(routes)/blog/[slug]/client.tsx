"use client"

import { HesseUnderTheWheelPost } from "@/components/blog-posts/hesse-under-the-wheel"
import { SuzhouRiverPost } from "@/components/blog-posts/suzhou-river"
import { GraduateExamExperiencePost } from "@/components/blog-posts/graduate-exam-experience"
import { TrumpArtOfDealPost } from "@/components/blog-posts/trump-art-of-deal"
import { BookOpen, BookText, School, Film, GraduationCap, Pencil, DollarSign, Landmark, Globe } from "lucide-react"

interface BlogPostClientProps {
  slug: string
}

// Helper function to get tag icon
function getTagIcon(tagId: string) {
  switch(tagId) {
    case 'reading':
      return <BookOpen className="h-4 w-4 mr-1" />;
    case 'philosophy':
      return <BookText className="h-4 w-4 mr-1" />;
    case 'education':
      return <School className="h-4 w-4 mr-1" />;
    case 'film':
      return <Film className="h-4 w-4 mr-1" />;
    case 'shanghai':
      return <School className="h-4 w-4 mr-1" />;
    case 'exam':
      return <GraduationCap className="h-4 w-4 mr-1" />;
    case 'experience':
      return <BookOpen className="h-4 w-4 mr-1" />;
    case 'politics':
      return <Landmark className="h-4 w-4 mr-1" />;
    case 'economics':
      return <DollarSign className="h-4 w-4 mr-1" />;
    case 'usa':
      return <Globe className="h-4 w-4 mr-1" />;
    default:
      return null;
  }
}

// Helper function to get tag name in current language
function getTagName(tagId: string, language: 'en' | 'zh') {
  const tags: Record<string, { en: string, zh: string }> = {
    "philosophy": {
      en: "Philosophy",
      zh: "哲学"
    },
    "education": {
      en: "Education",
      zh: "教育"
    },
    "reading": {
      en: "Reading",
      zh: "阅读"
    },
    "film": {
      en: "Film",
      zh: "电影"
    },
    "shanghai": {
      en: "Shanghai",
      zh: "上海"
    },
    "exam": {
      en: "Graduate Exam",
      zh: "考研"
    },
    "experience": {
      en: "Experience",
      zh: "经验"
    },
    "politics": {
      en: "Politics",
      zh: "政治"
    },
    "economics": {
      en: "Economics",
      zh: "经济"
    },
    "usa": {
      en: "USA",
      zh: "美国"
    }
  }
  
  return tags[tagId]?.[language] || tagId
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  // Render the appropriate post component based on slug
  if (slug === "hesse-under-the-wheel") {
    return <HesseUnderTheWheelPost />
  }
  
  if (slug === "suzhou-river") {
    return <SuzhouRiverPost />
  }
  
  if (slug === "graduate-exam-experience") {
    return <GraduateExamExperiencePost />
  }
  
  if (slug === "trump-art-of-deal") {
    return <TrumpArtOfDealPost />
  }
  
  // Handle unknown slug case
  return (
    <div className="max-w-4xl mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Post not found</h1>
      <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
    </div>
  )
} 