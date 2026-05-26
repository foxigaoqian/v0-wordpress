import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogArchive } from "@/components/blog/blog-archive"

export const metadata: Metadata = {
  title: "Blog | Mewepak - Packaging Knowledge Hub",
  description: "Industry insights, packaging tips, and the latest trends in flexible packaging.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <BlogArchive />
      <Footer />
    </main>
  )
}
