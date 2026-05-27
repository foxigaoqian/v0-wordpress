"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
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
          {/* Top wave - multi-layer effect like reference */}
          <svg className="absolute top-0 w-full h-40" viewBox="0 0 1440 160" preserveAspectRatio="none">
            {/* Back layer - lighter gray */}
            <path 
              fill="#c4c9d4" 
              d="M0,0 L1440,0 L1440,60 Q1200,20 960,50 Q720,80 480,40 Q240,0 0,30 Z" 
            />
            {/* Middle layer - medium gray blue */}
            <path 
              fill="#8892a8" 
              d="M0,0 L1440,0 L1440,80 Q1300,40 1100,70 Q900,100 700,60 Q500,20 300,50 Q100,80 0,50 Z" 
            />
            {/* Front layer - dark blue gray */}
            <path 
              fill="#4a5568" 
              d="M0,0 L1440,0 L1440,100 Q1250,50 1000,90 Q750,130 500,80 Q250,30 0,70 Z" 
            />
            {/* Connection to purple */}
            <path 
              fill="#1a0a3e" 
              d="M0,70 Q250,30 500,80 Q750,130 1000,90 Q1250,50 1440,100 L1440,160 L0,160 Z" 
            />
          </svg>
          
          {/* Deep purple background */}
          <div className="absolute top-36 bottom-24 w-full bg-[#1a0a3e]" />
          
          {/* Bottom wave transition to white */}
          <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1440 128" preserveAspectRatio="none">
            {/* Purple continuation */}
            <path 
              fill="#1a0a3e" 
              d="M0,0 L1440,0 L1440,60 Q1200,100 960,70 Q720,40 480,80 Q240,120 0,90 Z" 
            />
            {/* White wave coming from bottom */}
            <path 
              fill="#f9fafb" 
              d="M0,90 Q240,120 480,80 Q720,40 960,70 Q1200,100 1440,60 L1440,128 L0,128 Z" 
            />
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

      {/* Sustainability Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Green World */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 mb-4 flex items-center justify-center">
                {/* Brush stroke background */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" preserveAspectRatio="none">
                  <path 
                    d="M20,60 Q40,20 80,40 T140,50 T180,40 Q190,60 170,80 T100,90 T30,80 Q10,70 20,60" 
                    fill="rgba(134, 239, 172, 0.3)" 
                  />
                  <path 
                    d="M30,50 Q60,30 100,45 T160,55 Q175,70 150,85 T80,80 T25,65 Q15,55 30,50" 
                    fill="rgba(134, 239, 172, 0.2)" 
                  />
                </svg>
                {/* Icon */}
                <svg className="relative w-20 h-20 text-green-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="32" cy="32" r="20" />
                  <path d="M22,32 Q32,20 42,32 Q32,44 22,32" />
                  <path d="M32,12 L32,8 M32,56 L32,52" />
                  <path d="M52,32 L56,32 M8,32 L12,32" />
                  <path d="M28,18 Q20,22 22,32" />
                  <path d="M38,14 C42,18 44,24 42,32" />
                  <path d="M26,46 C30,50 36,50 40,46" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Green World</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                We step into a clean world with our packaging. While we show environmental awareness with our recyclable design, we produce with sustainable materials. We offer environmentally friendly solutions with our goal of leaving a clean world for future generations.
              </p>
            </motion.div>

            {/* Savings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 mb-4 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" preserveAspectRatio="none">
                  <path 
                    d="M40,30 Q70,10 100,30 T160,40 Q180,60 160,80 T100,85 T40,70 Q20,50 40,30" 
                    fill="rgba(134, 239, 172, 0.3)" 
                  />
                </svg>
                <svg className="relative w-20 h-20 text-green-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M32,8 L32,20 M32,44 L32,56" />
                  <circle cx="32" cy="32" r="8" />
                  <path d="M20,20 L44,44 M44,20 L20,44" strokeWidth="0.5" />
                  <ellipse cx="32" cy="14" rx="6" ry="3" />
                  <ellipse cx="32" cy="50" rx="6" ry="3" />
                  <path d="M18,28 Q14,32 18,36" />
                  <path d="M46,28 Q50,32 46,36" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Savings</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Our packaging combines economy and environmental awareness. Our lightweight and efficient design saves energy and costs, contributing to a sustainable future.
              </p>
            </motion.div>

            {/* Waste Of Natural Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 mb-4 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" preserveAspectRatio="none">
                  <path 
                    d="M30,40 Q50,15 90,30 T150,35 T180,50 Q185,70 160,85 T90,90 T30,75 Q15,60 30,40" 
                    fill="rgba(134, 239, 172, 0.35)" 
                  />
                </svg>
                <svg className="relative w-20 h-20 text-green-600" viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32,8 L40,20 L52,20 L44,32 L52,44 L40,44 L32,56 L24,44 L12,44 L20,32 L12,20 L24,20 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M32,18 C38,18 42,24 42,32 L36,32 L40,38 L44,32 L38,32 C38,26 35,22 32,22" fill="currentColor" />
                  <path d="M32,46 C26,46 22,40 22,32 L28,32 L24,26 L20,32 L26,32 C26,38 29,42 32,42" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Waste Of Natural Resources</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                We protect natural resources with our packaging. We take responsibility to prevent waste of resources through sustainable production and recycling approaches.
              </p>
            </motion.div>

            {/* Natural and Vibrant Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 mb-4 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" preserveAspectRatio="none">
                  <path 
                    d="M25,50 Q45,20 85,35 T145,40 T175,55 Q185,75 155,90 T85,85 T25,70 Q10,60 25,50" 
                    fill="rgba(134, 239, 172, 0.3)" 
                  />
                </svg>
                <svg className="relative w-20 h-20 text-green-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M32,56 C32,56 20,48 16,36 C12,24 20,12 32,12 C44,12 52,24 48,36 C44,48 32,56 32,56" />
                  <path d="M32,56 L32,48" />
                  <path d="M32,44 C28,40 26,34 28,28" />
                  <path d="M32,40 C36,36 38,30 36,24" />
                  <circle cx="24" cy="32" r="2" fill="currentColor" />
                  <circle cx="40" cy="28" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Natural and Vibrant Design</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Our packaging meets recycling by respecting the richness of nature. Designed with sustainable materials, our packaging supports our goal of protecting the environment and leaving a clean world to future generations.
              </p>
            </motion.div>

            {/* Freshness and Preservation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 mb-4 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" preserveAspectRatio="none">
                  <path 
                    d="M35,45 Q55,20 95,35 T155,40 Q175,60 155,80 T95,85 T35,70 Q15,55 35,45" 
                    fill="rgba(134, 239, 172, 0.3)" 
                  />
                </svg>
                <svg className="relative w-20 h-20 text-green-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M32,8 L32,16" />
                  <path d="M24,56 C24,56 16,48 16,36 C16,24 24,16 32,16 C40,16 48,24 48,36 C48,48 40,56 40,56" />
                  <path d="M24,56 L40,56" />
                  <path d="M28,56 L28,60 L36,60 L36,56" />
                  <path d="M32,24 L32,36 L40,36" />
                  <circle cx="22" cy="12" r="3" />
                  <circle cx="42" cy="14" r="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Freshness and Preservation</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Our packaging protects the freshness and quality of your products against external factors with its carefully designed structure. With our eco-friendly materials and recyclable design, we both offer fresh products and contribute to environmental awareness.
              </p>
            </motion.div>

            {/* Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 mb-4 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" preserveAspectRatio="none">
                  <path 
                    d="M40,35 Q65,15 100,30 T160,40 Q180,60 160,80 T100,85 T40,70 Q20,55 40,35" 
                    fill="rgba(134, 239, 172, 0.35)" 
                  />
                </svg>
                <svg className="relative w-20 h-20 text-green-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M24,48 L24,52 L40,52 L40,48" />
                  <path d="M26,52 L26,56 L38,56 L38,52" />
                  <path d="M24,48 C20,44 18,38 18,32 C18,22 24,14 32,14 C40,14 46,22 46,32 C46,38 44,44 40,48" />
                  <path d="M32,14 L32,8" />
                  <path d="M20,18 L16,14" />
                  <path d="M44,18 L48,14" />
                  <path d="M32,24 C28,24 26,28 26,32" />
                  <path d="M36,28 Q38,26 40,28" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Innovation</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Our packaging reflects our innovative steps in sustainability. With innovative design and recycling technologies, we offer solutions for the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-end justify-center gap-12 lg:gap-20"
          >
            {products.slice(0, 2).map((product, index) => (
              <Link 
                key={product.slug} 
                href={`/products/${slug}/${product.slug}`}
                className="group text-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className={`${index === 0 ? 'h-64 w-48' : 'h-72 w-56'} lg:${index === 0 ? 'h-80 w-60' : 'h-96 w-72'} mx-auto mb-6 transition-transform duration-300 group-hover:scale-105`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                  <p className="text-gray-700 text-sm lg:text-base font-medium group-hover:text-[#00cfca] transition-colors">
                    {product.name}
                  </p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Extras Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Green gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#a3c9a8] via-[#a3c9a8] to-white" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-gray-800 text-center mb-16 lg:mb-20 italic"
          >
            Custom extras for your packaging
          </motion.h2>

          {/* Product with feature callouts */}
          <div className="relative flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
            {/* Central Product Image - Stand Up Pouch SVG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="w-48 lg:w-64 h-72 lg:h-96">
                <svg viewBox="0 0 180 280" className="w-full h-full drop-shadow-2xl">
                  <defs>
                    <linearGradient id="pouchGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#d4d4d4" />
                      <stop offset="25%" stopColor="#f0f0f0" />
                      <stop offset="50%" stopColor="#fafafa" />
                      <stop offset="75%" stopColor="#f0f0f0" />
                      <stop offset="100%" stopColor="#c0c0c0" />
                    </linearGradient>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="10" stdDeviation="10" floodOpacity="0.15"/>
                    </filter>
                  </defs>
                  {/* Pouch body */}
                  <path 
                    d="M30,25 L150,25 L150,30 L155,30 L155,42 L150,42 L150,250 Q150,270 90,275 Q30,270 30,250 L30,42 L25,42 L25,30 L30,30 Z" 
                    fill="url(#pouchGrad)"
                    filter="url(#shadow)"
                  />
                  {/* Top seal line */}
                  <rect x="30" y="25" width="120" height="6" fill="#e8e8e8" />
                  {/* Eurohole */}
                  <ellipse cx="90" cy="15" rx="14" ry="7" fill="#a3c9a8" />
                  {/* Zipper */}
                  <rect x="35" y="48" width="110" height="4" fill="#d0d0d0" rx="2" />
                  <line x1="35" y1="50" x2="145" y2="50" stroke="#bbb" strokeWidth="1" />
                  {/* Logo */}
                  <circle cx="90" cy="150" r="30" fill="none" stroke="#e5e5e5" strokeWidth="1" />
                  <path d="M80,135 Q72,155 90,170 Q90,150 105,135 Q97,148 80,135" fill="#7cb083" />
                  <path d="M90,170 Q108,163 115,175 Q102,168 90,170" fill="#2d5a3d" />
                </svg>
              </div>
            </motion.div>

            {/* Feature Callouts */}
            {/* Eurohole - Top Center */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 lg:top-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
              <span className="text-sm lg:text-base text-gray-700 font-medium mb-2">Eurohole</span>
              <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-pink-300 flex items-center justify-center text-white font-bold text-lg shadow-md">
                +
              </div>
            </motion.div>

            {/* Rounded corners - Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="absolute top-16 lg:top-20 right-2 lg:right-12 xl:right-24 flex items-center gap-2"
            >
              <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm lg:text-base text-gray-700 font-medium">Rounded corners</span>
            </motion.div>

            {/* Tear notch - Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute top-28 lg:top-36 left-2 lg:left-12 xl:left-24 flex items-center gap-2"
            >
              <span className="text-sm lg:text-base text-gray-700 font-medium">Tear notch</span>
              <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </motion.div>

            {/* Aroma Valve - Center Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="absolute top-40 lg:top-48 left-1/2 -translate-x-20 lg:-translate-x-24 flex flex-col items-center"
            >
              <span className="text-sm lg:text-base text-gray-700 font-medium mb-2">Aroma Valve</span>
              <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-pink-300 flex items-center justify-center text-white font-bold text-lg shadow-md">
                +
              </div>
            </motion.div>

            {/* Zipper - Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute top-44 lg:top-52 right-0 lg:right-8 xl:right-16 flex items-center gap-2"
            >
              <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-pink-300 flex items-center justify-center text-white font-bold text-lg shadow-md">
                +
              </div>
              <span className="text-sm lg:text-base text-gray-700 font-medium">Zipper / Hook to hook Zipper</span>
            </motion.div>

            {/* Made for Recycling seal - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="absolute bottom-8 lg:bottom-16 right-4 lg:right-16 xl:right-28 flex items-center gap-2"
            >
              <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-pink-300 flex items-center justify-center text-white font-bold text-lg shadow-md">
                +
              </div>
              <span className="text-sm lg:text-base text-gray-700 font-medium">Made for Recycling seal</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Film Types Grid Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'White PP film', desc: 'Our PP white film sets new standards in packaging. Its pure white finish ensures vibrant colors and uniform color coverage. With a white print carrier, this film creates a clean...' },
              { name: 'Metallic PP film', desc: 'Our PP metallic film combines striking metallic effects with practical features, turning any packaging into a highlight. Perfect for products that...' },
              { name: 'Transparent PP film', desc: 'Our PP transparent film offers the perfect combination of functional protection and optical clarity. The transparent structure allows...' },
              { name: 'Pearl white PP film', desc: 'Our PP pearl white film offers not only an elegant pearlescent appearance but also combines aesthetics with outstanding functional properties. Its multilayer...' },
              { name: 'PET/PE transparent', desc: 'Our PET/PE transparent film combines robust functionality with a window-like appearance. This packaging solution is ideal for products that need to be visually...' },
              { name: 'PET/PE metallic', desc: 'Our PET/PE metallic film has long proven itself as a reliable packaging solution. With its stunning metallic appearance and exceptional durability, it offers...' },
            ].map((film, index) => (
              <motion.div
                key={film.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative h-52 mb-4 flex items-center justify-center">
                  {/* Recycling badge */}
                  <div className="absolute top-0 right-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center z-10">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <span className="absolute text-white text-xs font-bold mt-1">100%</span>
                  </div>
                  {/* Pouch illustration */}
                  <svg viewBox="0 0 120 180" className="h-full w-auto drop-shadow-lg">
                    <defs>
                      <linearGradient id={`filmGrad${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c0c0c0" />
                        <stop offset="30%" stopColor="#e8e8e8" />
                        <stop offset="50%" stopColor="#f5f5f5" />
                        <stop offset="70%" stopColor="#e0e0e0" />
                        <stop offset="100%" stopColor="#b0b0b0" />
                      </linearGradient>
                    </defs>
                    <path d="M20,15 L100,15 L100,20 L105,20 L105,30 L100,30 L100,165 Q100,175 60,178 Q20,175 20,165 L20,30 L15,30 L15,20 L20,20 Z" fill={`url(#filmGrad${index})`} />
                    <rect x="20" y="15" width="80" height="5" fill="#d0d0d0" />
                    <ellipse cx="60" cy="10" rx="10" ry="5" fill="#e8e8e8" stroke="#ccc" />
                    <line x1="25" y1="35" x2="95" y2="35" stroke="#bbb" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{film.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 px-2">{film.desc}</p>
                <button className="bg-pink-200 hover:bg-pink-300 text-gray-800 px-6 py-2 rounded-full text-sm font-medium transition-colors">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimum Packaging Steps Section */}
      <section className="py-20 lg:py-28 bg-[#d5e5d5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 italic leading-tight">
                Optimum packaging solution for your food supplements
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Our stand-up pouches offer you the flexibility to show off your product design to its best advantage. With our customized solutions, you can ensure that your food supplements always appear in the best light and are optimally protected.
              </p>
            </motion.div>

            {/* Right - Steps */}
            <div className="space-y-10">
              {[
                { num: '1', title: 'Choose your materials and sizes', desc: 'Whether white, transparent or metallic – we have the right material for your requirements. Our pouches are available in different sizes so that you get exactly what you need.', icon: 'layers' },
                { num: '2', title: 'Create your unique design', desc: 'Use our Pouch Configurator to build your packaging. You can upload and customize your design with just a few clicks. This ensures that your brand and product information are presented clearly and attractively.', icon: 'pen' },
                { num: '3', title: 'Sustainable and efficient', desc: 'Our packaging is not only practical, but also environmental-friendly. With recyclable materials they help to reduce resource consumption and emissions.', icon: 'recycle' },
              ].map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 flex items-start gap-2">
                    <span className="text-5xl lg:text-6xl font-bold text-green-600/30">{step.num}</span>
                    <div className="w-10 h-10 mt-2">
                      <svg className="w-full h-full text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        {step.icon === 'layers' && <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />}
                        {step.icon === 'pen' && <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />}
                        {step.icon === 'recycle' && <path d="M7 19H4.815a1.83 1.83 0 01-1.57-.881 1.785 1.785 0 01-.004-1.784L7.196 9.5M14.5 15.5l3.955 6.835a1.83 1.83 0 001.57.881H20M10.5 4.5l-3.955 6.835M14 19l3-3M7 19l3 3M21 12l-3-3M21 12l-3 3M12 2l3 3M12 2l-3 3" />}
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book Expert Section */}
      <section className="py-20 lg:py-28 bg-[#8fb98f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <svg className="w-20 h-20 text-gray-800" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="40" cy="35" r="8" strokeDasharray="4 2" />
                  <path d="M25,35 L35,35" strokeDasharray="4 2" />
                  <path d="M45,35 L55,35" strokeDasharray="4 2" />
                  <polygon points="40,45 55,65 40,60 25,65" fill="currentColor" />
                </svg>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Book a Pouch Expert
              </h2>
              <p className="text-gray-800 text-lg">
                Do you need personal advice, help or guidance from one of our experts?
              </p>
            </motion.div>

            {/* Right - Calendar Widget Mock */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="bg-gray-100 p-4 border-b">
                <div className="flex items-center justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-red-400" />
                    <span className="text-sm text-gray-600">Select Time</span>
                  </div>
                  <div className="w-24 h-0.5 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                    <span className="text-sm text-gray-600">Your Info</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900">Meet with Expert</p>
                    <p className="text-gray-500">May 2026</p>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <span key={day} className="text-gray-500 font-medium">{day}</span>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => (
                    <button 
                      key={i} 
                      className={`p-2 rounded-full ${i + 1 === 27 ? 'bg-gray-800 text-white' : 'hover:bg-gray-100'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Right Material Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 italic leading-tight mb-8">
                The right material for every content and every design
              </h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  We rely on a carefully selected range of materials that have proven themselves in practice. Our materials have been specifically selected to meet the different requirements of food supplements.
                </p>
                <p>
                  Whether it&apos;s packaging for sensitive vitamins, long-lasting minerals or high-quality herbal extracts, our materials offer optimal properties such as barrier functions against moisture, oxygen and other environmental influences. This keeps your food supplements fresh and effective at all times.
                </p>
              </div>
            </motion.div>

            {/* Right - Product Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-64 lg:w-80">
                <svg viewBox="0 0 200 300" className="w-full h-auto drop-shadow-xl">
                  <defs>
                    <linearGradient id="transparentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(200,200,200,0.3)" />
                      <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="100%" stopColor="rgba(180,180,180,0.3)" />
                    </linearGradient>
                  </defs>
                  <path d="M40,25 L160,25 L160,30 L165,30 L165,45 L160,45 L160,270 Q160,285 100,290 Q40,285 40,270 L40,45 L35,45 L35,30 L40,30 Z" fill="url(#transparentGrad)" stroke="#ccc" strokeWidth="1" />
                  <ellipse cx="100" cy="18" rx="15" ry="7" fill="#e8e8e8" stroke="#bbb" />
                  <rect x="45" y="50" width="110" height="4" fill="#ddd" rx="2" />
                  {/* Apricots inside */}
                  {[
                    { cx: 80, cy: 180, r: 18 },
                    { cx: 120, cy: 175, r: 16 },
                    { cx: 100, cy: 200, r: 17 },
                    { cx: 70, cy: 210, r: 15 },
                    { cx: 130, cy: 205, r: 16 },
                    { cx: 90, cy: 230, r: 14 },
                    { cx: 115, cy: 235, r: 15 },
                    { cx: 100, cy: 150, r: 16 },
                  ].map((apricot, i) => (
                    <ellipse key={i} cx={apricot.cx} cy={apricot.cy} rx={apricot.r} ry={apricot.r * 0.8} fill="#f4a460" opacity="0.9" />
                  ))}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-gray-800 mb-12"
          >
            Still have questions? Here<br />are the answers!
          </motion.h2>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <span className="text-xl font-semibold text-gray-900">FAQ</span>
            </div>
            <div className="lg:col-span-3 space-y-4">
              {[
                { q: 'How do the stand-up pouches protect my food supplements?', a: 'Our stand-up pouches provide a high barrier against moisture, oxygen and UV rays to preserve the freshness and effectiveness of your food supplements.', open: true },
                { q: 'Are your stand-up pouches suitable for transport?', a: 'Yes, our pouches are designed to withstand shipping and handling while protecting your products.' },
                { q: 'What are the special advantages of stand-up pouches for food supplements?', a: 'Stand-up pouches offer excellent barrier properties, are lightweight, and provide great shelf presence.' },
                { q: 'Are the stand-up pouches food-safe?', a: 'All our pouches are made from food-grade materials and comply with relevant safety regulations.' },
                { q: 'What sizes are available?', a: 'We offer a wide range of sizes to accommodate different product quantities and requirements.' },
                { q: 'Can I order a sample pack?', a: 'Yes, you can order sample packs to evaluate our products before placing a larger order.' },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`border-b border-gray-200 ${faq.open ? 'bg-gray-100/50' : ''} -mx-4 px-4 py-4`}
                >
                  <button className="w-full flex items-center justify-between text-left">
                    <span className="font-medium text-gray-900">{faq.q}</span>
                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 ml-4">
                      <svg className={`w-4 h-4 text-gray-500 transition-transform ${faq.open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {faq.open && (
                    <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Carousel Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-gray-800 italic"
            >
              Packaging Solution<br />For Every Industry
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed lg:pt-4"
            >
              Discover custom printed pouch solutions for every industry. Whether food, cosmetics, pet food or CBD and tobacco – at HongYi you will find the perfect packaging for your products. We focus on quality, sustainability and innovation.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { name: 'Accessories', letters: 'ACC\nESS\nOIR\nES' },
              { name: 'Small Items', letters: 'SM\nALL\nPAR\nTS' },
              { name: 'Food Supplements', letters: 'S\nU\nP' },
              { name: 'Coffee', letters: 'CO\nFF\nEE' },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-[#d5e5d5] rounded-2xl aspect-square flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow">
                  <div className="w-32 h-48 bg-white rounded-lg shadow-md flex items-center justify-center relative overflow-hidden">
                    <span className="text-2xl font-bold text-green-600/20 whitespace-pre-line text-center leading-tight">{industry.letters}</span>
                  </div>
                </div>
                <p className="text-center mt-4 font-medium text-gray-800">{industry.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="bg-pink-200 hover:bg-pink-300 text-gray-800 px-6 py-3 rounded-full font-medium transition-colors">
              See all industries
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Samples Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left - Product Images */}
              <div className="flex items-end justify-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-md ${i === 2 || i === 3 ? 'w-20 h-40' : 'w-14 h-32'}`} />
                ))}
              </div>
              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Check out<br />our samples!
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Do you want to make sure that our pouches fit your food supplements perfectly? Order our sample pack now and receive a selection of high-quality stand-up pouches in various sizes and materials. Convince yourself of the quality and versatility of our packaging solutions.
                </p>
                <button className="bg-pink-200 hover:bg-pink-300 text-gray-800 px-8 py-3 rounded-full font-medium transition-colors">
                  Order Now
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-[#a3c9a8] rounded-3xl p-10 lg:p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-gray-800 italic mb-6 max-w-3xl mx-auto leading-tight"
            >
              Our environmental-friendly packaging solution for your food supplements
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-700 leading-relaxed max-w-2xl mx-auto"
            >
              Sustainability is a decisive factor for the quality of our packaging for food supplements. With our packaging made from mono-material and the <span className="underline">&quot;Made for Recycling&quot;</span> seal, we are sending out a strong signal in favor of environmental protection and resource conservation.
            </motion.p>
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
