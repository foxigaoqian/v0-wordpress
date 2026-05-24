"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section id="contact" className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left floating images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-48 h-64 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
                alt="Packaging"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-32 h-44 bg-gray-800 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=200&h=300&fit=crop"
                alt="Package"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Stay Connected */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-serif italic text-gray-900 mb-6">
              Stay
              <br />
              Connected
            </h2>
            <p className="text-gray-600 mb-8 max-w-sm">
              Join our subscription list and you will be the first to hear about sustainable product options, packaging trends, and other Printpack news.
            </p>
            <Link
              href="/subscribe"
              className="inline-flex items-center justify-center h-12 px-8 bg-[#00cfca] text-white font-medium rounded-full hover:bg-[#00b8b3] transition-colors shadow-lg shadow-[#00cfca]/25"
            >
              Subscribe
            </Link>
          </motion.div>

          {/* Let's Talk Packaging */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let&apos;s Talk
              <br />
              Packaging
            </h2>
            <p className="text-gray-600 mb-8 max-w-sm">
              We pride ourselves on designing the right package for your brand&apos;s needs. Collaborate with us. Take your brand to the next level and win at the shelf.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-[#00cfca] text-white font-medium rounded-full hover:bg-[#00b8b3] transition-colors shadow-lg shadow-[#00cfca]/25"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-end mt-16"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00cfca] text-white text-sm font-medium rounded-full hover:bg-[#00b8b3] transition-colors"
          >
            Scroll to Top
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
