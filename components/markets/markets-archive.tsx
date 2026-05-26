"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const foodMarkets = [
  { name: "Coffee & Tea", slug: "coffee-tea", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=200&h=200&fit=crop" },
  { name: "Snacks & Sweets", slug: "snacks-sweets", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&h=200&fit=crop" },
  { name: "Supplement", slug: "supplement", image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop" },
  { name: "Pet Food", slug: "pet-food", image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=200&h=200&fit=crop" },
  { name: "Sauce & Soup", slug: "sauce-soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop" },
  { name: "Baby Food", slug: "baby-food", image: "https://images.unsplash.com/photo-1544961371-516024f8e267?w=200&h=200&fit=crop" },
  { name: "Beverage", slug: "beverage", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200&h=200&fit=crop" },
  { name: "Frozen Food", slug: "frozen-food", image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=200&h=200&fit=crop" },
  { name: "Home Care", slug: "home-care", image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=200&h=200&fit=crop" },
  { name: "Meat & Poultry", slug: "meat-poultry", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=200&h=200&fit=crop" },
  { name: "Beauty & Personal Care", slug: "beauty-care", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop" },
  { name: "Sea Food", slug: "sea-food", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=200&h=200&fit=crop" },
  { name: "Fruits & Veggies", slug: "fruits-veggies", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&h=200&fit=crop" },
]

const nonfoodMarkets = [
  { name: "CBD", slug: "cbd", image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=200&h=200&fit=crop" },
  { name: "Cosmetics", slug: "cosmetics", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop" },
  { name: "Powder & Spices", slug: "powder-spices", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&h=200&fit=crop" },
  { name: "Fashion", slug: "fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=200&fit=crop" },
  { name: "Tobacco & Filters", slug: "tobacco-filters", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop" },
  { name: "CBD & THC", slug: "cbd-thc", image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=200&h=200&fit=crop" },
  { name: "Cannabis", slug: "cannabis", image: "https://images.unsplash.com/photo-1585467435373-0d44de2283de?w=200&h=200&fit=crop" },
  { name: "Accessories", slug: "accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop" },
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
                  className="block p-4 bg-gray-50 rounded-2xl text-center hover:bg-[#00cfca]/5 hover:shadow-lg transition-all group overflow-hidden"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl overflow-hidden mb-3">
                    <img 
                      src={market.image} 
                      alt={market.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
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
                  className="block p-4 bg-white rounded-2xl text-center hover:bg-[#00cfca]/5 hover:shadow-lg transition-all group overflow-hidden"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl overflow-hidden mb-3">
                    <img 
                      src={market.image} 
                      alt={market.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
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
            {[
              { image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop", industry: "Coffee Industry", title: "Premium Coffee Brand Packaging", desc: "How we helped a specialty coffee brand elevate their shelf presence." },
              { image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&h=400&fit=crop", industry: "Snack Industry", title: "Sustainable Snack Packaging", desc: "Developing eco-friendly packaging for a leading snack manufacturer." },
              { image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&h=400&fit=crop", industry: "Pet Food Industry", title: "Pet Food Stand-Up Pouches", desc: "Creating durable, convenient packaging for premium pet food." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#00cfca] font-medium mb-2">{item.industry}</p>
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#00cfca] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {item.desc}
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
