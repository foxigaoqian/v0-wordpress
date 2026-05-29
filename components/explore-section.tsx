"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const markets = [
  { label: "Coffee & Tea", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=200&h=200&fit=crop", slug: "coffee-tea" },
  { label: "Supplement", image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&h=200&fit=crop", slug: "supplement" },
  { label: "Snack", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&h=200&fit=crop", slug: "snacks-sweets" },
  { label: "Sauce & Soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop", slug: "sauce-soup" },
  { label: "Pet Food", image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=200&h=200&fit=crop", slug: "pet-food" },
  { label: "Baby Food", image: "https://images.unsplash.com/photo-1544961371-516024f8e267?w=200&h=200&fit=crop", slug: "baby-food" },
  { label: "Beverage", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200&h=200&fit=crop", slug: "beverage" },
  { label: "Frozen Food", image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=200&h=200&fit=crop", slug: "frozen-food" },
  { label: "Home Care", image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=200&h=200&fit=crop", slug: "home-care" },
  { label: "Produce", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&h=200&fit=crop", slug: "fruits-veggies" },
];

const formats = [
  { label: "Spout Pouch", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200&h=200&fit=crop", slug: "spout-pouch" },
  { label: "Stand Up Pouch", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&h=200&fit=crop", slug: "stand-up-pouch" },
  { label: "Flat Bottom Pouch", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&h=200&fit=crop", slug: "flat-bottom-pouch" },
  { label: "Retort Pouch", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=200&h=200&fit=crop", slug: "retort-pouch" },
  { label: "Roll Stock", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=200&fit=crop", slug: "roll-stock-films" },
  { label: "Stand Up Pouch With Tap", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&h=200&fit=crop", slug: "stand-up-pouch-tap" },
  { label: "Bag In Box", image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=200&h=200&fit=crop", slug: "bag-in-box" },
  { label: "Quad Seal Bag", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&h=200&fit=crop", slug: "quad-seal-bag" },
  { label: "Flat Pouch", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop", slug: "flat-pouch" },
  { label: "Shaped Pouch", image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=200&h=200&fit=crop", slug: "shaped-pouch" },
];

export function ExploreSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
                className="group bg-white rounded-2xl p-3 border-2 border-gray-100 hover:border-[#00cfca] transition-all cursor-pointer relative overflow-hidden"
              >
                <Link href={`/markets/${market.slug}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00cfca]/0 to-[#00cfca]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-full aspect-square rounded-xl overflow-hidden mb-3">
                      <img 
                        src={market.image} 
                        alt={market.label}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-[#00cfca] transition-colors block text-center">
                      {market.label}
                    </span>
                  </div>
                </Link>
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
                className="group bg-white rounded-2xl p-3 border-2 border-gray-100 hover:border-[#00cfca] transition-all cursor-pointer relative overflow-hidden"
              >
                <Link href={`/products/${format.slug}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00cfca]/0 to-[#00cfca]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-full aspect-square rounded-xl overflow-hidden mb-3">
                      <img 
                        src={format.image} 
                        alt={format.label}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-[#00cfca] transition-colors block text-center">
                      {format.label}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
