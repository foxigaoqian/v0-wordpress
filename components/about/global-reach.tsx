"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Globe, MapPin, Users, Package } from "lucide-react";

const stats = [
  { icon: Globe, value: "40+", label: "Countries Served" },
  { icon: MapPin, value: "3", label: "Continents" },
  { icon: Users, value: "500+", label: "Global Clients" },
  { icon: Package, value: "1M+", label: "Packages Delivered" },
];

const regions = [
  {
    name: "North America",
    countries: ["United States", "Canada", "Mexico"],
  },
  {
    name: "Europe",
    countries: ["United Kingdom", "Germany", "France", "Netherlands", "Spain", "Italy", "Poland"],
  },
  {
    name: "Asia Pacific",
    countries: ["Australia", "New Zealand", "Japan", "South Korea", "Singapore", "Malaysia"],
  },
  {
    name: "Middle East & Africa",
    countries: ["UAE", "Saudi Arabia", "South Africa", "Nigeria", "Kenya"],
  },
  {
    name: "South America",
    countries: ["Brazil", "Argentina", "Chile", "Colombia"],
  },
];

export default function GlobalReach() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/about-us" className="text-gray-500 hover:text-[#00cfca]">About Us</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Global Reach</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#00cfca]/10 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Global{" "}
              <span className="text-[#00cfca]">Reach</span>
            </h1>
            <p className="text-xl text-gray-600">
              From our state-of-the-art manufacturing facility, we serve clients across 
              40+ countries, delivering premium flexible packaging solutions worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0f4c5c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-[#00cfca] mx-auto mb-4" />
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shipping Worldwide</h2>
            <p className="text-xl text-gray-600">We deliver to customers across the globe</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8"
          >
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=600&fit=crop"
              alt="World Map"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Markets We Serve</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{region.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span key={country} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      {country}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Manufacturing Hub</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art facility is equipped with the latest technology in flexible 
                packaging production, enabling us to serve global clients with consistent quality 
                and competitive lead times.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Annual Production Capacity", value: "50,000+ tons" },
                  { label: "Average Lead Time", value: "15-20 days" },
                  { label: "Printing Capability", value: "Up to 10 colors" },
                  { label: "Quality Certifications", value: "BRC, ISO 9001, ISO 14001" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="font-bold text-[#00cfca]">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=500&fit=crop"
                alt="Our Factory"
                className="rounded-3xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f4c5c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              No matter where you are, we can deliver premium packaging solutions to your door.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00cfca] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00b8b4] transition-colors"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
