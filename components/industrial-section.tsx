"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const processSteps = [
  { number: "01", title: "Prepress", desc: "Plate making" },
  { number: "02", title: "Extrusion", desc: "Film blowing" },
  { number: "03", title: "Printing", desc: "10-color flexo" },
  { number: "04", title: "Lamination", desc: "Solvent-free" },
  { number: "05", title: "Slitting", desc: "Precision cut" },
  { number: "06", title: "Bag Making", desc: "Auto sealing" },
];

export function IndustrialSection() {
  return (
    <section id="process" className="py-32 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Industrial</span>
              <br />
              <span className="text-gray-900">Scale.</span>
              <br />
              <span className="font-serif italic text-[#f5a623]">Surgical</span>
              <br />
              <span className="font-serif italic text-[#f5a623]">Precision.</span>
            </h2>
            
            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-md">
              100,000-class cleanroom facilities equipped with automation.
            </p>
          </motion.div>

          {/* Right video mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden relative group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
                alt="Factory tour"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl"
                >
                  <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                </motion.div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-4 text-sm text-gray-600">
              <Play className="w-4 h-4" />
              <span className="uppercase tracking-wider text-xs font-medium">Play Factory Tour</span>
            </div>
          </motion.div>
        </div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Connection line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gray-200 hidden lg:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center mx-auto relative z-10 hover:border-[#00cfca] hover:text-[#00cfca] transition-colors group">
                  <span className="text-sm font-bold text-gray-400 group-hover:text-[#00cfca]">{step.number}</span>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
