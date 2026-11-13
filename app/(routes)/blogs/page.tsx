import type { Metadata } from "next"
import { BlogsPage } from "@/components/pages/blogs-page"
import { BLOG_POSTS } from "@/content/blog-posts"

export const metadata: Metadata = {
  title: "Blogs",
  description: "Research notes, practical guides, and ideas from Shiyang Zhou.",
}

export default function BlogsRoute() {
  const posts = BLOG_POSTS
    .map(({ id, slug, title, date, tags, excerpt }) => ({ id, slug, title, date, tags, excerpt }))

  return <BlogsPage posts={posts} />
}
