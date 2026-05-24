"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-50">
      {/* Floating product images - Left side */}
      <div className="absolute left-0 top-0 bottom-0 w-64 lg:w-80 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-8, -5, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 -left-8 w-40 h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-6"
        >
          <img
            src="https://images.unsplash.com/photo-1568702846914-96b305d2uj38?w=300&h=400&fit=crop"
            alt="Package 1"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [5, 8, 5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-48 left-16 w-36 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform rotate-6"
        >
          <img
            src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=400&fit=crop"
            alt="Package 2"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-3, 2, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-24 -left-4 w-32 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white transform -rotate-3"
        >
          <img
            src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=300&h=400&fit=crop"
            alt="Package 3"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Floating product images - Right side */}
      <div className="absolute right-0 top-0 bottom-0 w-64 lg:w-80 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [8, 5, 8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 -right-8 w-44 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-6"
        >
          <img
            src="https://images.unsplash.com/photo-1566454725481-e288ef2c1f23?w=300&h=400&fit=crop"
            alt="Package 4"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-5, -8, -5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute top-56 right-12 w-36 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform -rotate-6"
        >
          <img
            src="https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=300&h=400&fit=crop"
            alt="Package 5"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [3, -2, 3] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          className="absolute bottom-20 -right-4 w-32 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white transform rotate-3"
        >
          <img
            src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=300&h=400&fit=crop"
            alt="Package 6"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Curved divider in center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="h-full w-32 text-gray-200/50" viewBox="0 0 100 400" preserveAspectRatio="none">
          <path d="M50,0 Q80,100 50,200 Q20,300 50,400" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Stay Connected */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a5c] leading-tight">
                Stay
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a5c] leading-tight">
                Connected
              </h2>
              
              <p className="mt-6 text-gray-500 text-base leading-relaxed max-w-sm mx-auto">
                Join our subscription list and you will be the first to hear about sustainable product options, packaging trends, and other Printpack news.
              </p>
              
              <button className="mt-8 h-14 px-10 bg-[#1a3a5c] text-white font-semibold rounded-full hover:bg-[#0d2840] transition-all shadow-lg">
                Subscribe
              </button>
            </motion.div>

            {/* Right - Let's Talk Packaging */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a5c] leading-tight">
                Let&apos;s Talk
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a5c] leading-tight">
                Packaging
              </h2>
              
              <p className="mt-6 text-gray-500 text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
                We pride ourselves on designing the right package for your brand&apos;s needs. Collaborate with us. Take your brand to the next level and win at the shelf.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center mt-8 h-14 px-10 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-all shadow-lg"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll to top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-end px-6 lg:px-12 mt-16"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 px-6 py-3 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-all shadow-lg"
          >
            Scroll to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
