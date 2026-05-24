"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    date: "January 7, 2026",
    title: "How Metal Detection Enhances Packaging Safety",
    excerpt: "How Metal Detection Enhances Packaging Safety and Supply Chain Quality Why",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=300&fit=crop",
  },
  {
    date: "January 7, 2026",
    title: "What Is HACCP and Why It Matters for Food Packaging Safety",
    excerpt: "What Is HACCP and Why It Matters for Food Packaging",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400&h=300&fit=crop",
  },
  {
    date: "December 3, 2025",
    title: "Food Safety Modernization Act and Why It Matters",
    excerpt: "What is the Food Safety Modernization Act (FSMA) and Why",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
  },
  {
    date: "November 15, 2025",
    title: "Sustainable Flexible Packaging Trends to Watch",
    excerpt: "Explore the latest innovations in eco-friendly packaging materials.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
  },
];

export function BlogSection() {
  return (
    <section id="resources" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Flexible Packaging Blog</h2>
            <p className="mt-4 text-gray-600 max-w-xl">
              Your dream packaging is within reach. Our blog covers flexible packaging, Design Tips and more!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#00cfca] text-[#00cfca] font-medium rounded-full hover:bg-[#00cfca] hover:text-white transition-colors"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-6">
                {/* Decorative shape */}
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#00cfca]/10 rounded-tl-[60px] rounded-br-[60px]" />
                <div className="relative aspect-square rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xs text-[#00cfca] font-medium uppercase tracking-wider mb-3">
                  {post.date}
                </p>
                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-[#00cfca] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-center">
                  <span className="w-10 h-10 rounded-full bg-[#00cfca] flex items-center justify-center text-white group-hover:bg-[#00b8b3] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
