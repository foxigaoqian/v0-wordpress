"use client";

import { motion } from "framer-motion";
import { Zap, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

export function VisualizeSection() {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00cfca]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-1.5 bg-[#00cfca] mb-10"
            />
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Visualize Before
            </h2>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#00cfca] leading-[1.1] tracking-tight mt-2">
              You Produce.
            </h2>
            
            <p className="mt-10 text-xl text-gray-500 leading-relaxed max-w-lg">
              Eliminate decision risk. Our 3D preview technology lets you rotate, zoom, and inspect your custom packaging exactly as it will roll off the line.
            </p>

            <div className="mt-14 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00cfca]/20 to-[#00cfca]/5 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-[#00cfca]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Dielines</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">Download accurate templates in seconds for any packaging format.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00cfca]/20 to-[#00cfca]/5 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-[#00cfca]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Live Rendering</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">See matte, gloss, or metallic finishes instantly before production.</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14"
            >
              <Link
                href="#viewer"
                className="inline-flex items-center gap-3 h-16 px-10 bg-[#00cfca] text-white text-lg font-semibold rounded-full hover:bg-[#00b8b3] transition-all shadow-xl shadow-[#00cfca]/30 hover:shadow-2xl hover:shadow-[#00cfca]/40 hover:-translate-y-1"
              >
                Try 3D Viewer
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* 3D Viewer mockup */}
            <div className="bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-3 px-8 py-5 border-b border-gray-100 bg-gray-50/50">
                <button className="px-5 py-2 text-sm font-medium bg-white rounded-xl text-gray-900 shadow-sm border border-gray-100">XY</button>
                <button className="px-5 py-2 text-sm font-medium text-gray-400 hover:bg-white hover:text-gray-900 rounded-xl transition-colors">Z</button>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative p-8">
                {/* Placeholder 3D preview */}
                <div className="w-48 h-64 bg-gradient-to-b from-[#00cfca]/20 to-[#00cfca]/5 rounded-2xl border-2 border-dashed border-[#00cfca]/30 flex items-center justify-center">
                  <span className="text-[#00cfca]/50 text-sm font-medium">3D Preview</span>
                </div>
                
                <div className="absolute bottom-6 right-6 flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Drag to rotate
                </div>
              </div>
            </div>

            {/* Process card - Below the 3D viewer */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
            >
              {/* Title section with proper spacing */}
              <div className="mb-8">
                <h4 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
                  DESIGN, DIELINE, PRINT
                </h4>
                <p className="text-sm font-semibold text-[#00cfca] tracking-widest mt-3 uppercase">
                  Transforming Vision Into Reality!
                </p>
              </div>
              
              {/* Process flow */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-gray-200 rounded-xl flex items-center justify-center bg-gray-50">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5" />
                      <path d="M4 9h16" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 mt-3">Design</span>
                </div>
                
                <svg className="w-8 h-8 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 border-2 border-[#00cfca] rounded-xl flex items-center justify-center bg-[#00cfca]/10">
                    <span className="text-sm font-black text-[#00cfca]">MYLAR</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 mt-3">Dieline</span>
                </div>
                
                <svg className="w-8 h-8 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
                    <span className="text-sm font-black text-white">MYLAR</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 mt-3">Print</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
