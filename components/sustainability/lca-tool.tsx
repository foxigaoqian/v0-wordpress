"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BarChart3, Leaf, ArrowRight, ChevronRight, Calculator, TrendingDown, Globe } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Carbon Footprint Calculator",
    description: "Calculate the carbon footprint of different packaging options",
  },
  {
    icon: TrendingDown,
    title: "Impact Comparison",
    description: "Compare environmental impact across material choices",
  },
  {
    icon: Globe,
    title: "Sustainability Metrics",
    description: "Track key sustainability indicators for your packaging",
  },
  {
    icon: Leaf,
    title: "Eco-Alternatives",
    description: "Discover more sustainable packaging alternatives",
  },
];

export default function LCATool() {
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
            <span className="text-gray-900 font-medium">LCA Tool</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#00cfca]/10 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#00cfca] rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="text-[#00cfca] font-semibold">ProActive CHART</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Life Cycle Analysis Tool
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Use our comprehensive LCA tool to understand the environmental impact of your 
                packaging choices and make informed decisions that align with your sustainability goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#00cfca] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#00b8b4] transition-colors"
              >
                Request Access
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-[#00cfca] mx-auto mb-4" />
                    <p className="text-gray-500">Tool Preview</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Our LCA tool provides comprehensive environmental impact analysis for packaging decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tool Features</h2>
            <p className="text-xl text-gray-600">Comprehensive analysis for informed decisions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-[#00cfca]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-[#00cfca]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Input Parameters", description: "Enter your packaging specifications, materials, and production volumes" },
              { step: "2", title: "Analysis", description: "Our tool calculates environmental impact across multiple metrics" },
              { step: "3", title: "Insights", description: "Receive detailed reports with recommendations for improvement" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#00cfca] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
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
              Ready to Analyze Your Packaging Impact?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact our sustainability team to get access to the ProActive CHART tool.
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
