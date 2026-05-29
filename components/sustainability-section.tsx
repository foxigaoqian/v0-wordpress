"use client";

import { motion } from "framer-motion";
import { TrendingDown, X, Recycle, Leaf, Trash2, RefreshCw, Footprints, ArrowDown, Check, RotateCcw } from "lucide-react";

const pillars = [
  { icon: TrendingDown, title: "Reduce", desc: "PCR Content Lightweighting ISCC Accredited", color: "from-emerald-400 to-teal-500" },
  { icon: X, title: "Remove", desc: "Paper Replacement", color: "from-blue-400 to-cyan-500" },
  { icon: Recycle, title: "Recycle", desc: "Monopolymer laminates", color: "from-cyan-400 to-teal-500" },
  { icon: Leaf, title: "Renew", desc: "Renewable / Plant Based content ISCC Accredited", color: "from-green-400 to-emerald-500" },
  { icon: Trash2, title: "Waste Reduction", desc: "Format design to reduce food and content waste", color: "from-amber-400 to-orange-500" },
  { icon: RefreshCw, title: "Reuse", desc: "Designing flexible packaging for refill", color: "from-purple-400 to-violet-500" },
  { icon: Footprints, title: "Carbon Footprint", desc: "Reduce CO2 emissions in supply chain", color: "from-rose-400 to-pink-500" },
];

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="relative">
      {/* Dark section - Our unique proposition */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#0a1628] py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#00cfca]/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#00cfca]/5 rounded-full blur-[80px]" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(#00cfca 1px, transparent 1px), linear-gradient(90deg, #00cfca 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-transparent via-[#00cfca] to-transparent mx-auto mb-6"
            />
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Our unique
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00cfca] to-[#00e5df] bg-clip-text text-transparent tracking-tight">
              proposition
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Whatever your packaging sustainability challenge, Mewepak has the solution.
            </p>
          </motion.div>

          {/* Pillars banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mb-14"
          >
            <div className="h-16 bg-gradient-to-r from-[#00cfca]/80 via-[#00cfca] to-[#00e5df]/80 rounded-full flex items-center justify-center shadow-2xl shadow-[#00cfca]/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:200%_200%] animate-shimmer" />
              <span className="text-white text-lg md:text-xl font-bold tracking-wide relative z-10">
                The 7 Pillars of Mewepak Sustainable Flexible Packaging
              </span>
            </div>
          </motion.div>

          {/* Pillars grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="mb-4"
                >
                  <ArrowDown className="w-5 h-5 text-[#00cfca] mx-auto" />
                </motion.div>
                
                {/* Icon circle */}
                <div className="relative mb-4">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${pillar.color} p-[2px] mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-full bg-[#0a1628] flex items-center justify-center">
                      <pillar.icon className="w-9 h-9 text-[#00cfca]" />
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${pillar.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>
                
                <h3 className="text-[#00cfca] font-bold text-base mb-3">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Teal section - Sustainable features */}
      <div className="bg-[#00cfca] py-24 relative overflow-hidden">
        {/* Wave pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1440 120" fill="none">
            <path d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Sustainable</h2>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              Whatever your sustainability objective, we have the solution:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { icon: Leaf, label: "Light weight" },
              { icon: Footprints, label: "Low carbon footprint" },
              { icon: Recycle, label: "Recycled content" },
              { icon: Check, label: "Recyclable films" },
              { icon: Leaf, label: "Renewable & compostable" },
              { icon: Check, label: "High barrier performance" },
              { icon: RotateCcw, label: "Reuse and refill" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-shadow relative">
                  <item.icon className="w-9 h-9 text-[#00cfca]" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg" />
                </div>
                <p className="text-white font-semibold text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Reduce Reuse Recycle section */}
      <div className="py-40 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Large decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[900px] h-[900px] rounded-full border border-gray-200/50" />
          <div className="absolute inset-0 w-[700px] h-[700px] m-auto rounded-full border border-gray-200/30" />
        </div>

        {/* Background image overlay */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-t-full overflow-hidden opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&h=600&fit=crop"
            alt="Bridge"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: ArrowDown, 
                title: "reduce", 
                desc: "Help reduce today's carbon footprint by leaving a mark on the generation of tomorrow.",
                gradient: "from-green-500 to-emerald-600"
              },
              { 
                icon: RotateCcw, 
                title: "reuse", 
                desc: "Develop a lifelong relationship with your customers, and provide a culture they can sustain for generations to come.",
                gradient: "from-[#00cfca] to-teal-500"
              },
              { 
                icon: Recycle, 
                title: "recycle", 
                desc: "Break your industry's cycle and have your customers circling back. Make sustainability your company's legacy.",
                gradient: "from-green-600 to-emerald-700"
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white/95 backdrop-blur-lg rounded-[32px] p-10 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-8 shadow-lg`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
