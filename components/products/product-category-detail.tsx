"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Leaf, Shield, Palette, Award, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

interface ProductCategoryDetailProps {
  slug: string
  category: {
    name: string
    description: string
  }
}

const products = [
  { name: "Classic Design", slug: "classic", features: ["Zipper closure", "Matte finish"], image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop" },
  { name: "Premium Finish", slug: "premium", features: ["Metallic effect", "Spot UV"], image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=400&fit=crop" },
  { name: "Eco-Friendly", slug: "eco-friendly", features: ["Recyclable", "Bio-based"], image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop" },
  { name: "Window Design", slug: "window", features: ["Clear window", "Product visibility"], image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop" },
  { name: "Kraft Paper", slug: "kraft", features: ["Natural look", "Sustainable"], image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop" },
  { name: "High Barrier", slug: "high-barrier", features: ["Oxygen barrier", "Extended shelf life"], image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop" },
  { name: "Child-Resistant", slug: "child-resistant", features: ["Safety lock", "Compliance"], image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" },
  { name: "Shaped Design", slug: "shaped", features: ["Custom shape", "Brand impact"], image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400&h=400&fit=crop" },
]

const valueProps = [
  {
    icon: Palette,
    title: "Full Customization",
    description: "Design your packaging with unlimited colors, finishes, and features."
  },
  {
    icon: Award,
    title: "Free Design Support",
    description: "Our design team helps you create the perfect packaging at no extra cost."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "Choose from recyclable, compostable, and sustainable materials."
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "BRC certified production with strict quality control standards."
  },
]

const coatings = [
  "Matte Lamination",
  "Gloss Lamination",
  "Soft Touch",
  "Spot UV",
  "Hot Stamping",
  "Embossing",
  "Debossing",
  "Holographic",
]

const printMethods = [
  "Rotogravure Printing",
  "Digital Printing",
  "Flexographic Printing",
  "Offset Printing",
]

const materials = [
  "PET/PE",
  "PET/AL/PE",
  "BOPP/CPP",
  "Kraft Paper/PE",
  "Nylon/PE",
  "EVOH Barrier",
  "Recyclable Mono-PE",
  "Bio-based PLA",
]

export function ProductCategoryDetail({ slug, category }: ProductCategoryDetailProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  // Drag handlers for smooth swiping
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    setIsAutoPlaying(false)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragOffset(clientX - dragStart)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    // Determine swipe direction based on drag distance
    if (dragOffset > 80) {
      goToPrev()
    } else if (dragOffset < -80) {
      goToNext()
    }
    setDragOffset(0)
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/products" className="text-gray-500 hover:text-[#00cfca]">Products</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">{category.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section - Three Column Layout */}
      <section className="relative bg-white py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left Column - Title & Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0f4c5c] leading-tight">
                Packaging solutions for {category.name.toLowerCase()}
              </h1>
              <div className="w-12 h-1 bg-[#00cfca] mt-4 mb-6" />
              <p className="text-gray-600 leading-relaxed">
                {category.description} Committed to innovative design and sustainability, our packaging not only stands out on the shelf but also meets today&apos;s consumer demands.
              </p>
            </motion.div>

            {/* Center Column - Round Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop" 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button 
                onClick={() => document.getElementById('product-carousel')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 w-12 h-12 rounded-full bg-[#00cfca] text-white flex items-center justify-center hover:bg-[#00b8b3] transition-colors shadow-lg"
              >
                <ChevronDown className="w-6 h-6" />
              </button>
            </motion.div>

            {/* Right Column - CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                <span className="w-8 h-0.5 bg-[#00cfca]" />
                <span className="w-2 h-0.5 bg-[#00cfca]" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#0f4c5c] mb-4">
                We offer<br />customized<br />solutions.
              </h2>
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-6">
                <span className="w-2 h-0.5 bg-[#00cfca]" />
                <span className="w-8 h-0.5 bg-[#00cfca]" />
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#0f4c5c] text-white font-semibold rounded-lg hover:bg-[#0a3a47] transition-colors"
              >
                Contact us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section id="product-carousel" className="relative py-16 lg:py-24 overflow-hidden">
        {/* Wave Background */}
        <div className="absolute inset-0">
          {/* Top wave transition - matching reference gray tones */}
          <svg className="absolute top-0 w-full h-40" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>
            <path fill="url(#waveGradient)" d="M0,0 C360,80 720,160 1080,120 C1260,100 1380,60 1440,40 L1440,0 L0,0 Z" />
          </svg>
          {/* Deep navy blue background */}
          <div className="absolute top-36 bottom-0 w-full bg-[#0a1628]" />
          {/* Bottom gradient glow - stage floor reflection */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(25, 50, 80, 0.9) 0%, rgba(15, 35, 60, 0.5) 30%, transparent 100%)',
            }}
          />
          {/* Central spotlight glow */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-72 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 120% 100% at 50% 100%, rgba(40, 70, 110, 0.7) 0%, rgba(30, 55, 90, 0.4) 30%, transparent 60%)',
            }}
          />
          {/* Bottom edge highlight line */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(100, 140, 180, 0.3) 30%, rgba(100, 140, 180, 0.3) 70%, transparent)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 pt-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Explore our {category.name.toLowerCase()} collection
            </h2>
          </motion.div>

          {/* Carousel */}
          <div className="relative" ref={carouselRef}>
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Products Display - Smooth Infinite Carousel */}
            <div 
              className="overflow-hidden py-8 px-16 cursor-grab active:cursor-grabbing"
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              {/* Container with relative positioning and fixed height */}
              <div className="relative h-80 lg:h-96 flex items-center justify-center">
                {products.map((product, index) => {
                  // Calculate distance from current center
                  let distance = index - currentIndex
                  // Handle wrap-around for infinite effect
                  if (distance > products.length / 2) distance -= products.length
                  if (distance < -products.length / 2) distance += products.length
                  
                  const isCenter = distance === 0
                  const isAdjacent = Math.abs(distance) === 1
                  const isVisible = Math.abs(distance) <= 2

                  if (!isVisible) return null

                  // Calculate position offset for smooth sliding
                  const baseOffset = distance * 200

                  return (
                    <motion.div
                      key={product.slug}
                      className="absolute"
                      animate={{
                        x: baseOffset + dragOffset,
                        scale: isCenter ? 1.15 : isAdjacent ? 0.9 : 0.7,
                        opacity: isCenter ? 1 : isAdjacent ? 0.7 : 0.4,
                        zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 0.8,
                      }}
                    >
                      <Link 
                        href={`/products/${slug}/${product.slug}`} 
                        className="block group"
                        onClick={(e) => {
                          if (!isCenter) {
                            e.preventDefault()
                            setIsAutoPlaying(false)
                            setCurrentIndex(index)
                          }
                        }}
                      >
                        <div 
                          className={`bg-white rounded-2xl overflow-hidden shadow-xl transition-shadow duration-300 ${
                            isCenter ? 'w-48 h-64 lg:w-56 lg:h-72 group-hover:shadow-2xl' : 'w-36 h-48 lg:w-44 lg:h-56'
                          }`}
                        >
                          <div className="w-full h-full p-3 flex flex-col items-center justify-center">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-4/5 object-contain pointer-events-none"
                              draggable={false}
                            />
                            {isCenter && (
                              <motion.p 
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mt-2 text-sm font-semibold text-gray-900 text-center"
                              >
                                {product.name}
                              </motion.p>
                            )}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#00cfca] w-6' 
                      : 'bg-white/40 hover:bg-white/60 w-2.5'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background with wave transitions */}
        <div className="absolute inset-0">
          {/* Top wave from dark blue to purple */}
          <svg className="absolute top-0 w-full h-24" viewBox="0 0 1440 96" preserveAspectRatio="none">
            <path fill="#0a1628" d="M0,0 L1440,0 L1440,20 C1200,80 720,96 0,40 Z" />
          </svg>
          {/* Deep purple background */}
          <div className="absolute top-20 bottom-20 w-full bg-[#1a0a3e]" />
          {/* Bottom wave transition */}
          <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 96" preserveAspectRatio="none">
            <path fill="#1a0a3e" d="M0,96 L1440,96 L1440,56 C1200,16 720,0 0,76 Z" />
            <path fill="#ffffff" d="M0,96 L1440,96 L1440,76 C1200,36 720,20 0,96 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                WE THINK YOU&apos;LL LIKE
              </h2>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#00cfca] mb-8">
                WORKING WITH US
              </h2>
              
              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  HongYi doesn&apos;t just have customers – we have partners. And as with every good partnership, we are invested in your success.
                </p>
                <p>
                  This is why we offer turn-key packaging solutions with every element, from extruding the film to package design, pre-press file preparation, plate making, printing, lamination, slitting and converting – all taking place at our manufacturing facility. We control every aspect of production to make sure we perfectly match your specifications and meet your timelines.
                </p>
                <p>
                  As your partner, we aim to be responsive and consistent. We will keep you updated on your projects from start to shipping and stay in touch between projects to ensure you are informed of trends, material or machinery developments and other industry news.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 bg-[#ff6b4a] hover:bg-[#ff5533] text-white px-8 py-4 rounded-full font-semibold transition-colors uppercase tracking-wide"
              >
                Let&apos;s Partner on a New Project
              </Link>
            </motion.div>

            {/* Right - Handshake with Icons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Central Handshake Icon */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                {/* Handshake SVG */}
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <g fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    {/* Left hand */}
                    <path d="M30,100 L50,100 L70,80 L90,80 L100,90" />
                    <path d="M50,100 L50,120 L70,140" />
                    {/* Right hand */}
                    <path d="M170,100 L150,100 L130,80 L110,80 L100,90" />
                    <path d="M150,100 L150,120 L130,140" />
                    {/* Handshake center */}
                    <path d="M70,90 C80,85 90,85 100,90 C110,85 120,85 130,90" />
                    <path d="M75,100 L85,95 L95,100 L105,95 L115,100 L125,95" />
                    {/* Cuffs */}
                    <rect x="25" y="95" width="30" height="15" rx="2" fill="white" />
                    <rect x="145" y="95" width="30" height="15" rx="2" fill="white" />
                  </g>
                </svg>

                {/* Surrounding Icons */}
                {/* Top Left - Lightbulb */}
                <div className="absolute -top-4 -left-8 lg:-left-12">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 text-green-400">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7zm2.9 11.1l-.9.6V16h-4v-2.3l-.9-.6C7.8 12.2 7 10.6 7 9c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.6-.8 3.2-2.1 4.1z"/>
                    </svg>
                  </div>
                </div>

                {/* Top Right - Target */}
                <div className="absolute -top-2 -right-4 lg:-right-8">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 text-pink-500">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-14c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </div>
                </div>

                {/* Right - Stars/Badge */}
                <div className="absolute top-1/4 -right-8 lg:-right-16">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 text-yellow-400">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  </div>
                </div>

                {/* Left - Gears */}
                <div className="absolute top-1/3 -left-10 lg:-left-16">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 text-yellow-400">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                    </svg>
                  </div>
                </div>

                {/* Bottom Left - Chart */}
                <div className="absolute bottom-8 -left-6 lg:-left-10">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 text-cyan-400">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 8h2v10h-2V11zm4-3h2v13h-2V8z"/>
                    </svg>
                  </div>
                </div>

                {/* Bottom Right - Clipboard */}
                <div className="absolute bottom-4 -right-4 lg:-right-10">
                  <div className="w-10 h-10 lg:w-14 lg:h-14 text-pink-400">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Every Style <span className="text-[#00cfca]">Imaginable</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of {category.name.toLowerCase()} styles, all fully customizable to match your brand.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/products/${slug}/${product.slug}`} className="group block">
                  <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden relative group-hover:shadow-lg transition-shadow">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#00cfca]/0 group-hover:bg-[#00cfca]/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-white font-semibold bg-[#00cfca] px-4 py-2 rounded-full transition-opacity shadow-lg">
                        View Details
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-[#00cfca] transition-colors">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span key={feature} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Build Your <span className="text-[#00cfca]">Dream Packaging</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl"
              >
                <div className="w-12 h-12 bg-[#00cfca]/10 rounded-xl flex items-center justify-center">
                  <prop.icon className="w-6 h-6 text-[#00cfca]" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{prop.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Options & Materials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Options & <span className="text-[#00cfca]">Materials</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Customize your packaging with a wide range of finishes, printing methods, and materials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Coatings & Finishes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-2xl"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Coatings & Finishes</h3>
              <div className="space-y-2">
                {coatings.map((coating) => (
                  <div key={coating} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00cfca]" />
                    <span className="text-sm text-gray-600">{coating}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Printing Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Printing Methods</h3>
              <div className="space-y-2">
                {printMethods.map((method) => (
                  <div key={method} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00cfca]" />
                    <span className="text-sm text-gray-600">{method}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Materials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Materials</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <div key={material} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00cfca]" />
                    <span className="text-sm text-gray-600">{material}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 bg-[#0f4c5c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Request a free quote and sample for your custom {category.name.toLowerCase()} today.
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
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
              >
                Browse All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
