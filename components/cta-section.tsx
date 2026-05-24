"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUp, Mail, MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Main CTA area with gradient background */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-40">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00cfca]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00cfca]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Stay Connected */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Floating images */}
              <div className="absolute -left-10 -top-20 hidden lg:block">
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [-3, 3, -3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-56 h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                    alt="Packaging"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [5, -2, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-16 -right-12 w-40 h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
                >
                  <img
                    src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300&h=400&fit=crop"
                    alt="Package"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <div className="lg:pl-64">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 60 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-1 bg-[#00cfca] mb-8"
                />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#00cfca]/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#00cfca]" />
                  </div>
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Stay
                </h2>
                <h2 className="text-5xl md:text-6xl font-bold text-[#00cfca] leading-[1.1] tracking-tight">
                  Connected
                </h2>
                
                <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-md">
                  Join our subscription list and you will be the first to hear about sustainable product options, packaging trends, and other Printpack news.
                </p>
                
                {/* Email input */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 h-14 px-6 rounded-full border-2 border-gray-200 focus:border-[#00cfca] focus:outline-none transition-colors text-gray-900"
                  />
                  <button className="h-14 px-8 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-all shadow-lg shadow-[#00cfca]/30 hover:shadow-xl hover:shadow-[#00cfca]/40 flex items-center justify-center gap-2 whitespace-nowrap">
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right - Let's Talk Packaging */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Card background */}
              <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1d35] rounded-[40px] p-12 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00cfca]/10 rounded-full blur-[80px]" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#00cfca]/5 rounded-full blur-[60px]" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#00cfca]/20 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-[#00cfca]" />
                    </div>
                  </div>

                  <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                    Let&apos;s Talk
                  </h2>
                  <h2 className="text-5xl md:text-6xl font-bold text-[#00cfca] leading-[1.1] tracking-tight">
                    Packaging
                  </h2>
                  
                  <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                    We pride ourselves on designing the right package for your brand&apos;s needs. Collaborate with us. Take your brand to the next level and win at the shelf.
                  </p>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 h-16 px-10 mt-10 bg-[#00cfca] text-white text-lg font-semibold rounded-full hover:bg-[#00e5df] transition-all shadow-xl shadow-[#00cfca]/30 hover:shadow-2xl"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Floating product image */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 -bottom-8 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 hidden lg:block"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=300&h=400&fit=crop"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-24"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-4 px-8 py-4 bg-white border-2 border-gray-200 rounded-full hover:border-[#00cfca] hover:bg-[#00cfca] transition-all shadow-lg"
            >
              <span className="text-gray-600 group-hover:text-white font-semibold transition-colors">Scroll to Top</span>
              <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <ArrowUp className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
