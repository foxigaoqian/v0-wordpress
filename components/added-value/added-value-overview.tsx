"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, MapPin, Leaf, HelpCircle, LifeBuoy, Briefcase } from "lucide-react"
import Link from "next/link"

const services = [
  {
    slug: "pouch-patrol",
    name: "Pouch Patrol",
    description: "Meet our packaging experts who are dedicated to your success.",
    icon: Users,
    color: "bg-blue-500"
  },
  {
    slug: "on-the-road",
    name: "On The Road",
    description: "Find us at trade shows and events around the world.",
    icon: MapPin,
    color: "bg-purple-500"
  },
  {
    slug: "keepin-it-green",
    name: "Keepin' It Green",
    description: "Our commitment to sustainable packaging solutions.",
    icon: Leaf,
    color: "bg-green-500"
  },
  {
    slug: "faq",
    name: "FAQ",
    description: "Answers to your most common packaging questions.",
    icon: HelpCircle,
    color: "bg-orange-500"
  },
  {
    slug: "help-center",
    name: "Help Center",
    description: "Resources and support to help you succeed.",
    icon: LifeBuoy,
    color: "bg-red-500"
  },
  {
    slug: "careers",
    name: "Careers",
    description: "Join our team and grow your career with us.",
    icon: Briefcase,
    color: "bg-indigo-500"
  },
]

export function AddedValueOverview() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">Added Value</span>
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
              Added
              <span className="text-[#00cfca]"> Value</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Beyond great packaging, we offer comprehensive services and support to help your brand succeed. Explore our added value offerings below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/added-value/${service.slug}`}
                  className="block bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group h-full"
                >
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#00cfca] transition-colors">
                    {service.name}
                  </h2>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-[#00cfca] font-semibold">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
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
              Need More Information?
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              {"Our team is here to help. Don't hesitate to reach out with any questions."}
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
