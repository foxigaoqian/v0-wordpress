"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const categories = ["All", "Packaging Tips", "Industry News", "Materials", "Sustainability", "Case Studies"]

const featuredPost = {
  slug: "ultimate-guide-stand-up-pouches",
  title: "The Ultimate Guide to Stand Up Pouches in 2024",
  excerpt: "Everything you need to know about stand up pouches, from materials to design considerations.",
  category: "Packaging Tips",
  author: "Mewepak Team",
  date: "Jan 15, 2024",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
}

const posts = [
  {
    slug: "sustainable-packaging-trends",
    title: "5 Sustainable Packaging Trends to Watch",
    excerpt: "Discover the latest innovations in eco-friendly packaging materials and designs.",
    category: "Sustainability",
    author: "Mewepak Team",
    date: "Jan 12, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
  },
  {
    slug: "coffee-packaging-guide",
    title: "Coffee Packaging: Preserving Freshness & Flavor",
    excerpt: "Learn how the right packaging can extend the shelf life of your coffee products.",
    category: "Industry News",
    author: "Mewepak Team",
    date: "Jan 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
  },
  {
    slug: "pet-food-packaging",
    title: "Pet Food Packaging: What Pet Owners Want",
    excerpt: "Insights into consumer preferences for pet food packaging design and functionality.",
    category: "Case Studies",
    author: "Mewepak Team",
    date: "Jan 8, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop",
  },
  {
    slug: "barrier-materials-explained",
    title: "Understanding Barrier Materials in Flexible Packaging",
    excerpt: "A deep dive into different barrier materials and their applications.",
    category: "Materials",
    author: "Mewepak Team",
    date: "Jan 5, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
  {
    slug: "design-tips-shelf-impact",
    title: "10 Design Tips for Maximum Shelf Impact",
    excerpt: "Make your products stand out with these packaging design best practices.",
    category: "Packaging Tips",
    author: "Mewepak Team",
    date: "Jan 3, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
  },
  {
    slug: "recyclable-mono-materials",
    title: "Recyclable Mono-Materials: The Future of Packaging",
    excerpt: "How mono-material structures are revolutionizing sustainable packaging.",
    category: "Sustainability",
    author: "Mewepak Team",
    date: "Dec 28, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
  },
]

export function BlogArchive() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Packaging
              <span className="text-[#00cfca]"> Knowledge Hub</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Industry insights, packaging tips, and the latest trends in flexible packaging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-3xl overflow-hidden">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-sm font-semibold text-[#00cfca] mb-2">{featuredPost.category}</span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-[#00cfca] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-gray-600">{featuredPost.excerpt}</p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {featuredPost.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-[#00cfca] font-semibold">
                      Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[#00cfca] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="aspect-video rounded-2xl mb-4 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#00cfca]">{post.category}</span>
                  <h3 className="mt-2 font-semibold text-gray-900 group-hover:text-[#00cfca] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900">Stay Updated</h2>
            <p className="mt-2 text-gray-600">Subscribe to receive the latest packaging insights and industry news.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00cfca] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-12 bg-[#0f4c5c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white text-center sm:text-left">
            <p className="text-lg font-semibold">Need packaging solutions? Talk to an expert today.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-colors"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
