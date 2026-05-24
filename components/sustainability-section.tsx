"use client";

import { motion } from "framer-motion";
import { TrendingDown, X, Recycle, Leaf, Trash2, RefreshCw, Footprints } from "lucide-react";

const pillars = [
  { icon: TrendingDown, title: "Reduce", desc: "PCR Content Lightweighting ISCC Accredited" },
  { icon: X, title: "Remove", desc: "Paper Replacement" },
  { icon: Recycle, title: "Recycle", desc: "Monopolymer laminates" },
  { icon: Leaf, title: "Renew", desc: "Renewable / Plant Based content (Compostable) ISCC Accredited" },
  { icon: Trash2, title: "Waste Reduction", desc: "Format design to reduce food and content waste" },
  { icon: RefreshCw, title: "Reuse", desc: "Designing flexible packaging for refill" },
  { icon: Footprints, title: "Carbon Footprint", desc: "Format design to reduce CO2 emissions in supply chain" },
];

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="relative">
      {/* Dark section - Our unique proposition */}
      <div className="bg-[#0a1628] py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif italic text-white">Our unique proposition</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Whatever your packaging sustainability challenge, Mewepak has the solution.
            </p>
          </motion.div>

          {/* Pillars banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-16"
          >
            <div className="h-14 bg-gradient-to-r from-[#00cfca] via-[#00cfca] to-[#00cfca]/80 rounded-full flex items-center justify-center">
              <span className="text-white font-medium tracking-wide">
                The 7 Pillars of Mewepak Sustainable Flexible Packaging
              </span>
            </div>
          </motion.div>

          {/* Pillars grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
                    <svg className="w-4 h-6 text-[#00cfca]" viewBox="0 0 16 24" fill="currentColor">
                      <path d="M8 24V6M8 6L2 12M8 6l6 6" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <div className="w-20 h-20 rounded-full border-2 border-[#00cfca] flex items-center justify-center mx-auto bg-[#0a1628]">
                    <pillar.icon className="w-8 h-8 text-[#00cfca]" />
                  </div>
                </div>
                <h3 className="text-[#00cfca] font-semibold text-sm mb-2">{pillar.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Teal section - Sustainable features */}
      <div className="bg-[#00cfca] py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">Sustainable</h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              Whatever your sustainability objective, we have the solution:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { icon: "🍃", label: "Light weight" },
              { icon: "👣", label: "Low carbon footprint" },
              { icon: "♻️", label: "Recycled content" },
              { icon: "📦", label: "Recyclable – monopolymer films" },
              { icon: "🌱", label: "Renewable – paper & compostable" },
              { icon: "✓", label: "High barrier performance" },
              { icon: "🔄", label: "Reuse and refill" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-lg relative">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#f5a623] rounded-full" />
                </div>
                <p className="text-white text-sm font-medium">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Reduce Reuse Recycle section */}
      <div className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-gray-100 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: "↓", title: "reduce", desc: "Help reduce todays' carbon footprint by leaving a mark on the generation of tomorrow." },
              { icon: "🔄", title: "reuse", desc: "Develop a lifelong relationship with your customers, and provide a culture they can sustain for generations to come." },
              { icon: "♻️", title: "recycle", desc: "Break your industry's cycle and have your customers circling back. Make sustainability your company's legacy." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-2xl text-green-600">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-serif italic text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
