import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPostPage } from "@/components/blog-posts/blog-post-page"
import { BlogPostBody } from "@/components/blog-posts/blog-post-body"
import { BLOG_POSTS } from "@/content/blog-posts"

interface BlogPostRouteProps {
  params: { slug: string }
}

export const dynamicParams = false

export function generateStaticParams() {
  return BLOG_POSTS.map(({ slug }) => ({ slug }))
}

function getPost(slug: string) {
  const post = BLOG_POSTS.find((entry) => entry.slug === slug)
  if (!post) notFound()
  return post
}

export function generateMetadata({ params }: BlogPostRouteProps): Metadata {
  const post = getPost(params.slug)
  return {
    title: post.title.en,
    description: post.excerpt.en,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title.en,
      description: post.excerpt.en,
      url: `/blogs/${post.slug}`,
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default function BlogPostRoute({ params }: BlogPostRouteProps) {
  const post = getPost(params.slug)
  return (
    <BlogPostPage>
      <BlogPostBody markdown={post.markdown} />
    </BlogPostPage>
  )
}
