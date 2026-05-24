"use client";

import { motion } from "framer-motion";
import { Zap, Eye } from "lucide-react";
import Link from "next/link";

export function VisualizeSection() {
  return (
    <section className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Visualize Before
              <br />
              <span className="text-[#00cfca]">You Produce.</span>
            </h2>
            
            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-lg">
              Eliminate decision risk. Our 3D preview technology lets you rotate, zoom, and inspect your custom packaging exactly as it will roll off the line.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00cfca]/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#00cfca]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Instant Dielines</h3>
                  <p className="text-gray-600 mt-1">Download accurate templates in seconds.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00cfca]/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-[#00cfca]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Live Rendering</h3>
                  <p className="text-gray-600 mt-1">See matte, gloss, or metallic finishes instantly.</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link
                href="#viewer"
                className="inline-flex items-center justify-center h-14 px-8 bg-[#00cfca] text-white font-medium rounded-full hover:bg-[#00b8b3] transition-colors shadow-lg shadow-[#00cfca]/25"
              >
                Try 3D Viewer
              </Link>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* 3D Viewer mockup */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
                <button className="px-4 py-1.5 text-sm bg-gray-100 rounded-lg text-gray-700">XY</button>
                <button className="px-4 py-1.5 text-sm text-gray-500 hover:bg-gray-50 rounded-lg">Z</button>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative">
                <div className="text-gray-300 text-sm">Drag to rotate</div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Drag to rotate
                </div>
              </div>
            </div>

            {/* Process card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
            >
              <p className="text-xs font-bold text-gray-900 tracking-wider mb-1">DESIGN, DIELINE, PRINT</p>
              <p className="text-[10px] text-[#00cfca] tracking-wider">TRANSFORMING VISION INTO REALITY!</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                    </svg>
                  </div>
                  <span className="text-[8px] text-gray-500 mt-1">Design</span>
                </div>
                <span className="text-gray-300">→</span>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border border-[#00cfca] rounded flex items-center justify-center bg-[#00cfca]/5">
                    <span className="text-[8px] font-bold text-[#00cfca]">MYLAR</span>
                  </div>
                  <span className="text-[8px] text-gray-500 mt-1">Dieline</span>
                </div>
                <span className="text-gray-300">→</span>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-red-500 rounded flex items-center justify-center">
                    <span className="text-[8px] font-bold text-white">MYLAR</span>
                  </div>
                  <span className="text-[8px] text-gray-500 mt-1">Print</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
