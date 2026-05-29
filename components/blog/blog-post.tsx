"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BlogPostProps {
  slug: string
  post: {
    title: string
    excerpt: string
    category: string
  }
}

const relatedPosts = [
  { slug: "sustainable-packaging-trends", title: "5 Sustainable Packaging Trends to Watch", category: "Sustainability" },
  { slug: "coffee-packaging-guide", title: "Coffee Packaging: Preserving Freshness & Flavor", category: "Industry News" },
  { slug: "barrier-materials-explained", title: "Understanding Barrier Materials in Flexible Packaging", category: "Materials" },
]

export function BlogPost({ slug, post }: BlogPostProps) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/blog" className="text-gray-500 hover:text-[#00cfca]">Blog</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section with Full-Width Featured Image */}
      <section className="relative">
        {/* Featured Image - Full Width */}
        <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop" 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-12 lg:pb-16 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
                <span className="inline-block px-3 py-1 bg-[#00cfca] text-white text-sm font-semibold rounded-full mb-4">{post.category}</span>
                <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> Mewepak Team</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Jan 15, 2024</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min read</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Stand up pouches have revolutionized the packaging industry, offering brands a versatile, cost-effective, and visually appealing solution for a wide range of products. In this comprehensive guide, we will explore everything you need to know about stand up pouches.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What is a Stand Up Pouch?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A stand up pouch (SUP) is a flexible packaging format that features a bottom gusset, allowing it to stand upright on store shelves. This design offers excellent shelf presence and maximizes printable surface area for branding.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Key Benefits</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Superior shelf presence and brand visibility</li>
                  <li>Lightweight, reducing shipping costs</li>
                  <li>Excellent barrier properties for product protection</li>
                  <li>Environmentally friendly options available</li>
                  <li>Cost-effective compared to rigid packaging</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Materials and Structures</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Stand up pouches can be constructed from various material combinations depending on your product requirements. Common structures include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li><strong className="text-gray-900">PET/PE:</strong> Clear, good barrier, recyclable</li>
                  <li><strong className="text-gray-900">PET/AL/PE:</strong> Excellent barrier, metallic appearance</li>
                  <li><strong className="text-gray-900">Kraft/PE:</strong> Natural look, sustainable appeal</li>
                  <li><strong className="text-gray-900">BOPP/CPP:</strong> Cost-effective, good clarity</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Choosing the Right Features</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Consider adding these features to enhance functionality:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Zipper closures for resealability</li>
                  <li>Tear notches for easy opening</li>
                  <li>Hang holes for retail display</li>
                  <li>Clear windows for product visibility</li>
                  <li>Degassing valves for coffee packaging</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Stand up pouches continue to grow in popularity across industries. By understanding your product needs and available options, you can select the perfect packaging solution that protects your products and elevates your brand.
                </p>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#00cfca]/10 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-[#00cfca]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mewepak Team</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Our team of packaging experts shares industry knowledge and best practices to help brands succeed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-gray-500 flex items-center gap-2"><Share2 className="w-4 h-4" /> Share:</span>
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1da1f2] hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Inquiry Form */}
                <div className="bg-[#00cfca]/5 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Get a Free Quote</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00cfca]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00cfca]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00cfca]"
                    />
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00cfca] resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 bg-[#00cfca] text-white font-semibold rounded-lg hover:bg-[#00b8b3] transition-colors"
                    >
                      Submit
                    </button>
                  </form>
                </div>

                {/* Related Products */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Related Products</h3>
                  <div className="space-y-4">
                    <Link href="/products/stand-up-pouch" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <p className="font-medium text-gray-900">Stand Up Pouch</p>
                      <p className="text-sm text-gray-500">View product details</p>
                    </Link>
                    <Link href="/products/flat-bottom-pouch" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <p className="font-medium text-gray-900">Flat Bottom Bag</p>
                      <p className="text-sm text-gray-500">View product details</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-100 rounded-xl mb-4" />
                <span className="text-xs font-semibold text-[#00cfca]">{relatedPost.category}</span>
                <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-[#00cfca] transition-colors line-clamp-2">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 lg:py-16 bg-[#0f4c5c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Ready to Start Your Packaging Project?
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Our packaging experts are here to help you find the perfect solution.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact#call"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold text-gray-900">Subscribe for Packaging Tips & Updates</h3>
            <form className="mt-4 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00cfca]"
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
    </>
  )
}
