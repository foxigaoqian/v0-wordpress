"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Recycle, Leaf, Package, Shield, ChevronRight } from "lucide-react";

const sustainableProducts = [
  {
    name: "ProActive Recyclable",
    description: "Fully recyclable mono-material structures",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=400&h=400&fit=crop",
  },
  {
    name: "ProActive Recycle Ready",
    description: "Designed for easy recycling in existing streams",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  },
  {
    name: "ProActive PCR",
    description: "Made with post-consumer recycled content",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=400&fit=crop",
  },
  {
    name: "ProActive Compostable",
    description: "Certified compostable packaging solutions",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=400&fit=crop",
  },
];

const benefits = [
  {
    icon: Recycle,
    title: "Recyclability",
    description: "Our mono-material solutions are compatible with existing recycling infrastructure",
  },
  {
    icon: Leaf,
    title: "Reduced Footprint",
    description: "Lower carbon emissions compared to traditional multi-layer packaging",
  },
  {
    icon: Package,
    title: "Same Performance",
    description: "Maintain barrier properties and shelf life without compromising quality",
  },
  {
    icon: Shield,
    title: "Certified Solutions",
    description: "Third-party certified recyclability and sustainability claims",
  },
];

export default function SustainablePackaging() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#00cfca]">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/sustainability" className="text-gray-500 hover:text-[#00cfca]">Sustainability</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Sustainable Packaging</span>
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
              Sustainable{" "}
              <span className="text-[#00cfca]">Packaging</span>
            </h1>
            <p className="text-xl text-gray-600">
              We develop innovative packaging solutions that are designed for recyclability 
              without compromising performance or visual appeal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sustainable Solutions</h2>
            <p className="text-xl text-gray-600">Advanced technology for eco-friendly packaging</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainableProducts.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link href="/contact" className="text-[#00cfca] font-semibold inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Sustainable Packaging?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="w-14 h-14 bg-[#00cfca]/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-[#00cfca]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Flexible Packaging vs. Traditional
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Flexible packaging offers significant environmental advantages over rigid packaging 
                alternatives, using less material and energy while providing superior product protection.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Less material usage", value: "Up to 70%" },
                  { label: "Lower carbon footprint", value: "Up to 50%" },
                  { label: "Reduced transportation costs", value: "Up to 40%" },
                  { label: "Less warehouse space", value: "Up to 60%" },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700">{stat.label}</span>
                    <span className="font-bold text-[#00cfca]">{stat.value}</span>
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
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=600&fit=crop"
                alt="Sustainable packaging comparison"
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
              Ready to Go Sustainable?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact our sustainability experts to find the right eco-friendly packaging solution for your products.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#00cfca] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00b8b4] transition-colors"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
