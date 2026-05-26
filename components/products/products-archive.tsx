"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, Zap } from "lucide-react"
import Link from "next/link"
import { useRef, useState } from "react"

const productCategories = [
  {
    id: "stand-up-pouch",
    name: "Stand Up Pouch",
    description: "Versatile pouches that stand upright on shelves, perfect for food, snacks, and retail products.",
    products: [
      { name: "Classic Stand Up Pouch", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=400&fit=crop" },
      { name: "Zipper Stand Up Pouch", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=400&fit=crop" },
      { name: "Spout Stand Up Pouch", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop" },
      { name: "Window Stand Up Pouch", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop" },
    ]
  },
  {
    id: "flat-bottom-pouch",
    name: "Flat Bottom Pouch",
    description: "Box-style pouches with a flat base for superior shelf stability and premium presentation.",
    products: [
      { name: "Coffee Flat Bottom Bag", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop" },
      { name: "Pet Food Flat Bottom", image: "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?w=400&h=400&fit=crop" },
      { name: "Snack Flat Bottom Bag", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop" },
    ]
  },
  {
    id: "retort-pouch",
    name: "Retort Pouch",
    description: "High-temperature resistant pouches for sterilized food products with extended shelf life.",
    products: [
      { name: "Standard Retort Pouch", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop" },
      { name: "Shaped Retort Pouch", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=400&fit=crop" },
      { name: "Spout Retort Pouch", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop" },
    ]
  },
  {
    id: "spout-pouch",
    name: "Spout Pouch",
    description: "Convenient pouches with integrated spouts for liquid and semi-liquid products.",
    products: [
      { name: "Beverage Spout Pouch", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop" },
      { name: "Baby Food Spout Pouch", image: "https://images.unsplash.com/photo-1544961371-516024f8e267?w=400&h=400&fit=crop" },
      { name: "Sauce Spout Pouch", image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&h=400&fit=crop" },
    ]
  },
  {
    id: "roll-stock-films",
    name: "Roll Stock & Lidding Films",
    description: "High-quality laminated films for automatic packaging machines and lidding applications.",
    products: [
      { name: "Printed Roll Stock", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop" },
      { name: "Lidding Film", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" },
      { name: "Form Fill Seal Film", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop" },
    ]
  },
  {
    id: "stand-up-pouch-tap",
    name: "Stand Up Pouch with Tap",
    description: "Large format pouches with dispensing taps, ideal for bag-in-box applications.",
    products: [
      { name: "Wine Bag with Tap", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop" },
      { name: "Juice Bag with Tap", image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=400&fit=crop" },
    ]
  },
  {
    id: "bag-in-box",
    name: "Bag-In-Box",
    description: "Inner bags designed for box packaging, perfect for beverages and liquid products.",
    products: [
      { name: "BIB with Valve", image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&h=400&fit=crop" },
      { name: "BIB with Tap", image: "https://images.unsplash.com/photo-1568702846914-96b305d2uj68?w=400&h=400&fit=crop" },
    ]
  },
  {
    id: "quad-seal-bag",
    name: "Quad Seal Bag",
    description: "Four-corner sealed bags offering maximum shelf impact and filling capacity.",
    products: [
      { name: "Coffee Quad Seal", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop" },
      { name: "Pet Food Quad Seal", image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop" },
    ]
  },
  {
    id: "flat-pouch",
    name: "Flat Pouch",
    description: "Simple three-side sealed pouches for sachets, samples, and lightweight products.",
    products: [
      { name: "Sachet Pouch", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop" },
      { name: "Sample Pouch", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop" },
    ]
  },
  {
    id: "shaped-pouch",
    name: "Shaped Pouch",
    description: "Custom die-cut pouches in unique shapes for standout shelf presence.",
    products: [
      { name: "Bottle Shaped Pouch", image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400&h=400&fit=crop" },
      { name: "Custom Shape Pouch", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop" },
    ]
  },
]

const industries = [
  { name: "Coffee & Tea", icon: "☕", href: "/markets/coffee-tea" },
  { name: "Snacks", icon: "🍿", href: "/markets/snacks" },
  { name: "Pet Food", icon: "🐕", href: "/markets/pet-food" },
  { name: "Beverages", icon: "🥤", href: "/markets/beverages" },
  { name: "Baby Food", icon: "🍼", href: "/markets/baby-food" },
  { name: "Cosmetics", icon: "💄", href: "/markets/cosmetics" },
]

function ProductCarousel({ products }: { products: { name: string; image: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0)
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10
      )
    }
  }

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
      )}
      
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-64"
          >
            <div className="bg-white rounded-2xl aspect-square flex items-center justify-center overflow-hidden group cursor-pointer shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-700 text-center">{product.name}</p>
          </motion.div>
        ))}
      </div>

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      )}
    </div>
  )
}

export function ProductsArchive() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">Products</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Custom Packaging
              <span className="text-[#00cfca]"> Products</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Explore our complete range of flexible packaging solutions. From stand-up pouches to retort bags, we offer premium quality packaging customized for your brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Bar */}
      <div className="bg-[#00cfca]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <Zap className="w-5 h-5" />
              <span className="font-medium">Not sure which packaging to choose? Talk to our experts!</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2 bg-white text-[#00cfca] font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Get Expert Advice
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-b border-gray-100 pb-16 last:border-0"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{category.name}</h2>
                    <p className="mt-2 text-gray-600 max-w-xl">{category.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/products/${category.id}`}
                      className="text-[#00cfca] font-semibold hover:text-[#00b8b3] transition-colors flex items-center gap-1"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-gray-300">|</span>
                    <Link
                      href={`/products/${category.id}#all`}
                      className="text-gray-600 font-medium hover:text-gray-900 transition-colors"
                    >
                      View All
                    </Link>
                  </div>
                </div>

                <ProductCarousel products={category.products} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              A Solution for Every <span className="text-[#00cfca]">Industry</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We serve businesses across diverse industries with tailored packaging solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={industry.href}
                  className="block p-6 bg-white rounded-2xl text-center hover:shadow-lg transition-shadow group"
                >
                  <span className="text-3xl">{industry.icon}</span>
                  <p className="mt-3 font-medium text-gray-700 group-hover:text-[#00cfca] transition-colors">
                    {industry.name}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/markets"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-colors"
            >
              View All Industries
              <ArrowRight className="w-4 h-4" />
            </Link>
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
              Not Sure Which Packaging to Choose?
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Our packaging experts are here to help you find the perfect solution for your products.
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
                href="/contact#call"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
              >
                Schedule a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">Trusted by leading brands worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-24 h-12 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
