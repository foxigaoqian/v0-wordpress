"use client";

import { motion } from "framer-motion";
import { Coffee, Pill, Cookie, Utensils, Dog, Baby, Wine, Snowflake, Home, Apple } from "lucide-react";

const markets = [
  { icon: Coffee, label: "Coffee & Tea" },
  { icon: Pill, label: "Supplement" },
  { icon: Cookie, label: "Snack" },
  { icon: Utensils, label: "Sauce & Soup" },
  { icon: Dog, label: "Pet Food" },
  { icon: Baby, label: "Baby Food" },
  { icon: Wine, label: "Beverage" },
  { icon: Snowflake, label: "Frozen Food" },
  { icon: Home, label: "Home Care" },
  { icon: Apple, label: "Produce" },
];

const formats = [
  { label: "Spout Pouch" },
  { label: "Stand Up Pouch" },
  { label: "Flat Bottom Pouch" },
  { label: "Retort Pouch" },
  { label: "Roll Stock" },
  { label: "Stand Up Pouch With Tap" },
  { label: "Bag In Box" },
  { label: "Quad Seal Bag" },
  { label: "Flat Pouch" },
  { label: "Shaped Pouch" },
];

export function ExploreSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Explore by Market */}
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-start mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Explore by
              <br />
              <span className="text-[#00cfca]">Market</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Solutions tailored to market demands, designed to fulfill end-user needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {markets.map((market, index) => (
              <motion.div
                key={market.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,207,202,0.2)" }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#00cfca]/30 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-[#00cfca]/5 flex items-center justify-center mb-4 group-hover:bg-[#00cfca]/10 transition-colors">
                  <market.icon className="w-6 h-6 text-[#00cfca]" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#00cfca] transition-colors">
                  {market.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Explore by Format */}
        <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Explore by
              <br />
              <span className="text-[#00cfca]">Format</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Provide a wide range of customizable pouch solutions to meet your specific needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {formats.map((format, index) => (
              <motion.div
                key={format.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,207,202,0.2)" }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#00cfca]/30 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 group-hover:border-[#00cfca]/30 transition-colors">
                  <svg className="w-8 h-8 text-gray-300 group-hover:text-[#00cfca]/50 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                    <path d="M6 8h12" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-[#00cfca] transition-colors">
                  {format.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
