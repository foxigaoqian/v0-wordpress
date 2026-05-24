"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorative circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 rounded-full border-[3px] border-gray-200/60" />
        <div className="absolute inset-8 rounded-full border border-gray-100/50" />
      </div>

      {/* Subtle background blurs */}
      <div className="absolute top-20 right-40 w-96 h-96 bg-[#00cfca]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#00cfca]/3 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-gray-500 tracking-wide mb-4"
            >
              Manufacturer and Exporter of
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight"
            >
              <span className="text-gray-900">Premium Quality</span>
              <br />
              <span className="text-gray-900">Packaging Pouches</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-base lg:text-lg text-gray-600 max-w-lg leading-relaxed"
            >
              Premium flexible packaging and bags, customized for your brand&apos;s unique needs, protecting your products with modern technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-2 h-12 px-8 bg-[#00cfca] text-white font-medium rounded-full hover:bg-[#00b8b3] transition-all shadow-lg shadow-[#00cfca]/25 hover:shadow-xl hover:shadow-[#00cfca]/30"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#products" 
                className="group inline-flex items-center gap-3 h-12 px-6 text-gray-700 hover:text-[#00cfca] transition-colors"
              >
                <span className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-[#00cfca] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider">Explore Products</span>
              </Link>
            </motion.div>

            {/* Pagination dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 flex items-center gap-2"
            >
              <span className="w-8 h-2 rounded-full bg-[#00cfca]" />
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              <span className="w-2 h-2 rounded-full bg-gray-300" />
            </motion.div>
          </div>

          {/* Right - Product images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:block"
          >
            <div className="relative w-full h-[400px] lg:h-[500px]">
              {/* Product pouches fan arrangement */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Pouch 1 - Yellow */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotate: -20 }}
                  animate={{ opacity: 1, y: 0, rotate: -15 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute left-[5%] top-[15%] w-24 lg:w-32 h-36 lg:h-44 z-10"
                >
                  <div className="w-full h-full bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-t-3xl rounded-b-lg shadow-2xl relative overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-yellow-600/30 rounded-full" />
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto bg-white/20 rounded-full mb-2" />
                        <div className="text-[8px] text-yellow-900/70 font-bold">DRY FRUITS</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Pouch 2 - Red */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotate: -10 }}
                  animate={{ opacity: 1, y: 0, rotate: -8 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute left-[18%] top-[10%] w-24 lg:w-32 h-40 lg:h-48 z-20"
                >
                  <div className="w-full h-full bg-gradient-to-b from-red-500 to-red-600 rounded-t-3xl rounded-b-lg shadow-2xl relative overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-red-700/30 rounded-full" />
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto bg-white/20 rounded-full mb-2" />
                        <div className="text-[8px] text-white/80 font-bold">PREMIUM</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Pouch 3 - Green (center, largest) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute left-[32%] top-[5%] w-28 lg:w-36 h-44 lg:h-56 z-30"
                >
                  <div className="w-full h-full bg-gradient-to-b from-green-400 to-green-500 rounded-t-3xl rounded-b-lg shadow-2xl relative overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-green-600/30 rounded-full" />
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-10 h-10 mx-auto bg-white/20 rounded-full mb-2" />
                        <div className="text-[10px] text-green-900/70 font-bold">PISTACHIO</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Pouch 4 - Blue */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotate: 10 }}
                  animate={{ opacity: 1, y: 0, rotate: 8 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute left-[50%] top-[10%] w-24 lg:w-32 h-40 lg:h-48 z-20"
                >
                  <div className="w-full h-full bg-gradient-to-b from-blue-600 to-blue-700 rounded-t-3xl rounded-b-lg shadow-2xl relative overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-blue-800/30 rounded-full" />
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto bg-white/20 rounded-full mb-2" />
                        <div className="text-[8px] text-white/80 font-bold">CASHEWS</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Pouch 5 - Orange */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotate: 20 }}
                  animate={{ opacity: 1, y: 0, rotate: 15 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="absolute left-[65%] top-[15%] w-24 lg:w-32 h-36 lg:h-44 z-10"
                >
                  <div className="w-full h-full bg-gradient-to-b from-orange-400 to-orange-500 rounded-t-3xl rounded-b-lg shadow-2xl relative overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-orange-600/30 rounded-full" />
                    <div className="absolute inset-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto bg-white/20 rounded-full mb-2" />
                        <div className="text-[8px] text-orange-900/70 font-bold">ALMONDS</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Background image preview */}
              <div className="absolute right-0 bottom-0 w-48 h-48 rounded-2xl overflow-hidden opacity-30 blur-sm">
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
