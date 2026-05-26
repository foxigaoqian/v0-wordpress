"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const foodMarkets = [
  { name: "Coffee & Tea", slug: "coffee-tea", icon: "☕" },
  { name: "Snacks & Sweets", slug: "snacks-sweets", icon: "🍿" },
  { name: "Supplement", slug: "supplement", icon: "💊" },
  { name: "Pet Food", slug: "pet-food", icon: "🐕" },
  { name: "Sauce & Soup", slug: "sauce-soup", icon: "🥣" },
  { name: "Baby Food", slug: "baby-food", icon: "🍼" },
  { name: "Beverage", slug: "beverage", icon: "🥤" },
  { name: "Frozen Food", slug: "frozen-food", icon: "❄️" },
  { name: "Home Care", slug: "home-care", icon: "🧴" },
  { name: "Meat & Poultry", slug: "meat-poultry", icon: "🥩" },
  { name: "Beauty Care & Personal Care", slug: "beauty-care", icon: "💆" },
  { name: "Sea Food", slug: "sea-food", icon: "🦐" },
  { name: "Fruits & Veggies", slug: "fruits-veggies", icon: "🥗" },
]

const nonfoodMarkets = [
  { name: "CBD", slug: "cbd", icon: "🌿" },
  { name: "Cosmetics", slug: "cosmetics", icon: "💄" },
  { name: "Powder & Spices", slug: "powder-spices", icon: "🧂" },
  { name: "Fashion", slug: "fashion", icon: "👗" },
  { name: "Tobacco & Filters", slug: "tobacco-filters", icon: "🚬" },
  { name: "CBD & THC", slug: "cbd-thc", icon: "🍃" },
  { name: "Cannabis", slug: "cannabis", icon: "🌱" },
  { name: "Accessories", slug: "accessories", icon: "👜" },
]

export function MarketsArchive() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">Markets</span>
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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Custom Packaging Solutions for
              <span className="text-[#00cfca]"> Every Industry</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We serve businesses across diverse industries with tailored packaging solutions that protect your products and elevate your brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Food & Beverage Markets */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Food & <span className="text-[#00cfca]">Beverage</span>
            </h2>
            <p className="mt-2 text-gray-600">
              Food-safe packaging solutions with excellent barrier properties.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {foodMarkets.map((market, index) => (
              <motion.div
                key={market.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  href={`/markets/${market.slug}`}
                  className="block p-6 bg-gray-50 rounded-2xl text-center hover:bg-[#00cfca]/5 hover:shadow-lg transition-all group"
                >
                  <span className="text-4xl block mb-3">{market.icon}</span>
                  <p className="font-medium text-gray-700 group-hover:text-[#00cfca] transition-colors text-sm">
                    {market.name}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Food Markets */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Non-Food <span className="text-[#00cfca]">Industries</span>
            </h2>
            <p className="mt-2 text-gray-600">
              Specialized packaging for non-food applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {nonfoodMarkets.map((market, index) => (
              <motion.div
                key={market.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  href={`/markets/${market.slug}`}
                  className="block p-6 bg-white rounded-2xl text-center hover:bg-[#00cfca]/5 hover:shadow-lg transition-all group"
                >
                  <span className="text-4xl block mb-3">{market.icon}</span>
                  <p className="font-medium text-gray-700 group-hover:text-[#00cfca] transition-colors text-sm">
                    {market.name}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Customer <span className="text-[#00cfca]">Success Stories</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              See how leading brands trust us with their packaging needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-[#00cfca]/10 to-[#00cfca]/5" />
                <div className="p-6">
                  <p className="text-sm text-[#00cfca] font-medium mb-2">Coffee Industry</p>
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#00cfca] transition-colors">
                    Premium Coffee Brand Packaging
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    How we helped a specialty coffee brand elevate their shelf presence.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">Trusted by leading brands worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-24 h-12 bg-gray-300 rounded" />
            ))}
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
              {"Don't See Your Industry?"}
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              We work with businesses across all sectors. Contact us to discuss your unique packaging needs.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
