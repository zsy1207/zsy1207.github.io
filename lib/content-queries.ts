import type { BlogPost } from "@/content/blog-posts/types"
import type { Project } from "@/content/projects"
import type { Language } from "@/content/types"

interface ContentFilters {
  language: Language
  searchQuery: string
  selectedTag: string | null
}

type SearchablePost = Pick<BlogPost, "date" | "title" | "excerpt" | "tags">
type SearchableProject = Pick<Project, "title" | "description" | "tags">

export function filterBlogPosts<T extends SearchablePost>({
  posts,
  language,
  searchQuery,
  selectedTag,
}: ContentFilters & { posts: readonly T[] }): T[] {
  // Keep blog search as a literal substring match, including whitespace.
  const query = searchQuery.toLowerCase()

  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((post) => {
      const matchesSearch = post.title[language].toLowerCase().includes(query)
        || post.excerpt[language].toLowerCase().includes(query)
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true
      return matchesSearch && matchesTag
    })
}

export function filterProjects<T extends SearchableProject>({
  projects,
  language,
  searchQuery,
  selectedTag,
}: ContentFilters & { projects: readonly T[] }): T[] {
  // Project search already trims surrounding whitespace; preserve that behavior.
  const query = searchQuery.trim().toLowerCase()

  return projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(query)
      || project.description[language].toLowerCase().includes(query)
    const matchesTag = selectedTag ? project.tags.some((tag) => tag.en === selectedTag) : true
    return matchesSearch && matchesTag
  })
}
