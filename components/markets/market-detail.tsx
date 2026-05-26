"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Palette, Shield, Leaf, Award, Star } from "lucide-react"
import Link from "next/link"

interface MarketDetailProps {
  slug: string
  market: {
    name: string
    description: string
    icon: string
  }
}

const recommendedProducts = [
  { name: "Stand Up Pouch", slug: "stand-up-pouch" },
  { name: "Flat Bottom Bag", slug: "flat-bottom-pouch" },
  { name: "Quad Seal Bag", slug: "quad-seal-bag" },
  { name: "Spout Pouch", slug: "spout-pouch" },
]

const valueProps = [
  { icon: Palette, title: "Custom Size", description: "Design packaging in any size to perfectly fit your products." },
  { icon: Shield, title: "Custom Materials", description: "Choose from a wide range of barrier and laminate options." },
  { icon: Award, title: "Custom Print", description: "Full-color rotogravure printing up to 10 colors." },
  { icon: Leaf, title: "Custom Finishes", description: "Matte, gloss, soft-touch, and specialty finishes available." },
]

const coatings = ["Matte Lamination", "Gloss Lamination", "Soft Touch", "Spot UV", "Hot Stamping", "Embossing", "Debossing", "Holographic"]
const materials = ["PET/PE", "PET/AL/PE", "BOPP/CPP", "Kraft Paper/PE", "Nylon/PE", "EVOH Barrier", "Recyclable Mono-PE", "Bio-based PLA"]

export function MarketDetail({ slug, market }: MarketDetailProps) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/markets" className="text-gray-500 hover:text-[#00cfca]">Markets</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">{market.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-5xl mb-4 block">{market.icon}</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {market.name}
                <span className="text-[#00cfca]"> Packaging Solutions</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {market.description} We understand the unique challenges of the {market.name.toLowerCase()} industry and provide packaging that protects your products while elevating your brand.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-colors shadow-lg shadow-[#00cfca]/25"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#00cfca]/10 to-[#00cfca]/5 rounded-3xl flex items-center justify-center">
                <span className="text-9xl">{market.icon}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Recommended <span className="text-[#00cfca]">Packaging Styles</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Popular packaging options for the {market.name.toLowerCase()} industry.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/products/${product.slug}`} className="block group">
                  <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-[#00cfca]/5 transition-colors">
                    <div className="w-24 h-32 bg-gradient-to-b from-[#00cfca]/20 to-[#00cfca]/5 rounded-xl group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900 text-center group-hover:text-[#00cfca] transition-colors">
                    {product.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Packaging to Be <span className="text-[#00cfca]">Inspired By</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Make a Statement with <span className="text-[#00cfca]">Custom Packaging</span>
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
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto bg-[#00cfca]/10 rounded-2xl flex items-center justify-center">
                  <prop.icon className="w-8 h-8 text-[#00cfca]" />
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{prop.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Options & Materials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Coatings & Finishes</h3>
              <div className="grid grid-cols-2 gap-3">
                {coatings.map((coating) => (
                  <div key={coating} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00cfca] flex-shrink-0" />
                    <span className="text-sm text-gray-600">{coating}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Materials</h3>
              <div className="grid grid-cols-2 gap-3">
                {materials.map((material) => (
                  <div key={material} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#00cfca] flex-shrink-0" />
                    <span className="text-sm text-gray-600">{material}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Stories */}
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
          </motion.div>

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="flex items-start gap-4">
              <div className="flex text-[#00cfca]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="mt-4 text-lg text-gray-700 italic">
              {`"Mewepak helped us completely transform our packaging. The quality is exceptional and our products now stand out on the shelf. Highly recommended!"`}
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-gray-900">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Brand Manager, Premium {market.name} Co.</p>
            </div>
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
              Ready to Elevate Your {market.name} Packaging?
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              {"Let's discuss your packaging needs and create something amazing together."}
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
                href="/markets"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
              >
                Browse All Markets
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
