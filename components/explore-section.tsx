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
    <section className="py-40 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#00cfca]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#00cfca]/5 to-transparent rounded-full blur-3xl" />
      
      {/* Connecting line between sections */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[200px] bg-gradient-to-b from-transparent via-[#00cfca]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Explore by Market */}
        <div className="grid lg:grid-cols-[380px,1fr] gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative number */}
            <span className="absolute -top-16 -left-4 text-[180px] font-bold text-gray-100/50 leading-none select-none">01</span>
            
            <div className="relative z-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-1 bg-[#00cfca] mb-8"
              />
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-none tracking-tight">
                Explore by
              </h2>
              <h2 className="text-5xl md:text-6xl font-bold text-[#00cfca] leading-none tracking-tight mt-2">
                Market
              </h2>
              <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-sm">
                Solutions tailored to market demands, designed to fulfill end-user needs
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-5 gap-4"
          >
            {markets.map((market, index) => (
              <motion.div
                key={market.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 25px 50px -12px rgba(0,207,202,0.25)",
                  borderColor: "#00cfca"
                }}
                className="group bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-[#00cfca] transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00cfca]/0 to-[#00cfca]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-[#00cfca]/10 flex items-center justify-center mb-4 transition-colors">
                    <market.icon className="w-7 h-7 text-gray-400 group-hover:text-[#00cfca] transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[#00cfca] transition-colors block">
                    {market.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Explore by Format */}
        <div className="grid lg:grid-cols-[380px,1fr] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative number */}
            <span className="absolute -top-16 -left-4 text-[180px] font-bold text-gray-100/50 leading-none select-none">02</span>
            
            <div className="relative z-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-1 bg-[#00cfca] mb-8"
              />
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-none tracking-tight">
                Explore by
              </h2>
              <h2 className="text-5xl md:text-6xl font-bold text-[#00cfca] leading-none tracking-tight mt-2">
                Format
              </h2>
              <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-sm">
                Provide a wide range of customizable pouch solutions to meet your specific needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-5 gap-4"
          >
            {formats.map((format, index) => (
              <motion.div
                key={format.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 25px 50px -12px rgba(0,207,202,0.25)",
                  borderColor: "#00cfca"
                }}
                className="group bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-[#00cfca] transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00cfca]/0 to-[#00cfca]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 group-hover:bg-[#00cfca]/10 flex items-center justify-center mb-4 transition-colors border border-gray-100">
                    <svg className="w-10 h-10 text-gray-300 group-hover:text-[#00cfca]/60 transition-colors" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="8" y="4" width="24" height="32" rx="4" />
                      <path d="M8 12h24" />
                      <circle cx="20" cy="22" r="4" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[#00cfca] transition-colors block">
                    {format.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
