import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPost } from "@/components/blog/blog-post"
import { notFound } from "next/navigation"

const posts: Record<string, { title: string; excerpt: string; category: string }> = {
  "ultimate-guide-stand-up-pouches": {
    title: "The Ultimate Guide to Stand Up Pouches in 2024",
    excerpt: "Everything you need to know about stand up pouches, from materials to design considerations.",
    category: "Packaging Tips",
  },
  "sustainable-packaging-trends": {
    title: "5 Sustainable Packaging Trends to Watch",
    excerpt: "Discover the latest innovations in eco-friendly packaging materials and designs.",
    category: "Sustainability",
  },
  "coffee-packaging-guide": {
    title: "Coffee Packaging: Preserving Freshness & Flavor",
    excerpt: "Learn how the right packaging can extend the shelf life of your coffee products.",
    category: "Industry News",
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  
  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: `${post.title} | Mewepak Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <BlogPost slug={slug} post={post} />
      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}
