"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

interface SolutionDetailProps {
  slug: string
  solution: {
    name: string
    description: string
  }
}

const solutionContent: Record<string, { sections: { title: string; description: string }[]; capabilities: string[] }> = {
  prepress: {
    sections: [
      { title: "Graphic Design & Reproduction", description: "Our expert design team works with you to create stunning packaging artwork. From concept to final file, we ensure your designs are production-ready with accurate color reproduction." },
      { title: "Cylinder Processing", description: "State-of-the-art electro-engraving technology ensures precise cylinder production for exceptional print quality. Our laser-engraved cylinders deliver sharp details and consistent results." },
      { title: "Ink Formulation", description: "Custom ink matching and formulation to achieve your exact brand colors. Our color specialists work with you to ensure perfect color consistency across all production runs." },
      { title: "Color Management", description: "Advanced GMG proofing and color management systems ensure what you see is what you get. Digital proofs match final production with exceptional accuracy." },
    ],
    capabilities: ["Adobe Creative Suite", "GMG Digital Proofing", "Pantone Color Matching", "3D Mockup Generation", "File Preparation & Optimization"]
  },
  printing: {
    sections: [
      { title: "Rotogravure Printing", description: "Our high-speed rotogravure presses deliver exceptional print quality with vibrant colors and fine details. Perfect for long-run productions requiring consistent quality." },
      { title: "Multi-Color Capability", description: "Print up to 10 colors with precise registration for complex designs. Our presses handle everything from simple branding to photographic reproductions." },
      { title: "Quality Control", description: "100% inline inspection systems monitor every meter of printed material. Defects are detected and marked in real-time, ensuring only perfect product reaches you." },
    ],
    capabilities: ["10-Color Rotogravure", "Inline Inspection", "High-Speed Production", "Metallic & Special Inks", "Surface & Reverse Printing"]
  },
  technical: {
    sections: [
      { title: "Solvent-based Lamination", description: "Traditional lamination for excellent bond strength and barrier properties. Ideal for demanding applications requiring maximum performance." },
      { title: "Solventless Lamination", description: "Eco-friendly lamination process with no solvent emissions. Meets stringent environmental regulations while maintaining excellent quality." },
      { title: "Special Varnish Application", description: "Matte, gloss, and soft-touch varnishes to enhance your packaging aesthetics. Spot varnish for selective highlighting of design elements." },
      { title: "Slitting & Converting", description: "Precision slitting to exact specifications. Our converting capabilities include perforation, hole punching, and custom cutting." },
    ],
    capabilities: ["Dry Lamination", "Solventless Lamination", "Precision Slitting", "Perforation", "Cold Seal Application"]
  },
  recycling: {
    sections: [
      { title: "Recyclable Packaging Design", description: "Our R&D team develops mono-material structures that are fully recyclable while maintaining product protection. Design for recycling from the start." },
      { title: "PE Mono-Material", description: "All-PE structures that are compatible with existing recycling streams. Excellent for dry food products and non-demanding applications." },
      { title: "PP Mono-Material", description: "All-PP structures offering good barrier properties in a recyclable format. Suitable for a wide range of food and non-food applications." },
      { title: "Circular Economy Solutions", description: "We help brands transition to sustainable packaging with materials designed for the circular economy. Reduce, reuse, recycle." },
    ],
    capabilities: ["Mono-PE Structures", "Mono-PP Structures", "Bio-based Materials", "PCR Content Integration", "Recyclability Certification"]
  },
  retort: {
    sections: [
      { title: "121°C Standard Retort", description: "Standard retort processing for shelf-stable products. Our multi-layer structures withstand sterilization while protecting flavor and nutrition." },
      { title: "135°C High-Temperature Retort", description: "Advanced structures for high-temperature sterilization. Maintains seal integrity and barrier properties under extreme processing conditions." },
      { title: "Retort Pouch Design", description: "Customized pouch designs for retort applications including flat pouches, stand-up pouches, and shaped pouches. All designed for optimal heat penetration." },
    ],
    capabilities: ["Multi-Layer Barrier Films", "High-Temp Seal Integrity", "Extended Shelf Life", "FDA/EU Compliance", "Custom Retort Solutions"]
  },
}

export function SolutionDetail({ slug, solution }: SolutionDetailProps) {
  const content = solutionContent[slug] || { sections: [], capabilities: [] }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/solutions" className="text-gray-500 hover:text-[#00cfca]">Solutions</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">{solution.name}</span>
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
              {solution.name}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {solution.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {content.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.description}</p>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our <span className="text-[#00cfca]">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {content.capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-xl"
              >
                <Check className="w-5 h-5 text-[#00cfca] flex-shrink-0" />
                <span className="text-gray-700">{capability}</span>
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
              Interested in Our {solution.name} Capabilities?
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Contact our technical team to discuss your project requirements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#00cfca] text-white font-semibold rounded-full hover:bg-[#00b8b3] transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
              >
                View All Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
