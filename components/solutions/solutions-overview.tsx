"use client"

import { motion } from "framer-motion"
import { ArrowRight, Palette, Printer, Settings, Recycle, Flame } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    slug: "prepress",
    name: "Prepress",
    description: "Graphic design, color management, and cylinder preparation for perfect print quality.",
    icon: Palette,
    features: ["Graphic Design & Reproduction", "Cylinder Processing (Electro-engraving)", "Ink Formulation", "Color Management", "GMG Proofing"]
  },
  {
    slug: "printing",
    name: "Printing",
    description: "State-of-the-art rotogravure printing with up to 10 colors and premium finishes.",
    icon: Printer,
    features: ["Rotogravure Printing", "Up to 10 Colors", "High-Speed Production", "Consistent Quality", "Special Effects Printing"]
  },
  {
    slug: "technical",
    name: "Technical",
    description: "Advanced lamination, coating, and converting processes for superior packaging.",
    icon: Settings,
    features: ["Solvent-based Lamination", "Solventless Lamination", "Special Varnish Application", "Slitting", "ColdSeal Coating", "Perforation"]
  },
  {
    slug: "recycling",
    name: "Recycling",
    description: "Sustainable mono-material solutions for recyclable packaging.",
    icon: Recycle,
    features: ["Recyclable Packaging Design", "Mono-Material Structures", "PE Mono-Material", "PP Mono-Material", "Circular Economy Solutions"]
  },
  {
    slug: "retort",
    name: "Retort",
    description: "High-temperature resistant packaging for sterilized food products.",
    icon: Flame,
    features: ["121°C Retort Capability", "135°C High-Temp Retort", "Extended Shelf Life", "Food Safety Compliance", "Multi-Layer Barrier Structures"]
  },
]

export function SolutionsOverview() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">Solutions</span>
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
              Manufacturing
              <span className="text-[#00cfca]"> Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              From design to delivery, our vertically integrated manufacturing capabilities ensure exceptional quality at every step of the packaging process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#00cfca]/10 rounded-xl flex items-center justify-center">
                      <solution.icon className="w-6 h-6 text-[#00cfca]" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{solution.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#00cfca] rounded-full" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="inline-flex items-center gap-2 text-[#00cfca] font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center">
                    <solution.icon className="w-24 h-24 text-gray-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#0f4c5c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Discuss Your Project?
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Our technical team is ready to help you find the perfect packaging solution.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
