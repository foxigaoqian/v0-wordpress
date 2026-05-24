"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    subtitle: "Manufacturer and Exporter of",
    title: "Premium Quality",
    titleAccent: "Packaging Pouches",
    description: "Premium flexible packaging and bags, customized for your brand's unique needs, protecting your products with modern technology.",
    pouches: [
      { color: "from-yellow-400 to-yellow-500", label: "DRY FRUITS", rotate: -15, left: "5%", zIndex: 10 },
      { color: "from-red-500 to-red-600", label: "PREMIUM", rotate: -8, left: "18%", zIndex: 20 },
      { color: "from-green-400 to-green-500", label: "PISTACHIO", rotate: 0, left: "32%", zIndex: 30, large: true },
      { color: "from-blue-600 to-blue-700", label: "CASHEWS", rotate: 8, left: "50%", zIndex: 20 },
      { color: "from-orange-400 to-orange-500", label: "ALMONDS", rotate: 15, left: "65%", zIndex: 10 },
    ]
  },
  {
    subtitle: "Industry Leading",
    title: "Sustainable",
    titleAccent: "Packaging Solutions",
    description: "Eco-friendly materials and processes that reduce environmental impact while maintaining premium quality and protection.",
    pouches: [
      { color: "from-emerald-400 to-emerald-500", label: "ECO BAG", rotate: -12, left: "8%", zIndex: 10 },
      { color: "from-teal-500 to-teal-600", label: "ORGANIC", rotate: -5, left: "22%", zIndex: 20 },
      { color: "from-cyan-400 to-cyan-500", label: "GREEN", rotate: 0, left: "36%", zIndex: 30, large: true },
      { color: "from-lime-500 to-lime-600", label: "NATURAL", rotate: 5, left: "52%", zIndex: 20 },
      { color: "from-green-500 to-green-600", label: "RECYCLE", rotate: 12, left: "68%", zIndex: 10 },
    ]
  },
  {
    subtitle: "Custom Design",
    title: "Stand Up Pouches",
    titleAccent: "& Flat Bags",
    description: "Wide range of pouch formats including stand up pouches, flat bottom bags, side gusset bags, and more for every industry need.",
    pouches: [
      { color: "from-purple-400 to-purple-500", label: "COFFEE", rotate: -15, left: "5%", zIndex: 10 },
      { color: "from-pink-500 to-pink-600", label: "SNACKS", rotate: -8, left: "18%", zIndex: 20 },
      { color: "from-indigo-400 to-indigo-500", label: "PET FOOD", rotate: 0, left: "32%", zIndex: 30, large: true },
      { color: "from-violet-600 to-violet-700", label: "SPICES", rotate: 8, left: "50%", zIndex: 20 },
      { color: "from-fuchsia-400 to-fuchsia-500", label: "FROZEN", rotate: 15, left: "65%", zIndex: 10 },
    ]
  },
  {
    subtitle: "High Barrier",
    title: "Food Grade",
    titleAccent: "Packaging Films",
    description: "Multi-layer laminated films with excellent barrier properties to protect against moisture, oxygen, and UV light.",
    pouches: [
      { color: "from-amber-400 to-amber-500", label: "CHIPS", rotate: -12, left: "8%", zIndex: 10 },
      { color: "from-rose-500 to-rose-600", label: "CANDY", rotate: -5, left: "22%", zIndex: 20 },
      { color: "from-sky-400 to-sky-500", label: "BEVERAGE", rotate: 0, left: "36%", zIndex: 30, large: true },
      { color: "from-orange-500 to-orange-600", label: "SAUCE", rotate: 5, left: "52%", zIndex: 20 },
      { color: "from-red-400 to-red-500", label: "MEAT", rotate: 12, left: "68%", zIndex: 10 },
    ]
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section 
      className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
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
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm text-gray-500 tracking-wide mb-4">
                  {slide.subtitle}
                </p>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
                  <span className="text-gray-900">{slide.title}</span>
                  <br />
                  <span className="text-gray-900">{slide.titleAccent}</span>
                </h1>

                <p className="mt-8 text-base lg:text-lg text-gray-600 max-w-lg leading-relaxed">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>

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

            {/* Pagination dots with navigation */}
            <div className="mt-16 flex items-center gap-4">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#00cfca] hover:text-[#00cfca] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "w-8 bg-[#00cfca]" : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#00cfca] hover:text-[#00cfca] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right - Product images with carousel */}
          <div className="relative lg:block">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {slide.pouches.map((pouch, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        rotate: pouch.rotate 
                      }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      style={{ 
                        left: pouch.left, 
                        zIndex: pouch.zIndex,
                        top: pouch.large ? "5%" : "15%"
                      }}
                      className={`absolute ${pouch.large ? "w-28 lg:w-36 h-44 lg:h-56" : "w-24 lg:w-32 h-36 lg:h-44"}`}
                    >
                      <div className={`w-full h-full bg-gradient-to-b ${pouch.color} rounded-t-3xl rounded-b-lg shadow-2xl relative overflow-hidden`}>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-black/10 rounded-full" />
                        <div className="absolute inset-4 flex items-center justify-center">
                          <div className="text-center">
                            <div className={`${pouch.large ? "w-10 h-10" : "w-8 h-8"} mx-auto bg-white/20 rounded-full mb-2`} />
                            <div className={`${pouch.large ? "text-[10px]" : "text-[8px]"} text-white/80 font-bold`}>{pouch.label}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Background image preview */}
              <div className="absolute right-0 bottom-0 w-48 h-48 rounded-2xl overflow-hidden opacity-30 blur-sm">
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-[#00cfca]"
          style={{ animationPlayState: isAutoPlaying ? "running" : "paused" }}
        />
      </div>
    </section>
  );
}
