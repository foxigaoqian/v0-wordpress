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
  const [currentIndex, setCurrentIndex] = useState(2)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
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

  const getVisibleProducts = () => {
    const visible = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + products.length) % products.length
      visible.push({ ...products[index], position: i, originalIndex: index })
    }
    return visible
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
          <svg className="absolute top-0 w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#f3f4f6" d="M0,0 C480,120 960,120 1440,0 L1440,0 L0,0 Z" />
          </svg>
          <div className="absolute top-32 bottom-0 w-full bg-gradient-to-b from-[#0f4c5c] to-[#0a3a47]" />
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

            {/* Products Display */}
            <div className="flex items-center justify-center gap-4 lg:gap-8 py-8 px-16">
              {getVisibleProducts().map((product) => {
                const isCenter = product.position === 0
                const isAdjacent = Math.abs(product.position) === 1
                const isOuter = Math.abs(product.position) === 2

                return (
                  <motion.div
                    key={`${product.slug}-${product.position}`}
                    initial={false}
                    animate={{
                      scale: isCenter ? 1.2 : isAdjacent ? 0.9 : 0.7,
                      opacity: isCenter ? 1 : isAdjacent ? 0.8 : 0.5,
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`flex-shrink-0 ${isOuter ? 'hidden lg:block' : ''}`}
                  >
                    <Link href={`/products/${slug}/${product.slug}`} className="block group">
                      <div 
                        className={`bg-white rounded-2xl overflow-hidden shadow-xl transition-shadow ${
                          isCenter ? 'w-56 h-72 lg:w-72 lg:h-96 group-hover:shadow-2xl' : 'w-40 h-52 lg:w-48 lg:h-64'
                        }`}
                      >
                        <div className="w-full h-full p-4 flex flex-col items-center justify-center">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-4/5 object-contain"
                          />
                          {isCenter && (
                            <p className="mt-2 text-sm font-semibold text-gray-900 text-center">{product.name}</p>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
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
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-[#00cfca] w-4' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
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
