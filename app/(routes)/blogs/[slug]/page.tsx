import { notFound } from "next/navigation"
import { BlogPostPage } from "@/components/blog-posts/blog-post-page"
import { BLOG_POSTS } from "@/content/blog-posts"

export const dynamicParams = false

export function generateStaticParams() {
  return BLOG_POSTS.map(({ slug }) => ({ slug }))
}

export default function BlogPostRoute({
  params,
}: {
  params: { slug: string }
}) {
  const post = BLOG_POSTS.find(({ slug }) => slug === params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostPage post={post} />
}
