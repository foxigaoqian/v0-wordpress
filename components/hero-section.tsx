"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00cfca]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-64 h-64 bg-[#00cfca]/10 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-gray-900">MEWEPAK</span>
                <br />
                <span className="text-[#00cfca]">PACKAGING</span>
                <br />
                <span className="text-gray-900">SOLUTION</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg text-gray-600 max-w-md leading-relaxed"
            >
              Premium flexible packaging and bags, customized for your brand&apos;s unique needs, protecting your products with modern technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10"
            >
              <Link href="#process" className="group inline-flex items-center gap-4 text-gray-900 hover:text-[#00cfca] transition-colors">
                <span className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-[#00cfca] group-hover:bg-[#00cfca] transition-all">
                  <ArrowRight className="w-5 h-5 group-hover:text-white transition-colors" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest">Explore The Process</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="w-80 h-80 rounded-full border border-[#00cfca]/20" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="w-64 h-64 rounded-full border border-[#00cfca]/30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#00cfca]/20 to-[#00cfca]/5" />
              </div>
              
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-8 right-8 w-20 h-28 bg-white rounded-xl shadow-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#00cfca]/10 to-transparent flex items-center justify-center">
                  <div className="w-10 h-14 border-2 border-[#00cfca]/30 rounded-lg" />
                </div>
              </motion.div>
              
              <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-16 left-4 w-24 h-32 bg-white rounded-xl shadow-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#00cfca]/15 to-transparent flex items-center justify-center">
                  <div className="w-12 h-18 border-2 border-[#00cfca]/40 rounded-lg" />
                </div>
              </motion.div>
              
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 -translate-y-1/2 right-0 w-16 h-24 bg-white rounded-xl shadow-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#00cfca]/10 to-transparent flex items-center justify-center">
                  <div className="w-8 h-12 border-2 border-[#00cfca]/25 rounded-lg" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
