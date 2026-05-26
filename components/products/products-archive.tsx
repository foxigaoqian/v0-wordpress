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
    image: "/images/products/stand-up-pouch.jpg",
    products: [
      { name: "Classic Stand Up Pouch", image: "/images/products/sup-classic.jpg" },
      { name: "Zipper Stand Up Pouch", image: "/images/products/sup-zipper.jpg" },
      { name: "Spout Stand Up Pouch", image: "/images/products/sup-spout.jpg" },
      { name: "Window Stand Up Pouch", image: "/images/products/sup-window.jpg" },
    ]
  },
  {
    id: "flat-bottom-pouch",
    name: "Flat Bottom Pouch",
    description: "Box-style pouches with a flat base for superior shelf stability and premium presentation.",
    image: "/images/products/flat-bottom-pouch.jpg",
    products: [
      { name: "Coffee Flat Bottom Bag", image: "/images/products/fb-coffee.jpg" },
      { name: "Pet Food Flat Bottom", image: "/images/products/fb-petfood.jpg" },
      { name: "Snack Flat Bottom Bag", image: "/images/products/fb-snack.jpg" },
    ]
  },
  {
    id: "retort-pouch",
    name: "Retort Pouch",
    description: "High-temperature resistant pouches for sterilized food products with extended shelf life.",
    image: "/images/products/retort-pouch.jpg",
    products: [
      { name: "Standard Retort Pouch", image: "/images/products/retort-standard.jpg" },
      { name: "Shaped Retort Pouch", image: "/images/products/retort-shaped.jpg" },
      { name: "Spout Retort Pouch", image: "/images/products/retort-spout.jpg" },
    ]
  },
  {
    id: "spout-pouch",
    name: "Spout Pouch",
    description: "Convenient pouches with integrated spouts for liquid and semi-liquid products.",
    image: "/images/products/spout-pouch.jpg",
    products: [
      { name: "Beverage Spout Pouch", image: "/images/products/spout-beverage.jpg" },
      { name: "Baby Food Spout Pouch", image: "/images/products/spout-baby.jpg" },
      { name: "Sauce Spout Pouch", image: "/images/products/spout-sauce.jpg" },
    ]
  },
  {
    id: "roll-stock-films",
    name: "Roll Stock & Lidding Films",
    description: "High-quality laminated films for automatic packaging machines and lidding applications.",
    image: "/images/products/roll-stock.jpg",
    products: [
      { name: "Printed Roll Stock", image: "/images/products/roll-printed.jpg" },
      { name: "Lidding Film", image: "/images/products/roll-lidding.jpg" },
      { name: "Form Fill Seal Film", image: "/images/products/roll-ffs.jpg" },
    ]
  },
  {
    id: "stand-up-pouch-tap",
    name: "Stand Up Pouch with Tap",
    description: "Large format pouches with dispensing taps, ideal for bag-in-box applications.",
    image: "/images/products/sup-tap.jpg",
    products: [
      { name: "Wine Bag with Tap", image: "/images/products/tap-wine.jpg" },
      { name: "Juice Bag with Tap", image: "/images/products/tap-juice.jpg" },
    ]
  },
  {
    id: "bag-in-box",
    name: "Bag-In-Box",
    description: "Inner bags designed for box packaging, perfect for beverages and liquid products.",
    image: "/images/products/bag-in-box.jpg",
    products: [
      { name: "BIB with Valve", image: "/images/products/bib-valve.jpg" },
      { name: "BIB with Tap", image: "/images/products/bib-tap.jpg" },
    ]
  },
  {
    id: "quad-seal-bag",
    name: "Quad Seal Bag",
    description: "Four-corner sealed bags offering maximum shelf impact and filling capacity.",
    image: "/images/products/quad-seal.jpg",
    products: [
      { name: "Coffee Quad Seal", image: "/images/products/quad-coffee.jpg" },
      { name: "Pet Food Quad Seal", image: "/images/products/quad-petfood.jpg" },
    ]
  },
  {
    id: "flat-pouch",
    name: "Flat Pouch",
    description: "Simple three-side sealed pouches for sachets, samples, and lightweight products.",
    image: "/images/products/flat-pouch.jpg",
    products: [
      { name: "Sachet Pouch", image: "/images/products/flat-sachet.jpg" },
      { name: "Sample Pouch", image: "/images/products/flat-sample.jpg" },
    ]
  },
  {
    id: "shaped-pouch",
    name: "Shaped Pouch",
    description: "Custom die-cut pouches in unique shapes for standout shelf presence.",
    image: "/images/products/shaped-pouch.jpg",
    products: [
      { name: "Bottle Shaped Pouch", image: "/images/products/shaped-bottle.jpg" },
      { name: "Custom Shape Pouch", image: "/images/products/shaped-custom.jpg" },
    ]
  },
  {
    id: "shrink-sleeves",
    name: "Shrink Sleeves Label",
    description: "360-degree printable shrink labels for bottles, jars, and containers.",
    image: "/images/products/shrink-sleeve.jpg",
    products: [
      { name: "Bottle Shrink Sleeve", image: "/images/products/sleeve-bottle.jpg" },
      { name: "Jar Shrink Sleeve", image: "/images/products/sleeve-jar.jpg" },
    ]
  },
  {
    id: "thermoforming",
    name: "Thermoforming",
    description: "Formed plastic packaging for precise product fit and protection.",
    image: "/images/products/thermoforming.jpg",
    products: [
      { name: "Meat Tray", image: "/images/products/thermo-meat.jpg" },
      { name: "Cheese Pack", image: "/images/products/thermo-cheese.jpg" },
    ]
  },
  {
    id: "vacuum",
    name: "Vacuum",
    description: "Vacuum-sealed packaging for extended freshness and shelf life.",
    image: "/images/products/vacuum.jpg",
    products: [
      { name: "Vacuum Bag", image: "/images/products/vacuum-bag.jpg" },
      { name: "Vacuum Pouch", image: "/images/products/vacuum-pouch.jpg" },
    ]
  },
  {
    id: "flow-pack",
    name: "Flow Pack",
    description: "Horizontal form-fill-seal packaging for bars, biscuits, and single-serve products.",
    image: "/images/products/flow-pack.jpg",
    products: [
      { name: "Bar Wrapper", image: "/images/products/flow-bar.jpg" },
      { name: "Biscuit Pack", image: "/images/products/flow-biscuit.jpg" },
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
            <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center overflow-hidden group cursor-pointer">
              <div className="w-32 h-40 bg-gradient-to-b from-[#00cfca]/20 to-[#00cfca]/5 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-[#00cfca]/50 text-sm">Product Image</span>
              </div>
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
