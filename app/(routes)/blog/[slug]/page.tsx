import BlogPostClient from "./client"

// 服务器组件，可以使用generateStaticParams
export function generateStaticParams() {
  return [
    { slug: "hesse-under-the-wheel" },
    { slug: "suzhou-river" },
    { slug: "graduate-exam-experience" },
    { slug: "trump-art-of-deal" }
  ]
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClient slug={params.slug} />
} 